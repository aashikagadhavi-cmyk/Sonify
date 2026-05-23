/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import Playground from "./components/Playground";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import CorporateCredentials from "./components/CorporateCredentials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen selection:bg-indigo-500 selection:text-white overflow-hidden scroll-smooth">
      {/* Immersive glowing global layout overlay background dots */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0 opacity-20" />

      {/* Primary Landing Page Components */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Features />
        <Industries />
        <WhyChooseUs />
        <Playground />
        <Process />
        <Testimonials />
        <CTASection />
        <CorporateCredentials />
      </main>
      <Footer />
    </div>
  );
}
