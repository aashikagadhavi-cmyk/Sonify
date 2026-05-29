import React from "react";
import { Bot, Mail, ShieldAlert, Cpu, Terminal, ArrowUpCircle, MapPin, User, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

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
          <div className="md:col-span-5 text-left flex flex-col justify-between gap-6">
            <div>
              <a href="#" className="flex items-center gap-2.5 group mb-6">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center p-0.5 shadow-md shadow-indigo-950/20">
                  <Bot className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <span className="font-sans font-bold text-white text-base tracking-tight block">
                    sonifyai<span className="text-indigo-400"> Private Limited</span>
                  </span>
                  <span className="text-[8px] font-mono text-zinc-550 uppercase tracking-widest block leading-none">
                    INCORPORATED REGISTRY
                  </span>
                </div>
              </a>

              <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-sans">
                sonifyai Private Limited is a next-generation generative AI company focused on transforming how businesses create, automate, and interact with digital content.
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-3 mb-6">
                <a 
                  href="https://linkedin.com/company/sonifyai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-indigo-500/40 hover:bg-indigo-950/20 hover:text-indigo-400 flex items-center justify-center text-zinc-500 hover:scale-105 transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://x.com/sonifyai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-indigo-500/40 hover:bg-indigo-950/20 hover:text-indigo-400 flex items-center justify-center text-zinc-500 hover:scale-105 transition-all shadow-sm"
                  title="X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com/sonifyai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-indigo-500/40 hover:bg-indigo-950/20 hover:text-indigo-400 flex items-center justify-center text-zinc-500 hover:scale-105 transition-all shadow-sm"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com/sonifyai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-indigo-500/40 hover:bg-indigo-950/20 hover:text-indigo-400 flex items-center justify-center text-zinc-500 hover:scale-105 transition-all shadow-sm"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-zinc-950/90 border border-indigo-500/25 p-5 rounded-2xl shadow-lg shadow-indigo-950/10">
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block font-bold">🏢 Corporate HQ & Contact (Verified)</span>
              
              <div className="flex items-start gap-2.5 text-xs text-zinc-200 leading-relaxed font-sans">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5 animate-pulse" />
                <span className="font-medium text-white">4820 Ankur Building Prem Nagar, Mumbai, Maharashtra 400104</span>
              </div>

              <div className="h-[1px] bg-zinc-800/80 my-1" />

              <div className="flex flex-col gap-2.5">
                <a href="mailto:help@sonifyai.tech" className="inline-flex items-center gap-2 text-xs font-sans text-white hover:text-indigo-400 transition-colors bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 w-fit">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span className="font-mono font-bold text-indigo-300 hover:underline">help@sonifyai.tech</span>
                </a>
                
                <div className="flex flex-col gap-1.5 mt-1 border-t border-zinc-900/40 pt-2 text-xs font-sans text-zinc-300">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>CEO: <span className="font-semibold text-white">Renu Yadav</span></span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-550 shrink-0">CEO Email:</span>
                    <a href="mailto:renuyadav@sonifyai.tech" className="text-indigo-400 hover:underline font-mono font-semibold">renuyadav@sonifyai.tech</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Tech Capabilities */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6">Core Services</h4>
            <ul className="space-y-3.5 text-sm font-sans">
              <li><a href="#/solutions" className="hover:text-white transition-colors">AI Content Generator</a></li>
              <li><a href="#/solutions" className="hover:text-white transition-colors">Conversational Assistants</a></li>
              <li><a href="#/solutions" className="hover:text-white transition-colors">Workflow Automation</a></li>
              <li><a href="#/solutions" className="hover:text-white transition-colors">Voice Synthesis Nodes</a></li>
              <li><a href="#/developers" className="hover:text-white transition-colors">Enterprise AI APIs</a></li>
            </ul>
          </div>

          {/* Column 3: Platform Resources */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-3.5 text-sm font-sans">
              <li><a href="#/developers" className="hover:text-white transition-colors">Demo Sandbox</a></li>
              <li><a href="#/platform" className="hover:text-white transition-colors">System Layers</a></li>
              <li><a href="#/about" className="hover:text-white transition-colors font-semibold text-indigo-400">Why SonifyAI</a></li>
              <li><a href="#/technology" className="hover:text-white transition-colors">Features Matrix</a></li>
              <li><a href="#/pricing" className="hover:text-white transition-colors">Pricing & Plans</a></li>
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
            &copy; {currentYear} sonifyai Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2 font-mono text-[10px] tracking-wider">
            <a href="#/legal-privacy" className="text-zinc-500 hover:text-indigo-400 transition-colors">PRIVACY_POLICY</a>
            <span className="text-zinc-800 hidden sm:inline">•</span>
            <a href="#/legal-terms" className="text-zinc-500 hover:text-indigo-400 transition-colors">TERMS_CONDITIONS</a>
            <span className="text-zinc-800 hidden sm:inline">•</span>
            <a href="#/legal-disclaimer" className="text-zinc-500 hover:text-indigo-400 transition-colors">DISCLAIMER</a>
            <span className="text-zinc-800 hidden sm:inline">•</span>
            <a href="#/legal-cookies" className="text-zinc-500 hover:text-indigo-400 transition-colors">COOKIE_POLICY</a>
            <span className="text-zinc-800 hidden sm:inline">•</span>
            <a href="#/legal-acceptable-use" className="text-zinc-500 hover:text-indigo-400 transition-colors">ACCEPTABLE_USE</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
