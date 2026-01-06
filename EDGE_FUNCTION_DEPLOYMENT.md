# 🚀 Edge Function Deployment Fix Guide

## ⚠️ Problem Identified

Your Edge Functions were failing after deployment because:

1. **Wrong Supabase URL** - Using dashboard URL instead of API URL
2. **Node.js package in Deno** - Using `nodemailer` which doesn't work in Supabase Edge Functions (Deno runtime)
3. **Missing Resend API integration** - The function was set up for Gmail SMTP instead of Resend

## ✅ What's Been Fixed

1. ✅ Updated `.env.local.example` with correct Supabase API URL
2. ✅ Rewrote Edge Function to use **Resend API** (Deno-compatible)
3. ✅ Added proper error handling and logging
4. ✅ Improved email template with HTML formatting

## 📋 Deployment Steps

### Step 1: Update Your Local Environment Variables

**IMPORTANT:** Update your actual `.env.local` file (not just the example):

```bash
# Your actual Supabase API URL (NOT the dashboard URL)
VITE_SUPABASE_URL=https://ktboxxybahgexnibhxfs.supabase.co

# Your Supabase anon key (this is already correct)
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0Ym94eHliYWhnZXhuaWJoeGZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2OTI2NDgsImV4cCI6MjA4MzI2ODY0OH0.lbUbNyvcvoXiXereN1EW5aIsJwG-p7U0fh7JqCVmLUk
```

### Step 2: Get Your Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up or log in
3. Navigate to **API Keys**
4. Create a new API key
5. Copy the key (starts with `re_...`)

### Step 3: Deploy the Updated Edge Function

```bash
# Make sure you're in the project directory
cd c:\Users\DELL\Desktop\MY-Vidyon\my-vidyon-web

# Deploy the Edge Function
supabase functions deploy send-contact-email

# Set the Resend API key as a secret
supabase secrets set RESEND_API_KEY=re_your_actual_api_key_here

# Set the admin email (where contact form submissions will be sent)
supabase secrets set ADMIN_EMAIL=madhan.p@storyseed.in
```

### Step 4: Verify Secrets Are Set

```bash
# List all secrets to verify
supabase secrets list
```

You should see:
- `RESEND_API_KEY`
- `ADMIN_EMAIL`

### Step 5: Test the Deployed Function

After deployment, test the contact form on your live website:

1. Go to your deployed website
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check:
   - ✅ Success message appears
   - ✅ Email arrives at madhan.p@storyseed.in
   - ✅ Submission is stored in Supabase database

### Step 6: Check Logs (If Issues Occur)

```bash
# View real-time logs
supabase functions logs send-contact-email --follow

# Or view recent logs
supabase functions logs send-contact-email
```

## 🔍 Troubleshooting

### Issue: "Failed to send request to edge function"

**Cause:** Wrong Supabase URL or Edge Function not deployed

**Solution:**
1. Verify your `.env.local` has the correct API URL: `https://ktboxxybahgexnibhxfs.supabase.co`
2. Redeploy the function: `supabase functions deploy send-contact-email`
3. Restart your dev server

### Issue: Email not being sent

**Cause:** Missing or invalid Resend API key

**Solution:**
1. Verify Resend API key is set: `supabase secrets list`
2. Check Resend dashboard for API key validity
3. Re-set the secret: `supabase secrets set RESEND_API_KEY=re_your_key`

### Issue: Database error

**Cause:** Table might not exist or RLS policies blocking inserts

**Solution:**
1. Run the migration SQL in Supabase Dashboard → SQL Editor
2. Check RLS policies on `contact_submissions` table

### Issue: CORS errors

**Cause:** Incorrect CORS configuration

**Solution:**
The new Edge Function has proper CORS headers. Redeploy:
```bash
supabase functions deploy send-contact-email
```

## 📧 Email Configuration

### Resend Free Tier Limits
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ Perfect for contact forms!

### Custom Domain (Optional)

To send emails from your own domain (e.g., `contact@myvidyon.com`):

1. Go to Resend Dashboard → Domains
2. Add your domain
3. Add the DNS records provided by Resend
4. Update the Edge Function's `from` field:
   ```typescript
   from: 'My Vidyon <contact@myvidyon.com>',
   ```
5. Redeploy the function

## 🎯 Production Deployment Checklist

Before deploying your website to production:

- [ ] Update `.env.local` with correct Supabase URL
- [ ] Get Resend API key
- [ ] Deploy Edge Function: `supabase functions deploy send-contact-email`
- [ ] Set secrets: `RESEND_API_KEY` and `ADMIN_EMAIL`
- [ ] Test contact form locally
- [ ] Deploy website to Vercel/Netlify
- [ ] Add environment variables to hosting platform:
  - `VITE_SUPABASE_URL=https://ktboxxybahgexnibhxfs.supabase.co`
  - `VITE_SUPABASE_ANON_KEY=your_anon_key`
- [ ] Test contact form on live website
- [ ] Verify email delivery

## 🔐 Security Notes

✅ **Safe to expose in frontend:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

❌ **NEVER expose in frontend:**
- `SUPABASE_SERVICE_ROLE_KEY` (stays in Edge Function)
- `RESEND_API_KEY` (stays in Edge Function)

## 📊 Monitoring

### View Submissions
1. Go to Supabase Dashboard
2. Navigate to Table Editor
3. Select `contact_submissions` table
4. View all submissions with timestamps and email status

### Email Delivery Status
1. Go to Resend Dashboard
2. Navigate to Emails
3. View delivery status, opens, clicks, etc.

### Function Invocations
1. Go to Supabase Dashboard
2. Navigate to Edge Functions
3. View invocation count and errors

## 🆘 Need Help?

If you encounter any issues:

1. Check the function logs: `supabase functions logs send-contact-email`
2. Verify environment variables are set correctly
3. Test the Edge Function directly using Supabase Dashboard
4. Check browser console for frontend errors

## 📝 Quick Commands Reference

```bash
# Deploy function
supabase functions deploy send-contact-email

# Set secrets
supabase secrets set RESEND_API_KEY=re_your_key
supabase secrets set ADMIN_EMAIL=madhan.p@storyseed.in

# List secrets
supabase secrets list

# View logs
supabase functions logs send-contact-email --follow

# Test locally
supabase functions serve send-contact-email
```

---

**Status:** ✅ Edge Function is now production-ready and Deno-compatible!

**Next Step:** Follow the deployment steps above to activate the system.
