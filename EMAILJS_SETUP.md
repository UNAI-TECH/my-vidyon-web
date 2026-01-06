# EmailJS Setup Guide for Contact Form

## 📧 Email Integration Complete!

Your contact form is now configured to send emails to **madhan.p@storyseed.in** using EmailJS.

## 🚀 Setup Instructions (Follow These Steps):

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE for up to 200 emails/month)
3. Create an account using your email

### Step 2: Add Email Service

1. After logging in, go to **Email Services**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Click **"Connect Account"**
   - Sign in with your Gmail account (use madhan.p@storyseed.in or any Gmail you have access to)
   - Authorize EmailJS
4. **Service ID** will be created (e.g., `service_abc123`)
5. **Copy this Service ID** - you'll need it!

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **"Create New Template"**
3. **Template ID** will be auto-generated (e.g., `template_xyz789`)
4. Configure the template:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content (Body):**
```
You have received a new message from the My Vidyon website contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Institution: {{institution}}

Message:
{{message}}

---
This email was sent from the My Vidyon contact form.
Reply to: {{from_email}}
```

**Settings:**
- **To Email**: madhan.p@storyseed.in
- **From Name**: My Vidyon Contact Form
- **Reply To**: {{from_email}}

5. Click **"Save"**
6. **Copy the Template ID**

### Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find **"Public Key"** (it looks like: `abc123XYZ-_`)
3. **Copy this Public Key**

### Step 5: Update Your Code

Open `src/pages/Contact.tsx` and replace these values (around line 76-78):

```typescript
const serviceId = 'YOUR_SERVICE_ID_HERE';     // Replace with your Service ID from Step 2
const templateId = 'YOUR_TEMPLATE_ID_HERE';   // Replace with your Template ID from Step 3
const publicKey = 'YOUR_PUBLIC_KEY_HERE';     // Replace with your Public Key from Step 4
```

**Example:**
```typescript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'abc123XYZ-_';
```

### Step 6: Test the Form

1. Go to your website: https://my-vidyon-web.vercel.app/contact
2. Fill out the contact form
3. Click "Send Message"
4. Check **madhan.p@storyseed.in** inbox
5. You should receive an email within seconds!

## 📋 Email Template Variables

The following variables are sent from the form:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | User's name | John Doe |
| `{{from_email}}` | User's email | john@school.edu |
| `{{phone}}` | User's phone | +1 234 567 890 |
| `{{institution}}` | Institution name | ABC School |
| `{{message}}` | User's message | We need ERP solution... |
| `{{to_email}}` | Your email (hardcoded) | madhan.p@storyseed.in |

## 🔧 Troubleshooting

### Email Not Received?

1. **Check Spam Folder** - EmailJS emails sometimes go to spam initially
2. **Verify Service ID** - Make sure it matches exactly
3. **Verify Template ID** - Make sure it matches exactly
4. **Verify Public Key** - Make sure it matches exactly
5. **Check EmailJS Dashboard** - Go to "Email History" to see if emails were sent
6. **Check Console** - Open browser DevTools → Console for error messages

### Common Errors:

**Error: "Invalid Service ID"**
- Solution: Double-check your Service ID in EmailJS dashboard

**Error: "Invalid Template ID"**
- Solution: Double-check your Template ID in EmailJS dashboard

**Error: "Invalid Public Key"**
- Solution: Go to Account → General and copy the correct Public Key

**Error: "Failed to send"**
- Solution: Check your internet connection and EmailJS service status

## 💡 Tips

1. **Test Thoroughly**: Send multiple test emails to ensure everything works
2. **Check Spam**: Add EmailJS to your safe senders list
3. **Monitor Usage**: Free tier allows 200 emails/month
4. **Upgrade if Needed**: If you exceed 200 emails/month, upgrade to a paid plan ($7/month)
5. **Auto-Reply**: You can set up an auto-reply template in EmailJS

## 🎯 What Happens When Form is Submitted:

1. User fills out the form
2. Clicks "Send Message"
3. Form data is sent to EmailJS
4. EmailJS sends email to madhan.p@storyseed.in
5. User sees success message
6. Form is cleared
7. You receive email within seconds!

## 📊 EmailJS Free Tier Limits:

- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ Unlimited services
- ✅ Email history (30 days)
- ✅ No credit card required

## 🔐 Security Note:

The Public Key is safe to expose in client-side code. It's designed to be public. Your email credentials are never exposed.

## 📞 Support:

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- My Vidyon Support: madhan.p@storyseed.in

---

**Status**: ✅ Code is ready! Just need to add your EmailJS credentials.

**Next Step**: Follow Steps 1-5 above to get your credentials and update the code.
