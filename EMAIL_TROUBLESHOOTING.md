# 🔧 Email Not Received - Troubleshooting

## Issue: Emails not arriving at madhan.p@storyseed.in

### ✅ What's Working:
- Form submits successfully
- Data stored in Supabase
- Resend API key is set
- Edge Function deployed

### ⚠️ Most Likely Issue: Resend Email Domain

Resend requires you to either:
1. **Use their test email** (onboarding@resend.dev) - works immediately
2. **Verify your own domain** - requires DNS setup

## 🚀 Quick Fix: Test with Resend's Email

The Edge Function currently uses `onboarding@resend.dev` which should work.

### Verify in Resend Dashboard:

1. Go to https://resend.com/emails
2. Check if emails are being sent
3. Look for any errors or bounces

### Common Issues:

#### Issue 1: Email in Spam
- Check your spam/junk folder
- Add onboarding@resend.dev to safe senders

#### Issue 2: Resend Account Not Verified
1. Go to https://resend.com/settings
2. Verify your email address
3. Check account status

#### Issue 3: API Key Permissions
1. Go to https://resend.com/api-keys
2. Make sure your API key has "Send emails" permission
3. Try creating a new API key if needed

#### Issue 4: Rate Limits
- Free tier: 100 emails/day, 3,000/month
- Check if you've hit the limit

## 🧪 Test Email Directly

Test if Resend is working by sending a test email:

```bash
curl -X POST 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer re_AZXFEa4H_KKjDPQYzYtKYY21sJTyfKt6X' \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "My Vidyon <onboarding@resend.dev>",
    "to": ["madhan.p@storyseed.in"],
    "subject": "Test Email from My Vidyon",
    "html": "<p>This is a test email to verify Resend is working.</p>"
  }'
```

If this works, the issue is with the Edge Function.
If this fails, the issue is with Resend setup.

## 📧 Alternative: Use Your Own Domain

To use a custom "from" email (e.g., contact@myvidyon.com):

1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Add your domain (e.g., myvidyon.com)
4. Add the DNS records Resend provides
5. Wait for verification (can take a few minutes to hours)
6. Update Edge Function to use your domain

## 🔍 Check Edge Function Logs

See if emails are actually being sent:

```bash
# View recent logs
npx supabase functions logs send-contact-email

# Or view in Supabase Dashboard:
# https://supabase.com/dashboard → Edge Functions → send-contact-email → Logs
```

Look for:
- "Email sent successfully" - Good!
- "Resend API Error" - Check the error message
- "RESEND_API_KEY not set" - Key not loaded

## ✅ Verification Checklist

- [ ] Resend account email verified
- [ ] API key has correct permissions
- [ ] Checked spam folder
- [ ] Checked Resend dashboard for sent emails
- [ ] Edge Function redeployed after setting API key
- [ ] Tested form submission
- [ ] Checked Edge Function logs

## 🎯 Most Common Solution

**Check your spam folder!** Emails from onboarding@resend.dev often go to spam on first send.

## 📞 Next Steps

1. **Check spam folder** - Most likely here
2. **Check Resend dashboard** - See if emails are being sent
3. **Test direct API call** - Verify Resend is working
4. **Check Edge Function logs** - See actual errors

## 💡 Quick Test

Submit the contact form and immediately:

1. Check Resend Dashboard: https://resend.com/emails
2. You should see the email in "Recent Emails"
3. Check the status (Delivered, Bounced, etc.)
4. If it shows "Delivered" but you don't see it, check spam

---

**Most likely**: Email is in spam folder or Resend account needs verification.
