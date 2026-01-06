# 🚀 Supabase Contact Form Setup Guide

## ✅ What's Been Implemented

A **production-ready, secure** contact form system using:
- **Supabase Edge Functions** (backend)
- **Resend API** (email delivery)
- **No exposed credentials** on frontend
- **Database storage** for submissions

## 📋 Architecture

```
User fills form → Frontend calls Edge Function (with anon key)
                ↓
        Edge Function (secure backend)
                ↓
        ├─→ Sends email via Resend API
        └─→ Stores in Supabase database
                ↓
        Email delivered to madhan.p@storyseed.in
```

## 🔧 Setup Instructions

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new project
4. Note down:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (keep secret!)

### Step 2: Set Up Database

1. Go to **SQL Editor** in Supabase Dashboard
2. Copy the contents of `supabase/migrations/create_contact_submissions.sql`
3. Paste and run the SQL
4. This creates the `contact_submissions` table

### Step 3: Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up (FREE tier: 100 emails/day, 3,000/month)
3. Go to **API Keys**
4. Create a new API key
5. Copy the key (starts with `re_...`)

### Step 4: Install Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
cd my-vidyon-web
supabase link --project-ref your-project-ref
```

### Step 5: Deploy Edge Function

```bash
# Deploy the Edge Function
supabase functions deploy send-contact-email

# Set environment variables (secrets)
supabase secrets set RESEND_API_KEY=re_your_api_key_here
supabase secrets set ADMIN_EMAIL=madhan.p@storyseed.in
```

### Step 6: Configure Frontend

Create `.env.local` file in your project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important**: Add `.env.local` to `.gitignore`!

### Step 7: Test the Form

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Go to `/contact` page

3. Fill out the form and submit

4. Check:
   - ✅ Success message appears
   - ✅ Email arrives at madhan.p@storyseed.in
   - ✅ Submission stored in Supabase database

## 📁 File Structure

```
my-vidyon-web/
├── supabase/
│   ├── functions/
│   │   └── send-contact-email/
│   │       └── index.ts          # Edge Function code
│   ├── migrations/
│   │   └── create_contact_submissions.sql
│   └── .env.example
├── src/
│   ├── lib/
│   │   └── supabase.ts           # Supabase client
│   └── pages/
│       └── Contact.tsx           # Updated contact form
└── .env.local                    # Your environment variables
```

## 🔐 Security Features

✅ **No credentials in frontend code**
- Only anon key is exposed (safe and intended)
- Service role key stays on backend
- Resend API key only in Edge Function

✅ **CORS protection**
- Edge Function has proper CORS headers
- Only accepts requests from your domain

✅ **Input validation**
- Email format validation
- Required fields check
- SQL injection protection (Supabase handles this)

✅ **Rate limiting** (Supabase provides this)

## 📧 Email Template

Emails sent to madhan.p@storyseed.in will look like:

```
Subject: New Contact Form Submission from [Name]

New Contact Form Submission

Name: John Doe
Email: john@school.edu
Phone: +1 234 567 890
Institution: ABC School

Message:
We are interested in your ERP solution...

---
This email was sent from the My Vidyon website contact form.
Reply directly to this email to respond to John Doe.
```

## 🗄️ Database Schema

```sql
contact_submissions
├── id (UUID)
├── name (TEXT)
├── email (TEXT)
├── phone (TEXT, optional)
├── institution (TEXT, optional)
├── message (TEXT)
├── submitted_at (TIMESTAMPTZ)
├── email_sent (BOOLEAN)
├── email_id (TEXT)
└── created_at (TIMESTAMPTZ)
```

## 📊 View Submissions

To view all contact form submissions:

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Select `contact_submissions` table
4. View all submissions with timestamps

Or query via SQL:

```sql
SELECT * FROM contact_submissions 
ORDER BY submitted_at DESC 
LIMIT 50;
```

## 🔍 Troubleshooting

### Edge Function not working?

```bash
# Check function logs
supabase functions logs send-contact-email

# Test locally
supabase functions serve send-contact-email
```

### Email not received?

1. Check Resend dashboard for delivery status
2. Check spam folder
3. Verify RESEND_API_KEY is set correctly:
   ```bash
   supabase secrets list
   ```

### Frontend errors?

1. Check browser console for errors
2. Verify `.env.local` has correct values
3. Restart dev server after changing `.env.local`

## 💰 Cost Breakdown

### Supabase (FREE tier)
- ✅ 500MB database
- ✅ 2GB bandwidth
- ✅ 500K Edge Function invocations/month
- ✅ More than enough for contact forms!

### Resend (FREE tier)
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ Perfect for contact forms!

**Total Cost: $0/month** for typical usage!

## 🚀 Production Deployment

### Vercel/Netlify

Your `.env.local` variables need to be added to your hosting platform:

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add the same variables

## 📈 Monitoring

### Email Delivery
- Check Resend Dashboard for delivery stats
- View bounces and failures

### Database
- Monitor submissions in Supabase Table Editor
- Set up email alerts for new submissions

### Edge Function
- View logs in Supabase Dashboard
- Monitor invocation count

## 🎯 Next Steps

1. **Customize email template** in Edge Function
2. **Add auto-reply** to users
3. **Set up email notifications** for new submissions
4. **Create admin dashboard** to view submissions
5. **Add spam protection** (reCAPTCHA)

## 📞 Support

- Supabase Docs: https://supabase.com/docs
- Resend Docs: https://resend.com/docs
- My Vidyon Support: madhan.p@storyseed.in

---

## ✨ Quick Start Checklist

- [ ] Create Supabase project
- [ ] Run database migration
- [ ] Get Resend API key
- [ ] Install Supabase CLI
- [ ] Deploy Edge Function
- [ ] Set environment secrets
- [ ] Configure frontend `.env.local`
- [ ] Test the form
- [ ] Deploy to production

**Estimated setup time: 15-20 minutes**

---

**Status**: ✅ Code is production-ready!
**Next**: Follow the setup steps above to activate the system.
