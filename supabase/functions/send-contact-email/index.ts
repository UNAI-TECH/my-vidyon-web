import "jsr:@supabase/functions-js/edge-runtime.d.ts"

console.log("send-contact-email function started")

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
    name: string
    email: string
    phone?: string
    institution?: string
    message: string
}

// Helper function to send email via Gmail SMTP using Deno's native SMTP
async function sendGmailSMTP(
    gmailUser: string,
    gmailPassword: string,
    to: string,
    subject: string,
    htmlBody: string,
    textBody: string,
    replyTo: string
) {
    try {
        // Use Gmail's SMTP server
        const smtpHost = "smtp.gmail.com"
        const smtpPort = 587

        // Connect to SMTP server
        const conn = await Deno.connect({
            hostname: smtpHost,
            port: smtpPort,
        })

        const encoder = new TextEncoder()
        const decoder = new TextDecoder()

        // Helper to read response
        async function readResponse(): Promise<string> {
            const buffer = new Uint8Array(1024)
            const n = await conn.read(buffer)
            return decoder.decode(buffer.subarray(0, n || 0))
        }

        // Helper to send command
        async function sendCommand(command: string): Promise<string> {
            await conn.write(encoder.encode(command + "\r\n"))
            return await readResponse()
        }

        // SMTP conversation
        await readResponse() // Read greeting
        await sendCommand("EHLO localhost")
        await sendCommand("STARTTLS")

        // Upgrade to TLS
        const tlsConn = await Deno.startTls(conn, { hostname: smtpHost })

        // Continue SMTP conversation over TLS
        async function sendTlsCommand(command: string): Promise<string> {
            await tlsConn.write(encoder.encode(command + "\r\n"))
            const buffer = new Uint8Array(1024)
            const n = await tlsConn.read(buffer)
            return decoder.decode(buffer.subarray(0, n || 0))
        }

        await sendTlsCommand("EHLO localhost")
        await sendTlsCommand("AUTH LOGIN")
        await sendTlsCommand(btoa(gmailUser))
        await sendTlsCommand(btoa(gmailPassword))
        await sendTlsCommand(`MAIL FROM:<${gmailUser}>`)
        await sendTlsCommand(`RCPT TO:<${to}>`)
        await sendTlsCommand("DATA")

        // Build email
        const emailContent = [
            `From: My Vidyon <${gmailUser}>`,
            `To: ${to}`,
            `Reply-To: ${replyTo}`,
            `Subject: ${subject}`,
            `MIME-Version: 1.0`,
            `Content-Type: multipart/alternative; boundary="boundary123"`,
            ``,
            `--boundary123`,
            `Content-Type: text/plain; charset=UTF-8`,
            ``,
            textBody,
            ``,
            `--boundary123`,
            `Content-Type: text/html; charset=UTF-8`,
            ``,
            htmlBody,
            ``,
            `--boundary123--`,
            `.`,
        ].join("\r\n")

        await sendTlsCommand(emailContent)
        await sendTlsCommand("QUIT")

        tlsConn.close()
        return true
    } catch (error) {
        console.error("SMTP Error:", error)
        throw error
    }
}

Deno.serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        // Parse request body
        const { name, email, phone, institution, message }: ContactFormData = await req.json()

        console.log('Received contact form submission:', { name, email })

        // Validate required fields
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Missing required fields: name, email, and message are required'
                }),
                {
                    status: 400,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Invalid email address'
                }),
                {
                    status: 400,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                }
            )
        }

        // Get environment variables
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
        const gmailUser = Deno.env.get('GMAIL_USER') || 'madhankumar070406@gmail.com'
        const gmailPassword = Deno.env.get('GMAIL_APP_PASSWORD')

        console.log('Environment check:', {
            hasSupabaseUrl: !!supabaseUrl,
            hasServiceKey: !!supabaseServiceKey,
            hasGmailPassword: !!gmailPassword,
            gmailUser
        })

        // Import Supabase client
        const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2')
        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        // Store submission in database
        const { data: submission, error: dbError } = await supabase
            .from('contact_submissions')
            .insert({
                name,
                email,
                phone: phone || null,
                institution: institution || null,
                message,
                submitted_at: new Date().toISOString(),
                email_sent: false,
            })
            .select()
            .single()

        if (dbError) {
            console.error('Database Error:', dbError)
            throw new Error(`Failed to store submission: ${dbError.message}`)
        }

        console.log('✅ Submission stored in database:', submission.id)

        // Send email via Gmail SMTP
        let emailSent = false

        if (gmailPassword) {
            try {
                console.log('Sending email via Gmail SMTP...')

                const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #DD0303 0%, #FF6B00 50%, #FFD700 100%); padding: 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 30px;">
      <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
        You have received a new contact form submission from the My Vidyon website.
      </p>
      
      <!-- Contact Details -->
      <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666666; width: 140px;">Name:</td>
            <td style="padding: 10px 0; color: #333333;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666666;">Email:</td>
            <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #DD0303; text-decoration: none;">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666666;">Phone:</td>
            <td style="padding: 10px 0; color: #333333;">${phone}</td>
          </tr>
          ` : ''}
          ${institution ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666666;">Institution:</td>
            <td style="padding: 10px 0; color: #333333;">${institution}</td>
          </tr>
          ` : ''}
        </table>
      </div>
      
      <!-- Message -->
      <div style="margin-bottom: 20px;">
        <h3 style="color: #333333; font-size: 16px; margin-bottom: 10px;">Message:</h3>
        <div style="background-color: #ffffff; border-left: 4px solid #DD0303; padding: 15px; color: #333333; line-height: 1.6; white-space: pre-wrap;">${message}</div>
      </div>
      
      <!-- Action Button -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #DD0303 0%, #FF6B00 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold;">Reply to ${name}</a>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
      <p style="color: #666666; font-size: 12px; margin: 0;">
        This email was sent from the My Vidyon website contact form.<br>
        <strong>Reply directly to this email to respond to ${name}.</strong>
      </p>
    </div>
  </div>
</body>
</html>
        `

                const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Institution: ${institution || 'Not provided'}

Message:
${message}

---
Reply to: ${email}
        `

                await sendGmailSMTP(
                    gmailUser,
                    gmailPassword,
                    gmailUser, // Send to yourself
                    `New Contact Form Submission from ${name}`,
                    emailHtml,
                    emailText,
                    email // Reply-to is the submitter's email
                )

                emailSent = true
                console.log('✅ Email sent successfully via Gmail SMTP')

                // Update submission with email status
                await supabase
                    .from('contact_submissions')
                    .update({
                        email_sent: true,
                    })
                    .eq('id', submission.id)

            } catch (emailError: any) {
                console.error('❌ Email Error:', emailError.message)
                console.error('Full error:', emailError)
                // Don't fail the request if email fails, submission is already stored
            }
        } else {
            console.log('⚠️ GMAIL_APP_PASSWORD not set, skipping email')
        }

        // Return success response
        return new Response(
            JSON.stringify({
                success: true,
                message: emailSent
                    ? "Thank you for reaching out! Your message has been received and we've sent you a confirmation email. We'll get back to you within 24 hours."
                    : "Thank you for reaching out! Your message has been received. We'll get back to you within 24 hours.",
                submissionId: submission.id,
                emailSent,
            }),
            {
                status: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
        )

    } catch (error: any) {
        console.error('❌ Error:', error)
        return new Response(
            JSON.stringify({
                success: false,
                error: error.message || 'An error occurred while processing your request. Please try again.'
            }),
            {
                status: 500,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
        )
    }
})
