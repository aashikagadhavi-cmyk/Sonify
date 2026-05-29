import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, 
  MessageSquare, 
  Volume2, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Activity, 
  Briefcase, 
  Building,
  Target,
  DollarSign,
  HeartPulse,
  Award
} from "lucide-react";

interface SolutionItem {
  id: string;
  category: "all" | "core" | "enterprise" | "verticals";
  categoryLabel: string;
  title: string;
  icon: React.ComponentType<any>;
  desc: string;
  features: string[];
  benefits: string[];
  useCase: string;
  ctaText: string;
}

export default function Solutions() {
  const [activeFilter, setActiveFilter] = useState<"all" | "core" | "enterprise" | "verticals">("all");
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  const solutionsList: SolutionItem[] = [
    {
      id: "sol-content",
      category: "core",
      categoryLabel: "Core Generative Engine",
      title: "AI Content Generation Engine",
      icon: Sparkles,
      desc: "Mass produce highly contextual blog briefs, whitepapers, financial drafts, and marketing copies using structured private business templates.",
      features: [
        "Dynamic Brand Tone Memory presets",
        "Source Citation and Auto Fact-Checking layers",
        "Single-click multi-format outputs (JSON, PDF, Markdown)"
      ],
      benefits: [
        "Accelerate copy turnaround by 9x",
        "Establish absolute factual integrity"
      ],
      useCase: "A national telecom operator reduced knowledge-base updating backlogs from 45 days down to live deployments.",
      ctaText: "Deploy Content Node"
    },
    {
      id: "sol-chatbots",
      category: "core",
      categoryLabel: "Conversational Agents",
      title: "AI Chatbots & Virtual Personnel",
      icon: MessageSquare,
      desc: "Dispatch full conversational support personnel capable of retrieving multi-tier documentation, handling refunds, and filing tickets.",
      features: [
        "Vector database integration out of the box",
        "Direct ticket handoff to human slack desks",
        "Sentiment mapping and instant escalations"
      ],
      benefits: [
        "Deflect 78% of incoming L1 support backlog",
        "24/7 coverage with average under 0.5s reaction"
      ],
      useCase: "E-Commerce multi-brand marketplace resolved 120,400 tickets automatically in Q1 alone.",
      ctaText: "Configure Chatbot Hub"
    },
    {
      id: "sol-voice",
      category: "core",
      categoryLabel: "Aesthetic Core",
      title: "AI Voice Assistants & Telephony",
      icon: Volume2,
      desc: "Deploy lightning-fast vocal agents with zero robotic artifacts. Ideal for live client support over virtual trunks or VOIP pipelines.",
      features: [
        "Dynamic speed and emotional modulation control",
        "Symmetric low-latency streaming audio (under 120ms)",
        "Auto phoneme tuning for custom brand glossaries"
      ],
      benefits: [
        "Human-like conversation flow at fraction of scale",
        "Immediate multi-accent coverage"
      ],
      useCase: "A rapid travel reservation system dispatched 50 outbound call voice bots during severe flight cancellations.",
      ctaText: "Listen to Voice Nodes"
    },
    {
      id: "sol-automation",
      category: "core",
      categoryLabel: "System Automation",
      title: "Enterprise AI Automation Nodes",
      icon: Zap,
      desc: "Connect legacy CRMs with synthetic execution agents. Trigger automatic workflows like database sanitization or client invoices using raw logs parsing.",
      features: [
        "Semantic pipeline error correction mechanics",
        "Multi-step asynchronous state triggers",
        "No-code drag and drop JSON mappings builder"
      ],
      benefits: [
        "Save average of 18 manual hours per worker/week",
        "Zero human copy-paste database errors"
      ],
      useCase: "Automated real estate syndication updated 14,000 listings across 12 public portals daily.",
      ctaText: "Automate Core Workflows"
    },
    {
      id: "sol-enterprise",
      category: "enterprise",
      categoryLabel: "Corporation Grade",
      title: "Enterprise General AI Systems",
      icon: ShieldCheck,
      desc: "Secure private neural architectures customized strictly for large-scale enterprise compliance. Full local VPC security integrations.",
      features: [
        "Symmetric SOC2 auditing records",
        "Private model training loops on air-gapped nodes",
        "SAML SSO access control lists"
      ],
      benefits: [
        "Maintain total digital sovereignty over training assets",
        "Strict compliance with Indian DPDP Act of 2023"
      ],
      useCase: "A tier-one cloud service integrated internal AI code assistants for 2,400 on-site engineers.",
      ctaText: "Request Private VPC Customizer"
    },
    {
      id: "sol-marketing",
      category: "verticals",
      categoryLabel: "Specialized Business Solutions",
      title: "AI for Hyper-Scale Marketing",
      icon: Target,
      desc: "Track client behavioral trajectories, generate hyper-targeted personalized emails, and optimize ad copy distributions dynamically.",
      features: [
        "Live multivariate product summary testing",
        "Dynamic visual and banner asset layout coordinates generator",
        "Predictive ROI scoring algorithms"
      ],
      benefits: [
        "Improve digital ads clickrate by average of +40%",
        "Eliminate broad generic drip campaigns"
      ],
      useCase: "D2C footwear brand drove 4.5x conversion rate on checkout abandonment emails.",
      ctaText: "Acquire Marketing Kit"
    },
    {
      id: "sol-healthcare",
      category: "verticals",
      categoryLabel: "Specialized Industry verticals",
      title: "AI Solutions for Patient Admin",
      icon: HeartPulse,
      desc: "Expedite clinical summarizations, organize prescription databases, and assist patient registration desks cleanly.",
      features: [
        "Double-walled encryption sandbox protocols",
        "Factual validation and human-in-the-loop audit paths",
        "Medical taxonomy mapping presets"
      ],
      benefits: [
        "Reduce clinician admin charting burnout by 60%",
        "Improve intake documentation accuracies"
      ],
      useCase: "A 400-bed multispecialty hospital deployed admin co-pilot dashboard for discharge summary documentation.",
      ctaText: "Examine Patient Admin Console"
    },
    {
      id: "sol-finance",
      category: "verticals",
      categoryLabel: "Specialized Industry verticals",
      title: "AI Core for Financial Auditing",
      icon: DollarSign,
      desc: "Audit thousands of transaction receipts, identify billing friction, and map risk matrices using fine-tuned quantitative reasoning.",
      features: [
        "Auto-receipt line-item structural parsing",
        "Regulatory rulebook compliance scoring",
        "Predictive fraud and anomaly vectors triggers"
      ],
      benefits: [
        "Complete annual audit iterations in 5 business days",
        "99.9% invoice parsing accuracy"
      ],
      useCase: "Asset management house automated compliance checking for 180 portfolio index sheets.",
      ctaText: "Integrate Audit Engine"
    }
  ];

  const filteredSolutions = activeFilter === "all" 
    ? solutionsList 
    : solutionsList.filter(s => s.category === activeFilter);

  return (
    <div className="relative min-h-screen text-zinc-300 py-32 bg-gradient-to-b from-zinc-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_10%,#1e1b4b_0%,transparent_70%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Solutions Hero Intro Header block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest leading-none block mb-4">
            PRE-CONFIGURED ENTERPRISE USE CASES
          </span>
          <h1 className="text-4xl md:text-5.5xl font-extrabold font-display text-white tracking-tighter mb-4">
            Tailored AI Solutions <br />for Every Vertical
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            From conversational personnel to medical charting, review our production-ready solutions designed to solve severe business bottlenecks.
          </p>
        </div>

        {/* Categories Control Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-zinc-900 pb-6">
          {(["all", "core", "enterprise", "verticals"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                activeFilter === filter 
                  ? "bg-indigo-950/45 border-indigo-500/50 text-white"
                  : "bg-zinc-950/40 border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:border-zinc-850"
              }`}
            >
              {filter === "all" && "🌍 All Scopes"}
              {filter === "core" && "⚡ Core AI Engines"}
              {filter === "enterprise" && "🏢 Corporate Sovereignty"}
              {filter === "verticals" && "🧬 Industry Verticals"}
            </button>
          ))}
        </div>

        {/* Filtered Grid Output Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div 
                key={sol.id}
                className="glass-panel p-6 rounded-3xl border border-zinc-900 flex flex-col justify-between items-stretch text-left hover:border-zinc-800 transition-all bg-zinc-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center p-2">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <span className="text-[8px] font-mono font-bold text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-550/20 uppercase tracking-widest leading-none block">
                      {sol.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display tracking-tight mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  {/* Core Features */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">Included Capabilities_</span>
                    {sol.features.map((feat, index) => (
                      <div key={index} className="flex items-start gap-1.5 text-xs text-zinc-300">
                        <span className="text-indigo-400 shrink-0 font-bold mt-0.5">·</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-zinc-900">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">Key SLA Performance_</span>
                    {sol.benefits.map((ben, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium font-sans">
                        <Award className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button 
                    onClick={() => setSelectedSolution(sol)}
                    className="w-full text-center py-3 bg-zinc-900 hover:bg-zinc-850 hover:text-white text-zinc-300 border border-zinc-805 font-sans font-bold text-xs rounded-xl transition-colors cursor-pointer block"
                  >
                    View Case Study _
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Details modal Drawer dialog */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-panel max-w-md w-full p-6 text-left border border-zinc-800 rounded-2xl relative shadow-2xl">
            <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-indigo-400 text-xl">🧬</span>
              {selectedSolution.title} (Case Audit)
            </h3>
            <span className="text-[9px] font-mono text-indigo-400 bg-indigo-950 border border-indigo-500/25 px-2.5 py-0.5 rounded uppercase tracking-widest font-bold mb-4 block w-fit">
              {selectedSolution.categoryLabel}
            </span>

            <div className="space-y-4 my-6 text-xs leading-relaxed">
              <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1 font-bold">Friction Scenario Resolved</span>
                <p className="text-zinc-300 font-sans">{selectedSolution.useCase}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1 font-bold">Typical Onboarding Pipeline</span>
                <ul className="list-decimal list-inside space-y-1 text-zinc-400">
                  <li>Context audit matching corporate guidelines.</li>
                  <li>Weights compilation inside secure sandboxes.</li>
                  <li>Hot-swap testing and live metrics mapping SLA validation.</li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => setSelectedSolution(null)}
              className="w-full p-2.5 text-xs font-mono font-bold text-white bg-indigo-650 hover:bg-indigo-650 rounded-xl cursor-pointer text-center block"
            >
              Exited Dashboard _
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
