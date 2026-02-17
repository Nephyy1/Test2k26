"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Mail, Youtube, Gamepad2, Music, ShoppingBag, Atom, Cpu, Globe, Video, Zap, Speaker, Send, MessageSquare, X, Terminal, Loader2, Play, Pause } from "lucide-react";
import { Oswald, Permanent_Marker, DM_Sans, Space_Mono } from "next/font/google";
import { useRef, useState, useEffect } from "react";

const oswald = Oswald({ subsets: ["latin"] });
const marker = Permanent_Marker({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const arsenal = [
    { name: "NEXT.JS", icon: Globe, level: "90%", color: "bg-[#FF0099]", desc: "WEB FRAMEWORK" },
    { name: "REACT", icon: Atom, level: "85%", color: "bg-[#00FFFF]", desc: "UI LIBRARY" },
    { name: "IOT / C++", icon: Cpu, level: "75%", color: "bg-[#FF3333]", desc: "HARDWARE" },
    { name: "PREMIERE", icon: Video, level: "80%", color: "bg-[#7CFC00]", desc: "EDITING" },
    { name: "AUDIO ENG", icon: Speaker, level: "95%", color: "bg-[#FFD700]", desc: "TAV SKILL" },
    { name: "ELEKTRO", icon: Zap, level: "88%", color: "bg-[#FFA500]", desc: "CIRCUITS" },
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
          <a href="#projects" className="hidden md:block font-bold border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
            PROJECTS
          </a>
          <div className="font-bold border-2 border-black px-4 py-2 bg-[#FFD700] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            ONLINE
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-10 px-4 overflow-hidden">
        <motion.div style={{ y: yParallax }} className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="text-center lg:text-left relative z-20 flex-1">
              <div className="mb-6 inline-block relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-40 h-8 bg-[#FF3333] -rotate-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
                <span className={`${marker.className} text-lg md:text-xl px-6 py-2 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest relative block`}>
                    STUDENT • 16 Y.O • IDN
                </span>
              </div>

              <h1 className={`${oswald.className} text-[4rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.85] font-bold uppercase tracking-tighter mb-6`}>
                  BINTANG <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800">PUTRA</span> <br/>
                  PRATAMA
              </h1>
              
              <div className="relative inline-block lg:block">
                  <div className={`${marker.className} text-white text-2xl md:text-3xl bg-[#FF0099] px-6 py-2 border-4 border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] inline-block mb-8`}>
                    aka NEPHYY
                  </div>
              </div>

              <p className="text-lg md:text-xl font-bold max-w-xl mx-auto lg:mx-0 bg-white p-4 border-l-8 border-[#00FFFF] border-y-4 border-r-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                Jurusan <span className="font-black bg-[#FFD700] px-1">TAV</span> (Elektronika/Audio Video). <br/>
                Mixing Solder Fumes with React Components at SMKN 2 Banyumas.
              </p>

               <div className="flex justify-center lg:justify-start gap-4 mt-8">
                  <a href="https://instagram.com/shunsinee.x" target="_blank" className="p-3 bg-white border-4 border-black hover:bg-[#FF0099] hover:text-white hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Instagram size={24} />
                  </a>
                  <a href="https://youtube.com/@minionmerah1945?si=U2QstFwFrCeMO64y" target="_blank" className="p-3 bg-white border-4 border-black hover:bg-[#FF0000] hover:text-white hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Youtube size={24} />
                  </a>
                  <a href="https://t.me/zxeexoxee" target="_blank" className="p-3 bg-white border-4 border-black hover:bg-[#0088cc] hover:text-white hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Send size={24} />
                  </a>
               </div>
          </div>

          <div className="relative w-72 h-80 md:w-96 md:h-[30rem] shrink-0 rotate-3 hover:rotate-0 transition-transform duration-500 z-10 group">
             <div 
                className="absolute inset-0 bg-[#00FFFF] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" 
                style={{ clipPath: "polygon(10% 0, 100% 0, 95% 90%, 5% 100%, 0 15%)" }}
             ></div>
             
             <div 
                className="relative w-full h-full bg-gray-900 grayscale group-hover:grayscale-0 transition-all duration-500 contrast-125 overflow-hidden border-b-4 border-black" 
                style={{ clipPath: "polygon(10% 0, 100% 0, 95% 90%, 5% 100%, 0 15%)" }}
             >
                <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                    alt="Nephyy Profile" 
                    className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
             </div>

             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#FFD700]/90 rotate-[-2deg] backdrop-blur-sm border border-white/20 shadow-sm z-20"></div>
             <div className="absolute bottom-8 -right-4 w-24 h-6 bg-[#FF3333]/90 rotate-[45deg] backdrop-blur-sm border border-white/20 shadow-sm z-20"></div>

             <div className="absolute -bottom-6 -left-6 bg-black text-white p-3 border-4 border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-5deg] z-30">
                <CodeIcon size={24} className="animate-pulse" />
             </div>
          </div>

        </motion.div>
      </section>

      <div className="bg-[#FF0099] py-5 border-y-4 border-black overflow-hidden relative -rotate-1 scale-105 z-20 text-white shadow-xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center mx-8">
               <span className={`${oswald.className} text-3xl font-black`}>WOTA JKT48 • HEART2HEART • GAMER • CODER • ARTIST •</span>
               <Music className="ml-8" size={32} />
             </div>
          ))}
        </div>
      </div>

      <section className="py-24 px-4 bg-white border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto">
           <div className="flex flex-col lg:flex-row gap-12 items-start">
              
              <div className="w-full lg:w-1/3 text-center lg:text-left relative">
                  <h2 className={`${marker.className} text-7xl rotate-[-3deg] leading-none mb-8 relative z-10`}>
                    LEVEL <br/> <span className="text-[#FF3333]">STATS</span>
                  </h2>
                  
                  <div className="relative w-40 h-40 mx-auto lg:mx-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#FFD700] border-4 border-black animate-[spin_10s_linear_infinite]" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}></div>
                    <div className="relative z-10 font-black text-6xl text-black">16</div>
                  </div>
                  <p className="font-bold mt-4 bg-black text-white inline-block px-2 rotate-2">AGE / LEVEL</p>
              </div>

              <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  <div className={`bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative ${spaceMono.className} text-sm`}>
                     <div className="border-b-2 border-dashed border-black pb-4 mb-4 text-center">
                        <div className="flex justify-center mb-2"><ShoppingBag size={32} /></div>
                        <h3 className="text-xl font-bold uppercase tracking-widest">HOBBY_RECEIPT.TXT</h3>
                        <p>NEPHYY STORE - BANYUMAS</p>
                        <p>{new Date().toLocaleDateString()}</p>
                     </div>
                     <ul className="space-y-2 font-bold mb-4">
                        <li className="flex justify-between"><span>ITEM: DRAWING</span> <span>100%</span></li>
                        <li className="flex justify-between"><span>ITEM: CODING</span> <span>100%</span></li>
                        <li className="flex justify-between"><span>ITEM: MOVIE</span> <span>90%</span></li>
                        <li className="flex justify-between"><span>ITEM: READING</span> <span>85%</span></li>
                     </ul>
                     <div className="border-t-2 border-dashed border-black pt-4 text-center text-xs opacity-70">
                        THANK YOU FOR VISITING! <br/> *****
                     </div>
                     
                     <div className="absolute -bottom-4 left-0 w-full h-4 bg-white border-b-4 border-l-4 border-r-4 border-black" style={{ clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)" }}></div>
                  </div>

                  <div className="bg-[#1a1a1a] text-white border-4 border-black p-1 shadow-[8px_8px_0px_0px_#FFD700] relative">
                     <div className="bg-[#2a2a2a] p-4 border-2 border-[#444] h-full flex flex-col justify-between">
                        <div>
                           <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-2">
                              <span className="font-bold text-[#FF0099] animate-pulse">● LIVE</span>
                              <span className="text-xs font-mono">IDOL_PLAYER.EXE</span>
                           </div>
                           
                           <div className="space-y-4">
                              <div className="bg-black p-3 border border-gray-700">
                                 <div className="text-xs text-gray-400 mb-1">CURRENTLY PLAYING IDOLS</div>
                                 <div className="font-black text-xl text-[#00FFFF]">JKT48</div>
                                 <div className="font-black text-xl text-[#FF0099]">HEART2HEART (H2H)</div>
                              </div>

                              <div className="bg-black p-3 border border-gray-700">
                                 <div className="text-xs text-gray-400 mb-1">GAME LOBBY</div>
                                 <div className="flex justify-between items-center">
                                    <span className="font-bold text-[#FFD700]">PUBG MOBILE</span>
                                    <Gamepad2 size={16} />
                                 </div>
                                 <div className="flex justify-between items-center mt-1">
                                    <span className="font-bold text-white">MOBILE LEGENDS</span>
                                    <Gamepad2 size={16} />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="mt-4 flex justify-center gap-4 text-[#00FFFF]">
                           <Pause size={24} fill="cyan" />
                           <Play size={24} />
                        </div>
                     </div>
                  </div>

              </div>
           </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#00FFFF] border-b-4 border-black relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
         
         <div className="max-w-6xl mx-auto text-center relative z-10">
            <h3 className={`${oswald.className} text-5xl mb-12 font-black bg-white inline-block px-8 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase transform -rotate-2`}>
               TECH ARSENAL
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {arsenal.map((tech, index) => (
                    <div 
                        key={index}
                        className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-between h-48 group cursor-default hover:-translate-y-2 transition-transform"
                    >
                        <div className={`p-3 rounded-full border-2 border-black ${tech.color} group-hover:scale-110 transition-transform`}>
                            <tech.icon size={32} className="text-black" />
                        </div>
                        
                        <div className="text-center w-full">
                            <h4 className={`${oswald.className} text-xl font-bold`}>{tech.name}</h4>
                            <p className="text-xs font-bold text-gray-500">{tech.desc}</p>
                        </div>
                        
                        <div className="w-full h-3 bg-gray-200 border-2 border-black rounded-full overflow-hidden mt-2">
                            <div className={`h-full ${tech.color}`} style={{ width: tech.level }}></div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      <section id="projects" className="py-24 px-4 md:px-12 bg-[#F2F0E9]">
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
                
                <div className="group relative opacity-90 hover:opacity-100 transition-opacity">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                      <div className={`${marker.className} text-4xl text-[#FF0099] border-4 border-[#FF0099] p-2 -rotate-12 opacity-80 border-double`}>
                        TEMPLATE
                      </div>
                   </div>

                   <div className="bg-white border-4 border-black p-4 pb-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="h-64 bg-gray-100 mb-6 border-2 border-black flex items-center justify-center overflow-hidden relative grayscale group-hover:grayscale-0 transition-all">
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] opacity-20"></div>
                         <Cpu size={64} className="text-gray-400" />
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

                <div className="group relative opacity-90 hover:opacity-100 transition-opacity md:mt-12">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                      <div className={`${marker.className} text-4xl text-[#FF0099] border-4 border-[#FF0099] p-2 -rotate-12 opacity-80 border-double`}>
                        TEMPLATE
                      </div>
                   </div>

                   <div className="bg-white border-4 border-black p-4 pb-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="h-64 bg-gray-100 mb-6 border-2 border-black flex items-center justify-center overflow-hidden relative grayscale group-hover:grayscale-0 transition-all">
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] opacity-20"></div>
                         <Video size={64} className="text-gray-400" />
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

      <footer className="bg-black text-[#F2F0E9] py-16 px-4 md:px-12 border-t-8 border-[#FFD700]">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className={`${oswald.className} text-[3rem] md:text-[5rem] leading-none mb-8 uppercase`}>
             Future <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#7CFC00]">Engineer.</span>
           </h2>
           
           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-500">
              <p>© 2026 BINTANG PUTRA PRATAMA (NEPHYY).</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                 <a href="https://instagram.com/shunsinee.x" className="hover:text-[#FF0099] transition-colors">INSTAGRAM</a>
                 <a href="https://youtube.com/@minionmerah1945?si=U2QstFwFrCeMO64y" className="hover:text-[#FF0000] transition-colors">YOUTUBE</a>
                 <a href="https://t.me/zxeexoxee" className="hover:text-[#0088cc] transition-colors">TELEGRAM</a>
              </div>
           </div>
        </div>
      </footer>

      <ChatWidget />
    </main>
  );
}

function CodeIcon({size, className}: {size:number, className?:string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    {role: 'model', text: 'Yo! Gw Nephyy AI. Mau nanya apa bro? JKT48? Coding?'}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ message: userMsg })
      });
      
      const data = await res.json();
      setMessages(prev => [...prev, {role: 'model', text: data.text || "Error: AI lagi ngambek."}]);
    } catch (e) {
      setMessages(prev => [...prev, {role: 'model', text: "Connection Lost. Coba lagi nanti."}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] bg-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            <div className="bg-[#FF0099] px-3 py-2 border-b-4 border-black flex justify-between items-center cursor-move">
              <div className="flex items-center gap-2">
                <Terminal size={18} className="text-white" />
                <span className="font-bold text-white tracking-wider">NEPHYY_AI.EXE</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-black text-white hover:bg-white hover:text-black w-6 h-6 flex items-center justify-center border border-white">
                <X size={16} />
              </button>
            </div>

            <div className="h-[350px] bg-[#F2F0E9] p-4 overflow-y-auto space-y-3" ref={scrollRef}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 text-sm font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] ${m.role === 'user' ? 'bg-white text-black' : 'bg-[#00FFFF] text-black'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                   <div className="bg-black text-[#00FFFF] p-2 text-xs font-bold animate-pulse border-2 border-[#00FFFF]">
                     THINKING...
                   </div>
                </div>
              )}
            </div>

            <div className="bg-white p-2 border-t-4 border-black flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type command..."
                className="flex-1 bg-gray-100 border-2 border-black px-2 py-1 text-sm font-bold focus:outline-none focus:bg-[#FFD700]"
              />
              <button onClick={handleSend} disabled={loading} className="bg-black text-white p-2 border-2 border-black hover:bg-[#FF3333] transition-colors">
                {loading ? <Loader2 size={18} className="animate-spin"/> : <Send size={18} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative"
      >
        <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
        <div className="relative bg-[#FF3333] text-white border-4 border-black p-3 flex items-center gap-3 pr-6">
           <div className="bg-black p-2 border-2 border-white">
              <MessageSquare size={24} className="text-[#00FFFF]" />
           </div>
           <div className="text-left">
              <div className="text-[10px] font-bold text-black leading-none">VIRTUAL CLONE</div>
              <div className={`text-xl font-black leading-none ${marker.className}`}>CHAT AI</div>
           </div>
        </div>
      </motion.button>
    </div>
  );
}
