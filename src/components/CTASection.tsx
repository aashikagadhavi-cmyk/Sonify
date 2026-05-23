import React, { useState } from "react";
import { Sparkles, ArrowRight, HeartHandshake, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-black/95">
      
      {/* Dynamic neon vector glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Glow backdrop box container */}
        <div className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-blue-500/30 via-indigo-500/40 to-purple-500/30" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6 backdrop-blur-md">
            <HeartHandshake className="w-3.5 h-3.5 text-indigo-400" />
            Empower Your Operations Today
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to Transform Your <br />
            Business with Generative AI?
          </h2>

          <p className="mt-4 text-zinc-400 text-base max-w-lg mx-auto leading-relaxed font-sans">
            Scale custom language models, automate workflows, and deploy digital workflows with sub-second latency thresholds starting today.
          </p>

          {/* Booking/Subscription Module */}
          <div className="mt-10 max-w-md mx-auto">
            <AnimatePresence mode="popLayout">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col sm:flex-row items-center gap-3 bg-zinc-900/40 border border-zinc-800 p-2 rounded-2xl backdrop-blur-sm"
                >
                  <label htmlFor="cta-email" className="sr-only">Corporate Email Address</label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="w-full bg-transparent px-4 py-3 text-sm text-white focus:outline-none placeholder-zinc-550 font-sans"
                  />
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto relative group whitespace-nowrap px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-505 text-white font-sans font-bold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {loading ? "Aligning..." : "Schedule Consultation"}
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-950/20 border border-emerald-500/25 rounded-2xl p-6 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3 animate-bounce" />
                  <h3 className="text-white font-sans font-bold text-lg">Consultation Block Initiated!</h3>
                  <p className="text-zinc-400 text-xs mt-2 font-sans">
                    Our Enterprise Engineering team has locked your domain. We will contact you at <span className="text-indigo-300 font-semibold">{email}</span> within 2 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mini benefits footer badge inside box */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 pt-8 border-t border-zinc-900/80 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>✓ No CC required</span>
            <span>✓ 1-Click Sandbox Deployment</span>
            <span>✓ 99.9% Operational SLA guarantee</span>
          </div>

        </div>

      </div>
    </section>
  );
}
