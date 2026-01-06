// Test Resend API directly
// Run with: deno run --allow-net test-resend.ts

const RESEND_API_KEY = 're_AZXFEa4H_KKjDPQYzYtKYY21sJTyfKt6X';

async function testResend() {
    try {
        console.log('Testing Resend API...\n');

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'My Vidyon <onboarding@resend.dev>',
                to: ['madhan.p@storyseed.in'],
                subject: 'Test Email from My Vidyon Contact Form',
                html: `
          <h2>Test Email</h2>
          <p>This is a test email to verify Resend API is working correctly.</p>
          <p>If you receive this, your Resend integration is working!</p>
        `,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('✅ SUCCESS! Email sent successfully!');
            console.log('Email ID:', data.id);
            console.log('\nCheck your inbox at madhan.p@storyseed.in');
            console.log('(Also check spam folder)');
        } else {
            console.log('❌ ERROR sending email:');
            console.log(JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

testResend();
