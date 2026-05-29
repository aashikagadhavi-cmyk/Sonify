import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Server, Database, Layers, ShieldCheck, Activity, Terminal } from "lucide-react";

export default function About() {
  const [activeLayer, setActiveLayer] = useState("orches");

  const layersInfo = [
    {
      id: "ingest",
      title: "Intelligent Ingestion Node",
      detail: "Inbound data is normalized and sanitized instantly. Support raw text, direct webhook payloads, document scanning, and user feedback buffers.",
      subItems: ["SSL-encrypted tunnels", "PII filtering active", "JSON serialization standard"],
      icon: Database,
      tag: "LAYER_01"
    },
    {
      id: "orches",
      title: "Generative Orchestration Matrix",
      detail: "The central core. Integrates specialized advanced large models using dynamic routing rules. Controls parameters like focus weighting and threshold fallbacks.",
      subItems: ["In-context indexing", "Optimized routing buffers", "Self-regulating load balancers"],
      icon: Layers,
      tag: "LAYER_02_CORE"
    },
    {
      id: "dispatch",
      title: "Sub-Second Edge Dispatcher",
      detail: "Executes final triggers. Encodes custom voice synthesis, triggers secure partner APIs, dispatches webhook notifications, or populates database layers.",
      subItems: ["< 200ms edge latency", "Automatic retry queues", "SOC2 compliance check"],
      icon: Server,
      tag: "LAYER_03"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950">
      
      {/* Decorative vertical or absolute lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-40 hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-40 hidden lg:block" />

      {/* Decorative glow */}
      <div className="absolute left-1/4 bottom-1/4 w-[400px] h-[400px] bg-indigo-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* About Info Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-4">
              Infrastructure Blueprint
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Next-Generation <br />
              AI Infrastructure
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded mt-6" />
          </div>

          <div className="lg:col-span-7 pt-4 text-left">
            <p className="text-gray-350 text-lg leading-relaxed font-sans">
              SonifyAI enables organizations to automate workflows, generate intelligent text/voice payloads, and experience highly personalized virtual actions using advanced artificial intelligence architectures.
            </p>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Our enterprise solutions are built around rigorous safety boundaries, sub-second latency thresholds, and human-centric UI components — enabling high-growth companies to prototype, automate, and deploy core generative apps with minimal overhead operations.
            </p>
          </div>

        </div>

        {/* Interactive Layer Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/40 border border-zinc-900 rounded-3xl p-6 md:p-10 backdrop-blur-md">
          
          {/* Layer Selector buttons (col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-zinc-650 text-xs font-mono uppercase tracking-widest block pl-2">
              Pipeline Selection Control
            </span>
            {layersInfo.map((l) => {
              const IconComp = l.icon;
              const isActive = activeLayer === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => setActiveLayer(l.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 group ${
                    isActive
                      ? "bg-zinc-900/60 border-indigo-500/40 shadow-xl shadow-indigo-950/20"
                      : "bg-transparent border-transparent hover:bg-zinc-900/20 hover:border-zinc-850"
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-all ${
                    isActive ? "bg-indigo-950 border border-indigo-400/40 text-indigo-400" : "bg-zinc-900 text-zinc-500 group-hover:text-zinc-350"
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-550 block mb-0.5">{l.tag}</span>
                    <span className={`text-sm font-semibold block transition-colors ${isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                      {l.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Layer Detail Stage (col 7) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-8 min-h-[320px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
            
            <AnimatePresence mode="wait">
              {layersInfo.map((l) => {
                if (l.id !== activeLayer) return null;
                const IconComp = l.icon;
                return (
                  <motion.div
                    key={l.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Badge / Code Tag */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="inline-flex items-center gap-1.5 text-xs text-indigo-400 font-mono bg-indigo-950/20 border border-indigo-950/40 px-2.5 py-1 rounded">
                          <Activity className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                          STAGE_STATUS: OPTIMAL
                        </div>
                        <span className="text-zinc-600 font-mono text-xs">{l.tag}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-sans font-bold text-2xl tracking-tight mb-4 flex items-center gap-3">
                        <IconComp className="w-6 h-6 text-indigo-400" />
                        {l.title}
                      </h3>

                      {/* Detail Text */}
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                        {l.detail}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="border-t border-zinc-900 pt-6 mt-4">
                      <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block mb-3">CONSTRAINTS & POLICIES</span>
                      <div className="flex flex-wrap gap-2">
                        {l.subItems.map((item, idx) => (
                          <span key={idx} className="text-xs font-mono border border-zinc-850 px-2.5 py-1 rounded-md bg-zinc-900/40 text-zinc-400">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
