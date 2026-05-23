import React from "react";
import { Cpu, Zap, Shield, Share2, TrendingUp, HeartHandshake, Sparkles, Check } from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      id: "alm",
      title: "Advanced Language Models",
      detail: "Leverage state-of-the-art models fine-tuned specifically for corporate logic, multi-format synthesis, and task routing with supreme parameter accuracy.",
      icon: Cpu,
      meta: "LATEST GENERATION"
    },
    {
      id: "rt-response",
      title: "Real-Time AI Responses",
      detail: "Incorporate sub-second inference layers designed for real-time customer feedback portals, active terminal utilities, and instantaneous voice synclining.",
      icon: Zap,
      meta: "LATENCY < 240MS"
    },
    {
      id: "sec-cloud",
      title: "Secure Cloud Infrastructure",
      detail: "Fully isolated virtual spaces, dedicated servers, persistent data compliance, and end-to-end data sanitization compliant with global SOC2 parameters.",
      icon: Shield,
      meta: "SOC2 REGISTERED"
    },
    {
      id: "ent-int",
      title: "Enterprise Integrations",
      detail: "Synchronize models out-of-the-box with tools like Salesforce, Slack, Hubspot, Google Workspaces, and existing custom enterprise databases.",
      icon: Share2,
      meta: "CONNECTORS ENABLED"
    },
    {
      id: "scale-auto",
      title: "Scalable Automation",
      detail: "Automate millions of operations reliably. Our queue orchestrator balances surge queries automatically to assure uninterrupted performance.",
      icon: TrendingUp,
      meta: "UNLIMITED QUOTA"
    },
    {
      id: "hc-design",
      title: "Human-Centric AI Design",
      detail: "Engage teams with interfaces crafted around logical human workflows — keeping your operators securely in-the-loop for oversight validation.",
      icon: HeartHandshake,
      meta: "SAFETY SANITIZED"
    }
  ];

  return (
    <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Structural divider glow */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Background glow node */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-4">
              Advanced System Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
              Enterprise Orchestrator <br />
              Feature Matrix
            </h2>
          </div>
          
          <div className="lg:col-span-6 text-left lg:text-right pb-1">
            <p className="text-zinc-500 text-sm max-w-md lg:ml-auto">
              Our comprehensive system incorporates rigorous edge parameters to prevent latency, safeguard operations, and scale productivity efficiently.
            </p>
          </div>
        </div>

        {/* Bento/Glow Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-black/40 hover:bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 rounded-2xl p-6 relative group overflow-hidden"
              >
                {/* Micro glow badge on corner decor */}
                <div className="absolute top-0 right-0 p-3 flex items-center justify-center pointer-events-none">
                  <span className="text-[9px] font-mono text-zinc-650 group-hover:text-indigo-400/80 transition-colors uppercase">
                    {feat.meta}
                  </span>
                </div>

                {/* Animated corner status node */}
                <div className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-zinc-850 flex items-center justify-center text-zinc-450 group-hover:text-white group-hover:border-indigo-500/30 transition-all mb-6">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>

                <h3 className="text-white font-sans font-bold text-lg group-hover:text-indigo-300 transition-colors">
                  {feat.title}
                </h3>

                <p className="mt-3 text-zinc-400 text-xs leading-relaxed font-sans">
                  {feat.detail}
                </p>

                {/* Micro list attributes */}
                <div className="mt-5 pt-4 border-t border-zinc-900 flex items-center gap-2 text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex-shrink-0" />
                  STABLE INTEGRATION MODULE
                </div>

              </div>
            );
          })}
        </div>

        {/* Feature horizontal list / performance tracker metrics */}
        <div className="mt-16 bg-zinc-900/20 border border-zinc-900 p-6 md:p-8 rounded-2xl flex flex-wrap md:flex-nowrap items-center justify-between gap-6 backdrop-blur-md">
          <div className="text-left">
            <h4 className="text-white font-sans font-bold text-base">Continuous Upstream Model Validation</h4>
            <p className="text-zinc-550 text-xs mt-1">Our nodes regularly validate output coherence and track real-time hallucinations below 0.12%.</p>
          </div>
          
          <div className="flex items-center gap-8 flex-shrink-0">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 block">OUTPUT COHERENCE</span>
              <span className="text-xl font-bold font-mono text-emerald-400">99.88%</span>
            </div>
            
            <div className="border-l border-zinc-800 h-10" />

            <div>
              <span className="text-[10px] font-mono text-zinc-500 block">SYSTEM BUFFER</span>
              <span className="text-xl font-bold font-mono text-indigo-400">2.1μs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
