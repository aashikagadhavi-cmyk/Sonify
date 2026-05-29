import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Bot, Workflow, RefreshCw, Cpu, Code, Play, Check, ShieldAlert, ArrowRight } from "lucide-react";
import { CustomWorkflow } from "../types";

export default function Playground() {
  const [businessType, setBusinessType] = useState("SaaS Platforms");
  const [focusArea, setFocusArea] = useState("Workflow Automation");
  const [customPrompt, setCustomPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<CustomWorkflow | null>({
    title: "SonifyAI Default Workspace: Cloud Enterprise",
    summary: "Tailored generative automation workflow coordinating intelligent agents. Dispatches language parsing nodes and context encoders instantly to automate repetitive product dispatch logs and customer feedback.",
    agents: [
      {
        name: "Lexicon Ingestion Unit",
        role: "Natural voice & text indexing",
        status: "Active",
        specialty: "Extracts intents and formats unstructured workspace messages with sub-second lag.",
        efficiency: "+148% Speed Enhancement"
      },
      {
        name: "Aetheria-9 Dialogue Agent",
        role: "Sub-second contextual response",
        status: "Active",
        specialty: "Formulates hyper-personalized response blueprints using localized reference databases.",
        efficiency: "0.45s Average Latency"
      },
      {
        name: "Terminal State Controller",
        role: "Robotic process trigger",
        status: "Idle",
        specialty: "Secures CRM outputs and routes subsequent data blocks to active partner networks.",
        efficiency: "99.99% Reliability"
      }
    ],
    timeline: [
      {
        phase: "Discover",
        detail: "Ingest structured and unstructured data blocks continuously via enterprise hooks.",
        estTime: "Instant"
      },
      {
        phase: "Design",
        detail: "Align user intent with configured enterprise templates and parameter boundaries.",
        estTime: "12 seconds"
      },
      {
        phase: "Automate",
        detail: "Sub-second inference triggers conversational dialogs and database transactions.",
        estTime: "Autonomous"
      },
      {
        phase: "Scale",
        detail: "Sync telemetry records securely across cloud databases and balance node queues.",
        estTime: "Continuous"
      }
    ]
  });

  const businessOptions = [
    "SaaS Platforms",
    "Startups & Tech",
    "E-commerce",
    "Healthcare Systems",
    "Financial Services",
    "Agencies & Marketing"
  ];

  const focusAreas = [
    "Workflow Automation",
    "Conversational AI Assistants",
    "Voice & Text Intelligence",
    "AI Content Syncing",
    "Personalized Engagement",
    "Enterprise APIs"
  ];

  const loadingSteps = [
    "Analyzing business taxonomy and objectives...",
    "Querying SonifyAI generative template repository...",
    "Injecting model instructions into Gemini orchestrator...",
    "Compiling custom agent matrices and sub-second metrics...",
    "Structuring workflow pipeline..."
  ];

  const runCompilation = async () => {
    setLoading(true);
    setLoadingStep(0);
    
    // Simulate interactive step logs for visual premium experience
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 900);

    try {
      const response = await fetch("/api/playground/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessType,
          focusArea,
          prompt: customPrompt
        })
      });

      if (!response.ok) {
        throw new Error("Generation request failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Generator error:", err);
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  return (
    <section id="playground" className="py-24 relative overflow-hidden bg-black/95">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
            Interactive Core Sandbox
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Deploy Custom Workflows <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Instantly</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            Configure your enterprise domain and model focus. Our Generative Orchestrator generates bespoke automated agents and step timelines in real-time.
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column (left 5 spans) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between relative shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-indigo-950/50 border border-indigo-500/30 text-indigo-400">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-white text-lg">Builder Parameters</h3>
                  <p className="text-zinc-500 text-xs font-mono">WORKSPACE_BLUEPRINT_v3.2</p>
                </div>
              </div>

              {/* Business Type Select */}
              <div className="mb-6">
                <label className="block text-zinc-400 text-sm font-medium mb-2.5 font-sans">
                  Target Domain / Business
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {businessOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setBusinessType(opt)}
                      className={`px-3 py-2 text-xs rounded-lg border font-medium text-left transition-all ${
                        businessType === opt
                          ? "bg-indigo-950/60 border-indigo-500/60 text-white shadow-lg shadow-indigo-550/10"
                          : "bg-zinc-900/30 border-zinc-805/40 text-zinc-400 hover:border-zinc-700/60 hover:text-zinc-200"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Area Selection */}
              <div className="mb-6">
                <label className="block text-zinc-400 text-sm font-medium mb-2.5 font-sans">
                  Functional Target
                </label>
                <select
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800/80 text-zinc-300 text-sm rounded-lg focus:outline-none focus:border-indigo-500/60 p-2.5 font-sans"
                >
                  {focusAreas.map((area) => (
                    <option key={area} value={area} className="bg-zinc-950">
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom Objective Prompt */}
              <div className="mb-6">
                <label className="block text-zinc-400 text-sm font-medium mb-2.5 font-sans">
                  Custom Prompt (Optional)
                </label>
                <textarea
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="e.g., Automate text-to-speech for legal summaries and email confirmation receipts..."
                  rows={3}
                  className="w-full bg-zinc-900/50 border border-zinc-800/80 text-zinc-200 text-sm rounded-lg focus:outline-none focus:border-indigo-500/60 p-3 placeholder-zinc-650 resize-none font-sans leading-relaxed"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-4 pt-6 border-t border-zinc-900">
              <button
                onClick={runCompilation}
                disabled={loading}
                className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white rounded-xl py-3.5 px-4 font-sans font-medium text-sm transition-all focus:outline-none shadow-xl shadow-indigo-950/50 flex items-center justify-center gap-2.5 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Compiling Workflow Architecture...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                    <span>Launch AI Compilation</span>
                  </>
                )}
                <div className="absolute inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 bg-white/10 transition-transform origin-left" />
              </button>
              
              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                SYSTEM READY_ CONNECTIONS SECURE
              </div>
            </div>

          </div>

          {/* Interactive Output Column (right 7 spans) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-8 relative min-h-[480px] flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Gloss border top */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/30 to-purple-500/20" />
            
            {/* Loading Indicator Overlay */}
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/90 z-20 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-indigo-500 animate-spin" />
                    <Bot className="w-6 h-6 text-indigo-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce" />
                  </div>
                  
                  <div className="h-6 overflow-hidden max-w-sm mb-4">
                    <AnimatePresence mode="popLayout">
                      <motion.p
                        key={loadingStep}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-indigo-400 font-mono text-xs uppercase tracking-wider"
                      >
                        {loadingSteps[loadingStep]}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5 }}
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                    />
                  </div>
                  <p className="text-zinc-500 text-[10px] uppercase font-mono mt-2 tracking-widest">
                    Live compilation taking ±4 seconds
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Displaying Results */}
            <AnimatePresence mode="popLayout">
              {result && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex-1 flex flex-col justify-between"
                  id="sandbox-output"
                >
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-md shadow-indigo-550/40" />
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Compiler Result</span>
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono bg-zinc-900/60 border border-zinc-850 px-2 py-1 rounded bg-black/40">
                        LATENCY: <span className="text-indigo-400 font-bold">1280ms</span>
                      </div>
                    </div>

                    {/* Meta info of Workspace */}
                    <div className="mb-6">
                      <h4 className="text-white font-sans font-bold text-xl leading-tight">
                        {result.title}
                      </h4>
                      <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                        {result.summary}
                      </p>
                    </div>

                    {/* Agent Cluster */}
                    <div className="mb-6">
                      <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-3">
                        Configured Intelligent Agents
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {result.agents.map((agent, idx) => (
                          <div
                            key={idx}
                            className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-4 relative group hover:border-zinc-700/50 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-white tracking-tight leading-none">
                                {agent.name}
                              </span>
                              <span
                                className={`inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-mono border uppercase tracking-wider ${
                                  agent.status === "Active"
                                    ? "bg-emerald-950/40 border-emerald-500/20 text-emerald-400"
                                    : "bg-zinc-950/40 border-zinc-700/30 text-zinc-400"
                                }`}
                              >
                                {agent.status}
                              </span>
                            </div>
                            <p className="text-zinc-400 text-[11px] leading-snug line-clamp-2 mb-2 font-sans">
                              {agent.specialty}
                            </p>
                            <div className="text-[9px] font-mono text-indigo-400 mt-2 bg-indigo-950/10 inline-block px-1.5 py-0.5 rounded">
                              {agent.efficiency}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* High-tech Timeline */}
                    <div>
                      <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-4">
                        Compiled Core Processing Route
                      </span>
                      <div className="relative border-l border-zinc-800 ml-3 pl-5 space-y-4 py-2">
                        {result.timeline.map((step, idx) => (
                          <div key={idx} className="relative group/step">
                            <span className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-black border border-indigo-400/50 group-hover/step:bg-cyan-400 transition-colors" />
                            <div className="flex items-start md:items-center justify-between flex-wrap gap-1">
                              <span className="text-xs font-mono text-zinc-400 tracking-wide">
                                Phase 0{idx + 1}: <span className="text-white font-bold">{step.phase}</span>
                              </span>
                              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/30 px-1.5 py-0.5 rounded">
                                {step.estTime}
                              </span>
                            </div>
                            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                              {step.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Summary Callout Footer */}
                  <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-zinc-500 text-[11px] font-mono">
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-zinc-650" />
                      SONIFY_ENVELOPE_GENERATED
                    </span>
                    <span className="text-zinc-400">
                      SECURE PIPELINE_
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
