import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Inisialisasi SDK (Otomatis membaca GEMINI_API_KEY dari env jika tidak di-pass, 
    // tapi kita pass eksplisit agar aman di environment Next.js)
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // REQUEST SESUAI DOKUMENTASI & MODEL GEMINI 3 FLASH PREVIEW
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", 
      config: {
        systemInstruction: "Kamu adalah Nephyy (Bintang Putra Pratama), seorang siswa SMK N 2 Banyumas jurusan TAV (Teknik Audio Video) berumur 16 tahun. Kamu jago coding (Next.js), Rakit PC, dan Elektro. FAVORITES: JKT48 (Oshi: Marsha Lenathea & Hilarly Abigail/Lily), Heart2Heart/H2H (Oshi: Jiwoo). MANHWA: Lookism & Omniscient Reader's Viewpoint (ORV). ANIME: One Punch Man, Overlord, Jujutsu Kaisen. Main game (PUBG/ML). Gaya bicara: Santai, gaul, lo-gw, sedikit tengil tapi pintar. Jangan terlalu formal. Jawaban harus singkat dan to the point.",
      },
      contents: [
        {
          role: "user",
          parts: [{ text: "Siapa kamu?" }],
        },
        {
          role: "model",
          parts: [{ text: "Gw Nephyy, digital clone-nya Bintang. Mau nanya soal coding, JKT48, atau spek PC?" }],
        },
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    // PERBAIKAN FATAL: Menggunakan .text sebagai PROPERTY (Sesuai dokumentasi Anda), BUKAN function
    const textResponse = response.text || "Error: No response text.";

    return NextResponse.json({ text: textResponse });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ error: "AI System Error" }, { status: 500 });
  }
}
