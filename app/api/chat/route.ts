import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY || "";
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
      systemInstruction: "Kamu adalah Nephyy (Bintang Putra Pratama), seorang siswa SMK jurusan TAV berumur 16 tahun. Kamu jago coding (Next.js), suka JKT48 (Wota), main game (PUBG/ML), dan bergaya bicara santai, gaul, sedikit tengil tapi pintar. Jangan terlalu formal. Jawaban harus singkat dan to the point."
    });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Siapa kamu?" }],
        },
        {
          role: "model",
          parts: [{ text: "Gw Nephyy, digital clone-nya Bintang. Mau nanya soal coding, JKT48, atau spek PC?" }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json({ error: "AI Error" }, { status: 500 });
  }
}
