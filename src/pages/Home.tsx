import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  LineChart, 
  FileText, 
  Users, 
  CheckCircle, 
  Lock, 
  ChevronRight,
  TrendingUp,
  Clock,
  Workflow,
  Laptop
} from "lucide-react";
import aiHeroConcept from "../assets/images/ai_hero_concept_1780058364397.png";
import aiDashboardPreview from "../assets/images/ai_dashboard_preview_1780058386286.png";

export default function Home() {
  const [demoStep, setDemoStep] = useState<"idle" | "booking" | "booked">("idle");
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingSlot, setBookingSlot] = useState("");

  const partners = [
    { name: "Acme AI Corp", icon: Cpu },
    { name: "NeuraLinker", icon: Zap },
    { name: "SaaSify Hub", icon: Workflow },
    { name: "SecOps Global", icon: Lock },
    { name: "Aether Dynamics", icon: Sparkles }
  ];

  const stats = [
    { id: "stat-1", value: "99.98%", label: "Uptime SLA Accuracy", sub: "Enterprise Guarantee" },
    { id: "stat-2", value: "92x", label: "Workflow Density Optimization", sub: "Saves Developer Support" },
    { id: "stat-3", value: "1.2s", label: "Average Token Delivery API", sub: "Global Edge Nodes" },
    { id: "stat-4", value: "15M+", label: "Generated Content Files", sub: "Automated Daily" }
  ];

  const corePillars = [
    {
      title: "AI Automation Node",
      desc: "Eliminate friction loops by automating complex industrial pipelines with self-healing modular agents.",
      link: "#/solutions",
      badge: "PLATFORM LEVEL"
    },
    {
      title: "Generative AI Engine",
      desc: "Multi-layered synthetic neural nodes executing real-time voice, text, and data structuring translations.",
      link: "#/platform",
      badge: "LATEST CORE v4"
    },
    {
      title: "AI Copilots",
      desc: "Embed proactive agents directly into legacy web portals, CRMs, and developer workspaces.",
      link: "#/technology",
      badge: "CUSTOMISABLE"
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingName && bookingEmail && bookingSlot) {
      setDemoStep("booked");
    }
  };

  return (
    <div className="relative min-h-screen text-zinc-300">
      
      {/* Immersive glowing global layout overlay background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_10%,#1e1b4b_0%,transparent_70%)] opacity-30 pointer-events-none" />

      {/* Hero Section Container */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Editorial Hero Header */}
            <div className="lg:col-span-7 text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/45 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                <span>Next-Generation Generative AI Standard</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6.5xl font-extrabold font-display text-white tracking-tighter leading-[1.05] mb-6"
              >
                Transforming Businesses <br />
                with <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Generative AI</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-sans"
              >
                Enterprise-grade AI solutions that automate workflows, generate intelligent content, and redefine digital experiences. Scale operations seamlessly.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 text-sm font-sans"
              >
                <a
                  href="#/platform"
                  className="w-full sm:w-auto relative group px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-950/40 text-center flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
                >
                  Explore Platform
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#/solutions"
                  className="w-full sm:w-auto px-6 py-4 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 hover:text-white border border-zinc-805 font-medium rounded-xl text-center cursor-pointer block"
                >
                  Get Started
                </a>

                <button
                  onClick={() => setDemoStep("booking")}
                  className="w-full sm:w-auto px-6 py-4 bg-indigo-950/20 hover:bg-indigo-950/40 text-indigo-300 font-bold border border-indigo-500/25 rounded-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4 text-indigo-400" />
                  Book Live Demo
                </button>
              </motion.div>

              {/* Trusted Standard Audit */}
              <div className="mt-10 pt-8 border-t border-zinc-900/60 flex items-center gap-3 text-zinc-500">
                <ShieldCheck className="w-4.5 h-4.5 text-indigo-500 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-wider">CERTIFIED SOC2 TYPE II COMPLIANCE workSPACE</span>
              </div>

            </div>

            {/* Right Column: Mini Interactive UI Dashboard Preview */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-3xl pointer-events-none" />
              
              <div className="glass-panel p-5 rounded-2xl border border-zinc-900 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-mono text-zinc-500 ml-2 font-bold uppercase">SONIFYAI ENGINE_READY</span>
                  </div>
                  <span className="text-[9px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-950 border border-indigo-500/20 font-bold uppercase">ACTIVE OK</span>
                </div>

                {/* Highly detailed AI dashboard generated asset preview */}
                <div className="mb-4.5 relative rounded-xl overflow-hidden border border-zinc-900 shadow-inner group">
                  <img 
                    src={aiDashboardPreview} 
                    alt="SonifyAI Analytics Dashboard Mockup" 
                    className="w-full h-auto object-cover aspect-[4/3] rounded-xl transform group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-30 pointer-events-none" />
                </div>

                {/* Simulated Content Matrix */}
                <div className="space-y-3.5">
                  <div className="p-3.5 bg-zinc-950/60 border border-zinc-900 rounded-xl relative">
                    <span className="text-[8px] font-mono text-zinc-500 block uppercase font-bold tracking-wider">COMPUTATIONAL CORE UTILIZATION</span>
                    <div className="flex items-center justify-between gap-4 mt-2">
                      <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full rounded-full w-[84%]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-white shrink-0">84% SLA</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-zinc-950/60 border border-zinc-900 rounded-xl relative">
                    <span className="text-[8px] font-mono text-zinc-500 block uppercase font-bold tracking-wider">SYNTHETIC PROCESSING RATE</span>
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center gap-1 text-emerald-400 font-mono text-xs font-bold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>+22.4 GB/s</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">Delay Time: <strong className="text-white">0.02ms</strong></span>
                    </div>
                  </div>

                  {/* Tiny Graph mock */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-2.5 bg-indigo-950/15 border border-indigo-500/10 rounded-xl">
                      <span className="text-[8px] font-mono text-zinc-500 block uppercase">MODEL A</span>
                      <span className="text-xs font-bold text-indigo-400 mt-1 block">99.4%</span>
                    </div>
                    <div className="p-2.5 bg-indigo-950/15 border border-indigo-500/10 rounded-xl">
                      <span className="text-[8px] font-mono text-zinc-500 block uppercase">MODEL B</span>
                      <span className="text-xs font-bold text-cyan-400 mt-1 block">98.8%</span>
                    </div>
                    <div className="p-2.5 bg-indigo-950/15 border border-indigo-500/10 rounded-xl">
                      <span className="text-[8px] font-mono text-zinc-500 block uppercase">LATENCY</span>
                      <span className="text-xs font-bold text-emerald-400 mt-1 block">-65%</span>
                    </div>
                    <div className="p-2.5 bg-indigo-950/15 border border-indigo-500/10 rounded-xl">
                      <span className="text-[8px] font-mono text-zinc-500 block uppercase">SAFETY</span>
                      <span className="text-xs font-bold text-amber-400 mt-1 block">TLS1.3</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 border-b border-zinc-900/30 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest block text-center mb-8">
            TRUSTED BY FORWARD-THINKING ENTERPRISES GLOBALLY
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-default">
                  <Icon className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-sans font-bold uppercase tracking-wider">{pt.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((st) => (
              <div key={st.id} className="glass-panel p-6 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-colors text-left relative">
                <span className="text-3xl md:text-4xl font-mono font-bold text-white block bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                  {st.value}
                </span>
                <span className="text-xs font-bold text-indigo-400 block mt-2 font-mono uppercase tracking-wider">
                  {st.label}
                </span>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                  {st.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Technology Spotlight Banner */}
      <section className="py-16 border-t border-zinc-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-zinc-900 bg-zinc-950/25 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest leading-none block mb-4">
                CORE SYNTHETIC INFRASTRUCTURE
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none mb-6">
                Next-Gen Generative Acoustic Engine
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                Our ultra-low latency technology synthesizes real-world conversational parameters and constructs dynamic knowledge representations. Designed with local governance models complying with the DPDP standard, SonifyAI ensures maximum safety and high fidelity for your global workflow automations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-indigo-950 flex items-center justify-center text-indigo-400 text-xs shrink-0 mt-0.5 border border-indigo-500/10">✓</div>
                  <div>
                    <strong className="text-white text-xs block mb-0.5">Dual-Stream Neural Flow</strong>
                    <span className="text-zinc-500 text-[11px] block leading-relaxed">Coordinates simultaneous multi-modal semantic paths with zero quality degradation.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-indigo-950 flex items-center justify-center text-indigo-400 text-xs shrink-0 mt-0.5 border border-indigo-500/10">✓</div>
                  <div>
                    <strong className="text-white text-xs block mb-0.5">DPDP Compliant Pipelines</strong>
                    <span className="text-zinc-500 text-[11px] block leading-relaxed">Local, secure air-gapped container configurations to preserve confidential corporate integrity.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl group">
                <img 
                  src={aiHeroConcept} 
                  alt="Neural Acoustic wave engine visual" 
                  className="w-full h-auto object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-[750ms]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Pillars page redirection section */}
      <section className="py-16 border-t border-zinc-900/40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest leading-none block mb-4">
              PRODUCT ARCHITECTURE BLUEPRINTS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Enterprise Generative Pillars
            </h2>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              Accelerate decision matrices and content deployment with custom infrastructure layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar, i) => (
              <div 
                key={i}
                className="glass-panel p-8 rounded-3xl border border-zinc-900 flex flex-col justify-between items-stretch text-left hover:bg-zinc-900/10 transition-all group"
              >
                <div>
                  <span className="text-[9px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-950 border border-indigo-500/20 font-bold uppercase tracking-wider block w-fit mb-6">
                    {pillar.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-8">
                    {pillar.desc}
                  </p>
                </div>
                <a 
                  href={pillar.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 group-hover:text-white transition-colors uppercase tracking-wider font-mono cursor-pointer"
                >
                  Explore Platform_
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo booking modal overlay detail */}
      {demoStep === "booking" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-panel max-w-md w-full p-6 text-left border border-zinc-800 rounded-2xl relative shadow-2xl">
            <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-400" />
              Book Live Demo Slot
            </h3>
            <p className="text-zinc-400 text-xs mb-6">
              Establish interactive contact with some of our corporate technical staff. Select a standard slot:
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">Corporate Name</label>
                <input 
                  type="text" 
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  placeholder="e.g. Acme Admin Support" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-850 focus:border-indigo-500 p-2.5 rounded-xl text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">Contact Email</label>
                <input 
                  type="email" 
                  value={bookingEmail}
                  onChange={(e) => setBookingEmail(e.target.value)}
                  placeholder="e.g. support@acme.ai" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-850 focus:border-indigo-500 p-2.5 rounded-xl text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">Select Time Slot</label>
                <select 
                  value={bookingSlot}
                  onChange={(e) => setBookingSlot(e.target.value)}
                  required
                  className="w-full bg-zinc-950 border border-zinc-850 focus:border-indigo-500 p-2.5 rounded-xl text-xs text-white focus:outline-none"
                >
                  <option value="">-- Choose Slot --</option>
                  <option value="mon-10am">Monday, 10:00 AM IST</option>
                  <option value="wed-2pm">Wednesday, 2:00 PM IST</option>
                  <option value="fri-11am">Friday, 11:00 AM IST</option>
                </select>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setDemoStep("idle")}
                  className="w-1/2 p-2.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-850 rounded-xl font-bold border border-zinc-800 transition-all cursor-pointer text-center"
                >
                  Cancel
                </button>
                <button 
                  type="onSubmit"
                  className="w-1/2 p-2.5 text-xs text-white bg-indigo-650 hover:bg-indigo-650 rounded-xl font-bold transition-all hover:scale-103 cursor-pointer text-center"
                >
                  Confirm Slot_
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {demoStep === "booked" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-panel max-w-sm w-full p-6 text-center border border-zinc-800 rounded-2xl relative shadow-2xl">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-white mb-2">Slot Scheduled!</h3>
            <p className="text-zinc-400 text-xs mb-6">
              Thank you, <strong className="text-zinc-200">{bookingName}</strong>. A confirmation calendar invitation has been fired to <strong className="text-indigo-400">{bookingEmail}</strong> for the slot <strong className="text-zinc-200">{bookingSlot}</strong>.
            </p>
            <button 
              onClick={() => setDemoStep("idle")}
              className="px-5 py-2 text-xs font-mono font-bold text-white bg-indigo-650 hover:bg-indigo-650 rounded-lg cursor-pointer"
            >
              Close Overlay
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
