"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, Code, Database, Layers, Terminal, Globe } from "lucide-react";

export default function Home() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="min-h-screen bg-neo-bg text-black selection:bg-black selection:text-white pb-20">
      
      <nav className="border-b-4 border-black bg-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter hover:italic transition-all cursor-pointer">
          DEV<span className="text-neo-primary">.</span>PORTFOLIO
        </div>
        <a href="mailto:hello@dev.com" className="font-bold text-sm bg-black text-white px-4 py-2 hover:bg-neo-primary hover:text-black transition-colors border-2 border-transparent hover:border-black">
          HIRE ME
        </a>
      </nav>

      <section className="px-4 md:px-8 py-12 md:py-20 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]"
        >
          
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3 bg-white border-4 border-black p-6 md:p-10 shadow-neo flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
              DIGITAL<br/>
              <span className="text-neo-primary">CRAFTSMAN</span>
            </h1>
            <p className="text-xl font-bold max-w-lg border-l-4 border-black pl-4 ml-2">
              Building aesthetics user interfaces with robust backend systems. 
              Based in Indonesia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 bg-neo-purple border-4 border-black p-6 shadow-neo flex flex-col justify-between group hover:-translate-y-1 hover:shadow-neo-hover transition-all cursor-pointer">
             <div className="flex justify-between items-start">
               <Globe size={32} />
               <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
             <div>
               <h3 className="text-3xl font-black">AVAILABLE</h3>
               <p className="font-bold">For remote work</p>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 bg-black text-white border-4 border-black p-6 shadow-neo flex flex-col justify-between">
            <div className="space-y-4">
              <Github size={32} className="hover:text-neo-primary cursor-pointer transition-colors" />
              <Linkedin size={32} className="hover:text-neo-secondary cursor-pointer transition-colors" />
              <Twitter size={32} className="hover:text-neo-accent cursor-pointer transition-colors" />
            </div>
            <p className="font-bold text-sm mt-4">@FINDMEHERE</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 bg-neo-accent border-4 border-black p-8 shadow-neo relative overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-neo-hover transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Database size={120} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="bg-white border-2 border-black px-3 py-1 text-xs font-bold w-fit">LATEST WORK</div>
              <div>
                <h3 className="text-4xl font-black mb-2">SAAS DASHBOARD</h3>
                <p className="font-bold">Analytics platform for e-commerce with real-time data visualization.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 bg-white border-4 border-black p-6 shadow-neo flex flex-col gap-3">
             <h3 className="text-xl font-black border-b-4 border-black pb-2">STACK</h3>
             <div className="flex flex-wrap gap-2">
               {["Next.js", "React", "TS", "Tailwind", "Node"].map((tech) => (
                 <span key={tech} className="bg-neo-bg border-2 border-black px-2 py-1 text-sm font-bold hover:bg-black hover:text-white transition-colors cursor-default">
                   {tech}
                 </span>
               ))}
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 bg-white border-4 border-black p-8 shadow-neo relative group cursor-pointer hover:-translate-y-1 hover:shadow-neo-hover transition-all">
             <div className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Layers size={40} />
                  <div className="bg-black text-white px-2 py-1 text-xs font-bold">2024</div>
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase mb-2 group-hover:underline decoration-4">E-Commerce Kit</h3>
                  <p className="font-bold text-sm">Open source UI kit for Shopify developers.</p>
                </div>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 bg-neo-secondary border-4 border-black p-6 shadow-neo flex flex-col justify-center items-center text-center cursor-pointer hover:bg-black hover:text-white transition-colors">
            <Mail size={48} className="mb-2" />
            <h3 className="text-2xl font-black">CONTACT</h3>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-1 bg-white border-4 border-black p-6 shadow-neo flex flex-col justify-between">
             <Terminal size={32} />
             <div>
               <div className="font-black text-4xl">3+</div>
               <div className="font-bold text-sm">YEARS EXP</div>
             </div>
          </motion.div>

        </motion.div>
      </section>

      <div className="border-y-4 border-black bg-neo-accent py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[marquee_20s_linear_infinite]">
          <span className="text-3xl font-black mx-8">OPEN FOR NEW OPPORTUNITIES • LET'S BUILD SOMETHING COOL •</span>
          <span className="text-3xl font-black mx-8">OPEN FOR NEW OPPORTUNITIES • LET'S BUILD SOMETHING COOL •</span>
          <span className="text-3xl font-black mx-8">OPEN FOR NEW OPPORTUNITIES • LET'S BUILD SOMETHING COOL •</span>
        </div>
      </div>

    </main>
  );
}
