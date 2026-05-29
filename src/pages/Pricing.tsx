import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, HelpCircle, ChevronDown, ChevronUp, Star, Shield, Zap } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const priceMultiplier = billingCycle === "yearly" ? 0.8 : 1.0; // 20% savings

  const planTiers = [
    {
      id: "plan-starter",
      name: "Starter",
      desc: "Perfect for scaling startups testing localized automation.",
      monthlyPrice: 3999, // In INR
      yearlyPrice: 3199,
      icon: Zap,
      badge: "STARTUP HUB",
      features: [
        "Up to 2 Million monthly tokens",
        "Standard access to Sonify-Flash model",
        "API rate bounds: 60 RPM limit",
        "Standard email and dashboard tickets support",
        "Public web integration scripts"
      ],
      ctaText: "Unlock Starter Workspace",
      glowBg: "from-blue-500/10 to-indigo-500/5",
      borderColor: "border-zinc-900"
    },
    {
      id: "plan-professional",
      name: "Professional",
      desc: "For growing companies requiring robust workspace integrations.",
      monthlyPrice: 14999,
      yearlyPrice: 11999,
      icon: Star,
      badge: "MOST POPULAR",
      features: [
        "Up to 15 Million monthly tokens",
        "Symmetric access to Sonify-Ultra & Flash",
        "API rate bounds: 500 RPM limit",
        "Priority Slack support channel & dev response",
        "Full database integration workflows helper",
        "Dynamic RAG dataset indexing"
      ],
      ctaText: "Acquire Professional License",
      glowBg: "from-indigo-500/15 to-purple-500/10",
      borderColor: "border-indigo-500/35",
      isPopular: true
    },
    {
      id: "plan-enterprise",
      name: "Enterprise",
      desc: "Full cloud isolation, dedicated cores and DPDP compliant sovereignty.",
      monthlyPrice: 49999,
      yearlyPrice: 39999,
      icon: Shield,
      badge: "CORPORATE EXCLUSIVE",
      features: [
        "Unlimited model tokens (Private contract)",
        "Air-gapped on-prem or private VPC hosting",
        "No rate boundaries (Custom load balancer)",
        "24/7 dedicated account manager and cell phone SLA",
        "Custom weights training & legal IP guarantee",
        "Full SSO & SAML workspace directory sync"
      ],
      ctaText: "Contact Sales Operations",
      glowBg: "from-cyan-500/10 to-blue-500/5",
      borderColor: "border-zinc-900"
    }
  ];

  const compareMatrix = [
    { feature: "Model Weight Access", starter: "Flash only", professional: "Ultra + Flash", enterprise: "Full Weights Training" },
    { feature: "Monthly Tokens limit", starter: "2 Million", professional: "15 Million", enterprise: "Unlimited / Hybrid" },
    { feature: "Maximum RPM quota", starter: "60 Requests/min", professional: "500 Requests/min", enterprise: "Dedicated limits" },
    { feature: "Compliance Air-Gap", starter: "Unified Shared", professional: "Encrypted Tenants", enterprise: "VPC / Local Hosting" },
    { feature: "Support SLA", starter: "Email (48h)", professional: "Priority Channel (2h)", enterprise: "Dedicated Line (Live)" }
  ];

  const faqsList: FAQItem[] = [
    {
      question: "Are there training contract penalties if we exceed token caps?",
      answer: "No. On Starter and Professional tiers, exceeding caps will gracefully throttle requests under standard queue rate buffers. There are never automatic dynamic over-billing penalties. You can upgrade manual limits inside the Developer dashboard directly."
    },
    {
      question: "How is compliance managed for healthcare or financial client data?",
      answer: "SonifyAI Private Limited complies fully with DPDP policies. If your workload involves healthcare or auditing records, please select our Enterprise tier to provision air-gapped local database indexes to prevent content escaping Indian geographical boundaries."
    },
    {
      question: "Can we downgrade our billing cycles or request sandbox refunds?",
      answer: "Yes, you can cancel monthly recurring commitments at any point inside your account portal. Yearly cycles are contracted with a 20% discount and remain secure for the entirety of the contracted 12-month period."
    },
    {
      question: "Does SonifyAI train core parameters on custom customer payloads?",
      answer: "Absolutely not. We do not inspect customer prompts or outputs for fine-tuning our base public models without explicit signed enterprise training arrangements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen text-zinc-300 py-32 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(99,102,241,0.06),transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Pricing Header intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest leading-none block mb-4">
            COMPREHENSIVE SLA PRICING PLANS
          </span>
          <h1 className="text-4xl md:text-5.5xl font-extrabold font-display text-white tracking-tighter mb-4">
            Flexible Plans Aligned to Your Scale
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Choose a standard billing cycle. Save 20% by committing yearly to our distributed computational neural networks.
          </p>

          {/* Billing Toggle button */}
          <div className="inline-flex items-center gap-1.5 bg-zinc-950 border border-zinc-900 p-1 rounded-xl text-xs font-sans">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg font-bold cursor-pointer transition-colors ${
                billingCycle === "monthly" 
                  ? "bg-zinc-900 text-white border border-zinc-800" 
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-lg font-bold cursor-pointer transition-colors flex items-center gap-1.5 ${
                billingCycle === "yearly" 
                  ? "bg-indigo-950/40 text-indigo-400 border border-indigo-500/20" 
                  : "text-zinc-500 hover:text-indigo-400"
              }`}
            >
              <span>Yearly Cycle</span>
              <span className="text-[10px] bg-indigo-500 text-white font-mono rounded px-1.5 py-0.5 font-extrabold uppercase leading-none block shrink-0">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing tiers cards layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch text-left">
          {planTiers.map((tier) => {
            const Icon = tier.icon;
            const currentPrice = billingCycle === "yearly" ? tier.yearlyPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`glass-panel p-8 rounded-3xl border relative flex flex-col justify-between items-stretch transition-all ${
                  tier.borderColor
                } ${tier.isPopular ? "shadow-2xl shadow-indigo-950/20 bg-zinc-900/10" : "bg-zinc-950/20"}`}
              >
                {/* Glowing subtle background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.glowBg} rounded-3xl opacity-30 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] font-mono font-bold text-indigo-400 bg-indigo-950 border border-indigo-500/25 px-2.5 py-0.5 rounded-lg uppercase tracking-wider block">
                      {tier.badge}
                    </span>
                    <Icon className={`w-5 h-5 ${tier.isPopular ? "text-indigo-400 animate-pulse" : "text-zinc-550"}`} />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2">{tier.name}</h3>
                  <p className="text-zinc-450 text-xs leading-relaxed mb-6 h-10">{tier.desc}</p>

                  <div className="flex items-baseline gap-2 mb-8 border-b border-zinc-900 pb-6">
                    <span className="text-3xl md:text-4.5xl font-mono font-bold text-white tracking-tight">
                      ₹{currentPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-zinc-550 font-sans">
                      / month {billingCycle === "yearly" && "(billed yearly)"}
                    </span>
                  </div>

                  {/* Feature Checkmarks list */}
                  <div className="space-y-4 mb-8">
                    <span className="text-[10px] font-mono text-zinc-550 block uppercase tracking-widest font-bold">Package Inclusions</span>
                    {tier.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    className={`w-full text-center py-3.5 px-4 font-sans font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer block ${
                      tier.isPopular 
                        ? "bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-600 text-white shadow-indigo-950/30" 
                        : "bg-zinc-900 hover:bg-zinc-850 hover:text-white text-zinc-200 border border-zinc-805"
                    }`}
                  >
                    {tier.ctaText} _
                  </button>
                  <span className="text-[9px] font-mono tracking-wider text-zinc-600 block text-center mt-3 uppercase">Setup takes under 2 minutes</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix Table Grid */}
        <div className="text-left mb-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-extrabold text-white mb-8 text-center flex items-center justify-center gap-2">
            🧬 Raw Integration Matrices
          </h2>

          <div className="bg-zinc-950 border border-zinc-900 overflow-hidden rounded-2xl shadow-xl font-sans">
            <div className="grid grid-cols-4 bg-zinc-950 px-6 py-4 border-b border-zinc-900 font-mono text-[9px] text-zinc-500 tracking-wider">
              <span className="font-bold">CAPABILITY SPEC</span>
              <span className="font-bold text-center">STARTER</span>
              <span className="font-bold text-center">PROFESSIONAL</span>
              <span className="font-bold text-center">ENTERPRISE</span>
            </div>

            <div className="divide-y divide-zinc-900/60">
              {compareMatrix.map((item, idx) => (
                <div key={idx} className="grid grid-cols-4 px-6 py-4 items-center text-xs text-zinc-300 bg-zinc-950/20">
                  <span className="font-medium text-white">{item.feature}</span>
                  <span className="text-zinc-500 font-mono text-center">{item.starter}</span>
                  <span className="text-indigo-400 font-mono font-medium text-center">{item.professional}</span>
                  <span className="text-emerald-400 font-mono font-bold text-center">{item.enterprise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions FAQ Dropdowns Accordion */}
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-2xl font-display font-extrabold text-white mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-5.5 h-5.5 text-indigo-400" />
            Frequently Answered SLA Metrics
          </h2>

          <div className="space-y-4">
            {faqsList.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <div 
                  key={index} 
                  className="glass-panel rounded-2xl border border-zinc-900 bg-zinc-950/20 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm font-bold text-white leading-relaxed font-sans">{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-indigo-400" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs text-zinc-400 leading-relaxed font-sans border-t border-zinc-900/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
