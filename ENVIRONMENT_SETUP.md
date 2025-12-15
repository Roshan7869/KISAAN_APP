# Environment Variables Setup Guide

## Quick Start

1. **Copy the example file:**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. **Fill in required values** (marked with ✅ below)

3. **Restart your development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

---

## Required Variables (Must Configure)

### 🗄️ Database - Supabase

| Variable | Required | Description | Where to Get |
|----------|----------|-------------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ Yes | Your Supabase project URL | [Supabase Dashboard](https://supabase.com/dashboard) → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ Yes | Public anon key | Same location as above |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ Yes | Service role key (keep secret!) | Same location - use with caution |

**Setup Steps:**
1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project (or create a new one)
3. Click Settings → API
4. Copy the URL and keys

### 🤖 AI - Google Gemini

| Variable | Required | Description | Where to Get |
|----------|----------|-------------|--------------|
| `GEMINI_API_KEY` | ✅ Yes | For image analysis & chat | [Google AI Studio](https://aistudio.google.com/app/apikey) |

**Setup Steps:**
1. Visit [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key to your .env.local

**Free Tier Limits:**
- 60 requests per minute
- 1,500 requests per day
- Sufficient for development and small-scale production

---

## Optional Variables (Recommended)

### 🔄 Fallback AI - OpenRouter

| Variable | Required | Description | Where to Get |
|----------|----------|-------------|--------------|
| `OPENROUTER_API_KEY` | 🔶 Optional | Fallback when Gemini fails | [OpenRouter Keys](https://openrouter.ai/keys) |

**Why use it?**
- Provides fallback when Gemini is down
- Access to multiple AI models
- Free tier available

### 🔍 Government Schemes - Perplexity AI

| Variable | Required | Description | Where to Get |
|----------|----------|-------------|--------------|
| `PERPLEXITY_API_KEY` | 🔶 Optional | For real-time scheme search | [Perplexity Settings](https://www.perplexity.ai/settings/api) |

**Use Case:**
- Search government agricultural schemes
- Get latest MSP updates
- Find subsidy information

**Free Tier:** 100 queries/day

---

## Development vs Production

### Local Development (.env.local)
\`\`\`bash
# Use localhost URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/auth/callback
NODE_ENV=development
\`\`\`

### Production (Vercel Dashboard)
\`\`\`bash
# Use your actual domain
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
# Don't set DEV_SUPABASE_REDIRECT_URL in production
\`\`\`

---

## Security Best Practices

### ✅ DO:
- Keep `.env.local` out of git (already in .gitignore)
- Use `NEXT_PUBLIC_` prefix ONLY for variables that are safe to expose to browsers
- Store sensitive keys (SERVICE_ROLE, SECRET) without `NEXT_PUBLIC_` prefix
- Rotate API keys regularly
- Use different keys for development and production

### ❌ DON'T:
- Commit .env files to git
- Share API keys in chat/email
- Use production keys in development
- Expose service role keys to the browser
- Hardcode API keys in source code

---

## Verification Checklist

After setting up your environment variables, verify everything works:

1. **Database Connection:**
   \`\`\`bash
   # Run the app and check if you can see data
   npm run dev
   \`\`\`
   Visit: http://localhost:3000/dashboard

2. **AI Features:**
   - Upload an image in the camera page
   - Chat with Kisaan Mitra
   - Both should work without errors

3. **Check Console:**
   Look for these messages (should NOT appear):
   - ❌ "Gemini API key not configured"
   - ❌ "Supabase client error"
   - ❌ "Database connection failed"

---

## Common Issues & Solutions

### Issue: "API key not configured"
**Solution:** Make sure you've copied .env.example to .env.local and filled in the values

### Issue: "Supabase client error"
**Solution:** Verify your Supabase URL and keys are correct. Check for extra spaces.

### Issue: Changes not reflecting
**Solution:** Restart your dev server after changing environment variables

### Issue: "Rate limit exceeded"
**Solution:** 
- Wait a few minutes (free tier limits)
- Consider upgrading your API plan
- Add OpenRouter as fallback

---

## Environment Variables in v0

**Important Note:** When working in v0 (Next.js runtime):
- .env files are NOT supported
- Use the **Vars** section in the v0 UI sidebar
- Add variables there instead of creating .env files
- They will be available as `process.env.VARIABLE_NAME`

**To add in v0:**
1. Open the left sidebar
2. Click "Vars"
3. Add each variable name and value
4. Save changes

---

## Need Help?

- Supabase Issues: [supabase.com/docs](https://supabase.com/docs)
- Gemini API: [ai.google.dev/docs](https://ai.google.dev/docs)
- OpenRouter: [openrouter.ai/docs](https://openrouter.ai/docs)
- Project Issues: Open a GitHub issue

---

**Last Updated:** December 2024  
**Version:** 1.0
