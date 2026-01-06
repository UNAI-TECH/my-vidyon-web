# 🚀 Quick Fix: Contact Form Setup

## Current Issue: "Edge Function returned a non-2xx status code"

### Root Cause:
The Edge Function needs:
1. Database table to exist
2. (Optional) Email service configured

## ✅ Solution: 2 Steps

### Step 1: Create Database Table

Run this SQL in Supabase Dashboard:

1. Go to https://supabase.com/dashboard
2. Select your project
3. Click **SQL Editor** (left sidebar)
4. Click **New Query**
5. Paste this SQL:

```sql
-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  institution TEXT,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Service role can insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated can view" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
```

6. Click **Run** (or press Ctrl+Enter)
7. You should see "Success. No rows returned"

### Step 2: Redeploy Edge Function

```bash
npx supabase functions deploy send-contact-email
```

### Step 3: Test the Form

1. Go to your website `/contact`
2. Fill out the form
3. Click "Send Message"
4. ✅ Should work now!

## 📧 Email Notifications (Optional)

The form now works and stores submissions in the database. To also receive emails:

### Option A: Use Web3Forms (FREE - Recommended)

1. Go to https://web3forms.com
2. Sign up (FREE - 250 emails/month)
3. Get your Access Key
4. Set the secret:
```bash
npx supabase secrets set WEB3FORMS_ACCESS_KEY=your-access-key-here
```
5. Redeploy:
```bash
npx supabase functions deploy send-contact-email
```

### Option B: Use Resend (if you prefer)

1. Go to https://resend.com
2. Get API key
3. Set secrets:
```bash
npx supabase secrets set RESEND_API_KEY=re_your_key
npx supabase secrets set ADMIN_EMAIL=madhan.p@storyseed.in
```
4. Update Edge Function code to use Resend (see SUPABASE_SETUP.md)

## 🗄️ View Submissions

Even without email, you can view all submissions:

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Select `contact_submissions`
4. See all form submissions with timestamps!

Or run SQL:
```sql
SELECT * FROM contact_submissions 
ORDER BY submitted_at DESC;
```

## ✅ Verification

After Step 1 & 2, test:

1. Submit the contact form
2. Check for success message
3. Go to Supabase → Table Editor → contact_submissions
4. You should see your submission!

## 🎯 Summary

**Minimum to work:**
- ✅ Create database table (Step 1)
- ✅ Redeploy function (Step 2)
- ✅ Form works, submissions stored

**For email notifications:**
- ⭐ Add Web3Forms key (free, easy)
- OR use Resend (requires setup)

**Current Status:**
- Edge Function: ✅ Deployed
- Database Table: ⚠️ Needs to be created
- Email Service: ⚠️ Optional (form works without it)
