"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, Code, Globe, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main ref={containerRef} className="min-h-screen bg-neo-bg text-black selection:bg-neo-primary selection:text-black overflow-x-hidden">
      
      {/* NAVBAR - Simple & Bold */}
      <nav className="border-b-[6px] border-black bg-neo-bg px-6 py-5 flex justify-between items-center sticky top-0 z-50">
        <div className="text-3xl font-black tracking-tighter uppercase">
          BRUTAL<span className="text-neo-primary">.</span>DEV
        </div>
        <div className="hidden md:flex gap-8 font-black text-lg uppercase">
          <a href="#work" className="hover:underline decoration-4 underline-offset-4">Work</a>
          <a href="#contact" className="hover:underline decoration-4 underline-offset-4 decoration-neo-primary">Contact</a>
        </div>
        <button className="font-black text-lg bg-black text-white px-6 py-3 border-[4px] border-black hover:bg-neo-accent hover:text-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-none">
          HIRE ME
        </button>
      </nav>

      {/* HERO SECTION - Chaotic & Overlapping */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-12 pt-20 overflow-hidden">
         {/* Background Element */}
         <div className="absolute top-20 right-0 w-64 h-64 bg-neo-secondary border-[6px] border-black rounded-full opacity-50 blur-[2px] -z-10 animate-pulse"></div>
         
         <motion.div style={{ y: yText }} className="relative z-10">
            <div className="inline-block bg-neo-primary border-[4px] border-black p-4 font-black text-xl mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2">
              👋 SCROLL DOWN IF YOU DARE
            </div>
            
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] font-black tracking-tighter uppercase break-words">
              FULL STACK <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-purple to-neo-secondary" style={{ WebkitTextStroke: "3px black" }}>
                REBEL
              </span>
            </h1>
         </motion.div>

         {/* PROFILE IMAGE - Overlapping and Rotated */}
         <div className="relative z-20 mt-[-50px] md:mt-[-100px] md:ml-auto w-full md:w-[500px]">
            <motion.div 
              initial={{ rotate: 4, scale: 0.9 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative border-[8px] border-black bg-neo-accent p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {/* Placeholder Image from Placehold.co - Replace URL with your CDN link */}
              <img 
                src="https://placehold.co/500x600/1a1a1a/FFFdf0.png?text=PROFILE+IMAGE&font=oswald" 
                alt="Profile Placeholder" 
                className="w-full h-auto border-[4px] border-black grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-black text-white p-4 border-[4px] border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                 <Code size={32} />
              </div>
            </motion.div>
         </div>
      </section>

      {/* ABOUT BLOCK - High Contrast */}
      <section className="bg-neo-accent border-y-[6px] border-black py-20 px-4 md:px-12 relative">
        <ArrowDown size={64} className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-neo-accent border-[4px] border-black p-2 rounded-full animate-bounce" />
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8">
             I don't just build websites. <br/>
             I build <span className="bg-black text-white px-2">digital statements.</span>
           </h2>
           <p className="text-xl md:text-2xl font-bold border-l-[6px] border-black pl-6 text-left md:text-center inline-block">
             Specialized in high-impact React & Next.js applications that break the rules of conventional design. No boring templates allowed.
           </p>
        </div>
      </section>

      {/* SCROLLING MARQUEE */}
      <div className="bg-black py-6 border-b-[6px] border-black overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[marquee_15s_linear_infinite]">
          <span className="text-white text-4xl font-black mx-8 uppercase">NEXT.JS • TYPESCRIPT • TAILWIND • FRAMER MOTION • FIGMA •</span>
          <span className="text-neo-primary text-4xl font-black mx-8 uppercase">NEXT.JS • TYPESCRIPT • TAILWIND • FRAMER MOTION • FIGMA •</span>
        </div>
      </div>

      {/* WORK SECTION - Stacked & Aggressive */}
      <section id="work" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
         <h2 className="text-6xl md:text-8xl font-black uppercase mb-16 border-b-[6px] border-black inline-block">
           SELECTED CHAOS
         </h2>
         
         <div className="flex flex-col gap-16">
            {/* Project 1 */}
            <div className="group relative bg-white border-[6px] border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all cursor-pointer">
               <div className="bg-neo-primary border-[4px] border-black px-4 py-2 font-black text-lg inline-block mb-6 -rotate-2 group-hover:rotate-0 transition-all">
                 E-COMMERCE v99
               </div>
               <h3 className="text-5xl md:text-7xl font-black uppercase mb-4 leading-none group-hover:underline decoration-[6px]">
                 BRUTAL SHOPIFY
               </h3>
               <p className="text-2xl font-bold mb-8 max-w-2xl">
                 A headless commerce experience that punches you in the face with high contrast UI and extreme performance.
               </p>
               <ArrowUpRight size={64} className="absolute bottom-8 right-8 border-[4px] border-black p-2 bg-neo-bg group-hover:bg-black group-hover:text-white transition-colors" />
            </div>

            {/* Project 2 */}
            <div className="group relative bg-neo-secondary border-[6px] border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all cursor-pointer">
               <div className="bg-black text-white border-[4px] border-white px-4 py-2 font-black text-lg inline-block mb-6 rotate-2 group-hover:rotate-0 transition-all">
                 WEB3 DASHBOARD
               </div>
               <h3 className="text-5xl md:text-7xl font-black uppercase mb-4 leading-none group-hover:underline decoration-[6px]">
                 DEFI ANALYTICS
               </h3>
               <p className="text-2xl font-bold mb-8 max-w-2xl">
                 Real-time crypto tracking data visualization that looks like a 90s hacker terminal.
               </p>
               <ArrowUpRight size={64} className="absolute bottom-8 right-8 border-[4px] border-black p-2 bg-white group-hover:bg-black group-hover:text-white transition-colors" />
            </div>
         </div>
      </section>

      {/* FOOTER - Heavy & Simple */}
      <footer id="contact" className="bg-black text-white border-t-[8px] border-neo-primary py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
           <div>
             <h2 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8 text-neo-primary">
               LET'S MAKE<br/>NOISE.
             </h2>
             <a href="mailto:hello@brutal.dev" className="text-3xl font-black underline decoration-[6px] decoration-white hover:decoration-neo-primary hover:text-neo-primary transition-all">
               hello@brutal.dev
             </a>
           </div>
           <div className="flex gap-6 items-end">
              <a href="#" className="bg-white text-black p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_#fff] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
                 <Github size={40} />
              </a>
              <a href="#" className="bg-neo-accent text-black p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_#fff] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
                 <Twitter size={40} />
              </a>
              <a href="#" className="bg-neo-secondary text-black p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_#fff] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
                 <Linkedin size={40} />
              </a>
           </div>
        </div>
        <p className="text-center font-bold mt-20 text-gray-500 uppercase">© 2024 BRUTALISM PORTFOLIO. NO RIGHTS RESERVED.</p>
      </footer>

    </main>
  );
        }
