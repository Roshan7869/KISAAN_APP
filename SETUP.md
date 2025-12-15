# 🌾 Kisaan Mitra Setup Guide

Complete setup instructions for the AI-powered agriculture platform with multilingual support.

---

## 📋 Prerequisites

- Node.js 18+ installed
- A Vercel account (for deployment)
- Google account (for Gemini API)
- Supabase project (already configured)

---

## 🚀 Quick Start

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

This will install all required packages including:
- `@google/generative-ai` - Google Gemini AI SDK
- Next.js 16 with React 19
- Supabase client libraries
- UI components (shadcn/ui)

### 2. Get Your Google Gemini API Key

#### Step-by-Step Instructions:

1. **Visit Google AI Studio**
   - Go to [https://aistudio.google.com/](https://aistudio.google.com/)
   - Sign in with your Google account

2. **Create API Key**
   - Click on **"Get API Key"** in the left sidebar
   - Click **"Create API Key"**
   - Select **"Create API key in new project"** (recommended)
   - Copy the generated API key

3. **Important Notes**
   - ✅ **Free tier includes**: 1,500 requests per day
   - ✅ **No credit card required**
   - ✅ **Perfect for development and small-scale production**
   - ⚠️ **Keep your API key secret** - never commit it to git

### 3. Configure Environment Variables

You have two options:

#### Option A: Local Development (.env.local file)

Create a `.env.local` file in your project root:

\`\`\`env
# Google Gemini AI API Key (REQUIRED)
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase (Already configured in your Vercel project)
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

#### Option B: Vercel Dashboard (For deployment)

1. Go to your Vercel project
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your Gemini API key
   - **Environments**: Production, Preview, Development (check all)

### 4. Set Up Database Tables

Run the SQL migration script to create necessary tables:

**Option A: From v0 Interface**
- The script `scripts/001-create-analysis-table.sql` will run automatically when needed

**Option B: Manual Setup in Supabase**
1. Go to your Supabase dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `scripts/001-create-analysis-table.sql`
4. Click **Run**

This creates:
- `analysis_history` table for storing AI analysis results
- Row Level Security (RLS) policies for data protection
- Indexes for optimal performance

### 5. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to see your application running!

---

## 🎯 Features Overview

### 1. AI Plant Doctor (`/camera`)

**What it does:**
- Upload or capture plant images
- Ask specific questions in any Indian language
- Get detailed AI-powered diagnosis and treatment recommendations

**How to use:**
1. Navigate to "Diagnose" page
2. Select your preferred language (12 Indian languages supported)
3. Capture or upload a plant image
4. Write your question (default query provided)
5. Click "Analyze with AI"
6. View comprehensive results in your language

**Supported queries:**
- "What disease is this?"
- "How do I treat this problem?"
- "What nutrients is this plant lacking?"
- "Is this pest harmful?"

### 2. Kisaan Mitra AI Chat (Floating Button)

**What it does:**
- 24x7 AI farming assistant
- Voice input and output support
- Image analysis in chat
- Multilingual conversations

**How to use:**
1. Click the floating AI button (bottom-right)
2. Select your language (language icon in header)
3. Type or speak your question
4. Upload images for instant analysis
5. Get voice responses (toggle speaker icon)

**Example questions:**
- "मेरे टमाटर की फसल में पत्ते पीले हो रहे हैं, क्या करूं?"
- "What is the best time to plant wheat?"
- "ಗೊಬ್ಬರ ಯಾವಾಗ ಹಾಕಬೇಕು?"

---

## 🌍 Multilingual Support

### Supported Languages

| Language | Code | Native Name |
|----------|------|-------------|
| English | `en` | English |
| Hindi | `hi` | हिंदी |
| Tamil | `ta` | தமிழ் |
| Telugu | `te` | తెలుగు |
| Kannada | `kn` | ಕನ್ನಡ |
| Malayalam | `ml` | മലയാളം |
| Marathi | `mr` | मराठी |
| Gujarati | `gu` | ગુજરાતી |
| Bengali | `bn` | বাংলা |
| Punjabi | `pa` | ਪੰਜਾਬੀ |
| Odia | `or` | ଓଡ଼ିଆ |
| Assamese | `as` | অসমীয়া |

### How It Works

1. **Automatic Detection**: The AI detects the language you're using
2. **Language Selection**: Choose your preferred language from dropdown
3. **Consistent Responses**: AI responds in the same language you use
4. **Voice Support**: Speech recognition and synthesis for Indian languages

---

## 🔧 Troubleshooting

### Issue: "Gemini API key not configured" error

**Solution:**
1. Verify `GEMINI_API_KEY` is set in your environment variables
2. Restart your development server after adding the key
3. Check if the key is valid at [Google AI Studio](https://aistudio.google.com/)

### Issue: Camera not working

**Solutions:**
1. **Grant Permissions**: Allow camera access in your browser
2. **Use HTTPS**: Camera requires secure connection (localhost is OK)
3. **Try Upload**: Use the "Upload Image" button as alternative

### Issue: API quota exceeded

**Details:**
- Free tier: 1,500 requests/day
- Resets at midnight PST

**Solutions:**
1. Wait for quota reset
2. Upgrade to paid plan at [Google AI Studio](https://aistudio.google.com/)
3. Implement rate limiting in your app

### Issue: Language not displaying correctly

**Solutions:**
1. Use modern browser (Chrome, Firefox, Safari)
2. Ensure proper font support for Indian languages
3. Check browser language settings

### Issue: Voice features not working

**Solutions:**
1. Grant microphone permission
2. Use supported browser (Chrome works best)
3. Check system audio settings

---

## 📊 API Endpoints

### POST `/api/analyze-image`

Analyzes plant images with custom queries.

**Request:**
\`\`\`json
{
  "image": "data:image/jpeg;base64,/9j/4AAQ...",
  "query": "What disease is this plant suffering from?",
  "language": "hi"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "analysis": "यह पौधा पर्णदाग (Leaf Spot) बीमारी से प्रभावित है...",
  "query": "What disease is this plant suffering from?",
  "language": "hi",
  "languageName": "Hindi (हिंदी)",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
\`\`\`

### POST `/api/assistant`

Chat with Kisaan Mitra AI assistant.

**Request:**
\`\`\`json
{
  "messages": [
    {"role": "user", "content": "मेरे गेहूं में कीड़े लग गए हैं"}
  ],
  "language": "hi"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "message": "किसान भाई, गेहूं में कीड़े की समस्या आम है...",
  "language": "hi",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
\`\`\`

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js

3. **Add Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add `GEMINI_API_KEY`
   - Add other required variables

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app is live! 🎉

### Alternative: Deploy from v0

1. Click "Publish" button in v0
2. Connect to Vercel if not already connected
3. Add environment variables in Vercel dashboard
4. Deployment happens automatically

---

## 📈 Best Practices

### For Farmers

1. **Clear Images**: Take photos in good lighting
2. **Specific Questions**: Be detailed about your problem
3. **Use Your Language**: Don't hesitate to use your native language
4. **Follow Up**: Ask clarifying questions if needed

### For Developers

1. **API Key Security**: Never commit API keys to git
2. **Error Handling**: Always handle API failures gracefully
3. **Rate Limiting**: Implement request throttling
4. **Caching**: Cache common queries to reduce API calls
5. **Monitoring**: Track API usage and errors

---

## 📝 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | ✅ Yes | Google Gemini AI API key |
| `SUPABASE_URL` | ✅ Yes | Supabase project URL |
| `SUPABASE_ANON_KEY` | ✅ Yes | Supabase anonymous key |
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ Yes | Public Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ Yes | Public Supabase key |

---

## 🆘 Getting Help

- **Issues**: Create an issue on GitHub
- **Documentation**: Check README.md
- **Community**: Join our Discord server
- **Email**: support@kisaanmitra.com

---

## 📄 License

MIT License - Free to use for your projects

---

Built with ❤️ for Indian farmers using Google Gemini AI 🌾
