import React from "react";
import { User, Building, MapPin, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function CorporateCredentials() {
  return (
    <section id="corporate-credentials" className="relative py-20 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      {/* Absolute subtle background light effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center md:text-left mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block mb-2"
          >
            Corporate Registry & Operations Hub
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight"
          >
            Corporate Credentials
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CEO / Leadership Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950 border border-indigo-500/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-indigo-500/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest bg-indigo-950/60 border border-indigo-500/30 px-3 py-1 rounded-full font-semibold">
                  👑 executive governance
                </span>
                <div className="p-2.5 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-indigo-400 group-hover:scale-110 transition-transform">
                  <User className="w-5 h-5 text-indigo-400" />
                </div>
              </div>

              <h4 className="text-white font-sans font-extrabold text-2xl mb-1 tracking-tight">
                Renu Yadav
              </h4>
              <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-semibold mb-3">
                Chief Executive Officer (CEO)
              </p>
              
              <div className="flex items-center gap-2 mb-4 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800/80 w-fit">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href="mailto:renuyadav@sonifyai.tech" className="text-xs font-mono text-indigo-300 hover:text-indigo-200 font-bold hover:underline">
                  renuyadav@sonifyai.tech
                </a>
              </div>

              <p className="text-sm text-zinc-350 leading-relaxed font-sans mb-6">
                Leading the system architecture, corporate alignments, and global integration of generative AI workflows for maximum business productivity.
              </p>
            </div>

            <div className="pt-5 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-mono text-[10px] text-zinc-450 font-bold uppercase tracking-wider">OFFICIAL CORRESPONDENCE:</span>
              <a
                href="mailto:renuyadav@sonifyai.tech"
                className="inline-flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.02] px-4 py-2 rounded-xl font-mono text-xs font-bold shadow-lg shadow-indigo-900/20 transition-all self-start sm:self-auto"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-200" />
                renuyadav@sonifyai.tech
              </a>
            </div>
          </motion.div>

          {/* Headquarters Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950 border border-indigo-500/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-indigo-500/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest bg-indigo-950/60 border border-indigo-500/30 px-3 py-1 rounded-full font-semibold">
                  🏢 registered corporate HQ
                </span>
                <div className="p-2.5 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-indigo-400 group-hover:scale-110 transition-transform">
                  <Building className="w-5 h-5 text-indigo-400" />
                </div>
              </div>

              <h4 className="text-white font-sans font-extrabold text-xl mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 animate-pulse" />
                Mumbai Headquarters
              </h4>
              <p className="text-sm text-zinc-100 font-medium leading-relaxed font-sans mb-6 bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl">
                4820 Ankur Building Prem Nagar, Mumbai, Maharashtra, India - 400104
              </p>
            </div>

            <div className="pt-5 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-mono text-[10px] text-zinc-450 font-bold uppercase tracking-wider">OFFICIAL DISPATCH DESK:</span>
              <a
                href="mailto:help@sonifyai.tech"
                className="inline-flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.02] px-4 py-2 rounded-xl font-mono text-xs font-bold shadow-lg shadow-indigo-900/20 transition-all self-start sm:self-auto"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-200" />
                help@sonifyai.tech
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
