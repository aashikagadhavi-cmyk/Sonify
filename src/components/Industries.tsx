import React, { useState } from "react";
import { Sparkles, Building2, Rocket, ShoppingCart, Activity, GraduationCap, Users, Landmark, Monitor, Check } from "lucide-react";

export default function Industries() {
  const [activeInd, setActiveInd] = useState("saas");

  const industriesData = [
    {
      id: "saas",
      name: "SaaS Platforms",
      icon: Monitor,
      useCase: "Orchestrate real-time support context, trigger subscription health alerts, and automate personalized onboarding dialogues.",
      impact: "+320% Scale Efficiency",
      strategy: "Dynamic In-context Help Desks & Automated Onboarding Triggers"
    },
    {
      id: "startups",
      name: "Startups & Tech",
      icon: Rocket,
      useCase: "Accelerate content drafting, product iteration notes, and customer response loops to stay lean and scale productivity 10x faster.",
      impact: "-75% Admin Overhead",
      strategy: "Task Automation Loops & Document Drafting Assistants"
    },
    {
      id: "enterprises",
      name: "Enterprises",
      icon: Building2,
      useCase: "Consolidate massive legacy datasources, automate enterprise-wide compliance reporting, and dispatch localized language structures securely.",
      impact: "Zero Data Lag",
      strategy: "SOC2 Compliance Integration & Multi-language Context Handlers"
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      useCase: "Generate hyper-personalized transactional email campaigns, product description variations, and multi-channel marketing campaigns dynamically.",
      impact: "+40% Conversion Rates",
      strategy: "Hyper-personalized Transactional Copy & Dynamic Catalog Generation"
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Activity,
      useCase: "Empower clinics with autonomous patient record structures, appointment scheduling assistants, and automated, safe informational summaries.",
      impact: "100% HIPAA Sanitized",
      strategy: "Structured Patient Context Management & Intake Automation"
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      useCase: "Deploy interactive study planners, automated text transcript summaries, personalized student study guides, and dynamic learning assistance.",
      impact: "+88% Pupil Engagement",
      strategy: "Personalized Educational Planners & Text-to-Speech Lecture Recovers"
    },
    {
      id: "agencies",
      name: "Agencies",
      icon: Users,
      useCase: "Automate complex copy pitches, generate diverse social campaigns, create natural client reports, and scale copywriting operations seamlessly.",
      impact: "Instant Pitch Iteration",
      strategy: "Social Copy variations & Dynamic client reporting sheets"
    },
    {
      id: "finance",
      name: "Financial Services",
      icon: Landmark,
      useCase: "Synthesize large investment prospectus metrics, automate KYC analysis triggers, and output real-time portfolio trend reports securely.",
      impact: "<0.1% Decision Latency",
      strategy: "Data Summarization Generators & SEC Compliance Checkers"
    }
  ];

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-black/95">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Global Markets Served
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
            Tailored Industry Solutions
          </h2>
          <p className="mt-4 text-gray-400 text-base leading-relaxed">
            SonifyAI builds compliant, domain-specific AI structures engineered to automate critical workflows across diverse modern sectors.
          </p>
        </div>

        {/* 8-Industry Layout Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Industry Selection Column (col 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {industriesData.map((ind) => {
              const IconComponent = ind.icon;
              const isActive = activeInd === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveInd(ind.id)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-[100px] ${
                    isActive
                      ? "bg-zinc-900/60 border-indigo-500/50 shadow-lg shadow-indigo-950/20"
                      : "bg-black/30 border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <IconComponent className={`w-5 h-5 ${isActive ? "text-indigo-400" : "text-zinc-550"}`} />
                  <span className={`text-xs font-semibold block mt-4 select-none ${isActive ? "text-white" : "text-zinc-400"}`}>
                    {ind.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Industry Active Detail Panel (col 7) */}
          <div className="lg:col-span-7 bg-zinc-950/50 border border-zinc-900 rounded-3xl p-6 md:p-10 min-h-[320px] flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
            
            {/* Gloss line */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/30 to-purple-500/20" />

            {industriesData.map((ind) => {
              if (ind.id !== activeInd) return null;
              const IconComp = ind.icon;
              return (
                <div key={ind.id} className="h-full flex flex-col justify-between">
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between border-b border-zinc-900 pb-5 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-950/40 border border-indigo-500/20 rounded-lg text-indigo-400">
                          <IconComp className="w-5 h-5 text-indigo-400" />
                        </div>
                        <span className="text-white font-bold font-sans text-xl">{ind.name} Workspace</span>
                      </div>
                      <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">DEPLOYMENT_FLOW</span>
                    </div>

                    <h4 className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-2">Primary Use Case</h4>
                    <p className="text-zinc-350 text-base leading-relaxed mb-6 font-sans">
                      {ind.useCase}
                    </p>

                    <h4 className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-2">Core Strategy</h4>
                    <p className="text-white text-sm font-medium font-sans mb-6">
                      {ind.strategy}
                    </p>
                  </div>

                  {/* Impact bottom panel */}
                  <div className="bg-zinc-900/30 border border-zinc-900/60 rounded-2xl p-5 flex items-center justify-between flex-wrap gap-4 mt-4">
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Projected Business Impact</span>
                      <span className="text-lg md:text-xl font-bold font-sans text-emerald-400 mt-1 block">
                        {ind.impact}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 bg-emerald-950/20 border border-emerald-500/20 px-2.5 py-1 rounded">
                      VERIFIED OUTCOME
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
