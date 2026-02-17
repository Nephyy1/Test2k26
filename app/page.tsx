"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Mail, Youtube, Disc, Zap, Star, Cpu, Speaker } from "lucide-react";
import { Oswald, Permanent_Marker, DM_Sans } from "next/font/google";
import { useRef } from "react";

const oswald = Oswald({ subsets: ["latin"] });
const marker = Permanent_Marker({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const stickers = [
    { text: "NEXT.JS", color: "bg-[#FF0099]", rotate: "rotate-3" },
    { text: "TAV / ELEKTRO", color: "bg-[#00FFFF]", rotate: "-rotate-2" },
    { text: "AUDIO VIDEO", color: "bg-[#FFD700]", rotate: "rotate-6" },
    { text: "C++ / IOT", color: "bg-[#FF3333]", rotate: "-rotate-3" },
    { text: "PREMIERE", color: "bg-[#7CFC00]", rotate: "rotate-12" },
    { text: "REACT", color: "bg-[#FFA500]", rotate: "-rotate-6" },
  ];

  return (
    <main ref={containerRef} className={`min-h-screen bg-[#F2F0E9] text-black overflow-x-hidden ${dmSans.className}`}>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/crushed-paper.png")' }}></div>

      <nav className="fixed top-0 w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center bg-[#F2F0E9]/90 backdrop-blur-sm border-b-4 border-black">
        <div className={`${marker.className} text-2xl md:text-3xl relative`}>
          <span className="relative z-10">NEPHYY<span className="text-[#FF3333]">.</span>DEV</span>
          <span className="absolute -bottom-2 -right-2 w-full h-full bg-[#00FFFF] -z-0 skew-x-12"></span>
        </div>
        
        <div className="flex gap-4">
          <button className="hidden md:block font-bold border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
            PROJECTS
          </button>
          <button className="font-bold border-2 border-black px-4 py-2 bg-[#FFD700] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default">
            STUDENT
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4 overflow-hidden">
        <motion.div style={{ y: yParallax }} className="relative z-10 text-center max-w-5xl mx-auto">
          
          <div className="mb-6 inline-block relative">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#FF3333]/80 -rotate-2 border border-black/10 backdrop-blur-sm"></div>
             <span className={`${marker.className} text-lg md:text-xl px-6 py-2 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase`}>
                SMK N 2 BANYUMAS
             </span>
          </div>

          <h1 className={`${oswald.className} text-[4rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.9] font-bold uppercase tracking-tighter mb-4`}>
            BINTANG <br />
            <span className="relative inline-block px-4 text-white">
              <span className="absolute inset-0 bg-black rotate-2 transform border-4 border-black shadow-[10px_10px_0px_0px_#00FFFF]"></span>
              <span className="relative z-10">"NEPHYY"</span>
            </span>
            <br />
            PRATAMA
          </h1>

          <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-12 bg-white inline-block px-4 py-2 border-2 border-black rotate-1 mt-8">
             Jurusan <span className="text-[#FF0099]">Teknik Audio Video</span> (TAV). <br/>
             Mixing Electronics with Modern Web Tech.
          </p>

          <div className="flex justify-center gap-6 relative z-20">
             {[Github, Instagram, Youtube, Mail].map((Icon, i) => (
               <a key={i} href="#" className="p-4 bg-white border-4 border-black rounded-full hover:bg-[#FFD700] hover:scale-110 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Icon size={28} strokeWidth={2.5} />
               </a>
             ))}
          </div>

        </motion.div>

        <div className="absolute bottom-10 animate-bounce">
            <div className="w-8 h-12 border-4 border-black rounded-full flex justify-center pt-2">
                <div className="w-2 h-2 bg-black rounded-full animate-ping"></div>
            </div>
        </div>
      </section>

      <div className="bg-[#FF0099] py-5 border-y-4 border-black overflow-hidden relative -rotate-1 scale-105 z-20 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center mx-8">
               <span className={`${oswald.className} text-3xl font-black`}>SMKN 2 BANYUMAS • TAV • ELEKTRONIKA • AUDIO VIDEO • 2026 •</span>
               <Cpu className="ml-8" size={32} />
             </div>
          ))}
        </div>
      </div>

      <section id="stack" className="py-24 px-4 bg-white border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className={`${marker.className} text-5xl md:text-7xl mb-16 relative inline-block`}>
                MY GEAR & STACK
                <svg className="absolute -bottom-4 left-0 w-full" height="15" viewBox="0 0 200 15" fill="none">
                    <path d="M2 13C40 3 80 13 120 3C160 13 200 3 200 3" stroke="#00FFFF" strokeWidth="6" strokeLinecap="round"/>
                </svg>
            </h2>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
                {stickers.map((tech, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 0 }}
                        className={`${tech.color} ${tech.rotate} px-6 py-3 md:px-8 md:py-5 border-4 border-black rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] cursor-default`}
                    >
                        <span className={`${oswald.className} text-xl md:text-2xl font-bold`}>{tech.text}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-4">
                <h2 className={`${oswald.className} text-6xl md:text-8xl font-black uppercase`}>
                    School <br/> Projects
                </h2>
                <div className="hidden md:block mb-4">
                    <span className={`${marker.className} text-xl bg-black text-white px-4 py-2 -rotate-2 inline-block`}>LEARNING JOURNEY 👇</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                
                <div className="group relative">
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-10 bg-[#FFD700]/70 rotate-[-2deg] z-20 border-l border-r border-white/30 backdrop-blur-[1px]"></div>
                   
                   <div className="bg-white border-4 border-black p-4 pb-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="h-64 bg-neutral-800 mb-6 border-2 border-black flex items-center justify-center overflow-hidden relative">
                         <div className="absolute inset-0 bg-[#FF0099] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                         <Cpu size={64} className="text-white" />
                      </div>
                      
                      <div className="flex justify-between items-start mb-4">
                          <h3 className={`${oswald.className} text-4xl font-bold uppercase`}>IoT Controller</h3>
                          <ArrowUpRight size={32} className="border-2 border-black rounded-full p-1 bg-[#00FFFF] hover:bg-black hover:text-white transition-colors"/>
                      </div>
                      <p className="text-lg font-bold text-gray-700 leading-relaxed mb-6">
                          Prototype sistem kontrol berbasis Web & Arduino. Tugas praktik sekolah jurusan TAV.
                      </p>
                      <div className="flex gap-2">
                          <span className="px-3 py-1 bg-black text-white text-sm font-bold">C++</span>
                          <span className="px-3 py-1 bg-gray-200 border-2 border-black text-sm font-bold">ARDUINO</span>
                      </div>
                   </div>
                </div>

                <div className="group relative md:mt-24">
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-10 bg-[#FF3333]/70 rotate-[2deg] z-20 border-l border-r border-white/30 backdrop-blur-[1px]"></div>
                   
                   <div className="bg-white border-4 border-black p-4 pb-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="h-64 bg-neutral-800 mb-6 border-2 border-black flex items-center justify-center relative">
                         <Speaker size={64} className="text-white animate-pulse" />
                      </div>
                      
                      <div className="flex justify-between items-start mb-4">
                          <h3 className={`${oswald.className} text-4xl font-bold uppercase`}>Audio Visualizer</h3>
                          <ArrowUpRight size={32} className="border-2 border-black rounded-full p-1 bg-[#7CFC00] hover:bg-black hover:text-white transition-colors"/>
                      </div>
                      <p className="text-lg font-bold text-gray-700 leading-relaxed mb-6">
                          Eksperimen visualisasi gelombang suara menggunakan Web Audio API dan Canvas.
                      </p>
                      <div className="flex gap-2">
                          <span className="px-3 py-1 bg-black text-white text-sm font-bold">JS</span>
                          <span className="px-3 py-1 bg-gray-200 border-2 border-black text-sm font-bold">CANVAS</span>
                      </div>
                   </div>
                </div>

            </div>
        </div>
      </section>

      <footer className="bg-black text-[#F2F0E9] py-20 px-4 md:px-12 border-t-8 border-[#FFD700] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF0099] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
           <h2 className={`${oswald.className} text-[3.5rem] md:text-[6rem] leading-none mb-8 uppercase`}>
             Still Learning <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#7CFC00]">Everyday.</span>
           </h2>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
              <a href="#" className="group relative inline-block">
                 <div className="absolute inset-0 bg-[#FF3333] translate-x-2 translate-y-2 border-2 border-white group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                 <div className="relative border-2 border-white bg-black px-8 py-4 text-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Let's Connect
                 </div>
              </a>
           </div>

           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-500">
              <p>© 2026 NEPHYY / BINTANG PUTRA PRATAMA.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                 <a href="#" className="hover:text-white">INSTAGRAM</a>
                 <a href="#" className="hover:text-white">GITHUB</a>
                 <a href="#" className="hover:text-white">TIKTOK</a>
              </div>
           </div>
        </div>
      </footer>
    </main>
  );
}
