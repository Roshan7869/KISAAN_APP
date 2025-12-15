# 🔒 Security Guide - API Keys & Environment Variables

## Quick Security Checklist

- [ ] Created `.env.local` with all required keys
- [ ] `.env.local` is in `.gitignore`
- [ ] Service role keys are NOT prefixed with `NEXT_PUBLIC_`
- [ ] Rotated all API keys from defaults/examples
- [ ] Enabled Row Level Security (RLS) in Supabase
- [ ] Using HTTPS in production
- [ ] Environment variables set in Vercel dashboard for production

---

## 🚨 Critical Security Rules

### 1. NEVER Commit API Keys to Git

**Bad:**
\`\`\`typescript
const apiKey = "AIzaSyC..." // ❌ NEVER hardcode keys
\`\`\`

**Good:**
\`\`\`typescript
const apiKey = process.env.GEMINI_API_KEY // ✅ Use environment variables
\`\`\`

### 2. Separate Public vs Private Keys

**Public Keys (Safe in Browser):**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL`

**Private Keys (SERVER ONLY):**
- `GEMINI_API_KEY` ⚠️
- `OPENROUTER_API_KEY` ⚠️
- `SUPABASE_SERVICE_ROLE_KEY` ⚠️⚠️ CRITICAL
- `POSTGRES_PASSWORD` ⚠️

### 3. Protect Service Role Keys

The Supabase Service Role Key has FULL database access and **bypasses RLS**:

\`\`\`typescript
// ❌ NEVER use in client components
'use client'
import { createClient } from '@/lib/supabase/admin' // ❌ This exposes service key!

// ✅ Only use in Server Actions or API Routes
export async function serverAction() {
  'use server'
  const supabase = createSupabaseAdmin() // ✅ Safe on server
}
\`\`\`

---

## 🛠️ Setup Instructions

### Step 1: Initial Setup

\`\`\`bash
# Copy environment template
cp .env.example .env.local

# Or use the interactive setup script
chmod +x scripts/setup-env.sh
./scripts/setup-env.sh
\`\`\`

### Step 2: Add Required Keys

Edit `.env.local`:

\`\`\`bash
# Minimum required for app to work
GEMINI_API_KEY=AIzaSy...your-actual-key
NEXT_PUBLIC_SUPABASE_URL=https://xyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...your-key
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...your-service-key
POSTGRES_URL=postgresql://...
\`\`\`

### Step 3: Validate Configuration

\`\`\`bash
# Install tsx if needed
npm install -D tsx

# Run validation
npx tsx scripts/validate-env.ts
\`\`\`

Expected output:
\`\`\`
🔍 Validating Environment Variables...

📦 AI Services
==================================================
✅ GEMINI_API_KEY
   AIzaSyC...k7L2
   Google Gemini AI for image analysis & chat
   
📊 Summary:
✅ ALL CHECKS PASSED
\`\`\`

### Step 4: Test API Keys

\`\`\`bash
# Start development server
npm run dev

# Test Gemini API
curl http://localhost:3000/api/health
\`\`\`

---

## 🔐 Environment Variables by Category

### Required (App Won't Work Without These)

| Variable | Purpose | Where to Get |
|----------|---------|--------------|
| `GEMINI_API_KEY` | Plant analysis AI | [aistudio.google.com](https://aistudio.google.com/app/apikey) |
| `NEXT_PUBLIC_SUPABASE_URL` | Database connection | Vercel integration / v0 Vars |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public database access | Vercel integration / v0 Vars |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin database access | Vercel integration / v0 Vars |
| `POSTGRES_URL` | Direct DB connection | Vercel integration / v0 Vars |

### Recommended (App Works But Limited Features)

| Variable | Purpose | Where to Get |
|----------|---------|--------------|
| `OPENROUTER_API_KEY` | AI fallback when Gemini fails | [openrouter.ai/keys](https://openrouter.ai/keys) |

### Optional (Nice to Have)

| Variable | Purpose | Where to Get |
|----------|---------|--------------|
| `PERPLEXITY_API_KEY` | Government schemes search | [perplexity.ai/settings/api](https://www.perplexity.ai/settings/api) |
| `BLOB_READ_WRITE_TOKEN` | Image storage (Vercel Blob) | Vercel dashboard |
| `WEATHER_API_KEY` | Weather forecasts | Weather API provider |

---

## 🌍 Environment-Specific Configuration

### Development (.env.local)
\`\`\`bash
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

### Production (Vercel Dashboard)
\`\`\`bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
\`\`\`

**Set in Vercel:**
1. Go to Project Settings → Environment Variables
2. Add all keys from `.env.local`
3. Select "Production" environment
4. Click "Save"

---

## 🔄 Key Rotation Best Practices

### When to Rotate

- Every 90 days (quarterly)
- When a team member leaves
- If a key is accidentally exposed
- After a security incident

### How to Rotate

1. **Generate new key:**
   - Gemini: https://aistudio.google.com/app/apikey
   - OpenRouter: https://openrouter.ai/keys

2. **Update everywhere:**
   - Local: `.env.local`
   - Production: Vercel dashboard
   - Team: Share securely (1Password, etc.)

3. **Test new key:**
   \`\`\`bash
   npx tsx scripts/validate-env.ts
   npm run dev
   \`\`\`

4. **Revoke old key:**
   - Delete from API provider dashboard
   - Confirm old key no longer works

---

## 🚫 Common Security Mistakes

### ❌ Mistake 1: Committing .env Files
\`\`\`bash
# Check if .env.local is ignored
git status .env.local
# Should show: "nothing to commit"
\`\`\`

### ❌ Mistake 2: Using Service Role in Client
\`\`\`typescript
// DON'T DO THIS
'use client'
const supabase = createSupabaseAdmin() // ❌ Exposes service key!

// DO THIS INSTEAD
'use client'
const supabase = createSupabaseClient() // ✅ Uses anon key with RLS
\`\`\`

### ❌ Mistake 3: Sharing Keys in Chat/Email
Never share API keys via:
- Slack/Discord messages
- Email
- Git commits
- Screenshots

**Instead use:**
- Secure password managers (1Password, Bitwarden)
- Encrypted file sharing
- Environment variable platforms (Vercel, Railway)

---

## 📊 Monitoring & Rate Limits

### Gemini API
- **Free Tier:** 1,500 requests/day
- **Monitor:** https://aistudio.google.com/
- **Rate Limit:** 60 requests/minute

### OpenRouter
- **Free Tier:** Credits-based
- **Monitor:** https://openrouter.ai/activity
- **Rate Limit:** Varies by model

### Supabase
- **Free Tier:** 500MB database, 2GB bandwidth
- **Monitor:** https://supabase.com/dashboard/project/_/settings/billing
- **Rate Limit:** None on free tier (bandwidth limits apply)

---

## 🆘 Troubleshooting

### "API key not configured" Error

**Problem:** App can't find API key
**Solution:**
\`\`\`bash
# 1. Check .env.local exists
ls -la .env.local

# 2. Verify key is set
grep GEMINI_API_KEY .env.local

# 3. Restart dev server
# Kill server (Ctrl+C) and restart:
npm run dev
\`\`\`

### Keys Not Loading in Production

**Problem:** Works locally but not on Vercel
**Solution:**
1. Check Vercel dashboard → Environment Variables
2. Ensure keys are set for "Production" environment
3. Redeploy: `vercel --prod`

### Service Role Key Exposed

**Problem:** Accidentally committed service role key
**Solution:**
\`\`\`bash
# 1. IMMEDIATELY rotate the key in Supabase dashboard
# 2. Remove from git history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env.local" \
  --prune-empty --tag-name-filter cat -- --all

# 3. Force push (if you have permissions)
git push origin --force --all
\`\`\`

---

## 📚 Additional Resources

- [OWASP API Security](https://owasp.org/www-project-api-security/)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Supabase Security Best Practices](https://supabase.com/docs/guides/database/securing-your-database)
- [Google Cloud API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)

---

## 🆘 Need Help?

1. Check `API_KEYS_AUDIT.md` for key locations
2. Review `ENVIRONMENT_SETUP.md` for setup steps
3. Run validation: `npx tsx scripts/validate-env.ts`
4. Check Supabase dashboard for database keys
5. Verify keys at provider dashboards

---

**Last Updated:** December 2024
**Status:** All security measures documented ✅
\`\`\`

```json file="" isHidden
