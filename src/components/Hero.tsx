import React from "react";
import { motion } from "motion/react";
import { Sparkles, Terminal, ArrowRight, Play, Server, Layers, Volume2, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-950 via-zinc-950 to-black overflow-hidden">
      
      {/* Absolute grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative neon gradient globs */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Editorial Headers */}
        <div className="lg:col-span-6 text-left max-w-2xl">
          
          {/* Animated Glow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span className="text-white font-semibold">SonifyAI Private Limited</span> — Next-Gen AI
          </motion.div>

          {/* Core Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-white tracking-tight leading-[1.08] mb-6"
          >
            Build Smarter <br />
            Businesses with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Generative AI
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg font-sans"
          >
            AI-powered automation, intelligent assistants, and scalable digital solutions designed for modern enterprises. Align operations, generate natural interactions, and multiply outputs effortlessly.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#playground"
              className="w-full sm:w-auto relative group px-6 py-3.5 text-sm font-sans font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-indigo-550/30 transition-all flex items-center justify-center gap-2 overflow-hidden"
            >
              Get Started
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="#process"
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-sans font-semibold text-zinc-300 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:text-white rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Book a Demo
              <Play className="w-3.5 h-3.5 fill-current text-zinc-400" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-zinc-900 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            <span className="text-zinc-600 text-xs font-mono uppercase tracking-wider block">TRUSTED SECURITY STANDARDS :</span>
            <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-400 transition-colors cursor-default">
              <ShieldCheck className="w-4.5 h-4.5 text-indigo-500" />
              <span className="text-xs font-sans font-medium">SOC2 Type II compliant</span>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Immersive Dashboard Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-6 relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none"
        >
          
          {/* Main Visual Box */}
          <div className="w-full h-full bg-zinc-950/85 border border-zinc-800 rounded-2xl p-4 md:p-6 shadow-2xl shadow-black/80 relative overflow-hidden backdrop-blur-md">
            
            {/* Header detail bar */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-zinc-900/40 border border-zinc-850/60 font-mono text-[9px] text-zinc-500">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                SONIFY_CONSOLE_CLI://v2.1
              </div>
            </div>

            {/* Core Stats Overview */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-zinc-900/30 border border-zinc-900 rounded-lg p-3">
                <span className="text-[10px] font-mono text-zinc-500 block">AI INFERENCE</span>
                <span className="text-lg md:text-xl font-sans font-bold text-white block mt-1">12.5M/s</span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-1">+14.2% today</span>
              </div>
              
              <div className="bg-zinc-900/30 border border-zinc-900 rounded-lg p-3">
                <span className="text-[10px] font-mono text-zinc-500 block">AUDIO LATENCY</span>
                <span className="text-lg md:text-xl font-sans font-bold text-white block mt-1">240ms</span>
                <span className="text-[9px] font-mono text-indigo-400 block mt-1">Global average</span>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-900 rounded-lg p-3">
                <span className="text-[10px] font-mono text-zinc-500 block">AGENTS LOAD</span>
                <span className="text-lg md:text-xl font-sans font-bold text-white block mt-1">98.2%</span>
                <span className="text-[9px] font-mono text-cyan-400 block mt-1">Dynamic balance</span>
              </div>
            </div>

            {/* Simulated Live Generation Flow */}
            <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-4 flex-1 flex flex-col justify-between h-[160px] relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-indigo-400 animate-bounce" />
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Dynamic Stream Feed</span>
                </div>
                <span className="text-[9px] font-mono text-indigo-500 bg-indigo-950/20 px-2 py-0.5 rounded border border-indigo-950">
                  REAL-TIME WAV
                </span>
              </div>

              <div className="space-y-2 py-1">
                <div className="text-[11px] font-mono text-zinc-400 leading-snug">
                  &gt; Ingesting prompt matrix... <span className="text-emerald-400">Success</span>
                </div>
                <div className="text-[11px] font-mono text-zinc-450 leading-snug">
                  &gt; Syncing Aetheria-9 core synthesis nodes...
                </div>
                <div className="text-[11px] font-mono text-zinc-500 leading-snug">
                  &gt; Generation ready: <span className="text-indigo-400">"Transforming Businesses with Generative AI"</span>
                </div>
              </div>

              {/* Graphical Sound Wave simulation */}
              <div className="flex items-end justify-between gap-1 h-12 pt-3 border-t border-zinc-900/80">
                {[40, 70, 50, 80, 20, 60, 95, 30, 45, 80, 50, 70, 90, 60, 40, 75, 20, 35, 60, 40].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.08 }}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-indigo-500 rounded-full"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Glowing particle dots overlays */}
            <div className="absolute top-2 w-[1px] h-10 bg-indigo-500 left-12 blur-[1px] animate-pulse" />
            <div className="absolute bottom-2 w-[1.5px] h-12 bg-purple-500 right-1/4 blur-[1px] opacity-60" />

          </div>

          {/* Decorative Floaties absolute */}
          <div className="absolute -top-6 -right-6 bg-zinc-900/90 border border-zinc-800 rounded-xl p-3 shadow-lg flex items-center gap-3 backdrop-blur-md hidden sm:flex">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
              <Server className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 font-mono block">CLOUD NODES</span>
              <span className="text-xs font-bold text-white font-sans">99.98% uptime</span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-zinc-900/90 border border-zinc-800 rounded-xl p-3 shadow-lg flex items-center gap-3 backdrop-blur-md hidden sm:flex">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <Layers className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 font-mono block">FLOW INTEGRITY</span>
              <span className="text-xs font-bold text-white font-sans">Zero lag failures</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
