import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Views
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Technology from "./pages/Technology";
import Developers from "./pages/Developers";
import Pricing from "./pages/Pricing";
import AboutPage from "./pages/AboutPage";

// Legal overlays
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import TermsConditions from "./components/legal/TermsConditions";
import Disclaimer from "./components/legal/Disclaimer";
import CookiePolicy from "./components/legal/CookiePolicy";
import AcceptableUse from "./components/legal/AcceptableUse";

type ViewState = 
  | "home"
  | "platform"
  | "solutions"
  | "technology"
  | "developers"
  | "pricing"
  | "about"
  | "privacy"
  | "terms"
  | "disclaimer"
  | "cookies"
  | "acceptable-use";

export default function App() {
  const [view, setView] = useState<ViewState>("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#/legal-privacy" || hash === "#/privacy") {
        setView("privacy");
        window.scrollTo(0, 0);
      } else if (hash === "#/legal-terms" || hash === "#/terms") {
        setView("terms");
        window.scrollTo(0, 0);
      } else if (hash === "#/legal-disclaimer" || hash === "#/disclaimer") {
        setView("disclaimer");
        window.scrollTo(0, 0);
      } else if (hash === "#/legal-cookies" || hash === "#/cookies") {
        setView("cookies");
        window.scrollTo(0, 0);
      } else if (hash === "#/legal-acceptable-use" || hash === "#/acceptable-use") {
        setView("acceptable-use");
        window.scrollTo(0, 0);
      } else if (hash === "#/platform") {
        setView("platform");
        window.scrollTo(0, 0);
      } else if (hash === "#/solutions") {
        setView("solutions");
        window.scrollTo(0, 0);
      } else if (hash === "#/technology") {
        setView("technology");
        window.scrollTo(0, 0);
      } else if (hash === "#/developers") {
        setView("developers");
        window.scrollTo(0, 0);
      } else if (hash === "#/pricing") {
        setView("pricing");
        window.scrollTo(0, 0);
      } else if (hash === "#/about") {
        setView("about");
        window.scrollTo(0, 0);
      } else {
        setView("home");
        window.scrollTo(0, 0);
      }
    };

    // Initialize on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleCloseLegal = () => {
    window.location.hash = "#app-footer"; // scroll back to footer upon finish
    setView("home");
  };

  const isLegalView = ["privacy", "terms", "disclaimer", "cookies", "acceptable-use"].includes(view);

  return (
    <div className="bg-zinc-950 text-white min-h-screen selection:bg-indigo-500 selection:text-white overflow-hidden scroll-smooth">
      {/* Immersive glowing global layout overlay background dots */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0 opacity-20" />

      {!isLegalView && <Navbar />}

      <main className="relative z-10">
        {view === "home" && <Home />}
        {view === "platform" && <Platform />}
        {view === "solutions" && <Solutions />}
        {view === "technology" && <Technology />}
        {view === "developers" && <Developers />}
        {view === "pricing" && <Pricing />}
        {view === "about" && <AboutPage />}

        {/* Legal views overlay mapping */}
        {view === "privacy" && <PrivacyPolicy onClose={handleCloseLegal} />}
        {view === "terms" && <TermsConditions onClose={handleCloseLegal} />}
        {view === "disclaimer" && <Disclaimer onClose={handleCloseLegal} />}
        {view === "cookies" && <CookiePolicy onClose={handleCloseLegal} />}
        {view === "acceptable-use" && <AcceptableUse onClose={handleCloseLegal} />}
      </main>

      {!isLegalView && <Footer />}
    </div>
  );
}
