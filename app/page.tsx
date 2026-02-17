"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Layout, Box, Menu } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { title: "E-COMMERCE", tag: "NEXT.JS", color: "bg-neo-primary", desc: "Brutalist shopify clone." },
    { title: "DASHBOARD", tag: "REACT", color: "bg-neo-secondary", desc: "High contrast analytics." },
    { title: "AI TOOL", tag: "PYTHON", color: "bg-neo-purple", desc: "Image generator wrapper." },
  ];

  return (
    <main className="min-h-screen bg-neo-bg text-black selection:bg-black selection:text-white overflow-x-hidden">
      
      <nav className="fixed top-0 w-full z-50 bg-neo-bg border-b-4 border-black px-4 py-3 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-black tracking-tighter">
          PORTFOLIO<span className="text-neo-primary">.</span>DEV
        </div>
        
        <div className="hidden md:flex gap-6 font-bold text-sm">
          <a href="#" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">WORK</a>
          <a href="#" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">ABOUT</a>
        </div>

        <div className="flex gap-2">
          <button className="hidden md:block bg-black text-white font-bold px-4 py-2 border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm">
            HIRE ME
          </button>
          <button 
            className="md:hidden p-2 border-2 border-black shadow-neo active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neo-bg pt-24 px-4">
           <div className="flex flex-col gap-4 text-2xl font-black">
              <a href="#" className="border-b-4 border-black pb-2">WORK</a>
              <a href="#" className="border-b-4 border-black pb-2">ABOUT</a>
              <a href="#" className="border-b-4 border-black pb-2">CONTACT</a>
           </div>
        </div>
      )}

      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[80vh]">
        <div className="inline-block w-fit px-3 py-1 bg-neo-accent border-2 border-black font-bold mb-6 shadow-neo-sm -rotate-2 text-sm md:text-base">
          👋 OPEN FOR WORK
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8 break-words">
          CREATIVE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-primary to-neo-purple" style={{ WebkitTextStroke: "1px black" }}>
            DEVELOPER
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-bold max-w-2xl mb-10 border-l-4 md:border-l-8 border-black pl-4 md:pl-6 leading-tight">
          Building loud digital experiences. Specialized in Next.js, React, and raw code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex justify-center items-center gap-2 bg-neo-primary px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-black border-4 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            <Layout size={20} strokeWidth={3} />
            PROJECTS
          </button>
          <button className="flex justify-center items-center gap-2 bg-white px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-black border-4 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            <Mail size={20} strokeWidth={3} />
            CONTACT
          </button>
        </div>
      </section>

      <div className="bg-black py-3 border-y-4 border-black overflow-hidden whitespace-nowrap mb-16">
        <div className="inline-block animate-[marquee_20s_linear_infinite]">
          <span className="text-white text-2xl md:text-4xl font-black mx-4">REACT • NEXT.JS • TAILWIND •</span>
          <span className="text-neo-accent text-2xl md:text-4xl font-black mx-4">REACT • NEXT.JS • TAILWIND •</span>
          <span className="text-neo-primary text-2xl md:text-4xl font-black mx-4">REACT • NEXT.JS • TAILWIND •</span>
        </div>
      </div>

      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl md:text-7xl font-black mb-12 border-b-4 border-black pb-4">WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`relative border-4 border-black p-6 ${project.color} shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer`}>
              <div className="bg-white border-2 border-black inline-block px-2 py-1 font-bold mb-4 shadow-neo-sm text-xs">
                {project.tag}
              </div>
              <h3 className="text-3xl font-black mb-2">{project.title}</h3>
              <p className="font-bold text-base md:text-lg mb-8">{project.desc}</p>
              <button className="absolute bottom-6 right-6 p-2 bg-black text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-colors">
                <ArrowUpRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4 text-center border-t-4 border-black">
        <h2 className="text-4xl md:text-6xl font-black mb-8 text-neo-accent">LET'S TALK</h2>
        <div className="flex justify-center gap-6 mb-8">
           <Github size={32} /> <Linkedin size={32} /> <Mail size={32} />
        </div>
        <p className="font-bold text-gray-500">© 2024 NEO BRUTALISM</p>
      </footer>
    </main>
  );
}
