import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  Shield, 
  ArrowLeft, 
  Building, 
  Mail, 
  User, 
  Clock, 
  Printer, 
  Download, 
  ChevronRight,
  Eye,
  Server,
  Key,
  Database
} from "lucide-react";

interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  const [activeSection, setActiveSection] = useState("sec-1");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "sec-1", title: "1. Information We Collect", icon: Eye },
    { id: "sec-2", title: "2. How We Process Data", icon: Server },
    { id: "sec-3", title: "3. API Credentials Security", icon: Key },
    { id: "sec-4", title: "4. Third-Party Sharing", icon: Database },
    { id: "sec-5", title: "5. Corporate Governance", icon: Building },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Glow Backdrops */}
      <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-blue-950/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Navigation & Brand Header */}
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
              Privacy Policy
            </h1>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1.5">
              DOCUMENT IDENTIFIER: SONIFY-SEC-POL-P1 // PORTAL REVISION
            </p>
          </div>

          {/* Quick Utility Actions */}
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
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">Security Integrity</span>
              <span className="text-xs text-white font-bold block">100% Client Isolation</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">Estimated Read Time</span>
              <span className="text-xs text-white font-bold block">4 Minutes</span>
            </div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-zinc-900 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/55 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">Corporate Registry</span>
              <span className="text-xs text-white font-bold block">sonifyai Private Limited</span>
            </div>
          </div>
        </div>

        {/* Column layout for single-page details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Document Section Index Map (left column) */}
          <div className="lg:col-span-4 sticky top-24 space-y-4 text-left">
            <div className="p-5 rounded-2xl border border-zinc-900/60 bg-zinc-900/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-4">
                DOCUMENT INDEX
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

            {/* Help desk Box */}
            <div className="p-5 rounded-2xl border border-zinc-900 bg-zinc-950/50">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-550 block mb-3">
                REGULATORY INQUIRIES
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
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <a href="mailto:help@sonifyai.tech" className="text-zinc-300 hover:text-indigo-400 font-semibold font-mono">
                    help@sonifyai.tech
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Actual Document (Right details column) */}
          <div className="lg:col-span-8 space-y-12 bg-black/35 border border-zinc-900 rounded-2xl p-6 sm:p-10 text-left relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-6">
              <Clock className="w-3.5 h-3.5" />
              <span>Effective Date: May 29, 2026</span>
              <span className="inline-block w-1 h-1 rounded-full bg-emerald-500 ml-1.5" />
              <span className="text-emerald-400 text-[9px] font-sans">LATEST PORTAL REVISION</span>
            </div>

            {/* Paragraph 1 */}
            <div id="sec-1" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">01</span>
                Information We Collect
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                At sonifyai Private Limited (referred to as "sonifyai", "we", "our", or "us"), we prioritize the absolute security of your interactive data, digital logs, and programmatic workspaces. This Privacy Policy clarifies how we gather, utilize, protect, and handle data when clients use our web portal, sandbox simulations, and generative content layers.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                To maintain robust system telemetry and authorize active sandbox sessions, we collect files and metadata relating to the following:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm">
                <li><strong className="text-zinc-200">User Identification Coordinates:</strong> Primary email addresses, authentic profile details, and names shared during system authentication (Auth).</li>
                <li><strong className="text-zinc-200">Workspace Activity Credentials:</strong> Interactive input variables written into the playground sandboxes and operational performance metrics.</li>
                <li><strong className="text-zinc-200">Device Identifiers:</strong> Approximate geolocation coordinates for registry checking, system logs, web agent metadata, browser formats, and cookies.</li>
              </ul>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Paragraph 2 */}
            <div id="sec-2" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">02</span>
                How We Process Data
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Collected parameters are restricted to execution of features requested by users, specifically:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm">
                <li>Authenticating access to secure generative interfaces.</li>
                <li>Rendering real-time calculations without visual latency.</li>
                <li>Preventing malicious bot manipulation and playground overload.</li>
                <li>Documenting enterprise metrics and workflow benchmarks under specific compliance records.</li>
              </ul>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Paragraph 3 */}
            <div id="sec-3" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">03</span>
                API Credentials Security
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our servers enforce robust TLS 1.3 encryption algorithms for all data at rest and in transit. Sandbox variables passed through our AI processors are isolated and systematically scrubbed within specific decay loops, avoiding long-term persistent caching of core system API secrets.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We implement automated token rotation scripts, and encrypt key environment variables before scheduling background executions, keeping sensitive credentials completely hidden from third-party inspectors.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Paragraph 4 */}
            <div id="sec-4" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">04</span>
                Third-Party Sharing
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We strictly forbid selling, licensing, renting, or leasing user coordinates to unauthorized marketing aggregators. Information is shared only with verified infrastructure providers (such as secure Cloud Hosting modules or Firebase Authentication) solely to coordinate your active sessions.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                All external integration points communicate exclusively via secure HTTPS pipelines, restricting unauthorized access nodes.
              </p>
            </div>

            <div className="h-[1px] bg-zinc-900" />

            {/* Paragraph 5 */}
            <div id="sec-5" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-500 bg-indigo-950 border border-indigo-950/80 px-2 py-0.5 rounded">05</span>
                Corporate Governance Detail
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Compliance variables are subject to regular internal audits. By continuing to use the SonifyAI platform, clients authorize the corporate legal structure located under Mumbai, Maharashtra jurisdictions to represent regulatory adjustments to standard privacy procedures.
              </p>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-xs font-mono space-y-2 mt-4 text-zinc-500 text-left">
                <div><span className="text-indigo-400 block sm:inline font-bold mr-1.5 font-sans text-[10px] uppercase">REGISTERED CORPORATION:</span> sonifyai Private Limited</div>
                <div><span className="text-indigo-400 block sm:inline font-bold mr-1.5 font-sans text-[10px] uppercase">INCORPORATION NUMBER:</span> CIN_ZSAI_8849</div>
                <div><span className="text-indigo-400 block sm:inline font-bold mr-1.5 font-sans text-[10px] uppercase">HEADQUARTERS ADDRESS:</span> Prem Nagar, Mumbai, MH 400104</div>
                <div><span className="text-indigo-400 block sm:inline font-bold mr-1.5 font-sans text-[10px] uppercase">REGULATORY COORDINATOR:</span> Renu Yadav, Chief Executive Officer</div>
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
