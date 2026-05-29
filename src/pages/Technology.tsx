import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Workflow, 
  Lock, 
  Network, 
  Eye, 
  Cloud, 
  Server, 
  Compass, 
  ArrowRight, 
  Check, 
  RefreshCw,
  Database,
  Terminal,
  FileCheck
} from "lucide-react";

interface TechNode {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  desc: string;
  specs: string[];
}

export default function Technology() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const workflowSteps = [
    {
      title: "Payload Parsing & Sanitization",
      desc: "Raw context payloads are ingested, audited for input boundary anomalies, blocklisted strings, and personal identifiable information (PII) under strict compliance parameters.",
      technical: "AES-256 TLS decryption layer with localized scrubbing arrays.",
      metric: "Uptime Scrub: under 0.05ms"
    },
    {
      title: "Context-Weighting & Routing",
      desc: "Our automated dispatcher evaluates prompt semantic complexity and routes logic targets to either Sonify-Ultra or specialized Sonify-Flash nodes to maintain optimal cost/speed ratios.",
      technical: "Symmetric semantic embedding similarity scores via Cosine-index.",
      metric: "Routing Latency: 0.008s"
    },
    {
      title: "Distributed Pipeline Inference",
      desc: "Weights are accessed dynamically in localized RAM cache clusters. Compute nodes handle deep attention matrix expansions with floating point optimization.",
      technical: "H100/A100 server clusters running multi-tensor pooling.",
      metric: "Burst Rate: max 2.2 GB/s"
    },
    {
      title: "Factual Integrity & Output Assembly",
      desc: "The output is validated against secure database indexes to filter synthetic delusions and ensure maximum factual alignments prior to API socket dispatch.",
      technical: "Dynamic Retrieval-Augmented Generation (RAG) evaluation.",
      metric: "Accuracy index SLA: 99.98%"
    }
  ];

  const techStackList: TechNode[] = [
    {
      id: "tech-nlp",
      title: "Natural Language Processing (NLP)",
      icon: Terminal,
      desc: "Advanced conversational context engines capable of analyzing complex multi-intent semantics, grammatical registers, and localized dialectical traits.",
      specs: ["High-affinity semantic tokenization", "Intent extraction arrays", "Dynamic grammar and emotional mapping"]
    },
    {
      id: "tech-deep-learning",
      title: "Deep Learning Tensor Models",
      icon: Network,
      desc: "Transformer attention arrays that generate code blocks, structured database commands, and predictive logic patterns dynamically from natural instructions.",
      specs: ["Multi-headed self attention pooling", "Dynamic positional embedding keys", "Custom FP16 quantization formats"]
    },
    {
      id: "tech-vision",
      title: "Computer Vision Nodes",
      icon: Eye,
      desc: "Parse floor blueprints, receipts, schematic visual maps, or inventory photos into clean JSON models with total geographic coordinates parsing.",
      specs: ["OCR text transcription blocks", "Geometry and boundary matrix mapping", "Zero-shot object segmentation"]
    },
    {
      id: "tech-infra",
      title: "Hybrid Cloud Infrastructure",
      icon: Cloud,
      desc: "We coordinate distributed edge nodes with localized micro-clusters, enabling low latency context execution across Mumbai, Singapore, and European zones.",
      specs: ["Anycast Global IP routing", "Kubernetes secure scaling nodes", "Zero cold start node caching pipelines"]
    },
    {
      id: "tech-security",
      title: "Double-Walled Data Security",
      icon: Lock,
      desc: "Strictly isolated corporate weights training loops. All telemetry data is formatted dynamically, and metadata logs expire automatically under AES-256 encryptions.",
      specs: ["SOC2 Type II validation standards", "Air-gapped dedicated tenants", "Indian DPDP Act aligned architecture"]
    },
    {
      id: "tech-scalability",
      title: "Scalable Enterprise APIs",
      icon: Server,
      desc: "Enterprise rate-limiting controllers that comfortably process over 150 million daily webhook requests with symmetric connection pools.",
      specs: ["Redis memory cache buffers", "Dynamic request queue throttling", "High throughput HTTP/2.0 sockets"]
    }
  ];

  const handleNextWorkflowStep = () => {
    setActiveWorkflowStep((prev) => (prev + 1) % workflowSteps.length);
  };

  return (
    <div className="relative min-h-screen text-zinc-300 py-32 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(99,102,241,0.06),transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Intro Title Block */}
        <div className="text-left max-w-2xl mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest leading-none block mb-4">
            OUR COMPUTATIONAL ARCHITECTURE
          </span>
          <h1 className="text-4xl md:text-6.5xl font-extrabold font-display text-white tracking-tighter mb-4">
            Machine Learning Infrastructure
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover the security, NLP, deep learning networks, and localized container clusters that power our global AI delivery systems.
          </p>
        </div>

        {/* Dynamic & Animated AI Workflow Diagram Interactive Block */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-900 bg-zinc-950/40 text-left mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 hidden md:block">
            <span className="text-[9px] font-mono text-zinc-650 uppercase">FLOW_TRACE_SYSTEM_ACTIVE</span>
          </div>

          <h2 className="text-xl font-display font-extrabold text-white mb-2 flex items-center gap-2">
            <Workflow className="w-5 h-5 text-indigo-400" />
            Interactive Computational Pipeline Diagram
          </h2>
          <p className="text-zinc-400 text-xs mb-8">
            Click through our pipeline to trace how a raw context query is processed, securely sanitized, logically routed, and assembled in real-time.
          </p>

          {/* Steps Timeline indicators bar */}
          <div className="grid grid-cols-4 gap-2 mb-8 text-center text-xs font-mono">
            {workflowSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveWorkflowStep(index)}
                className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer font-bold ${
                  activeWorkflowStep === index 
                    ? "bg-indigo-950/40 border-indigo-500/50 text-indigo-400 shadow-md"
                    : "bg-zinc-950/40 border-zinc-900 text-zinc-550 hover:text-zinc-300 hover:border-zinc-800"
                }`}
              >
                <span className="block text-[8px] text-zinc-500 font-bold uppercase mb-1">PHASE 0{index + 1}</span>
                <span className="hidden md:inline">{step.title.split(" & ")[0]}</span>
                <span className="md:hidden">P0{index + 1}</span>
              </button>
            ))}
          </div>

          {/* Active workflow step content wrapper */}
          <div className="p-6 bg-zinc-950/80 border border-zinc-900 rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWorkflowStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-8 text-left">
                  <span className="text-[9px] text-indigo-400 font-mono font-bold block uppercase tracking-wide mb-2">
                    ACTIVE FLOW STEP 0{activeWorkflowStep + 1} //
                  </span>
                  <h3 className="text-base font-bold text-white font-display mb-3">
                    {workflowSteps[activeWorkflowStep].title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                    {workflowSteps[activeWorkflowStep].desc}
                  </p>
                  <div className="p-3 bg-zinc-900/50 border border-zinc-850/40 rounded-xl text-[11px] font-mono text-zinc-500 leading-normal">
                    <strong className="text-zinc-300">Technical Protocol:</strong> {workflowSteps[activeWorkflowStep].technical}
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col gap-3">
                  <div className="p-4 bg-indigo-950/20 border border-indigo-500/15 rounded-xl text-center">
                    <span className="text-[10px] font-mono text-zinc-550 block uppercase">LATENCY METRIC</span>
                    <span className="text-lg font-mono font-bold text-white block mt-1">{workflowSteps[activeWorkflowStep].metric}</span>
                  </div>

                  <button
                    onClick={handleNextWorkflowStep}
                    className="w-full py-3 bg-zinc-900 hover:bg-zinc-850 text-indigo-400 hover:text-white border border-zinc-805 text-xs font-mono font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed execution flow_</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Technology Specs list blocks */}
        <h2 className="text-2xl font-display font-extrabold text-white text-left mb-8">
          The Core Technological Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackList.map((node) => {
            const Icon = node.icon;
            return (
              <div 
                key={node.id} 
                className="glass-panel p-6 rounded-3xl border border-zinc-900 hover:border-zinc-800 transition-colors bg-zinc-950/15 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2 mb-6">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-base font-bold text-white font-display tracking-tight mb-2">
                    {node.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {node.desc}
                  </p>
                </div>

                <div className="space-y-1.5 border-t border-zinc-900 pt-4 mt-auto">
                  {node.specs.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[10.5px] text-zinc-500 font-mono">
                      <span className="w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
