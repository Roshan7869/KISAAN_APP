# LLM API Keys Audit Report

## Summary
All LLM API keys have been identified and documented. This report shows where each API key is used and how to configure them securely.

---

## 🔑 Required API Keys

### 1. **GEMINI_API_KEY** (Primary AI)
**Purpose:** Google Gemini AI for image analysis and chat functionality

**Used In:**
- `lib/ai/gemini.ts` - Main Gemini integration
- `app/api/analyze-image/route.ts` - Image analysis endpoint
- `app/api/diagnose/route.ts` - Plant diagnosis
- `app/api/assistant/route.ts` - Chat assistant

**Where to Get:** https://aistudio.google.com/
- Sign in with Google account
- Go to "Get API Key" section
- Create new API key
- Free tier: 1,500 requests/day

**Security:** Server-side only (NOT prefixed with NEXT_PUBLIC_)

---

### 2. **OPENROUTER_API_KEY** (Fallback AI)
**Purpose:** OpenRouter for Amazon Nova/Gemini fallback when primary Gemini fails

**Used In:**
- `lib/ai/openrouter.ts` - OpenRouter integration
- `app/api/assistant/route.ts` - Chat fallback
- `app/api/diagnose/route.ts` - Diagnosis fallback

**Where to Get:** https://openrouter.ai/
- Create account
- Go to Keys section
- Generate new key
- Free tier available with credits

**Security:** Server-side only (NOT prefixed with NEXT_PUBLIC_)

---

### 3. **PERPLEXITY_API_KEY** (Optional - from user attachment)
**Purpose:** Perplexity AI for advanced search/research capabilities

**Used In:**
- Referenced in user attachment `axios-hBPyi.tsx`
- Not currently implemented in main codebase

**Where to Get:** https://www.perplexity.ai/settings/api
- Create Perplexity account
- Navigate to API settings
- Generate API key

**Security:** Server-side only (NOT prefixed with NEXT_PUBLIC_)

---

## 🗄️ Database & Authentication Keys

### 4. **Supabase Keys** (Already Configured via Integration)
**Purpose:** Database, authentication, and storage

**Environment Variables:**
- `NEXT_PUBLIC_SUPABASE_URL` - Public Supabase URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Public anon key (RLS protected)
- `SUPABASE_SERVICE_ROLE_KEY` - Server-side admin key (CRITICAL)
- `SUPABASE_JWT_SECRET` - JWT verification secret
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` - Alias for anon key

**Used In:**
- `lib/supabase/client.ts` - Client-side Supabase
- `lib/supabase/server.ts` - Server-side Supabase
- `lib/supabase/admin.ts` - Admin operations
- `lib/supabase/proxy.ts` - Proxy configuration

**Where to Get:** Already provided via Vercel integration
- Configured in project settings
- Available in v0 Vars section

**Security:** 
- Public keys (`NEXT_PUBLIC_*`) can be in browser
- Service role key is SERVER-ONLY

---

### 5. **PostgreSQL/Neon Keys** (Already Configured)
**Purpose:** Direct database access (alternative to Supabase client)

**Environment Variables:**
- `POSTGRES_URL` - Connection string
- `POSTGRES_PRISMA_URL` - Prisma connection
- `POSTGRES_URL_NON_POOLING` - Non-pooled connection
- `POSTGRES_USER` - Database user
- `POSTGRES_PASSWORD` - Database password
- `POSTGRES_HOST` - Database host
- `POSTGRES_DATABASE` - Database name

**Security:** All server-side only

---

## ✅ Security Status

### Secure ✓
- ✅ All Gemini API calls use `process.env.GEMINI_API_KEY`
- ✅ All OpenRouter calls use `process.env.OPENROUTER_API_KEY`
- ✅ Supabase keys properly separated (public vs service role)
- ✅ No hardcoded API keys in code
- ✅ Proper validation before API calls

### Previously Insecure (Now Fixed)
- ⚠️ OpenRouter had hardcoded key (FIXED in previous update)

---

## 🚀 Configuration Steps

### Step 1: Copy Environment Template
\`\`\`bash
cp .env.example .env.local
\`\`\`

### Step 2: Add Required Keys
Edit `.env.local` and add:

\`\`\`bash
# Required: Google Gemini (Primary AI)
GEMINI_API_KEY=your_gemini_api_key_here

# Required: OpenRouter (Fallback AI)
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Optional: Perplexity (Not yet implemented)
# PERPLEXITY_API_KEY=your_perplexity_key_here
\`\`\`

### Step 3: Supabase Keys (Auto-configured)
These are already set via Vercel integration:
- Check v0 Vars section
- Or Vercel project settings → Environment Variables

### Step 4: Verify Configuration
Run validation script (see ENVIRONMENT_SETUP.md)

---

## 📊 API Key Usage Map

\`\`\`
┌─────────────────────────────────────────┐
│         Frontend (Camera Page)          │
│  - Uploads image to /api/analyze-image  │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│     API Route: /api/analyze-image       │
│  - Uses GEMINI_API_KEY                  │
│  - Calls lib/ai/gemini.ts               │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│      Gemini AI (Primary)                │
│  - Analyzes image                       │
│  - Returns diagnosis                    │
└─────────────────────────────────────────┘

If Gemini fails ↓

┌─────────────────────────────────────────┐
│     API Route: /api/assistant           │
│  - Uses OPENROUTER_API_KEY              │
│  - Calls lib/ai/openrouter.ts           │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│   OpenRouter → Amazon Nova (Fallback)   │
│  - Processes request                    │
│  - Returns response                     │
└─────────────────────────────────────────┘
\`\`\`

---

## 🔒 Best Practices

1. **Never commit .env files**
   - Added to .gitignore
   - Use .env.example for templates

2. **Separate public vs private keys**
   - `NEXT_PUBLIC_*` = Can be in browser
   - No prefix = Server-side only

3. **Use environment-specific files**
   - `.env.local` - Local development
   - `.env.production` - Production (use Vercel dashboard)

4. **Rotate keys regularly**
   - Generate new keys quarterly
   - Revoke old keys after rotation

5. **Monitor usage**
   - Check Gemini usage: https://aistudio.google.com/
   - Check OpenRouter usage: https://openrouter.ai/activity

---

## 🐛 Troubleshooting

### "Gemini API key not configured"
- Check `.env.local` has `GEMINI_API_KEY`
- Restart Next.js dev server
- Verify key is valid at aistudio.google.com

### "OpenRouter API key not configured"
- Check `.env.local` has `OPENROUTER_API_KEY`
- Verify key at openrouter.ai/keys
- Check account has credits

### "Supabase connection failed"
- Keys should be auto-configured via Vercel
- Check v0 Vars section
- Verify Supabase project is active

---

## 📝 Notes

- **Gemini** is the primary AI (faster, free tier generous)
- **OpenRouter** is fallback only (activates when Gemini fails)
- **Supabase** keys managed by Vercel integration (no manual setup needed)
- All API keys validated before use (proper error messages)

---

## 🔗 Quick Links

- [Gemini API Console](https://aistudio.google.com/)
- [OpenRouter Dashboard](https://openrouter.ai/)
- [Perplexity API](https://www.perplexity.ai/settings/api)
- [Supabase Dashboard](https://supabase.com/dashboard)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

**Last Updated:** December 2024  
**Status:** All keys identified and documented ✅
\`\`\`

```bash file="" isHidden
