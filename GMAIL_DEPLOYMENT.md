# 📧 Gmail SMTP Deployment Guide

## ✅ What's Configured

Your Edge Function is now configured to use **Gmail SMTP** with **Google App Passwords** for sending emails. This implementation:

- ✅ Uses native Deno APIs (no nodemailer dependency)
- ✅ Works in both local testing and production
- ✅ Stores all submissions in Supabase database
- ✅ Sends emails to: `myvidyon@gmail.com`
- ✅ Supports reply-to functionality

## 🔑 Step 1: Get Your Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App Passwords**: https://myaccount.google.com/apppasswords
5. Select app: **Mail**
6. Select device: **Other (Custom name)** → Enter "My Vidyon Website"
7. Click **Generate**
8. Copy the **16-character password** (e.g., `abcd efgh ijkl mnop`)
9. **Remove spaces** when using it: `abcdefghijklmnop`

## 🚀 Step 2: Deploy the Edge Function

Run the deployment script:

```powershell
.\deploy-edge-function.ps1
```

This will deploy the updated Edge Function to Supabase.

## 🔐 Step 3: Set Environment Secrets

After deployment, set your Gmail credentials as secrets:

```bash
# Set your Gmail App Password (REQUIRED)
npx supabase secrets set GMAIL_APP_PASSWORD=abcdefghijklmnop

# Set Gmail user email (OPTIONAL - defaults to myvidyon@gmail.com)
npx supabase secrets set GMAIL_USER=myvidyon@gmail.com
```

**Important:** Replace `abcdefghijklmnop` with your actual 16-character App Password.

## ✔️ Step 4: Verify Secrets

Check that your secrets are set correctly:

```bash
npx supabase secrets list
```

You should see:
- `GMAIL_APP_PASSWORD` (value hidden for security)
- `GMAIL_USER` (if you set it)

## 🧪 Step 5: Test the Contact Form

### Test Locally:
1. Make sure your dev server is running: `npm run dev`
2. Go to: http://localhost:5173/contact
3. Fill out and submit the contact form
4. Check:
   - ✅ Success message appears
   - ✅ Email arrives at `myvidyon@gmail.com`
   - ✅ Submission is stored in Supabase database

### Test in Production:
1. Deploy your website to Vercel/Netlify
2. Test the contact form on your live site
3. Verify email delivery and database storage

## 📊 Step 6: Monitor

### View Function Logs:
```bash
# Real-time logs
npx supabase functions logs send-contact-email --follow

# Recent logs
npx supabase functions logs send-contact-email
```

### View Submissions in Database:
1. Go to Supabase Dashboard
2. Navigate to **Table Editor**
3. Select `contact_submissions` table
4. View all submissions with timestamps

## 🔍 Troubleshooting

### Issue: "Failed to send request to edge function"

**Solution:**
1. Verify your `.env.local` has the correct Supabase URL:
   ```
   VITE_SUPABASE_URL=https://ktboxxybahgexnibhxfs.supabase.co
   ```
2. Restart your dev server
3. Clear browser cache

### Issue: Email not being sent

**Possible causes:**
1. **Gmail App Password not set or incorrect**
   - Verify: `npx supabase secrets list`
   - Re-set: `npx supabase secrets set GMAIL_APP_PASSWORD=your_password`

2. **2-Step Verification not enabled**
   - Enable it in Google Account Security settings

3. **App Password has spaces**
   - Remove all spaces from the 16-character password

4. **Using regular Gmail password instead of App Password**
   - Must use App Password, not your regular password

### Issue: SMTP connection errors

**Solution:**
Check the function logs for detailed error messages:
```bash
npx supabase functions logs send-contact-email
```

Common SMTP errors:
- **535 Authentication failed** → Wrong App Password
- **Connection timeout** → Network/firewall issue
- **TLS error** → SMTP configuration issue

### Issue: Database errors

**Solution:**
1. Verify the `contact_submissions` table exists
2. Run the migration SQL if needed (see `SUPABASE_SETUP.md`)
3. Check RLS policies

## 📧 How It Works

```
User submits form
    ↓
Frontend calls Edge Function
    ↓
Edge Function (Deno runtime)
    ├─→ Stores data in Supabase database ✅
    └─→ Sends email via Gmail SMTP ✅
        ↓
Email delivered to myvidyon@gmail.com
```

## 🔐 Security Notes

### Safe to expose (Frontend):
- ✅ `VITE_SUPABASE_URL`
- ✅ `VITE_SUPABASE_ANON_KEY`

### Must stay secret (Backend only):
- ❌ `GMAIL_APP_PASSWORD` (stored in Supabase secrets)
- ❌ `GMAIL_USER` (stored in Supabase secrets)
- ❌ `SUPABASE_SERVICE_ROLE_KEY` (auto-injected by Supabase)

## 📝 Email Template

Emails sent will include:
- Professional HTML design with My Vidyon branding
- Contact details (name, email, phone, institution)
- Message content
- Reply-to functionality (replies go to the submitter)
- Responsive design

## 🎯 Production Deployment Checklist

Before going live:

- [ ] Gmail App Password generated
- [ ] Edge Function deployed: `.\deploy-edge-function.ps1`
- [ ] Secrets set: `GMAIL_APP_PASSWORD`
- [ ] Secrets verified: `npx supabase secrets list`
- [ ] Contact form tested locally
- [ ] Website deployed to hosting platform
- [ ] Environment variables added to hosting platform:
  - `VITE_SUPABASE_URL=https://ktboxxybahgexnibhxfs.supabase.co`
  - `VITE_SUPABASE_ANON_KEY=your_anon_key`
- [ ] Contact form tested on live site
- [ ] Email delivery verified
- [ ] Database storage verified

## 💡 Tips

1. **Keep your App Password secure** - Never commit it to Git
2. **Test locally first** before deploying to production
3. **Monitor logs** regularly to catch any issues early
4. **Check spam folder** if emails aren't arriving
5. **Use a dedicated Gmail account** for production (optional but recommended)

## 🆘 Need Help?

If you encounter issues:

1. Check function logs: `npx supabase functions logs send-contact-email`
2. Verify secrets are set: `npx supabase secrets list`
3. Test with a simple submission
4. Check Gmail account for any security alerts
5. Verify 2-Step Verification is enabled

## 📞 Quick Commands Reference

```bash
# Deploy function
.\deploy-edge-function.ps1

# Or manually:
npx supabase functions deploy send-contact-email

# Set secrets
npx supabase secrets set GMAIL_APP_PASSWORD=your_password
npx supabase secrets set GMAIL_USER=myvidyon@gmail.com

# List secrets
npx supabase secrets list

# View logs
npx supabase functions logs send-contact-email --follow

# Test locally
npm run dev
```

---

**Status:** ✅ Gmail SMTP configured and ready for deployment!

**Email Provider:** Gmail (myvidyon@gmail.com)

**Database:** Supabase (all submissions stored)

**Next Step:** Run `.\deploy-edge-function.ps1` to deploy!
