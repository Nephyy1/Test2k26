import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Inisialisasi SDK Baru
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Menggunakan model terbaru yang support systemInstruction via config
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Menggunakan versi flash terbaru yang stabil
      config: {
        systemInstruction: "Kamu adalah Nephyy (Bintang Putra Pratama), seorang siswa SMK jurusan TAV berumur 16 tahun. Kamu jago coding (Next.js), suka JKT48 (Wota), main game (PUBG/ML), dan bergaya bicara santai, gaul, sedikit tengil tapi pintar. Jangan terlalu formal. Jawaban harus singkat dan to the point.",
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

    return NextResponse.json({ text: response.text() });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ error: "AI Error" }, { status: 500 });
  }
}
