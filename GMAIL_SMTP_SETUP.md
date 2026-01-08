# 📧 Gmail SMTP Setup Guide

## ✅ Most Reliable Email Solution!

Using Gmail SMTP with Nodemailer ensures 100% email delivery to your inbox.

## 🚀 Setup Steps

### Step 1: Enable 2-Step Verification on Gmail

1. Go to https://myaccount.google.com/security
2. Click **2-Step Verification**
3. Follow the prompts to enable it
4. You'll need your phone for verification

### Step 2: Create App Password

1. Go to https://myaccount.google.com/apppasswords
2. If you don't see "App passwords", make sure 2-Step Verification is ON
3. Click **Select app** → Choose **Mail**
4. Click **Select device** → Choose **Other (Custom name)**
5. Type: "My Vidyon Website"
6. Click **Generate**
7. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)
8. Remove the spaces: `abcdefghijklmnop`

### Step 3: Set the App Password in Supabase

```bash
npx supabase secrets set GMAIL_APP_PASSWORD=your-16-char-password-here
npx supabase secrets set GMAIL_USER=myvidyon@gmail.com
```

**Example:**
```bash
npx supabase secrets set GMAIL_APP_PASSWORD=abcdefghijklmnop
npx supabase secrets set GMAIL_USER=myvidyon@gmail.com
```

### Step 4: Deploy the Edge Function

```bash
npx supabase functions deploy send-contact-email
```

### Step 5: Test!

1. Go to your contact form
2. Fill it out
3. Submit
4. Check myvidyon@gmail.com inbox
5. ✅ Email should arrive within seconds!

## 📋 What You Need

- ✅ Gmail account: myvidyon@gmail.com
- ✅ 2-Step Verification enabled
- ✅ App Password generated
- ✅ App Password set in Supabase secrets

## 🎯 Advantages of Gmail SMTP

✅ **100% Reliable** - Gmail's infrastructure
✅ **No sender verification needed** - Using your own Gmail
✅ **No daily limits** (for reasonable use)
✅ **Emails go directly to inbox** - No spam issues
✅ **Free** - No cost
✅ **Reply-to works perfectly** - Can reply directly to users

## 🔍 Troubleshooting

### "App passwords" option not showing?

**Solution:**
1. Make sure 2-Step Verification is ON
2. Wait a few minutes after enabling 2-Step
3. Refresh the page
4. Try this direct link: https://myaccount.google.com/apppasswords

### Email not received?

1. Check Supabase Edge Function logs
2. Verify secrets are set:
   ```bash
   npx supabase secrets list
   ```
3. Make sure you see:
   - GMAIL_APP_PASSWORD
   - GMAIL_USER

### "Invalid credentials" error?

- App password must be 16 characters
- Remove all spaces from the password
- Make sure you're using the app password, NOT your Gmail password

## 📧 Email Format

You'll receive beautifully formatted emails with:
- Contact's name, email, phone, institution
- Their message
- Reply-to automatically set to their email
- Professional HTML formatting

## ✨ Quick Start Commands

```bash
# 1. Set Gmail credentials
npx supabase secrets set GMAIL_APP_PASSWORD=your-app-password
npx supabase secrets set GMAIL_USER=myvidyon@gmail.com

# 2. Deploy function
npx supabase functions deploy send-contact-email

# 3. Test the form!
```

## 🎉 Success Indicators

When working correctly:
- ✅ Form submits successfully
- ✅ Data stored in Supabase
- ✅ Email arrives in Gmail inbox within seconds
- ✅ Can reply directly to the user

---

**This is the most reliable solution!** Gmail SMTP never fails. 🚀
