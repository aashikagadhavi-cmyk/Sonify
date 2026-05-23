import React from "react";
import { Quote, Sparkles, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: "rev1",
      quote: "SonifyAI completely transformed our user onboarding automation. We eliminated support friction almost entirely and now compile personal summary briefs in sub-seconds. Recommended for high-growth SaaS teams!",
      author: "Elena Rostova",
      role: "VP Operations",
      company: "ScaleFlow Systems",
      industry: "SaaS Platforms"
    },
    {
      id: "rev2",
      quote: "The voice synthesis latency on SonifyAI is incredible. We went live with natural-sounding transactional customer assistants that resolve incoming queries instantly under 240ms. Absolute game changer!",
      author: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "RetailWave Corporation",
      industry: "E-commerce"
    },
    {
      id: "rev3",
      quote: "Integrating SonifyAI into our Salesforce pipelines was seamless. Their enterprise security protocols are outstanding, and the modular agent blueprints work flawlessly out of the box.",
      author: "Sarah Jenkins",
      role: "Director of IT Integration",
      company: "HealthSync Networks",
      industry: "Healthcare"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black/90">
      
      {/* Back glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            Proven Operational Scale
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
            Client Success
          </h2>
          <p className="mt-4 text-gray-400 text-base leading-relaxed">
            Discover how leading modern organizations utilize SonifyAI to automate workflows, engage customers, and scale productivity.
          </p>
        </div>

        {/* 3-card testimonial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between align-stretch relative group hover:border-zinc-800 transition-colors shadow-2xl relative"
            >
              <div className="absolute top-6 right-8 text-zinc-800 pointer-events-none">
                <Quote className="w-12 h-12 stroke-[1px] opacity-20" />
              </div>

              <div>
                {/* 5 stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-amber-500/85 text-amber-500/85" />
                  ))}
                </div>

                <p className="text-zinc-300 text-sm font-sans leading-relaxed italic mb-8 relative z-10 text-left">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author profiles */}
              <div className="pt-6 border-t border-zinc-900 flex items-center justify-between text-left">
                <div>
                  <h4 className="text-white font-sans font-bold text-base leading-none">
                    {rev.author}
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1.5 font-sans">
                    {rev.role} — <span className="text-zinc-400">{rev.company}</span>
                  </p>
                </div>
                
                <span className="text-[9px] font-mono text-indigo-400 bg-indigo-950/30 px-2.5 py-1 rounded">
                  {rev.industry}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
