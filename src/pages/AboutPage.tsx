import React from "react";
import { motion } from "motion/react";
import { 
  Building, 
  MapPin, 
  Mail, 
  Globe, 
  User, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Map, 
  TrendingUp,
  Inbox
} from "lucide-react";

export default function AboutPage() {
  const companyValues = [
    {
      title: "Absolute Sovereignty",
      desc: "We prioritize local GDPR air-gapped target parameters to protect the vital structural databases of our corporate allies."
    },
    {
      title: "Adaptive Rigor",
      desc: "Our neural routing nodes are dynamically fine-tuned to eradicate robotic conversational artifacts and synthetic delusions."
    },
    {
      title: "Democratic Speed",
      desc: "We deliver extreme global latency bounds under 0.05ms to make smart automation standard practice worldwide."
    }
  ];

  const roadmapCycles = [
    { quarter: "Q3 2026", title: "Sonify-Ultra v4.5 Rollout", desc: "Compile 1.4T параметр clusters with enhanced factual inference bounds." },
    { quarter: "Q4 2026", title: "Symmetric Telephony Trunks", desc: "Direct sip connection integration pipelines with voice nodes." },
    { quarter: "Q1 2027", title: "Autonomous Healing Agents", desc: "Release of stateful self-correcting automation cron workers." }
  ];

  return (
    <div className="relative min-h-screen text-zinc-300 py-32 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(99,102,241,0.06),transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Company Intro & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 text-left">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest leading-none block mb-4">
              INTELLECTUAL ROOTS & DIRECTIVES
            </span>
            <h1 className="text-4xl md:text-6.5xl font-extrabold font-display text-white tracking-tighter mb-6 leading-none">
              SonifyAI Private Limited
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-sans">
              SonifyAI Private Limited is a next-generation generative AI company focused on transforming how businesses create, automate, and interact with digital content using cutting-edge artificial intelligence technologies.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
              We provide enterprise AI solutions, automation systems, AI copilots, generative AI platforms, and intelligent business tools that help companies scale faster and innovate smarter.
            </p>
          </div>

          {/* Mission Stats panel */}
          <div className="lg:col-span-5">
            <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4">
                <Target className="w-5 h-5 text-indigo-500 animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-white font-display mb-4">Core Mission & Vision</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                Our vision is to coordinate a seamless, hyper-intelligent enterprise landscape where transactional workflows require zero manual translation loop copy-pasting, routing automated intelligence globally with total security.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Spotlights: Profile with Renu Yadav */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-zinc-900 bg-zinc-950/20 text-left mb-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-6 hidden md:block">
            <span className="text-[9px] font-mono text-indigo-400 border border-indigo-500/25 bg-indigo-950 px-2 rounded font-bold uppercase tracking-wider">
              VERIFIED EXECUTIVE LEADERSHIP
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Col Profile Card placeholder with premium corporate design */}
            <div className="lg:col-span-4 flex flex-col justify-between items-center text-center p-6 bg-zinc-950 border border-zinc-900 rounded-2xl">
              <div className="relative">
                {/* Simulated high-fidelity avatar placeholder */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-1 mb-4 relative overflow-hidden shadow-md">
                  <div className="absolute inset-x-0 bottom-0 bg-black/40 p-1 text-[8px] font-mono text-emerald-400 font-extrabold uppercase tracking-widest leading-none">
                    CEO_REPRESENTATIVE
                  </div>
                  <User className="w-full h-full text-white/50 p-6 transform scale-105" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-display">Renu Yadav</h3>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mt-1 font-bold">Founder & CEO</span>
                <span className="text-[10px] text-zinc-550 block font-mono">SonifyAI Private Limited</span>
              </div>

              <div className="w-full h-[1px] bg-zinc-900 my-4" />

              {/* Direct secure communication anchors */}
              <div className="space-y-2 w-full text-left">
                <span className="text-[8px] font-mono text-zinc-550 block uppercase tracking-widest font-bold">Encrypted Desk Loops</span>
                <a 
                  href="mailto:renuyadav@sonifyai.tech" 
                  className="flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-indigo-400 transition-colors bg-zinc-950 p-2 border border-zinc-850/60 rounded-xl"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">renuyadav@sonifyai.tech</span>
                </a>
              </div>
            </div>

            {/* Right Col CEO Statement letter details */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-indigo-400 block uppercase tracking-wide mb-3 font-semibold font-mono">
                  MESSAGE FROM EXECUTIVE BOARD_
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold font-display text-white tracking-tight leading-relaxed mb-6">
                  &ldquo;A digital revolution centered purely on factual scaling, secure sovereignty, and frictionless automation.&rdquo;
                </h3>
                
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4 font-sans">
                  The primary bottleneck holding modern enterprises back is not a lack of internal computing capacity; it is the sheer fragmentation of workflow structures. Employees spend billions of manual hours copying context between systems.
                </p>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans">
                  At SonifyAI Private Limited, we design secure generative bridges that bind legacy servers with local neural reasoning models. By prioritizing digital sovereignty, compliance with DPDP standards, and lightning-fast speeds, we help you transform simple instructions into automated enterprise ecosystems.
                </p>
              </div>

              {/* CEO verified signatures and corporate stamps */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-zinc-900 mt-6">
                <div className="font-mono text-[10px] text-zinc-500">
                  <div>AUTHORIZED ISSUER: <strong className="text-indigo-400 font-bold uppercase">RENU YADAV</strong></div>
                  <div>SEC_REG_STAMP: <strong className="text-white font-semibold">4820_PREM_NAGAR</strong></div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-950 border border-zinc-900 text-[9px] font-mono text-emerald-400 select-none">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>ONLINE VERIFIED DESK ID</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Corporate core Values list */}
        <div className="mb-24">
          <h2 className="text-2xl font-display font-extrabold text-white text-left mb-8 flex items-center gap-2">
            🧬 Our Operational Culture Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyValues.map((val, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-3xl text-left hover:border-zinc-850 transition-colors"
              >
                <span className="text-[9px] font-mono text-indigo-400 block uppercase mb-4">Value Core / 0{idx + 1}</span>
                <h3 className="text-base font-bold text-white font-display mb-2">{val.title}</h3>
                <p className="text-zinc-450 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate roadmap pipeline */}
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-display font-extrabold text-white mb-2 text-center flex items-center justify-center gap-2">
            🔮 Deployment Roadmap
          </h2>
          <p className="text-zinc-550 text-xs text-center mb-10">
            A high-level trace of our forthcoming core structural model updates and SIP telephony pipeline integrations.
          </p>

          <div className="space-y-6 relative border-l border-zinc-900 ml-4 font-sans">
            {roadmapCycles.map((rd, i) => (
              <div key={i} className="relative pl-8">
                {/* Node icon dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-black" />
                
                <span className="text-[10px] font-mono text-indigo-400 block font-bold uppercase">{rd.quarter}</span>
                <h3 className="text-sm font-bold text-white block mt-1">{rd.title}</h3>
                <p className="text-zinc-400 text-xs whitespace-pre-line mt-1 leading-relaxed">
                  {rd.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
