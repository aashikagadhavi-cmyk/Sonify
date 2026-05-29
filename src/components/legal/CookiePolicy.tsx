import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  Cookie, 
  ArrowLeft, 
  Building, 
  Mail, 
  User, 
  Clock, 
  Printer, 
  Download, 
  ChevronRight,
  ToggleLeft,
  ToggleRight,
  Grid,
  CheckCircle,
  XCircle
} from "lucide-react";

interface CookiePolicyProps {
  onClose: () => void;
}

export default function CookiePolicy({ onClose }: CookiePolicyProps) {
  const [activeSection, setActiveSection] = useState("sec-1");
  const [essentialConsent, setEssentialConsent] = useState(true);
  const [perfConsent, setPerfConsent] = useState(true);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "sec-1", title: "1. Definition of Cookies", icon: Cookie },
    { id: "sec-2", title: "2. Essential Cookies Grid", icon: Grid },
    { id: "sec-3", title: "3. Cookie Preferences Controls", icon: ToggleRight },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background radial displays */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-indigo-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-950/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Nav Link header */}
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
              Cookie Policy
            </h1>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1.5">
              DOCUMENT IDENTIFIER: SONIFY-COOKIE-POL-V1 // LOCAL RECOGNITIONS
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

        {/* Corporate header details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">STATE HARVESTING</span>
              <span className="text-xs text-white font-bold block">Telemetry Cleared</span>
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

        {/* Left right grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Section Index Sidebar */}
          <div className="lg:col-span-4 sticky top-24 space-y-4 text-left">
            <div className="p-5 rounded-2xl border border-zinc-900/60 bg-zinc-900/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-4">
                COOKIE POLICY
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
                COOKIE POLICY DEBATE
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

          {/* Actual Document right panel */}
          <div className="lg:col-span-8 space-y-12 bg-black/35 border border-zinc-900 rounded-2xl p-6 sm:p-10 text-left relative">
            
            <div className="flex items-center gap-2 font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-6">
              <Clock className="w-3.5 h-3.5" />
              <span>Effective Date: May 29, 2026</span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1.5" />
              <span className="text-indigo-400 text-[9px] font-sans">REGULATORY PORTAL V1</span>
            </div>

            {/* Section 1 */}
            <div id="sec-1" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">01</span>
                What are Cookies?
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                This Policy defines how sonifyai Private Limited utilizes cookies, tracking pixels, and browser state identifiers to recognize you during system logins, save configuration toggles, and assemble anonymous analytical aggregates.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Cookies are tiny textual metadata blocks stored within your local machine directory upon accessing web files. These enable persistent memory features to preserve login instances, security verification statuses, and customized playground parameters without requesting manual user configuration inputs during each new command.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Section 2 */}
            <div id="sec-2" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">02</span>
                Cookie Classifications matrix
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We organize our state-tracking cookies under three explicit functional levels:
              </p>
              
              <div className="border border-zinc-900 rounded-xl overflow-hidden shadow-xl mt-4 font-sans text-xs">
                <div className="grid grid-cols-12 gap-2 bg-zinc-950/60 p-3.5 border-b border-zinc-900 font-mono text-[9px] text-zinc-500 uppercase tracking-widest text-left">
                  <div className="col-span-3">CLASSIFICATION</div>
                  <div className="col-span-5">FUNCTIONAL PURPOSE</div>
                  <div className="col-span-2">PERSISTENCE</div>
                  <div className="col-span-2">AUTHORITY</div>
                </div>
                
                <div className="grid grid-cols-12 gap-2 p-3.5 border-b border-zinc-900/60 text-left items-center bg-zinc-950/10">
                  <div className="col-span-3 font-semibold text-white">System Essential</div>
                  <div className="col-span-5 text-zinc-400 leading-normal">Maintains secure user login sessions, cookie acceptance keys, and request state routing coordinates.</div>
                  <div className="col-span-2 font-mono text-[10px] text-zinc-500">Persistent (365d)</div>
                  <div className="col-span-2 font-mono text-[10px] text-indigo-400">First Party</div>
                </div>

                <div className="grid grid-cols-12 gap-2 p-3.5 border-b border-zinc-900/60 text-left items-center bg-zinc-950/2">
                  <div className="col-span-3 font-semibold text-white">Playground Preferences</div>
                  <div className="col-span-5 text-zinc-400 leading-normal">Sustains sandbox terminal volume values, custom compilation histories, and dark/light contrast flags.</div>
                  <div className="col-span-2 font-mono text-[10px] text-zinc-500">Local (30d)</div>
                  <div className="col-span-2 font-mono text-[10px] text-indigo-400">First Party</div>
                </div>

                <div className="grid grid-cols-12 gap-2 p-3.5 text-left items-center bg-zinc-950/10">
                  <div className="col-span-3 font-semibold text-white">Telemetry Analytics</div>
                  <div className="col-span-5 text-zinc-400 leading-normal">Assembles anonymous metrics on API loading rates and processing throughput curves.</div>
                  <div className="col-span-2 font-mono text-[10px] text-zinc-500">Session</div>
                  <div className="col-span-2 font-mono text-[10px] text-purple-400">Third Party</div>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Section 3 */}
            <div id="sec-3" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">03</span>
                Managing Cookie Preferences
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Most browsers accept cookies dynamically. You may block, reject, or purge these files via privacy panels. However, disabling Essential cookies can disrupt secure auth routines or log out active sessions.
              </p>

              {/* Real Interactive toggles */}
              <div className="border border-zinc-900/80 rounded-xl p-5 bg-zinc-900/10 space-y-4 text-left">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">Live Portal Preferences Manager</span>
                
                <div className="flex items-center justify-between gap-4 py-2 border-b border-zinc-900">
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-2">
                      System Essential Cookies
                      <span className="text-[9px] bg-indigo-950 text-indigo-400 px-1.5 py-0.5 rounded font-mono border border-indigo-500/25">MANDATORY</span>
                    </h4>
                    <p className="text-[11px] text-zinc-500 mt-1">Responsible for user access sessions, security parameters, and routing checks.</p>
                  </div>
                  <div className="shrink-0 text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-[10px] font-mono font-bold uppercase">SECURED</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 py-2 border-b border-zinc-900">
                  <div>
                    <h4 className="text-xs font-bold text-white">Experience Preference Cookies</h4>
                    <p className="text-[11px] text-zinc-500 mt-1">Saves your console layout settings and workspace volumes.</p>
                  </div>
                  <button 
                    onClick={() => setPerfConsent(!perfConsent)}
                    className="shrink-0 text-zinc-500 hover:text-indigo-400 transition-colors focus:outline-none cursor-pointer"
                  >
                    {perfConsent ? (
                      <ToggleRight className="w-10 h-10 text-indigo-500" />
                    ) : (
                      <ToggleLeft className="w-10 h-10 text-zinc-600" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4 py-2">
                  <div>
                    <h4 className="text-xs font-bold text-white">Telemetry &amp; Analytics Cookies</h4>
                    <p className="text-[11px] text-zinc-500 mt-1">Anonymous computation tracking to optimize routing queues and load rates.</p>
                  </div>
                  <button 
                    onClick={() => setAnalyticsConsent(!analyticsConsent)}
                    className="shrink-0 text-zinc-500 hover:text-indigo-400 transition-colors focus:outline-none cursor-pointer"
                  >
                    {analyticsConsent ? (
                      <ToggleRight className="w-10 h-10 text-indigo-500" />
                    ) : (
                      <ToggleLeft className="w-10 h-10 text-zinc-600" />
                    )}
                  </button>
                </div>
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
