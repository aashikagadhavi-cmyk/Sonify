import React from "react";
import { motion } from "motion/react";
import { FileText, MessageSquare, Workflow, HelpCircle, Server, Volume2, Sparkles, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "gen-text",
      title: "AI Content & Text Generation",
      description: "Scale high-performance communications, newsletters, drafts, product updates, and business proposals using custom structural guidelines.",
      icon: FileText,
      glow: "group-hover:border-blue-500/30",
      accent: "text-blue-400 bg-blue-950/25 border-blue-500/20"
    },
    {
      id: "conv-ai",
      title: "Conversational AI Assistants",
      description: "Engage visitors and support desks with conversational assistants that handle context seamlessly and maintain high satisfaction rates.",
      icon: MessageSquare,
      glow: "group-hover:border-purple-500/30",
      accent: "text-purple-400 bg-purple-950/25 border-purple-500/20"
    },
    {
      id: "wf-auto",
      title: "Workflow Automation",
      description: "Trigger multi-tier operations, schedule reminders, automate routine document parsing, and synchronize datasets across your tools automatically.",
      icon: Workflow,
      glow: "group-hover:border-indigo-500/30",
      accent: "text-indigo-400 bg-indigo-950/25 border-indigo-500/20"
    },
    {
      id: "cust-eng",
      title: "Personalized Customer Engagement",
      description: "Generate deep tailored updates, dynamically personalized reports, and outreach based on discrete user behaviors and historical preferences.",
      icon: HelpCircle,
      glow: "group-hover:border-cyan-500/30",
      accent: "text-cyan-400 bg-cyan-950/25 border-cyan-500/20"
    },
    {
      id: "ent-api",
      title: "Enterprise AI APIs",
      description: "Access robust sub-second API nodes that feed curated models directly into your core cloud backends, databases, and administrative platforms.",
      icon: Server,
      glow: "group-hover:border-pink-500/30",
      accent: "text-pink-400 bg-pink-950/25 border-pink-500/20"
    },
    {
      id: "voice-intel",
      title: "Voice & Text Intelligence",
      description: "Transform communication structures with hyper-realistic text-to-speech rendering, semantic voice recognition, and real-time audio analysis.",
      icon: Volume2,
      glow: "group-hover:border-emerald-500/30",
      accent: "text-emerald-400 bg-emerald-950/25 border-emerald-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/90">
      
      {/* Decorative backing glows */}
      <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[450px] h-[450px] bg-indigo-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Core Generative Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
            Specialized Corporate AI Services
          </h2>
          <p className="mt-4 text-gray-400 text-base leading-relaxed">
            Harness SonifyAI's modular design matrices to eliminate friction, automate production pipelines, and scale customer experiences.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <div
                key={svc.id}
                className={`group bg-zinc-950/50 hover:bg-zinc-950 border border-zinc-900 ${svc.glow} hover:-translate-y-1.5 transition-all duration-300 rounded-3xl p-8 relative flex flex-col justify-between align-stretch shadow-xl overflow-hidden`}
              >
                {/* Horizontal shimmer glow top */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-indigo-500/45 transition-colors duration-500" />

                <div>
                  {/* Dynamic Glow Icon container */}
                  <div className={`p-3.5 rounded-2xl border ${svc.accent} inline-block mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-white font-sans font-bold text-xl group-hover:text-indigo-300 transition-colors tracking-tight">
                    {svc.title}
                  </h3>

                  <p className="mt-3.5 text-zinc-450 text-sm leading-relaxed font-sans">
                    {svc.description}
                  </p>
                </div>

                {/* Arrow indicator slide-in */}
                <div className="mt-8 pt-5 border-t border-zinc-900/60 flex items-center justify-between text-zinc-500 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-mono tracking-widest uppercase">MODULE_READY</span>
                  <ArrowRight className="w-4.5 h-4.5 translate-x-1 group-hover:translate-x-2 transition-transform duration-300 text-indigo-500" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
