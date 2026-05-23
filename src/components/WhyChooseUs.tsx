import React, { useState } from "react";
import { Check, X, ShieldAlert, Sparkles, TrendingUp, Cpu, Server } from "lucide-react";

export default function WhyChooseUs() {
  const comparisonItems = [
    {
      feature: "AI Deployment Speed",
      sonify: "Immediate (< 2 hrs)",
      legacy: "2 - 6 Months Dev Cycle",
      isPremium: true
    },
    {
      feature: "Infrastructure Cost",
      sonify: "Pay-per-token / Optimized Node",
      legacy: "$20K+ Setup + High Maintenance",
      isPremium: true
    },
    {
      feature: "Custom AI Workflows",
      sonify: "Generative Orchestrated blueprints",
      legacy: "Hardcoded Static Rules only",
      isPremium: true
    },
    {
      feature: "API Query Latency",
      sonify: "Sub-second Average (< 240ms)",
      legacy: "Variable (1.5s - 4.2s)",
      isPremium: true
    },
    {
      feature: "Enterprise Cybersecurity",
      sonify: "SOC2 Type II + Fully Sanity Protected",
      legacy: "Basic TLS / Unisolated shared backends",
      isPremium: true
    },
    {
      feature: "Workflow Integrations",
      sonify: "Multi-channel Native Connectors",
      legacy: "Requires Custom Middleware Glue",
      isPremium: true
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden bg-zinc-950">
      
      {/* Decorative grids or backing glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[550px] bg-blue-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-4">
              A/B ARCHITECTURE ANALYSIS
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
              Why Corporate Leaders <br />
              Choose SonifyAI
            </h2>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right pb-1">
            <p className="text-zinc-500 text-sm max-w-sm lg:ml-auto">
              Compare SonifyAI's modern sub-second automated structures with bloated, manual developer environments.
            </p>
          </div>
        </div>

        {/* Dynamic Metrics Panel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 text-left relative overflow-hidden group hover:border-zinc-800 transition-colors">
            <span className="text-zinc-650 text-[10px] uppercase font-mono tracking-widest">DEPLOYMENT VELOCITY</span>
            <span className="text-3xl md:text-4xl font-mono font-bold text-white block mt-3">92x</span>
            <p className="text-zinc-400 text-xs mt-2 leading-relaxed">Faster workflow design compile compared to legacy scriptwriting cycles.</p>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 text-left relative overflow-hidden group hover:border-zinc-800 transition-colors">
            <span className="text-zinc-650 text-[10px] uppercase font-mono tracking-widest">INFRASTRUCTURE SECURITY</span>
            <span className="text-3xl md:text-4xl font-mono font-bold text-white block mt-3">SOC2</span>
            <p className="text-zinc-400 text-xs mt-2 leading-relaxed">Type II credentialing ensures completely isolated customer data workspaces.</p>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 text-left relative overflow-hidden group hover:border-zinc-800 transition-colors">
            <span className="text-zinc-650 text-[10px] uppercase font-mono tracking-widest">OVERHEAD MAINTENANCE</span>
            <span className="text-3xl md:text-4xl font-mono font-bold text-white block mt-3">-65%</span>
            <p className="text-zinc-400 text-xs mt-2 leading-relaxed">Reduction in ongoing developer support requirements and operational lag.</p>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 text-left relative overflow-hidden group hover:border-zinc-800 transition-colors">
            <span className="text-zinc-650 text-[10px] uppercase font-mono tracking-widest">API LATENCY REDUCTION</span>
            <span className="text-3xl md:text-4xl font-mono font-bold text-white block mt-3">1.2s</span>
            <p className="text-zinc-400 text-xs mt-2 leading-relaxed">Saved on every core transaction through intelligent pre-compiled caching nodes.</p>
          </div>

        </div>

        {/* Comparison Table */}
        <div className="bg-black/40 border border-zinc-900 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-zinc-900 p-6 bg-zinc-950/40 text-[10px] font-mono text-zinc-500 uppercase tracking-wider text-left">
            <div className="md:col-span-5 pl-2">System Attribute Capabilities</div>
            <div className="md:col-span-4 text-indigo-400 font-bold flex items-center gap-1.5 matches-brand">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              SonifyAI Platform Solutions
            </div>
            <div className="md:col-span-3">Legacy Hardcoded Scripts</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-zinc-900/80">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 hover:bg-zinc-900/10 items-center text-left"
              >
                {/* Feature Name */}
                <div className="md:col-span-5 font-sans font-semibold text-white text-sm">
                  {item.feature}
                </div>

                {/* Sonify Performance */}
                <div className="md:col-span-4 font-sans text-sm text-zinc-300 flex items-center gap-2">
                  <span className="p-0.5 rounded-full bg-indigo-950 border border-indigo-500/20 text-indigo-400 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                  </span>
                  <span>{item.sonify}</span>
                </div>

                {/* Legacy Performance */}
                <div className="md:col-span-3 font-sans text-sm text-zinc-550 flex items-center gap-2">
                  <span className="p-0.5 rounded-full bg-zinc-900 text-zinc-650 flex-shrink-0">
                    <X className="w-3 h-3" />
                  </span>
                  <span>{item.legacy}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
