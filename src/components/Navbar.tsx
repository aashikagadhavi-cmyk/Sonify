import React, { useState, useEffect } from "react";
import { Bot, Menu, X, ArrowRight, LogIn, LogOut, User as UserIcon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#/" },
    { name: "Platform", href: "#/platform" },
    { name: "Solutions", href: "#/solutions" },
    { name: "Technology", href: "#/technology" },
    { name: "Developers", href: "#/developers" },
    { name: "Pricing", href: "#/pricing" },
    { name: "About", href: "#/about" }
  ];

  const triggerAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/80 border-b border-zinc-850 backdrop-blur-md"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center p-0.5 relative overflow-hidden shadow-lg shadow-indigo-950/40">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Bot className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <span className="font-sans font-bold text-white text-lg tracking-tight leading-none block">
                Sonify<span className="text-indigo-400">AI</span>
              </span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none block">
                Private Limited
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 text-sm font-sans font-medium hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-400 to-indigo-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Rights */}
          <div className="hidden md:flex items-center gap-4">
            
            {user ? (
              /* Authenticated User Status */
              <div className="flex items-center gap-3 relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors focus:outline-none cursor-pointer"
                >
                  <img
                    src={user.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.displayName)}`}
                    alt={user.displayName}
                    referrerPolicy="no-referrer"
                    className="w-5.5 h-5.5 rounded-lg object-cover bg-indigo-950 border border-indigo-500/30"
                  />
                  <div className="text-left font-sans text-xs">
                    <span className="text-white font-medium block leading-none">
                      {user.displayName}
                    </span>
                    <span className="text-[9px] text-indigo-400 font-mono block leading-none mt-1">
                      {user.email}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    logout();
                    setShowProfileMenu(false);
                  }}
                  className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-805 text-zinc-400 hover:text-red-400 hover:border-red-500/20 transition-all cursor-pointer"
                  title="Logout Session"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* Non-authenticated Actions */
              <div className="flex items-center gap-3">
                <button
                  onClick={() => triggerAuth("signin")}
                  className="px-4 py-2 text-xs font-sans font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  Sign In
                </button>

                <button
                  onClick={() => triggerAuth("signup")}
                  className="relative group px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-600 text-white font-sans font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
            )}

            <div className="h-5 w-[1px] bg-zinc-800 mx-1" />

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-900 text-[9px] font-mono text-emerald-400 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              ONLINE
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bg-zinc-950/95 border-b border-zinc-850 backdrop-blur-lg z-40 p-6 md:hidden text-center"
          >
            <div className="flex flex-col gap-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-300 text-base font-sans font-medium hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="h-[1px] bg-zinc-900 my-2" />

              {user ? (
                <div className="flex flex-col items-center gap-4 py-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.displayName)}`}
                      alt={user.displayName}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-xl border border-indigo-500/30"
                    />
                    <div className="text-left font-sans">
                      <div className="text-sm font-bold text-white leading-none">
                        {user.displayName}
                      </div>
                      <div className="text-xs text-zinc-500 leading-none mt-1">
                        {user.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-center px-5 py-3 text-sm font-sans font-bold text-red-400 border border-zinc-800 hover:bg-zinc-900 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out Session
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => triggerAuth("signin")}
                    className="w-full py-3 text-sm font-sans font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-xl hover:text-white transition-colors cursor-pointer"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => triggerAuth("signup")}
                    className="w-full py-3 text-sm font-sans font-bold text-white bg-indigo-650 hover:bg-indigo-600 rounded-xl transition-colors cursor-pointer"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal Container */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        defaultTab={authMode}
      />
    </>
  );
}
