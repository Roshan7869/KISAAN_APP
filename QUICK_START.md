# 🚀 Quick Start Guide

Get your Agriculture Platform running in 5 minutes!

---

## Prerequisites

- Node.js 18+ installed
- A Google account (for Gemini API)
- Git installed

---

## 🏃 Fast Setup (5 Minutes)

### 1. Clone & Install (1 min)

\`\`\`bash
# If not already done
git clone <your-repo-url>
cd agricultureplatformbackend

# Install dependencies
npm install
\`\`\`

### 2. Setup Environment (2 min)

**Option A: Interactive Setup (Recommended)**
\`\`\`bash
npm run setup-env
\`\`\`

Follow the prompts to enter your API keys.

**Option B: Manual Setup**
\`\`\`bash
# Copy template
cp .env.example .env.local

# Edit with your favorite editor
nano .env.local
# or
code .env.local
\`\`\`

Add at minimum:
\`\`\`bash
GEMINI_API_KEY=your_key_here
\`\`\`

**Get Gemini API Key (FREE):**
1. Go to https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key
4. Paste into `.env.local`

### 3. Validate Configuration (1 min)

\`\`\`bash
npm run validate-env
\`\`\`

Expected output:
\`\`\`
✅ ALL CHECKS PASSED
All environment variables are properly configured!
\`\`\`

### 4. Start Development Server (1 min)

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:3000

### 5. Test API Health

In a new terminal:
\`\`\`bash
npm run check-health
\`\`\`

Expected:
\`\`\`
✅ All systems operational!
🚀 Ready to start development
\`\`\`

---

## 🎉 You're Ready!

Your agriculture platform is now running with:
- ✅ AI-powered plant disease detection (Gemini)
- ✅ Multilingual chat assistant (12 Indian languages)
- ✅ Image upload and analysis
- ✅ Database integration (Supabase)

---

## 📱 Test the Features

### 1. Camera/Image Analysis
- Navigate to: http://localhost:3000/camera
- Upload a plant image
- Enter a query in your language
- Select language (Hindi, Tamil, etc.)
- Click "Analyze"

### 2. Chat Assistant (Kisaan Mitra)
- Look for the chat icon in bottom right
- Click to open chat
- Ask questions about farming
- Upload images for analysis

### 3. Dashboard
- Visit: http://localhost:3000/dashboard
- View your analysis history
- See community posts

---

## 🔧 Troubleshooting

### Issue: "GEMINI_API_KEY not configured"

**Solution:**
\`\`\`bash
# Check if .env.local exists
ls -la .env.local

# Verify key is set
grep GEMINI_API_KEY .env.local

# Restart dev server
# Kill with Ctrl+C, then:
npm run dev
\`\`\`

### Issue: "Port 3000 already in use"

**Solution:**
\`\`\`bash
# Use a different port
PORT=3001 npm run dev

# Or kill the process using port 3000
lsof -ti:3000 | xargs kill
\`\`\`

### Issue: Database connection fails

**Solution:**
- Supabase keys should be auto-configured via Vercel
- Check your v0 Vars section
- Or contact support for Supabase setup

---

## 📚 Next Steps

### Customize Your App
1. **Update branding** - Edit `app/layout.tsx` metadata
2. **Add crops** - Update database with local crops
3. **Customize languages** - Edit language options in `camera/page.tsx`

### Add More Features
1. **Weather API** - Add `WEATHER_API_KEY` to `.env.local`
2. **SMS notifications** - Configure SMS service
3. **OpenRouter fallback** - Add `OPENROUTER_API_KEY`

### Deploy to Production
\`\`\`bash
# Connect to Vercel
vercel

# Deploy
vercel --prod
\`\`\`

Don't forget to set environment variables in Vercel dashboard!

---

## 🆘 Need Help?

### Documentation
- [API Keys Audit](./API_KEYS_AUDIT.md) - Where all keys are used
- [Security Guide](./SECURITY_GUIDE.md) - Best practices
- [Environment Setup](./ENVIRONMENT_SETUP.md) - Detailed setup

### Commands Cheatsheet
\`\`\`bash
npm run dev              # Start development
npm run build            # Build for production
npm run start            # Start production server
npm run validate-env     # Check environment variables
npm run setup-env        # Interactive setup
npm run check-health     # Test API connectivity
\`\`\`

### Common Commands
\`\`\`bash
# View logs
npm run dev -- --turbo

# Clear cache
rm -rf .next

# Check for errors
npm run lint
\`\`\`

---

## 🌾 Features Overview

### For Farmers
- 📸 **Plant Disease Detection** - Upload image, get instant diagnosis
- 💬 **AI Assistant** - Ask questions in your language
- 🌍 **Multilingual** - 12 Indian languages supported
- 📊 **History** - Track past analyses and solutions

### For Developers
- ⚡ **Next.js 16** - Latest React framework
- 🤖 **Google Gemini AI** - Cutting-edge vision model
- 🗄️ **Supabase** - PostgreSQL database with auth
- 🎨 **Tailwind CSS** - Modern styling
- 🔒 **Secure** - Environment variable management

---

## 🔒 Security Reminder

- ✅ `.env.local` is in `.gitignore`
- ✅ Never commit API keys to git
- ✅ Use environment variables for all secrets
- ✅ Rotate keys every 90 days

---

## 📊 API Usage Limits

### Gemini (Free Tier)
- 1,500 requests/day
- 60 requests/minute
- Monitor at: https://aistudio.google.com/

### Supabase (Free Tier)
- 500MB database
- 2GB bandwidth/month
- Unlimited API requests

**Tip:** Monitor usage in respective dashboards!

---

**Ready to build?** 🚀

Open http://localhost:3000 and start developing!

For detailed documentation, see the `/docs` folder.
