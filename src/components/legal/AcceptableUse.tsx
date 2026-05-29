import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  ShieldAlert, 
  ArrowLeft, 
  Building, 
  Mail, 
  User, 
  Clock, 
  Printer, 
  Download, 
  ChevronRight,
  ShieldCheck,
  AlertOctagon,
  Cpu,
  Zap
} from "lucide-react";

interface AcceptableUseProps {
  onClose: () => void;
}

export default function AcceptableUse({ onClose }: AcceptableUseProps) {
  const [activeSection, setActiveSection] = useState("sec-1");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "sec-1", title: "1. Computing Boundaries & Scope", icon: Cpu },
    { id: "sec-2", title: "2. Restricted Misconducts List", icon: AlertOctagon },
    { id: "sec-3", title: "3. Rate Limits & Token Controls", icon: Zap },
    { id: "sec-4", title: "4. Abuse Report Compliance", icon: ShieldCheck },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background radial displays */}
      <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-indigo-950/15 rounded-full blur-[130px] pointer-events-none" />

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
              Acceptable Use Policy
            </h1>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1.5">
              DOCUMENT IDENTIFIER: SONIFY-AUP-POL-V3 // SAFE HOSTING MANDATES
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-zinc-90 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono font-bold flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
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

        {/* Corporate header details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center justify-center text-red-400 font-mono text-xs font-bold">
              !
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">ABUSE ENFORCEMENT</span>
              <span className="text-xs text-white font-bold block">Zero Tolerance Policy</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block font-bold">Estimated Read Time</span>
              <span className="text-xs text-white font-bold block">3 Minutes</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block font-bold">Incorporator</span>
              <span className="text-xs text-white font-bold block block">sonifyai Private Limited</span>
            </div>
          </div>
        </div>

        {/* Sidebar and Document column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Section index map */}
          <div className="lg:col-span-4 sticky top-24 space-y-4 text-left">
            <div className="p-5 rounded-2xl border border-zinc-900/60 bg-zinc-900/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-4">
                AGREEMENT CODE
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
                REPORT VIOLATION
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

          {/* Document Content right panel */}
          <div className="lg:col-span-8 space-y-12 bg-black/35 border border-zinc-900 rounded-2xl p-6 sm:p-10 text-left relative">
            
            <div className="flex items-center gap-2 font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-6">
              <Clock className="w-3.5 h-3.5" />
              <span>Effective Date: May 29, 2026</span>
              <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1.5 animate-pulse" />
              <span className="text-red-400 text-[9px] font-sans">COMPLIANCE PORTAL V3</span>
            </div>

            {/* Section 1 */}
            <div id="sec-1" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">01</span>
                Computing Boundaries & Scope
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                This Acceptable Use Policy ("AUP") defines the software boundaries and computational conditions required from users when accessing the web-based sandboxes, voice-cloning configurations, content tools, and APIs hosted by sonifyai Private Limited.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                By entering our portal workspaces, you agree to refrain from deploying high-frequency scripts or unauthorized execution bots that could disrupt structural cloud integrity.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Section 2 */}
            <div id="sec-2" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">02</span>
                Restricted Misconducts List
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Clients are strictly prohibited from utilizing sonifyai's system layers or sandbox environments to generate, compile, host, or propagate any of the following:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm">
                <li><strong className="text-zinc-200">Deceptive Content Generation:</strong> Replicating voice samples or writing synthetic credentials with intent to defraud or masquerade as real individuals like corporate officers.</li>
                <li><strong className="text-zinc-200">Malicious Computational Payloads:</strong> Deploying viruses, malware, trojan routines, or brute-force packet tests targeting our system ports.</li>
                <li><strong className="text-zinc-200">System Flooding Actions:</strong> Setting up infinite execution loops or sending recursive API headers to cause server reboots.</li>
                <li><strong className="text-zinc-200">Reverse Compilation Loops:</strong> Exposing code components to scrapers, spiders, or machine learning algorithms designed to harvest intellectual IP assets.</li>
              </ul>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Section 3 */}
            <div id="sec-3" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">03</span>
                Rate Limits & Token Controls
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                To guarantee equal operational bandwidth across sandbox environments, we impose automated rate-control boundaries:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm bg-zinc-950/40 p-4 border border-zinc-900 rounded-xl mt-3 font-mono text-xs space-y-1 block">
                <li><span className="text-indigo-400">PLAYGROUND CLOUD NODES:</span> Max 60 request headers per minute per Client IP.</li>
                <li><span className="text-indigo-400">VOICE SYNTHESIS NODES:</span> Max 10 minutes of active calculations per active token.</li>
                <li><span className="text-indigo-400">UNSECURED CONCURRENT THREADS:</span> Limit to 3 execution channels simultaneously.</li>
              </ul>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Section 4 */}
            <div id="sec-4" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">04</span>
                Abuse Report & Enforcement
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                If structural violations or malicious playground payloads are flagged, our security modules immediately execute:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-sm">
                <li>Graceful session resets with console alerts.</li>
                <li>System-wide blocking of offending IP coordinates.</li>
                <li>Legal reporting to statutory internet safety authorities.</li>
              </ul>
              <p className="text-zinc-400 text-sm leading-relaxed mt-2">
                To report active policy abuses or coordinate workspace exceptions, submit detail structures to our Chief Compliance Officer at: <a href="mailto:renuyadav@sonifyai.tech" className="text-indigo-400 hover:underline font-mono font-semibold">renuyadav@sonifyai.tech</a>.
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
