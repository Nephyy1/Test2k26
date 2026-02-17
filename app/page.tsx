"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, MapPin, Globe, Code, Zap, Layers } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bentoItems = [
    {
      id: "hero",
      className: "md:col-span-2 md:row-span-2 bg-neo-bg text-black flex flex-col justify-between",
      content: (
        <div className="h-full flex flex-col justify-between p-2">
          <div className="flex justify-between items-start">
             <div className="bg-neo-accent border-2 border-black px-3 py-1 text-sm font-bold shadow-neo-sm transform -rotate-2">
               👋 HELLO WORLD
             </div>
             <Zap size={32} fill="black" />
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-4">
              FULL STACK<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-primary to-neo-purple" style={{ WebkitTextStroke: "1.5px black" }}>
                DEVELOPER
              </span>
            </h1>
            <p className="text-lg font-bold border-l-4 border-black pl-4">
              Crafting solid web experiences with Next.js & Tailwind.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "status",
      className: "md:col-span-1 bg-neo-secondary flex flex-col justify-center items-center text-center",
      content: (
        <div className="space-y-2">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-black mx-auto animate-pulse"></div>
            <h3 className="text-2xl font-black uppercase">Available</h3>
            <p className="font-bold text-sm">For Freelance Work</p>
        </div>
      )
    },
    {
      id: "location",
      className: "md:col-span-1 bg-neo-purple text-white flex flex-col justify-between",
      content: (
        <>
          <MapPin size={32} />
          <div>
            <h3 className="text-2xl font-black">BASED IN</h3>
            <p className="font-bold text-lg">Jakarta, ID</p>
          </div>
        </>
      )
    },
    {
      id: "socials",
      className: "md:col-span-1 bg-black text-white flex flex-col justify-center gap-4",
      content: (
        <div className="flex justify-around items-center h-full">
            <a href="#" className="hover:text-neo-primary transition-colors"><Github size={32} /></a>
            <a href="#" className="hover:text-neo-primary transition-colors"><Linkedin size={32} /></a>
            <a href="#" className="hover:text-neo-primary transition-colors"><Twitter size={32} /></a>
        </div>
      )
    },
    {
      id: "stack",
      className: "md:col-span-2 bg-white flex flex-col justify-between overflow-hidden relative",
      content: (
        <>
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Code size={120} />
          </div>
          <h3 className="text-3xl font-black z-10">TECH STACK</h3>
          <div className="flex flex-wrap gap-2 z-10 mt-4">
            {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Framer"].map(tag => (
                <span key={tag} className="bg-neo-bg border-2 border-black px-3 py-1 font-bold text-sm shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-default">
                    {tag}
                </span>
            ))}
          </div>
        </>
      )
    },
    {
      id: "project1",
      className: "md:col-span-2 md:row-span-2 bg-neo-primary relative group cursor-pointer",
      content: (
        <div className="h-full flex flex-col justify-between">
           <div className="bg-white border-2 border-black inline-block px-2 py-1 font-bold w-fit text-sm">
             FEATURED PROJECT
           </div>
           <div>
             <h3 className="text-4xl md:text-5xl font-black mb-2 uppercase group-hover:underline decoration-4 decoration-white underline-offset-4">
               E-COMMERCE
             </h3>
             <p className="font-bold text-lg line-clamp-2">
               A brutalist shopify clone with high contrast UI and extreme performance.
             </p>
           </div>
           <div className="absolute top-4 right-4 bg-black text-white p-2 border-2 border-transparent group-hover:bg-white group-hover:text-black group-hover:border-black transition-all">
             <ArrowUpRight size={24} />
           </div>
        </div>
      )
    },
    {
      id: "project2",
      className: "md:col-span-1 bg-neo-accent relative group cursor-pointer",
      content: (
        <div className="h-full flex flex-col justify-between">
            <Layers size={32} />
            <div>
                <h3 className="text-2xl font-black uppercase mb-1">DASHBOARD</h3>
                <p className="text-sm font-bold">SaaS Analytics</p>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} />
            </div>
        </div>
      )
    },
    {
      id: "contact",
      className: "md:col-span-1 bg-white flex flex-col justify-center items-center text-center cursor-pointer hover:bg-black hover:text-white transition-colors group",
      content: (
        <>
          <Mail size={48} className="mb-4" />
          <h3 className="text-xl font-black uppercase">HIRE ME</h3>
          <p className="text-sm font-bold mt-2 underline decoration-2 decoration-neo-primary group-hover:decoration-white">
            hello@portfolio.dev
          </p>
        </>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-neo-bg text-black selection:bg-black selection:text-white pb-20">
      
      <nav className="sticky top-0 w-full z-50 bg-neo-bg border-b-4 border-black px-4 py-3 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-black tracking-tighter">
          PORTFOLIO<span className="text-neo-primary">.</span>DEV
        </div>
        
        <div className="flex gap-4">
            <button className="hidden md:block font-bold hover:underline decoration-4 decoration-neo-primary underline-offset-4">WORK</button>
            <button className="hidden md:block font-bold hover:underline decoration-4 decoration-neo-secondary underline-offset-4">ABOUT</button>
            <button className="bg-black text-white text-sm font-bold px-4 py-2 border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                LET'S TALK
            </button>
        </div>
      </nav>

      <div className="px-4 md:px-8 max-w-7xl mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            {bentoItems.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`${item.className} border-4 border-black p-6 shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-none`}
                >
                    {item.content}
                </motion.div>
            ))}
        </div>
      </div>

      <div className="mt-20 border-t-4 border-black bg-white py-8 px-4 text-center">
        <h2 className="text-4xl md:text-9xl font-black opacity-10 select-none">
            BRUTALISM
        </h2>
      </div>

    </main>
  );
}
