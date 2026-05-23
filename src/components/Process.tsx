import React from "react";
import { Sparkles, Eye, Scissors, Cpu, Rocket, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      subtitle: "INGEST & ANALYZE",
      description: "Perform deep evaluations of target data layers, identify legacy structural friction, and compile initial input profiles.",
      icon: Eye,
      metric: "Target 1 day setup",
      glowColor: "from-blue-500/20 to-indigo-500/20"
    },
    {
      step: "02",
      title: "Design",
      subtitle: "blueprints & MODELING",
      description: "Fine-tune model parameters, create robust system prompts, configure API structures, and instantiate specialized agent nodes.",
      icon: Scissors,
      metric: "Ready in 48 hours",
      glowColor: "from-indigo-500/20 to-purple-500/20"
    },
    {
      step: "03",
      title: "Automate",
      subtitle: "SUB-SECOND INFRASTRUCTURE",
      description: "Launch models securely. Disconnect manuals and deploy automatic task routers, CRM triggers, and natural conversation engines.",
      icon: Cpu,
      metric: "Inference < 240ms",
      glowColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      step: "04",
      title: "Scale",
      subtitle: "MONITOR & OPTIMIZE",
      description: "Track performance analytics continuously, balance server limits, and scale system pipelines to support millions of queries.",
      icon: Rocket,
      metric: "Continuous uptime",
      glowColor: "from-pink-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black/90">
      
      {/* Decorative center grid lines */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-805/50 to-transparent pointer-events-none" />

      {/* Radial backlight */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            Platform Implementation Pipeline
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
            How We Automate
          </h2>
          <p className="mt-4 text-gray-400 text-base leading-relaxed">
            Four structural phases designed to guide enterprises seamlessly from initial discovery to absolute global automated scale.
          </p>
        </div>

        {/* 4-Step Grid with Connecting lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group bg-zinc-950/40 border border-zinc-900/80 rounded-2xl p-6 relative flex flex-col justify-between align-stretch hover:border-zinc-800 transition-colors shadow-xl"
              >
                {/* Horizontal shimmer top */}
                <span className="absolute left-6 top-6 text-indigo-500 text-3xl md:text-4xl font-mono font-bold leading-none select-none opacity-40 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </span>

                <div className="pt-10 mb-8 text-left">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase block">
                      {item.subtitle}
                    </span>
                    <div className="p-2 rounded-lg bg-zinc-900 text-zinc-500 group-hover:text-indigo-400 border border-zinc-850 group-hover:border-indigo-500/20 transition-all">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="text-white font-sans font-bold text-xl group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-zinc-450 text-xs leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Performance stats marker */}
                <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between text-[10px] font-mono text-zinc-550">
                  <span className="uppercase">VALIDATION_METRIC:</span>
                  <span className="text-indigo-400 font-bold">{item.metric}</span>
                </div>

                {/* Right side connection indicator for large screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <ArrowRight className="w-4.5 h-4.5 text-zinc-800 group-hover:text-indigo-500 transition-colors hidden xl:block" />
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Process footer summary */}
        <div className="mt-16 text-center text-zinc-500 text-xs font-mono">
          * ALL PHASES CONCURRENTLY PROTECTED GOVERNED BY DEDICATED ISO27001 WORKSPACES.
        </div>

      </div>
    </section>
  );
}
