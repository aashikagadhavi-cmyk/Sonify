import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  AlertTriangle, 
  ArrowLeft, 
  Building, 
  Mail, 
  User, 
  Clock, 
  Printer, 
  Download, 
  ChevronRight,
  ShieldAlert,
  Cpu,
  Bookmark
} from "lucide-react";

interface DisclaimerProps {
  onClose: () => void;
}

export default function Disclaimer({ onClose }: DisclaimerProps) {
  const [activeSection, setActiveSection] = useState("sec-1");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "sec-1", title: "1. No-Warranty 'As-Is' Status", icon: ShieldAlert },
    { id: "sec-2", title: "2. Experimental Sandbox Scope", icon: Cpu },
    { id: "sec-3", title: "3. Professional Advice Exclusion", icon: AlertTriangle },
    { id: "sec-4", title: "4. External Integration Nodes", icon: Bookmark },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-20 w-[500px] h-[500px] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-red-950/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Navigation & Header */}
        <div className="mb-12 border-b border-zinc-900 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-left">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-indigo-400 font-mono text-xs uppercase tracking-wider mb-4 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Portal
            </button>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Legal Disclaimer
            </h1>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1.5">
              DOCUMENT IDENTIFIER: SONIFY-DISCLAIMER-R3 // LIABILITY LIMITATIONS
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono font-bold flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              PRINT
            </button>
            <button 
              onClick={() => alert("Document downloaded successfully.")}
              className="px-4 py-2 rounded-xl bg-indigo-650 hover:bg-indigo-650 text-white text-xs font-mono font-bold flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              DOWNLOAD_PDF
            </button>
          </div>
        </div>

        {/* Corporate Header Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-950/30 border border-red-500/15 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">WARRANTY MITIGATION</span>
              <span className="text-xs text-white font-bold block">No Warranty &amp; As-Is</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">Estimated Read Time</span>
              <span className="text-xs text-white font-bold block">3 Minutes</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">Corporate HQ</span>
              <span className="text-xs text-white font-bold block">sonifyai Private Limited</span>
            </div>
          </div>
        </div>

        {/* Sidebar and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Index Sidebar */}
          <div className="lg:col-span-4 sticky top-24 space-y-4 text-left">
            <div className="p-5 rounded-2xl border border-zinc-900/60 bg-zinc-900/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-4">
                DISCLAIMER INDEX
              </span>
              <div className="space-y-2">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={() => setActiveSection(sec.id)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all border text-xs font-medium cursor-pointer ${
                        isActive
                          ? "bg-indigo-950/45 border-indigo-500/35 text-white font-bold"
                          : "border-transparent text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-indigo-400" />
                        {sec.title}
                      </span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Helpline */}
            <div className="p-5 rounded-2xl border border-zinc-900 bg-zinc-950/50">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-550 block mb-3">
                REGULATORY CLARITY
              </span>
              <div className="space-y-3 font-sans text-xs">
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-zinc-300">Renu Yadav, CEO</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <a href="mailto:renuyadav@sonifyai.tech" className="text-zinc-300 hover:text-indigo-400 font-semibold font-mono">
                    renuyadav@sonifyai.tech
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Core Content Box */}
          <div className="lg:col-span-8 space-y-12 bg-black/35 border border-zinc-900 rounded-2xl p-6 sm:p-10 text-left relative">
            
            <div className="flex items-center gap-2 font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-6">
              <Clock className="w-3.5 h-3.5" />
              <span>Effective Date: May 29, 2026</span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1.5" />
              <span className="text-indigo-400 text-[9px] font-sans">LATEST PORTAL REVISION</span>
            </div>

            {/* Paragraph 1 */}
            <div id="sec-1" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">01</span>
                "As-Is" Service Warranty Exclusions
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                All digital properties, software tools, model structures, and interactive results are delivered on an <strong className="text-zinc-200">"AS-IS"</strong> and <strong className="text-zinc-200">"AS-AVAILABLE"</strong> model without express or implicit representations of any format. We disclaim all warranties including, but not limited to, implied merchantability, precision, non-infringement of rights, and continuous uptime configurations.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We make no representation that the platform will operate absolutely error-free, uninterrupted, or fully immune from security glitches or malicious external disruptions.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Paragraph 2 */}
            <div id="sec-2" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">02</span>
                Experimental Sandbox Scope
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Outputs rendered via the "Playground", sandbox tabs, or voice and text modules represent live neural-network calculations. They do not represent final technical, legal, financial, or corporate counsel from sonifyai Private Limited.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The client assumes complete functional risk regarding the deployment or utility of outputs generated within these experimental playgrounds.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Paragraph 3 */}
            <div id="sec-3" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">03</span>
                Professional Advice Exclusion
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The content hosted on our websites is for introductory, and simulation-based purposes. Our computing resources, synthetic summaries, translation tables, and automated models do not constitute binding engineering, financial, tax, legal, or management consulting. 
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Always seek professional counsel from accredited human specialists prior to deploying mission-critical industrial workloads.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Paragraph 4 */}
            <div id="sec-4" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">04</span>
                External Integration Links
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our portal may link to, or refer to, external API endpoints, software packages, GitHub repositories, or cloud platforms operated by independent parties. We maintain no governing control over the uptime, correctness, cookies, or privacy terms of external websites and assume zero liability for their system operations.
              </p>
            </div>

            {/* Finish Action */}
            <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-wider block">
                sonifyai Private Limited &copy; Registered Mumbai, MH, India
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-zinc-90 w-fit hover:bg-zinc-900 text-white font-display font-bold text-xs border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
              >
                Accept & Return to Summit_
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
