import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { X, Mail, Lock, User, Sparkles, Check, Chrome, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "signin" | "signup";
}

export default function AuthModal({ isOpen, onClose, defaultTab = "signin" }: AuthModalProps) {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const [activeTab, setActiveTab] = useState<"signin" | "signup">(defaultTab);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      await signInWithGoogle();
      setSuccessMsg("Welcome! Authenticated via Google.");
      setTimeout(() => {
        onClose();
        resetForm();
      }, 1200);
    } catch (err) {
      setErrorMsg("Google authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setErrorMsg("");
    setIsLoading(true);

    try {
      if (activeTab === "signup") {
        if (password !== confirmPassword) {
          setErrorMsg("Passwords do not match.");
          setIsLoading(false);
          return;
        }
        await signUpWithEmail(name, email);
        setSuccessMsg("Account created successfully! Welcome aboard.");
      } else {
        await signInWithEmail(email);
        setSuccessMsg("Signed in successfully!");
      }

      setTimeout(() => {
        onClose();
        resetForm();
      }, 1200);
    } catch (err) {
      setErrorMsg("Authentication failed. Please verify your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          id="auth-modal-backdrop"
        />

        {/* Modal Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="bg-zinc-950 border border-zinc-900 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl relative z-10"
          id="auth-modal-body"
        >
          {/* Subtle neon ceiling light */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          {/* Close trigger */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="p-6 pb-2 text-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono mb-3">
              <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />
              AUTHENTICATE SESSION
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {activeTab === "signin" ? "Welcome Back" : "Deploy Credentials"}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              {activeTab === "signin"
                ? "Access your high-performance enterprise sandbox"
                : "Register secure client nodes on the platform"}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="px-6 py-2">
            <div className="grid grid-cols-2 bg-zinc-900/60 rounded-lg p-1 border border-zinc-850/60">
              <button
                onClick={() => {
                  setActiveTab("signin");
                  setErrorMsg("");
                }}
                className={`py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                  activeTab === "signin"
                    ? "bg-zinc-800 text-white shadow-sm font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setActiveTab("signup");
                  setErrorMsg("");
                }}
                className={`py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                  activeTab === "signup"
                    ? "bg-zinc-800 text-white shadow-sm font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="px-6 py-4">
            {/* Google Sign In option */}
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white transition-all rounded-xl text-xs font-sans font-medium"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 text-zinc-400 animate-spin" />
              ) : (
                <Chrome className="w-4 h-4 text-indigo-400" />
              )}
              Continue with Google
            </button>

            {/* Divider lines */}
            <div className="relative flex items-center my-4 py-1">
              <div className="flex-grow border-t border-zinc-900" />
              <span className="flex-shrink mx-3 text-[10px] font-mono text-zinc-400 tracking-wider">
                OR EMAIL KEYS
              </span>
              <div className="flex-grow border-t border-zinc-900" />
            </div>

            {/* In-Line Status alerts */}
            {errorMsg && (
              <div className="mb-4 p-2.5 rounded-lg bg-red-950/20 border border-red-500/20 text-red-400 text-xs text-left">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="mb-4 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/25 text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              {activeTab === "signup" && (
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    Corporate Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      required
                      className="w-full bg-zinc-900 pl-10 pr-4 py-2.5 text-xs text-white rounded-xl focus:outline-none border border-zinc-800 focus:border-indigo-500/40 transition-colors placeholder-zinc-550"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                  Corporate Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full bg-zinc-900 pl-10 pr-4 py-2.5 text-xs text-white rounded-xl focus:outline-none border border-zinc-800 focus:border-indigo-500/40 transition-colors placeholder-zinc-550"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                  Access Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-zinc-900 pl-10 pr-4 py-2.5 text-xs text-white rounded-xl focus:outline-none border border-zinc-800 focus:border-indigo-500/40 transition-colors placeholder-zinc-550"
                  />
                </div>
              </div>

              {activeTab === "signup" && (
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full bg-zinc-900 pl-10 pr-4 py-2.5 text-xs text-white rounded-xl focus:outline-none border border-zinc-800 focus:border-indigo-500/40 transition-colors placeholder-zinc-550"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 py-2.5 bg-indigo-650 hover:bg-indigo-600 font-sans font-bold text-xs text-white rounded-xl transition-all shadow-md active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                    <span>Configuring Pipeline...</span>
                  </>
                ) : activeTab === "signin" ? (
                  "Initiate Platform Access"
                ) : (
                  "Register Corporate Node"
                )}
              </button>
            </form>
          </div>

          <div className="p-4 bg-zinc-900/30 border-t border-zinc-900 text-center">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
              SECURE WORKSPACE VIA TLS 1.3 SHIELD
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
