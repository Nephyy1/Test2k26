"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, Github, Linkedin, Mail, Twitter, Layout, Box, Globe } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Brutal",
      tag: "Next.js",
      color: "bg-neo-primary",
      desc: "Full stack shopify clone with brutalist design.",
      link: "#"
    },
    {
      title: "SaaS Dashboard",
      tag: "React",
      color: "bg-neo-secondary",
      desc: "Analytics platform with high contrast UI.",
      link: "#"
    },
    {
      title: "AI Generator",
      tag: "Python",
      color: "bg-neo-purple",
      desc: "Image generation tool using stable diffusion.",
      link: "#"
    },
    {
      title: "Crypto Wallet",
      tag: "Web3",
      color: "bg-neo-accent",
      desc: "DeFi integration with strict security.",
      link: "#"
    },
  ];

  return (
    <main className="min-h-screen bg-neo-bg text-neo-main selection:bg-black selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-neo-bg border-b-4 border-black px-4 py-4 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-black uppercase tracking-tighter">
          PORTFOLIO<span className="text-neo-primary">.</span>DEV
        </div>
        <div className="hidden md:flex gap-6 font-bold">
          <a href="#work" className="hover:underline decoration-4 decoration-neo-primary underline-offset-4">WORK</a>
          <a href="#about" className="hover:underline decoration-4 decoration-neo-secondary underline-offset-4">ABOUT</a>
          <a href="#contact" className="hover:underline decoration-4 decoration-neo-accent underline-offset-4">CONTACT</a>
        </div>
        <button className="bg-black text-white font-bold px-6 py-2 border-2 border-black shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-hover transition-all">
          HIRE ME
        </button>
      </nav>

      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-2 bg-neo-accent border-2 border-black font-bold mb-6 shadow-neo-sm rotate-[-2deg]">
            👋 AVAILABLE FOR WORK
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
            CREATIVE <br />
            <span className="text-stroke-3 text-transparent bg-clip-text bg-gradient-to-r from-neo-primary to-neo-purple" style={{ WebkitTextStroke: "3px black" }}>
              DEVELOPER
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-2xl mb-10 border-l-8 border-black pl-6">
            Building digital experiences with bold aesthetics and rock-solid code.
            Specialized in Next.js, React, and breaking the rules.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex items-center gap-2 bg-neo-primary px-8 py-4 text-xl font-black border-4 border-black shadow-neo hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Layout size={24} strokeWidth={3} />
              VIEW PROJECTS
            </button>
            <button className="flex items-center gap-2 bg-white px-8 py-4 text-xl font-black border-4 border-black shadow-neo hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Mail size={24} strokeWidth={3} />
              CONTACT ME
            </button>
          </div>
        </motion.div>
      </section>

      <div className="bg-black py-4 border-y-4 border-black overflow-hidden whitespace-nowrap mb-20">
        <div className="animate-marquee inline-block">
          <span className="text-white text-4xl font-black mx-4">REACT • NEXT.JS • TYPESCRIPT • TAILWIND • NODE.JS • DESIGN •</span>
          <span className="text-neo-accent text-4xl font-black mx-4">REACT • NEXT.JS • TYPESCRIPT • TAILWIND • NODE.JS • DESIGN •</span>
          <span className="text-neo-primary text-4xl font-black mx-4">REACT • NEXT.JS • TYPESCRIPT • TAILWIND • NODE.JS • DESIGN •</span>
        </div>
      </div>

      <section id="work" className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
        <div className="flex items-end justify-between mb-12 border-b-4 border-black pb-4">
          <h2 className="text-5xl md:text-7xl font-black">SELECTED WORK</h2>
          <Box size={48} strokeWidth={2.5} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`group relative border-4 border-black p-8 ${project.color} shadow-neo hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer`}
            >
              <div className="bg-white border-2 border-black inline-block px-3 py-1 font-bold mb-4 shadow-neo-sm">
                {project.tag}
              </div>
              <h3 className="text-4xl font-black mb-2 uppercase">{project.title}</h3>
              <p className="font-bold text-lg mb-8">{project.desc}</p>
              <div className="absolute bottom-8 right-8 bg-black text-white p-2 rounded-none group-hover:bg-white group-hover:text-black border-2 border-transparent group-hover:border-black transition-colors">
                <ArrowUpRight size={32} strokeWidth={3} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y-4 border-black py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12">MY TECH STACK</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Javascript", "Typescript", "React", "Next.js", "Node", "PostgreSQL", "Prisma", "Tailwind", "Framer", "Figma"].map((tech) => (
              <span key={tech} className="px-6 py-3 text-xl font-bold border-2 border-black bg-neo-bg shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-neo-main text-white pt-20 pb-10 px-4 md:px-8 border-t-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h2 className="text-6xl font-black mb-6 text-neo-accent">LET'S TALK</h2>
            <p className="text-xl max-w-md mb-8">
              Interested in working together? Drop me a line and let's make something loud.
            </p>
            <a href="mailto:hello@example.com" className="inline-block text-2xl font-bold underline decoration-4 decoration-neo-primary hover:text-neo-primary transition-colors">
              hello@portofolio.dev
            </a>
          </div>
          
          <div className="flex gap-4">
            {[Github, Twitter, Linkedin, Globe].map((Icon, i) => (
              <a key={i} href="#" className="p-4 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_#888] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <Icon size={24} strokeWidth={3} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-20 pt-8 border-t-2 border-gray-800 text-center font-bold text-gray-400">
          © 2024 NEO-BRUTAL PORTFOLIO. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </main>
  );
      }
