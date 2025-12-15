<p align="center">
  <img src="assets/dashboard-screenshot.png" alt="Kisaan Mitra Dashboard" width="100%"/>
</p>

<h1 align="center">🌾 Kisaan Mitra - AI Agriculture Platform</h1>

<p align="center">
  <strong>Empowering Indian Farmers with AI-Powered Agricultural Solutions</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Gemini_AI-Powered-4285F4?style=for-the-badge&logo=google" alt="Gemini AI"/>
</p>

---

## 📖 About

**Kisaan Mitra** (किसान मित्र - Farmer's Friend) is a comprehensive, AI-powered agriculture platform designed specifically for Indian farmers. It brings together crop diagnosis, expert assistance, market insights, government schemes, and multilingual support—all in one place to help farmers make informed decisions, increase profits, and adopt modern practices.

---

## ✨ Features

### 🔬 AI Plant Doctor
Upload plant images for instant disease diagnosis using Google Gemini AI with detailed treatment recommendations in your preferred language.

### 🌐 Multilingual Support (12 Languages)
| Language | Native | Language | Native |
|----------|--------|----------|--------|
| English | English | Hindi | हिंदी |
| Tamil | தமிழ் | Telugu | తెలుగు |
| Kannada | ಕನ್ನಡ | Malayalam | മലയാളം |
| Marathi | मराठी | Gujarati | ગુજરાતી |
| Bengali | বাংলা | Punjabi | ਪੰਜਾਬੀ |
| Odia | ଓଡ଼ିଆ | Assamese | অসমীয়া |

### 🤖 Interactive AI Assistant
24/7 chat with voice input/output for farming queries including:
- Crop inputs and recommendations
- Profit calculations
- Solar-dried products
- Government schemes

### 📋 Government Schemes
Latest agricultural schemes with AI-fetched details:
- **PM-KISAN** - ₹6,000/year income support
- **PMFBY** - Crop insurance
- **Copra MSP 2026** - Minimum support prices
- And many more...

### 📰 Latest Agri News
Real-time updates on market changes, weather advisories, and policy announcements.

### 🧮 Input Calculator
AI suggestions for seeds, pesticides, fertilizers, and profitable crops (including solar-dried powders for higher returns).

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+
- **Google Account** (for Gemini API key)

### 1️⃣ Clone & Install

```bash
git clone https://github.com/Roshan7869/KISAAN_APP.git
cd KISAAN_APP/frontend
npm install
```

### 2️⃣ Setup Environment Variables

**Option A: Interactive Setup (Recommended)**
```bash
npm run setup-env
```

**Option B: Manual Setup**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
# Required
GEMINI_API_KEY=your_gemini_api_key_here

# Optional (fallback)
OPENROUTER_API_KEY=your_openrouter_key_here
```

### 3️⃣ Get Free Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in → Click "Create API Key"
3. Copy and paste into `.env.local`

> **Free Tier Benefits:**
> - ✅ 1,500 requests/day
> - ✅ 60 requests/minute
> - ✅ No credit card required

### 4️⃣ Validate & Run

```bash
# Validate configuration
npm run validate-env

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS v4, shadcn/ui |
| **AI Primary** | Google Gemini 1.5 Flash |
| **AI Fallback** | OpenRouter (Amazon Nova) |
| **Real-time Search** | Perplexity AI |
| **Database** | Supabase (PostgreSQL) |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
KISAAN_APP/
├── frontend/                 # Next.js application
│   ├── app/                  # App router pages
│   │   ├── (dashboard)/      # Dashboard routes
│   │   └── api/              # API routes
│   ├── components/           # React components
│   │   ├── kisaan-mitra/     # AI chat components
│   │   └── ui/               # shadcn/ui components
│   └── lib/
│       └── ai/               # LLM integrations
│           ├── gemini.ts     # Google Gemini
│           ├── openrouter.ts # OpenRouter fallback
│           └── perplexity.ts # Real-time search
└── backend/                  # Express.js server (optional)
    └── index.js              # Backend API
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run validate-env` | Check configuration |
| `npm run setup-env` | Interactive setup |
| `npm run check-health` | API connectivity test |
| `npm run lint` | Code quality check |

---

## 🎯 How to Use

### 🔬 AI Plant Doctor
1. Navigate to **Diagnose** page
2. Select your preferred language
3. Capture or upload a plant image
4. Ask a specific question (or use default)
5. Get instant diagnosis + treatment in your language

### 💬 Kisaan Mitra AI Assistant
1. Click the floating chat button (bottom-right)
2. Select your language
3. Type or speak your query
4. Receive expert advice instantly

> **Example queries:**
> - "सौर सुखाए हुए प्याज पाउडर से कितना मुनाफा?"
> - "What fertilizers for wheat in winter?"
> - "PM-KISAN योजना की पात्रता क्या है?"

### 📋 Government Schemes
1. View top schemes on dashboard
2. Click **View All** for complete list
3. Select any scheme for AI-fetched details (procedure, eligibility, subsidies)

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

Add environment variables in **Vercel Dashboard** → Settings → Environment Variables.

---

## 🔒 Security

- ✅ All API keys stored in environment variables
- ✅ `.env.local` excluded from git
- ✅ Built-in validation and health checks
- ✅ No hardcoded secrets

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - free to use and modify.

---

<p align="center">
  <strong>Built with ❤️ for Indian farmers using cutting-edge AI technology</strong>
  <br/>
  <em>Empowering agriculture, one query at a time. 🌾🇮🇳</em>
</p>

<p align="center">
  <a href="https://github.com/Roshan7869/KISAAN_APP">⭐ Star this repo</a> •
  <a href="https://github.com/Roshan7869/KISAAN_APP/issues">🐛 Report Bug</a> •
  <a href="https://github.com/Roshan7869/KISAAN_APP/issues">✨ Request Feature</a>
</p>
