import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  Scale, 
  ArrowLeft, 
  Building, 
  Mail, 
  User, 
  Clock, 
  Printer, 
  Download, 
  ChevronRight,
  Shield,
  FileCheck,
  AlertOctagon,
  ScrollText
} from "lucide-react";

interface TermsConditionsProps {
  onClose: () => void;
}

export default function TermsConditions({ onClose }: TermsConditionsProps) {
  const [activeSection, setActiveSection] = useState("sec-1");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "sec-1", title: "1. Acceptance of Agreement", icon: FileCheck },
    { id: "sec-2", title: "2. Client Accounts & Playgrounds", icon: ScrollText },
    { id: "sec-3", title: "3. Computing SLA & Safe Harbor", icon: Shield },
    { id: "sec-4", title: "4. Intellectual Assets Protection", icon: Building },
    { id: "sec-5", title: "5. Legal Venue & Jurisdiction", icon: Scale },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-indigo-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-950/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Document Header Nav */}
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
              Terms & Conditions
            </h1>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1.5">
              DOCUMENT IDENTIFIER: SONIFY-TERMS-SLA-V2 // OFFICIAL BINDING
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

        {/* Info Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">Service SLA Standard</span>
              <span className="text-xs text-white font-bold block">Enterprise Standard Contract</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">Estimated Read Time</span>
              <span className="text-xs text-white font-bold block">5 Minutes</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">Governing Office</span>
              <span className="text-xs text-white font-bold block">Mumbai, Maharashtra, IN</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Index mapping */}
          <div className="lg:col-span-4 sticky top-24 space-y-4 text-left">
            <div className="p-5 rounded-2xl border border-zinc-900/60 bg-zinc-900/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-4">
                AGREEMENT SECTIONS
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
                TERMS CLARIFICATION
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

          {/* Core terms document */}
          <div className="lg:col-span-8 space-y-12 bg-black/35 border border-zinc-900 rounded-2xl p-6 sm:p-10 text-left relative">
            
            <div className="flex items-center gap-2 font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-6">
              <Clock className="w-3.5 h-3.5" />
              <span>Effective Date: May 29, 2026</span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1.5 animate-pulse" />
              <span className="text-indigo-400 text-[9px] font-sans">PUBLISHED SL-V2</span>
            </div>

            {/* Section 1 */}
            <div id="sec-1" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">01</span>
                Acceptance of Agreement
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                These Terms and Conditions ("Terms", "Agreement") constitute a legally binding service-access contract between you ("User", "Client") and sonifyai Private Limited ("Company", "sonifyai"), regulating your access to, and usage of, the websites, sandboxes, and automated generative layers.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                By initializing your portal session or authenticating an account within our workspace, you acknowledge that you have read, understood, and consented to these terms. If you do not accept these guidelines, you are prohibited from deploying or interacting with sonifyai's system protocols.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Section 2 */}
            <div id="sec-2" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">02</span>
                Client Accounts & Playgrounds
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                When registering for playground sandboxes or full-scale enterprise nodes, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm">
                <li>Provide current, accurate, and complete registration information without masquerading.</li>
                <li>Sustain the confidentiality of active authentication tokens.</li>
                <li>Acknowledge sole responsibility for execution loops and token computations initiated registered to your identifier.</li>
              </ul>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We reserve the functional authority to terminate, purge, lock, or limit user registrations if fraudulent workspace setups or security breaches are identified.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Section 3 */}
            <div id="sec-3" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">03</span>
                Computing SLA & Safe Harbor
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our platform targets sustained standard uptime parameters of 99.98% across distributed API nodes. However, operations may be suspended forScheduled maintenance loops, configuration upgrades, or structural hotfixes.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Under no circumstances shall sonifyai Private Limited, or its directors, engineers, and suppliers, be held liable for any direct, indirect, accidental, or regulatory damages arising from database reboots or transient server latency.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Section 4 */}
            <div id="sec-4" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">04</span>
                Intellectual Assets Protection
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                All layouts, visual structures, proprietary code templates, brand graphics, trademark names, and integrated user-interface paradigms found here are the exclusive intellectual property of sonifyai Private Limited.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                You are strictly forbidden from mirroring, replicating, scraping, decompiling, or mapping these system layers without express written consent from the executive board.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Section 5 */}
            <div id="sec-5" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">05</span>
                Legal Venue & Jurisdiction
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                These Terms shall be governed, managed, and construed in accordance with the laws of India, specifically under Mumbai jurisdiction rules, without regard to conflict of law criteria. Any claims, disputes, or filings must be brought directly to Mumbai, Maharashtra court levels.
              </p>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-xs font-mono text-zinc-500 leading-relaxed text-left block">
                <strong className="text-indigo-400 block mb-1">INDEMNITY CLAUSE:</strong>
                User agrees to indemnify and hold completely harmless sonifyai Private Limited and its affiliates from and against any claims, losses, or resource costs resulting from User's breach of software boundaries.
              </div>
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
