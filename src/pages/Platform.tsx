import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Settings, 
  Workflow, 
  Layers, 
  Database, 
  LineChart, 
  Activity, 
  Zap, 
  RefreshCw, 
  Play, 
  Maximize2,
  Server,
  Cloud,
  Globe,
  Shuffle
} from "lucide-react";

export default function Platform() {
  const [selectedModel, setSelectedModel] = useState<"sonify-ultra" | "sonify-flash" | "sonify-hybrid">("sonify-ultra");
  const [prompt, setPrompt] = useState("");
  const [outputResult, setOutputResult] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [statLoad, setStatLoad] = useState({ cpu: 45, tokensec: 1420, ping: 12 });

  useEffect(() => {
    // Keep stats simulating activity
    const interval = setInterval(() => {
      setStatLoad({
        cpu: Math.floor(Math.random() * 20) + 40,
        tokensec: Math.floor(Math.random() * 300) + 1300,
        ping: Math.floor(Math.random() * 6) + 10
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSimulateModel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setProcessing(true);
    setTimeout(() => {
      let finalResult = "";
      if (selectedModel === "sonify-ultra") {
        finalResult = `[Sonify-Ultra v4]: "${prompt}" analyzed through 800B parameters. Identified core structural directives. Resulting action: Dispatching micro-agent automation chain at 99.8% semantic certainty.`;
      } else if (selectedModel === "sonify-flash") {
        finalResult = `[Sonify-Flash v4]: Direct routing enabled. Prompt context captured. High density action dispatched instantly. SLA Latency: 0.08s. Token rate: 1,822 tokens/sec.`;
      } else {
        finalResult = `[Sonify-Hybrid Workspace]: Distributed load balance. Prompt routed to secure localized private cloud node to conserve tokens. Completed without pipeline friction.`;
      }
      setOutputResult(finalResult);
      setProcessing(false);
    }, 1500);
  };

  const modelMetadata = {
    "sonify-ultra": {
      neurons: "800 Billion Nodes",
      useCase: "Complex Reasoning, Contract Audit, Structured Pipeline Decisions",
      tokens: "Up to 2.4 Million context window size",
      latency: "Average 1.1s"
    },
    "sonify-flash": {
      neurons: "24 Billion Nodes",
      useCase: "Instant Chat APIs, High Frequency Voice Synthesis, Live Webhooks",
      tokens: "Up to 500K context window size",
      latency: "Average 0.08s"
    },
    "sonify-hybrid": {
      neurons: "Adaptive Edge Load Balancing",
      useCase: "Enterprise GDPR Guardrails, Local Multi-region Storage Clusters",
      tokens: "Symmetric Local Buffers",
      latency: "Average 0.25s"
    }
  };

  return (
    <div className="relative min-h-screen text-zinc-300 py-32 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_40%,rgba(99,102,241,0.06),transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block and Title description */}
        <div className="text-left mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/30 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>SonifyAI Platform Engine Architecture Suite</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tighter mb-4"
          >
            An Enterprise Generative Engine Built to Scale
          </motion.h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
            Explore our state-of-the-art Multi-Model integration capabilities, designed to dispatch context-weighted reasoning nodes while remaining fully compliant with enterprise GDPR guidelines.
          </p>
        </div>

        {/* Live Interactive Product Demo UI Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Interactive Controller Card Form */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-zinc-900 flex flex-col justify-between relative bg-zinc-950/40">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
                <div className="flex items-center gap-2 text-white font-display font-bold text-sm">
                  <Activity className="w-4.5 h-4.5 text-indigo-400 animate-pulse" />
                  <span>Interactive Multi-Model Sandbox Simulator</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[9px] font-mono text-zinc-500 uppercase">
                  <span>ENVIRONMENT_SECURE_256BIT</span>
                </div>
              </div>

              {/* Models selection pill list */}
              <div className="grid grid-cols-3 gap-2.5 mb-6 text-xs font-mono">
                {(["sonify-ultra", "sonify-flash", "sonify-hybrid"] as const).map((model) => (
                  <button
                    key={model}
                    onClick={() => {
                      setSelectedModel(model);
                      setOutputResult(null);
                    }}
                    className={`py-3 rounded-xl border text-center transition-all cursor-pointer font-bold ${
                      selectedModel === model 
                        ? "bg-indigo-950/45 border-indigo-500/50 text-white shadow-lg"
                        : "bg-zinc-950/60 border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800"
                    }`}
                  >
                    {model === "sonify-ultra" ? "⭐ Sonify-Ultra" : model === "sonify-flash" ? "⚡ Sonify-Flash" : "🧬 Sonify-Hybrid"}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSimulateModel} className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block">
                      Payload System Query (Enterprise Prompt)
                    </label>
                    <span className="text-[9px] text-zinc-550 font-mono">Max 1000 Tokens</span>
                  </div>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                    placeholder="e.g. Audit this PDF for compliance friction points or summarize multi-region node traffic..."
                    className="w-full h-32 bg-black border border-zinc-900 rounded-xl p-4 text-xs font-sans text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={processing}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-600 disabled:opacity-50 text-white font-sans font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-2"
                  >
                    {processing ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                        <span>Tokenizing Context Nodes...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-white fill-current" />
                        <span>Dispatch Prompt Command</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Output Panel block */}
            <div className="mt-8 border-t border-zinc-900 pt-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block mb-2">Live Token output Response</span>
              <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-2xl min-h-[5rem] overflow-hidden flex items-center justify-start text-left">
                <AnimatePresence mode="wait">
                  {outputResult ? (
                    <motion.p
                      key="result"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-mono text-xs text-indigo-300 leading-relaxed"
                    >
                      {outputResult}
                    </motion.p>
                  ) : processing ? (
                    <motion.div key="loader" className="flex items-center gap-1.5 text-zinc-500 font-mono text-xs">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping shrink-0" />
                      <span>Synthesizing output structure in progress...</span>
                    </motion.div>
                  ) : (
                    <p key="info" className="text-zinc-650 font-sans text-xs italic">
                      Output context response will generate instantly above. Provide a query string and click dispatch.
                    </p>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Right Column: Model Specs metadata card / metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Live Model Metadata Card */}
            <div className="glass-panel p-6 rounded-3xl border border-zinc-900 text-left bg-zinc-950/30">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold mb-4">⭐ Model Specifications Node Card</span>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[9px] font-mono text-zinc-400 block tracking-widest uppercase">CRITICAL ATOM INDEX</span>
                  <span className="text-sm font-sans font-bold text-white block mt-0.5">{modelMetadata[selectedModel].neurons}</span>
                </div>
                <div className="h-[1px] bg-zinc-900" />
                <div>
                  <span className="text-[9px] font-mono text-zinc-400 block tracking-widest uppercase">Target Use Case</span>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-1">{modelMetadata[selectedModel].useCase}</p>
                </div>
                <div className="h-[1px] bg-zinc-900" />
                <div>
                  <span className="text-[9px] font-mono text-zinc-400 block tracking-widest uppercase">Token context window</span>
                  <span className="text-xs font-mono font-bold text-indigo-300 block mt-1">{modelMetadata[selectedModel].tokens}</span>
                </div>
                <div className="h-[1px] bg-zinc-900" />
                <div>
                  <span className="text-[9px] font-mono text-zinc-400 block tracking-widest uppercase">Latency Index KPI</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono block mt-1">{modelMetadata[selectedModel].latency}</span>
                </div>
              </div>
            </div>

            {/* Live Infrastructure Node telemetry stats */}
            <div className="glass-panel p-6 rounded-3xl border border-zinc-900 text-left bg-zinc-950/30">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold mb-4">🚨 Core Infrastructure Metrics</span>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-900">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase font-bold">Node CPU</span>
                  <span className="text-base font-bold text-white mt-1.5 block font-mono">{statLoad.cpu}%</span>
                  <span className="text-[8px] font-mono text-emerald-400 mt-0.5 block font-bold">STABLE</span>
                </div>

                <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-900">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase font-bold">Speed Tokens</span>
                  <span className="text-base font-bold text-indigo-400 mt-1.5 block font-mono">{statLoad.tokensec}/s</span>
                  <span className="text-[8px] font-mono text-zinc-450 mt-0.5 block font-bold">BURSTED</span>
                </div>

                <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-900">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase font-bold">SLA Latency</span>
                  <span className="text-base font-bold text-cyan-400 mt-1.5 block font-mono">{statLoad.ping}ms</span>
                  <span className="text-[8px] font-mono text-indigo-400 mt-0.5 block font-bold">FAST EDGE</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Architectural Platform features grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
          
          <div className="glass-panel p-8 rounded-3xl border border-zinc-900 bg-zinc-950/20">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center p-2 mb-6">
              <Settings className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold text-white font-display tracking-tight mb-3">AI Workflow Automation</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Define stateful graphs, schedule autonomous loops, and trigger secure API actions depending on semantic input triggers. Full error-handling layers included.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-zinc-900 bg-zinc-950/20">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center p-2 mb-6">
              <Database className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white font-display tracking-tight mb-3">Multi-Model Integration</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Hot-swap core LLMs, fine-tuned LLaMA nodes, or proprietary private weights with zero API refactoring. Consolidate your corporate intelligence hub into a single query.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-zinc-900 bg-zinc-950/20">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center p-2 mb-6">
              <Globe className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white font-display tracking-tight mb-3">Cloud Decoupled Architecture</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Deploy behind virtual private clouds (VPC). Keep private enterprise files protected in localized GDPR storage targets without sending keys outside of private rings.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
