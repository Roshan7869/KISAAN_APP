import { type NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

export const runtime = "nodejs"
export const maxDuration = 60

// Language mapping for Indian languages
const LANGUAGE_MAP: Record<string, string> = {
  en: "English",
  hi: "Hindi (हिंदी)",
  ta: "Tamil (தமிழ்)",
  te: "Telugu (తెలుగు)",
  kn: "Kannada (ಕನ್ನಡ)",
  ml: "Malayalam (മലയാളം)",
  mr: "Marathi (मराठी)",
  gu: "Gujarati (ગુજરાતી)",
  bn: "Bengali (বাংলা)",
  pa: "Punjabi (ਪੰਜਾਬੀ)",
  or: "Odia (ଓଡ଼ିଆ)",
  as: "Assamese (অসমীয়া)",
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { image, query, language = "en" } = body

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 })
    }

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 })
    }

    // Check for Gemini API key
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Gemini API key not configured. Please add GEMINI_API_KEY to your environment variables.",
        },
        { status: 500 },
      )
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    // Extract base64 data and mime type from data URL
    const matches = image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)
    if (!matches || matches.length !== 3) {
      return NextResponse.json({ error: "Invalid image format" }, { status: 400 })
    }

    const mimeType = matches[1]
    const base64Data = matches[2]

    const languageName = LANGUAGE_MAP[language] || "English"
    const prompt = `${query}

Please provide a detailed analysis for farmers, including:
1. Disease/Problem identification (if any)
2. Possible causes
3. Recommended treatments and solutions
4. Prevention tips
5. Additional advice

CRITICAL: Respond ENTIRELY in ${languageName}. Every single word must be in ${languageName}. Do NOT mix languages. Do NOT use English if another language is specified.`

    // Generate content with image
    const result = await model.generateContent([
      { text: prompt },
      {
        inlineData: {
          mimeType,
          data: base64Data,
        },
      },
    ])

    const analysis = result.response.text()

    return NextResponse.json({
      success: true,
      analysis,
      query,
      language,
      languageName,
      timestamp: new Date().toISOString(),
    })
  } catch (error: unknown) {
    console.error("[v0] Error analyzing image:", error)

    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"

    return NextResponse.json(
      {
        error: "Failed to analyze image",
        details: errorMessage,
      },
      { status: 500 },
    )
  }
}
