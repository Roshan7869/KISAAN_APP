# Environment Variables Setup Guide

This agriculture platform requires the following environment variables to function properly.

## Required Environment Variables

### 1. GEMINI_API_KEY (Required)

Get your free API key from Google AI Studio:

1. Visit: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the API key

Add to your Vercel project in the "Vars" section (left sidebar):
\`\`\`
GEMINI_API_KEY=your_api_key_here
\`\`\`

### 2. Database (Already Configured)

The following Supabase environment variables are already configured in your project:
- SUPABASE_URL
- SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- POSTGRES_URL

### 3. Optional AI Providers

If you want fallback AI support, you can add:

**OpenRouter (for Amazon Nova fallback):**
1. Visit: https://openrouter.ai/keys
2. Create an account and get an API key
3. Add: `OPENROUTER_API_KEY=your_key_here`

## Setup Instructions

1. **Add GEMINI_API_KEY to Vercel:**
   - Open the left sidebar in v0
   - Click on "Vars" section
   - Add key: `GEMINI_API_KEY`
   - Add value: your API key from Google AI Studio
   - Save

2. **Run Database Scripts:**
   The following SQL scripts need to be executed (they should auto-run):
   - `scripts/002_create_plant_diagnosis.sql` - Creates plant_diagnoses table

3. **Test the Features:**
   - Camera page: Upload plant images and get AI analysis
   - Chat floater: Ask agriculture questions in any Indian language
   - Both features support 10+ Indian languages

## Features Enabled

With proper environment variables, you get:

1. **Multilingual AI Assistant:**
   - Supports Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, Punjabi, and more
   - Responds in the user's selected language
   - Voice input and output support

2. **Plant Disease Detection:**
   - Upload plant images
   - AI-powered analysis using Google Gemini Vision
   - Diagnosis, treatment recommendations, and prevention tips
   - Custom query support in multiple languages

3. **Fallback System:**
   - Primary: Google Gemini (free tier available)
   - Fallback: Amazon Nova via OpenRouter (optional)

## Troubleshooting

**"Gemini API key not configured" error:**
- Make sure you've added GEMINI_API_KEY to the Vars section
- Verify the key is correct by testing it at https://makersuite.google.com

**"Could not find table plant_diagnoses" error:**
- Run the SQL script: `scripts/002_create_plant_diagnosis.sql`
- Check Supabase connection in the Connect section

**AI not responding in selected language:**
- This is now fixed - the system will respond only in the selected language
- Clear browser cache and try again

## Support

If you need help:
1. Check the Vars section has GEMINI_API_KEY
2. Check the Connect section has Supabase integration
3. Run the database scripts from the scripts folder
4. Contact support at vercel.com/help
