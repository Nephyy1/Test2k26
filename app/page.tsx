"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Mail, Youtube, Gamepad2, Music, Palette, BookOpen, AlertTriangle } from "lucide-react";
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

  // Sticker skill teknis
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
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/crushed-paper.png")' }}></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center bg-[#F2F0E9]/90 backdrop-blur-sm border-b-4 border-black">
        <div className={`${marker.className} text-2xl md:text-3xl relative`}>
          <span className="relative z-10">NEPHYY<span className="text-[#FF3333]">.</span>DEV</span>
          <span className="absolute -bottom-2 -right-2 w-full h-full bg-[#00FFFF] -z-0 skew-x-12"></span>
        </div>
        
        <div className="flex gap-4">
          <button className="hidden md:block font-bold border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
            PROJECTS
          </button>
          <div className="font-bold border-2 border-black px-4 py-2 bg-[#FFD700] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            ONLINE
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-10 px-4 overflow-hidden">
        <motion.div style={{ y: yParallax }} className="relative z-10 text-center max-w-6xl mx-auto">
          
          <div className="mb-8 inline-block relative">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-10 bg-[#FF3333]/80 -rotate-2 border border-black/10 backdrop-blur-sm"></div>
             <span className={`${marker.className} text-lg md:text-xl px-6 py-2 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest`}>
                STUDENT • 16 Y.O • IDN
             </span>
          </div>

          <h1 className={`${oswald.className} text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-bold uppercase tracking-tighter mb-6 relative`}>
            BINTANG <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800">PUTRA</span> <br />
            PRATAMA
            
            {/* Alias Badge */}
            <div className="absolute top-0 right-0 md:top-4 md:-right-12 rotate-[15deg]">
              <span className={`${marker.className} text-white text-2xl md:text-4xl bg-[#FF0099] px-4 py-1 border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                aka NEPHYY
              </span>
            </div>
          </h1>

          <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto mb-12 bg-white inline-block px-6 py-3 border-4 border-black -rotate-1 mt-4 shadow-[8px_8px_0px_0px_#00FFFF]">
             Jurusan <span className="text-[#FF0099] bg-black px-1">TAV</span> (Elektronika/Audio Video) di SMKN 2 Banyumas. <br/>
             <span className="text-sm md:text-lg opacity-70 italic mt-2 block font-normal border-t-2 border-black/20 pt-2">
                "Mixing Solder Fumes with React Components"
             </span>
          </p>

          <div className="flex justify-center gap-4 md:gap-6 relative z-20 flex-wrap">
             {[Github, Instagram, Youtube, Mail].map((Icon, i) => (
               <a key={i} href="#" className="p-3 md:p-4 bg-white border-4 border-black rounded-full hover:bg-[#FFD700] hover:scale-110 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Icon size={24} strokeWidth={2.5} />
               </a>
             ))}
          </div>

        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[#FF0099] py-5 border-y-4 border-black overflow-hidden relative -rotate-1 scale-105 z-20 text-white shadow-xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center mx-8">
               <span className={`${oswald.className} text-3xl font-black`}>JKT48 FAN • GAMER • CODER • ARTIST • H2H •</span>
               <Gamepad2 className="ml-8" size={32} />
             </div>
          ))}
        </div>
      </div>

      {/* PERSONAL STATS SECTION (NEW) */}
      <section className="py-20 px-4 bg-white border-b-4 border-black relative pattern-grid-lg">
        <div className="max-w-5xl mx-auto">
           <div className="flex flex-col md:flex-row gap-8 items-center">
              
              {/* Kiri: Teks Judul */}
              <div className="w-full md:w-1/3 text-center md:text-left">
                  <h2 className={`${marker.className} text-6xl rotate-[-5deg] leading-none mb-4`}>
                    WHO IS <br/> <span className="text-[#FF3333]">HE?</span>
                  </h2>
                  <div className="w-20 h-20 bg-black rounded-full text-white flex items-center justify-center font-black text-3xl border-4 border-[#FFD700] mx-auto md:mx-0 animate-bounce">
                    16
                  </div>
              </div>

              {/* Kanan: Kotak Hobi & Minat */}
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Hobbies Card */}
                  <div className="bg-[#F2F0E9] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                     <div className="absolute -top-3 -left-3 bg-[#00FFFF] border-2 border-black px-3 font-bold text-sm">HOBBIES</div>
                     <ul className="space-y-3 font-bold text-lg mt-2">
                        <li className="flex items-center gap-3"><Palette size={20} /> DRAWING</li>
                        <li className="flex items-center gap-3"><BookOpen size={20} /> BACA BUKU</li>
                        <li className="flex items-center gap-3"><Youtube size={20} /> NONTON FILM</li>
                        <li className="flex items-center gap-3 border-b-2 border-black pb-1 w-fit">CODING (Of course)</li>
                     </ul>
                  </div>

                  {/* Likes/Favorites Card */}
                  <div className="bg-black text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#FFD700] relative">
                     <div className="absolute -top-3 -right-3 bg-[#FF0099] text-white border-2 border-white px-3 font-bold text-sm rotate-3">FAVORITES</div>
                     
                     <div className="mt-2 space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                           <span className="font-bold flex gap-2"><Music/> MUSIC</span>
                           <span className="font-black text-[#FF0099]">JKT48</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                           <span className="font-bold flex gap-2"><Gamepad2/> GAMES</span>
                           <div className="text-right text-sm">
                              <div className="text-[#FFD700]">PUBG MOBILE</div>
                              <div className="text-[#00FFFF]">MOBILE LEGENDS</div>
                           </div>
                        </div>
                        <div className="flex items-center justify-between">
                           <span className="font-bold">GENRE</span>
                           <span className="font-black text-gray-400">H2H</span>
                        </div>
                     </div>
                  </div>

              </div>
           </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 px-4 bg-[#00FFFF] border-b-4 border-black">
         <div className="max-w-4xl mx-auto text-center">
            <h3 className={`${oswald.className} text-4xl mb-8 font-black bg-white inline-block px-4 border-2 border-black`}>TECH ARSENAL</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {stickers.map((tech, index) => (
                    <div key={index} className={`${tech.color} ${tech.rotate} px-4 py-2 border-2 border-black font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform cursor-default`}>
                        {tech.text}
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 px-4 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-4">
                <h2 className={`${oswald.className} text-5xl md:text-8xl font-black uppercase`}>
                    Project <br/> <span className="text-[#FF0099]">Templates</span>
                </h2>
                <div className="hidden md:block mb-4">
                    <span className={`${marker.className} text-xl bg-[#FF3333] text-white px-4 py-2 -rotate-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                       NOT REAL PROJECTS 👇
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Template Project 1 */}
                <div className="group relative opacity-90 hover:opacity-100 transition-opacity">
                   {/* TEMPLATE STAMP */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                      <div className={`${marker.className} text-4xl text-[#FF0099] border-4 border-[#FF0099] p-2 -rotate-12 opacity-80 border-double`}>
                        TEMPLATE
                      </div>
                   </div>

                   <div className="bg-white border-4 border-black p-4 pb-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="h-64 bg-gray-100 mb-6 border-2 border-black flex items-center justify-center overflow-hidden relative grayscale group-hover:grayscale-0 transition-all">
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] opacity-20"></div>
                         <AlertTriangle size={64} className="text-gray-400" />
                      </div>
                      
                      <div className="flex justify-between items-start mb-4">
                          <h3 className={`${oswald.className} text-4xl font-bold uppercase`}>IoT Dashboard</h3>
                          <div className="border-2 border-black px-2 text-xs font-bold bg-yellow-200">CONCEPT</div>
                      </div>
                      <p className="text-lg font-bold text-gray-700 leading-relaxed mb-6">
                          [TEMPLATE DESCRIPTION] Sistem monitoring suhu ruangan menggunakan ESP32 dan Next.js.
                      </p>
                      <div className="flex gap-2">
                          <span className="px-3 py-1 bg-black text-white text-sm font-bold">C++</span>
                          <span className="px-3 py-1 bg-white border-2 border-black text-sm font-bold">MQTT</span>
                      </div>
                   </div>
                </div>

                {/* Template Project 2 */}
                <div className="group relative opacity-90 hover:opacity-100 transition-opacity md:mt-12">
                   {/* TEMPLATE STAMP */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                      <div className={`${marker.className} text-4xl text-[#FF0099] border-4 border-[#FF0099] p-2 -rotate-12 opacity-80 border-double`}>
                        TEMPLATE
                      </div>
                   </div>

                   <div className="bg-white border-4 border-black p-4 pb-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="h-64 bg-gray-100 mb-6 border-2 border-black flex items-center justify-center overflow-hidden relative grayscale group-hover:grayscale-0 transition-all">
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] opacity-20"></div>
                         <AlertTriangle size={64} className="text-gray-400" />
                      </div>
                      
                      <div className="flex justify-between items-start mb-4">
                          <h3 className={`${oswald.className} text-4xl font-bold uppercase`}>Anime List App</h3>
                          <div className="border-2 border-black px-2 text-xs font-bold bg-yellow-200">CONCEPT</div>
                      </div>
                      <p className="text-lg font-bold text-gray-700 leading-relaxed mb-6">
                          [TEMPLATE DESCRIPTION] Katalog anime sederhana menggunakan Jikan API (MyAnimeList).
                      </p>
                      <div className="flex gap-2">
                          <span className="px-3 py-1 bg-black text-white text-sm font-bold">API</span>
                          <span className="px-3 py-1 bg-white border-2 border-black text-sm font-bold">REACT</span>
                      </div>
                   </div>
                </div>

            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-[#F2F0E9] py-16 px-4 md:px-12 border-t-8 border-[#FFD700]">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className={`${oswald.className} text-[3rem] md:text-[5rem] leading-none mb-8 uppercase`}>
             Future <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#7CFC00]">Engineer.</span>
           </h2>
           
           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-500">
              <p>© 2026 BINTANG PUTRA PRATAMA (NEPHYY).</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                 <a href="#" className="hover:text-[#FF0099] transition-colors">INSTAGRAM</a>
                 <a href="#" className="hover:text-[#FF0099] transition-colors">GITHUB</a>
                 <a href="#" className="hover:text-[#FF0099] transition-colors">TIKTOK</a>
              </div>
           </div>
        </div>
      </footer>
    </main>
  );
}
