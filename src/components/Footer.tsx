import React from "react";
import { Bot, Mail, ShieldAlert, Cpu, Terminal, ArrowUpCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-zinc-900 relative overflow-hidden" id="app-footer">
      
      {/* Small design grid mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_90%,#111_10%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Column 1: Info */}
          <div className="md:col-span-5 text-left flex flex-col justify-between">
            <div>
              <a href="#" className="flex items-center gap-2.5 group mb-6">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center p-0.5 shadow-md shadow-indigo-950/20">
                  <Bot className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <span className="font-sans font-bold text-white text-base tracking-tight block">
                    Sonify<span className="text-indigo-400">AI</span>
                  </span>
                  <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest block leading-none">
                    Private Limited
                  </span>
                </div>
              </a>

              <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-sans">
                SonifyAI Private Limited is a next-generation generative AI company focused on transforming how businesses create, automate, and interact with digital content.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-mono text-zinc-650 uppercase tracking-widest block">Contact Coordinates</span>
              <a href="mailto:info@sonifyai.com" className="flex items-center gap-2 text-xs font-sans text-white hover:text-indigo-400 transition-colors">
                <Mail className="w-4.5 h-4.5 text-indigo-500" />
                info@sonifyai.com
              </a>
            </div>
          </div>

          {/* Column 2: Tech Capabilities */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6">Core Services</h4>
            <ul className="space-y-3.5 text-sm font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">AI Content Generator</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conversational Assistants</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Voice Synthesis Nodes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Enterprise AI APIs</a></li>
            </ul>
          </div>

          {/* Column 3: Platform Resources */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-3.5 text-sm font-sans">
              <li><a href="#playground" className="hover:text-white transition-colors">Demo Sandbox</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">System Layers</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors font-semibold text-indigo-400">Why SonifyAI</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features Matrix</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Step Timeline</a></li>
            </ul>
          </div>

          {/* Column 4: System Telemetry */}
          <div className="md:col-span-2 text-left flex flex-col justify-between items-start">
            <div>
              <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6 block">Environment</h4>
              <div className="rounded-lg bg-zinc-950 border border-zinc-900 p-4 font-mono text-[9px] text-zinc-550 leading-normal space-y-1 block w-full">
                <div>SYSTEM: <span className="text-emerald-400 font-bold">ONLINE</span></div>
                <div>SERVER: <span className="text-indigo-400 font-bold">NODE_09X</span></div>
                <div>SEC_VER: <span className="text-zinc-400">3.2_TLS</span></div>
                <div>SLA_KPI: <span className="text-white font-semibold">99.98%</span></div>
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={handleScrollTop}
              className="mt-6 flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors font-mono focus:outline-none"
            >
              <Cpu className="w-4 h-4 text-indigo-500" />
              BACK TO SUMMIT_
            </button>
          </div>

        </div>

        {/* Legal and Copyright bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <div className="font-sans text-left">
            &copy; {currentYear} SonifyAI Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#" className="hover:text-zinc-400 transition-colors">PRIVACY_POLICY</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">TERMS_SLA</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">SOC2_AUDIT_LOGS</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
