// Supabase Edge Function: send-contact-email
// Using Gmail SMTP via Nodemailer for reliable email delivery

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import nodemailer from "npm:nodemailer@6.9.7"

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

serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        // Parse request body
        const { name, email, phone, institution, message }: ContactFormData = await req.json()

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

        // Get Supabase client
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
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
            })
            .select()
            .single()

        if (dbError) {
            console.error('Database Error:', dbError)
            throw new Error(`Failed to store submission: ${dbError.message}`)
        }

        // Send email using Gmail SMTP
        const GMAIL_USER = Deno.env.get('GMAIL_USER') || 'madhankumar070406@gmail.com'
        const GMAIL_APP_PASSWORD = Deno.env.get('GMAIL_APP_PASSWORD')

        console.log('=== Email Sending Debug ===')
        console.log('GMAIL_USER:', GMAIL_USER)
        console.log('GMAIL_APP_PASSWORD exists:', !!GMAIL_APP_PASSWORD)

        if (GMAIL_APP_PASSWORD) {
            try {
                // Create transporter
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: GMAIL_USER,
                        pass: GMAIL_APP_PASSWORD,
                    },
                })

                // Email content
                const mailOptions = {
                    from: `My Vidyon Website <${GMAIL_USER}>`,
                    to: GMAIL_USER,
                    replyTo: email,
                    subject: `New Contact Form Submission from ${name}`,
                    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #DD0303; border-bottom: 2px solid #DD0303; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                    <td style="padding: 8px 0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #DD0303;">${email}</a></td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0;">${phone}</td>
                  </tr>
                  ` : ''}
                  ${institution ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Institution:</td>
                    <td style="padding: 8px 0;">${institution}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                <div style="background-color: #fff; border-left: 4px solid #DD0303; padding: 15px; white-space: pre-wrap;">
${message}
                </div>
              </div>
              
              <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
              
              <p style="color: #666; font-size: 12px; text-align: center;">
                This email was sent from the My Vidyon website contact form.<br>
                <strong>Reply directly to this email to respond to ${name}.</strong>
              </p>
            </div>
          `,
                    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Institution: ${institution || 'Not provided'}

Message:
${message}

---
Reply to: ${email}
          `,
                }

                console.log('Sending email via Gmail SMTP...')
                const info = await transporter.sendMail(mailOptions)
                console.log('✅ Email sent successfully! Message ID:', info.messageId)

            } catch (emailError: any) {
                console.error('❌ Gmail SMTP Error:', emailError.message)
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
                message: 'Thank you for reaching out! Your message has been received. We\'ll get back to you within 24 hours.',
                submissionId: submission.id
            }),
            {
                status: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
        )

    } catch (error: any) {
        console.error('Error:', error)
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
