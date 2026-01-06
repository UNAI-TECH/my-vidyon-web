# 🔧 Contact Form Troubleshooting Guide

## Issue: "Failed to send a request to the edge function"

### ✅ Solution Checklist

#### 1. **Environment Variables (.env.local)**

**Status**: ⚠️ **MUST BE CONFIGURED**

Create/Edit `.env.local` in project root with your actual Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-key
```

**How to get these:**
1. Go to https://supabase.com/dashboard
2. Select your project
3. Settings → API
4. Copy **Project URL** and **anon public** key

**After editing:**
- Save the file
- **Restart dev server** (Ctrl+C, then `npm run dev`)

#### 2. **Verify Edge Function is Deployed**

```bash
npx supabase functions list
```

✅ You should see `send-contact-email` with STATUS: ACTIVE

#### 3. **Check Environment Secrets**

```bash
npx supabase secrets list
```

✅ You should see:
- `RESEND_API_KEY`
- `ADMIN_EMAIL`

If missing, set them:
```bash
npx supabase secrets set RESEND_API_KEY=re_your_key_here
npx supabase secrets set ADMIN_EMAIL=madhan.p@storyseed.in
```

#### 4. **Test Edge Function Directly**

```bash
# Test the function
curl -i --location --request POST \
  'https://your-project-id.supabase.co/functions/v1/send-contact-email' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

Expected response: `{"success":true,"message":"..."}` 

#### 5. **Check Browser Console**

1. Open your website
2. Press F12 (Developer Tools)
3. Go to **Console** tab
4. Fill out contact form and submit
5. Look for errors

Common errors:
- `VITE_SUPABASE_URL is not defined` → .env.local not loaded
- `Failed to fetch` → CORS or network issue
- `Invalid API key` → Wrong anon key

#### 6. **Verify Supabase Client**

Check `src/lib/supabase.ts`:

```typescript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl) // Should print your URL
console.log('Anon Key:', supabaseAnonKey ? 'Set' : 'Missing') // Should print 'Set'
```

#### 7. **Check Edge Function Logs**

```bash
npx supabase functions logs send-contact-email --tail
```

This shows real-time logs. Submit the form and watch for errors.

## 🐛 Common Issues & Fixes

### Issue: "VITE_SUPABASE_URL is not defined"

**Fix:**
1. Create `.env.local` file
2. Add correct values
3. **Restart dev server** (important!)

### Issue: "Failed to fetch"

**Fix:**
1. Check if Edge Function is deployed: `npx supabase functions list`
2. Verify URL in `.env.local` matches your project
3. Check CORS settings in Edge Function

### Issue: "Invalid API key"

**Fix:**
1. Go to Supabase Dashboard → Settings → API
2. Copy the **anon public** key (not service_role!)
3. Update `.env.local`
4. Restart dev server

### Issue: Email not received

**Fix:**
1. Check Resend API key is set:
   ```bash
   npx supabase secrets list
   ```
2. Verify email in Resend dashboard
3. Check spam folder
4. View Edge Function logs for errors

### Issue: "CORS error"

**Fix:**
Edge Function already has CORS headers. If you still see this:
1. Clear browser cache
2. Try incognito mode
3. Check if function is deployed correctly

## 📋 Quick Verification Steps

Run these commands to verify everything:

```bash
# 1. Check if .env.local exists
ls .env.local

# 2. Check Edge Function status
npx supabase functions list

# 3. Check secrets
npx supabase secrets list

# 4. View recent logs
npx supabase functions logs send-contact-email --limit 10
```

## 🔍 Debug Mode

Add this to `src/lib/supabase.ts` temporarily:

```typescript
export async function submitContactForm(data: any) {
  console.log('=== DEBUG: Contact Form Submission ===')
  console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL)
  console.log('Anon Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)
  console.log('Form data:', data)
  
  try {
    const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
      body: data
    })
    
    console.log('Response:', responseData)
    console.log('Error:', error)
    
    // ... rest of code
  }
}
```

## ✅ Success Indicators

When everything works:
1. Form submits without errors
2. Success toast appears
3. Form clears
4. Email arrives at madhan.p@storyseed.in
5. Entry appears in Supabase `contact_submissions` table

## 📞 Still Not Working?

1. **Check Edge Function logs**:
   ```bash
   npx supabase functions logs send-contact-email --tail
   ```

2. **Test function directly** (see step 4 above)

3. **Verify all environment variables** are set correctly

4. **Restart everything**:
   - Stop dev server (Ctrl+C)
   - `npm run dev`
   - Hard refresh browser (Ctrl+Shift+R)

---

**Most Common Fix**: Create/update `.env.local` and restart dev server!
