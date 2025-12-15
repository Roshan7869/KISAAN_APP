# Kisaan Mitra - AI-Powered Agriculture Platform

A comprehensive agriculture platform with AI-powered plant disease diagnosis and multilingual farmer assistance.

## ✨ Features

- **AI Plant Doctor**: Upload plant images and get instant diagnosis using Google Gemini AI
- **Multilingual Support**: Full support for 12 Indian languages including Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, Punjabi, Odia, and Assamese
- **Interactive Chat**: 24x7 AI assistant for farming queries with voice input/output
- **Query-Based Analysis**: Ask specific questions about your plants in your preferred language
- **Visual Disease Detection**: Advanced AI analysis with detailed treatment recommendations
- **Secure Environment**: Centralized API key management with validation tools

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A Google account (for Gemini API)

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Setup Environment Variables

**Option A: Interactive Setup (Recommended)**
\`\`\`bash
npm run setup-env
\`\`\`

**Option B: Manual Setup**
\`\`\`bash
cp .env.example .env.local
\`\`\`

Then edit `.env.local` and add your API keys:
\`\`\`env
# Required: Google Gemini AI API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: OpenRouter for AI fallback
OPENROUTER_API_KEY=your_openrouter_key_here

# Supabase keys are auto-configured via Vercel integration
\`\`\`

### 3. Get Your Gemini API Key (FREE)

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to `.env.local`

**Free Tier Includes:**
- 1,500 requests per day
- 60 requests per minute
- No credit card required

### 4. Validate Configuration

\`\`\`bash
npm run validate-env
\`\`\`

Expected output:
\`\`\`
✅ ALL CHECKS PASSED
All environment variables are properly configured!
\`\`\`

### 5. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to see your application.

### 6. Test API Health

In a new terminal:
\`\`\`bash
npm run check-health
\`\`\`

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - 5-minute setup guide
- **[API_KEYS_AUDIT.md](./API_KEYS_AUDIT.md)** - Complete API key documentation
- **[SECURITY_GUIDE.md](./SECURITY_GUIDE.md)** - Security best practices
- **[ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md)** - Detailed environment setup

## 🎯 Usage

### Camera Page (AI Plant Doctor)

1. Navigate to the "Diagnose" page
2. Select your preferred language from the dropdown
3. Capture or upload a plant image
4. Write your specific question (or use the default query)
5. Click "Analyze with AI" to get instant diagnosis
6. View detailed results in your selected language

### Chat Floater (Kisaan Mitra AI)

1. Click the floating AI button in the bottom-right corner
2. Welcome message in Hindi: "आपकी खेती से जुड़े किसी भी सवाल में मदद के लिए मैं यहां हूं। फसल, कीट, खाद, मौसम, या सरकारी योजनाओं के बारे में पूछें!"
3. Select your language by clicking the language icon
4. Type your question or upload an image
5. Use voice input (microphone icon) for hands-free interaction
6. Get responses only in your selected language

## 🌍 Multilingual Support

All 12 Indian languages are supported with single-language responses:
- English (English)
- Hindi (हिंदी) - Default
- Tamil (தமிழ்)
- Telugu (తెలుగు)
- Kannada (ಕನ್ನಡ)
- Malayalam (മലയാളം)
- Marathi (मराठी)
- Gujarati (ગુજરાતી)
- Bengali (বাংলা)
- Punjabi (ਪੰਜਾਬੀ)
- Odia (ଓଡ଼ିଆ)
- Assamese (অসমীয়া)

## 🔧 Available Scripts

\`\`\`bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run validate-env     # Validate environment variables
npm run setup-env        # Interactive environment setup
npm run check-health     # Test API connectivity
npm run lint             # Run ESLint
\`\`\`

## 🔌 API Endpoints

### POST `/api/analyze-image`

Analyzes plant images with custom queries.

**Request:**
\`\`\`json
{
  "image": "data:image/jpeg;base64,...",
  "query": "What disease is this?",
  "language": "hi"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "analysis": "Detailed analysis in Hindi...",
  "query": "What disease is this?",
  "language": "hi",
  "languageName": "Hindi (हिंदी)",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
\`\`\`

### POST `/api/assistant`

Chat with AI assistant in any Indian language.

### GET `/api/health`

Check API configuration and service health.

## 🛠️ Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **UI**: Tailwind CSS v4, shadcn/ui components
- **AI**: Google Gemini 1.5 Flash API (primary), OpenRouter (fallback)
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## 🔒 Security

All sensitive data is stored in environment variables:
- ✅ `.env.local` is in `.gitignore`
- ✅ Validation scripts ensure proper configuration
- ✅ Health checks for API connectivity
- ✅ Proper separation of public vs private keys
- ✅ No hardcoded API keys in code

See [SECURITY_GUIDE.md](./SECURITY_GUIDE.md) for best practices.

## 💡 Best Practices

1. **Image Quality**: Use clear, well-lit images for better AI analysis
2. **Specific Questions**: Ask targeted questions for more accurate responses
3. **Language Selection**: Choose your preferred language before asking questions
4. **Voice Features**: Grant microphone permission for voice input functionality
5. **API Limits**: Monitor Gemini usage at https://aistudio.google.com/

## 🐛 Troubleshooting

### "Gemini API key not configured"

**Solution:**
\`\`\`bash
# Check if .env.local exists
ls -la .env.local

# Verify key is set
grep GEMINI_API_KEY .env.local

# Restart dev server
npm run dev
\`\`\`

### Port 3000 already in use

**Solution:**
\`\`\`bash
# Use different port
PORT=3001 npm run dev

# Or kill existing process
lsof -ti:3000 | xargs kill
\`\`\`

### Camera Not Working

- Grant camera permissions in your browser
- Use HTTPS (required for camera access)
- Try the upload option as alternative

### Language Not Displaying Correctly

- Ensure your browser supports international fonts
- Try Chrome (recommended)
- Check if the language code is correct

## 📊 API Usage Limits

### Gemini (Free Tier)
- 1,500 requests/day
- 60 requests/minute
- Monitor at: https://aistudio.google.com/

### Supabase (Free Tier)
- 500MB database
- 2GB bandwidth/month
- Unlimited API requests

## 🚀 Deployment

### Deploy to Vercel

\`\`\`bash
# Connect to Vercel
vercel

# Deploy to production
vercel --prod
\`\`\`

**Important:** Set all environment variables in Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add all keys from `.env.local`
3. Select "Production" environment
4. Save and redeploy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📄 License

MIT License - feel free to use this project for your own applications.

## 🆘 Support

For issues and questions:
1. Check the [documentation](./QUICK_START.md)
2. Run diagnostics: `npm run validate-env`
3. Create an issue in the repository
4. Contact support

---

Built with ❤️ for farmers using cutting-edge AI technology.
