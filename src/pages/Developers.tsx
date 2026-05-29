import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, 
  Code, 
  Cpu, 
  Copy, 
  Check, 
  Play, 
  Layers, 
  RefreshCw, 
  Github, 
  Key, 
  Database,
  Cloud 
} from "lucide-react";

type CodeLang = "curl" | "javascript" | "python" | "go";

export default function Developers() {
  const [selectedLang, setSelectedLang] = useState<CodeLang>("curl");
  const [copied, setCopied] = useState(false);
  const [triggerSandbox, setTriggerSandbox] = useState(false);
  const [sandboxResult, setSandboxResult] = useState<any | null>(null);
  const [sandboxRoute, setSandboxRoute] = useState<string>("/v1/chat/completions");

  const codeSnippets: Record<CodeLang, string> = {
    curl: `curl -X POST https://api.sonifyai.tech/v1/chat/completions \\
  -H "Authorization: Bearer \$SONIFYAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "sonify-ultra-v4",
    "messages": [{"role": "user", "content": "Analyze supply-chain invoice."}],
    "temperature": 0.2
  }'`,
    javascript: `import { SonifyAI } from "@sonifyai/sdk";

const ai = new SonifyAI({ apiKey: process.env.SONIFYAI_API_KEY });

const response = await ai.chat.completions.create({
  model: "sonify-ultra-v4",
  messages: [{ role: "user", content: "Analyze supply-chain invoice." }],
  temperature: 0.2
});

console.log(response.choices[0].message.content);`,
    python: `from sonifyai import SonifyAI
import os

client = SonifyAI(
    api_key=os.environ.get("SONIFYAI_API_KEY")
)

response = client.chat.completions.create(
    model="sonify-ultra-v4",
    messages=[
        {"role": "user", "content": "Analyze supply-chain invoice."}
    ],
    temperature=0.2
)

print(response.choices[0].message.content)`,
    go: `package main

import (
	"context"
	"fmt"
	"github.com/sonifyai/go-sdk"
)

func main() {
	client := sonifyai.NewClient("YOUR_API_KEY")
	resp, _ := client.CreateChatCompletion(context.Background(), sonifyai.ChatRequest{
		Model: "sonify-ultra-v4",
		Messages: []sonifyai.Message{
			{Role: "user", Content: "Analyze supply-chain invoice."},
		},
	})
	fmt.Println(resp.Choices[0].Message.Content)
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeSandboxQuery = () => {
    setTriggerSandbox(true);
    setTimeout(() => {
      let mockResponse = {};
      if (sandboxRoute === "/v1/chat/completions") {
        mockResponse = {
          id: "chatcmpl-9xSonify88v",
          object: "chat.completion",
          created: Math.floor(Date.now() / 1000),
          model: "sonify-ultra-v4",
          choices: [
            {
              index: 0,
              message: {
                role: "assistant",
                content: "Payload resolved. Found 3 items violating vendor margin tolerances. Invoice total: Rs 14,20,500."
              },
              finish_reason: "stop"
            }
          ],
          usage: {
            prompt_tokens: 42,
            completion_tokens: 18,
            total_tokens: 60
          }
        };
      } else {
        mockResponse = {
          id: "voice-node-88vvX",
          object: "audio.translation",
          created: Math.floor(Date.now() / 1000),
          model: "sonify-voice-v4",
          duration_seconds: 4.82,
          sample_rate: 44100,
          status: "completed",
          playback_url: "https://api.sonifyai.tech/v1/outputs/v88.mp3"
        };
      }
      setSandboxResult(mockResponse);
      setTriggerSandbox(false);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen text-zinc-300 py-32 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(99,102,241,0.06),transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block Intro Title info */}
        <div className="text-left max-w-2xl mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest leading-none block mb-4">
            COLLECTIVE DEVELOPER LOGISTICS
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tighter mb-4">
            Developer Documentation
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Consolidate and trigger SonifyAI core models inside your custom application with standard lightweight SDK arrays.
          </p>
        </div>

        {/* Core Code Terminal Block Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20 text-left">
          
          {/* Code Ingestor Snippet Editor Panel */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-zinc-950 border border-zinc-900 overflow-hidden shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-zinc-900 px-4 py-3 bg-zinc-950">
              <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                <span>api_handshake_example</span>
              </div>
              <button 
                onClick={handleCopyCode}
                className="flex items-center gap-1 text-[10px] font-mono text-zinc-550 hover:text-white px-2 py-1 rounded bg-zinc-900 border border-zinc-850 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </button>
            </div>

            {/* Language Selection bar */}
            <div className="flex items-center gap-1 bg-zinc-950 border-b border-zinc-900 px-3 py-2 text-xs font-mono">
              {(["curl", "javascript", "python", "go"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-3 py-1.5 rounded-lg border text-[10px] uppercase cursor-pointer ${
                    selectedLang === lang 
                      ? "bg-zinc-900 border-indigo-500/30 text-indigo-400 font-bold" 
                      : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {lang === "curl" ? "cURL" : lang}
                </button>
              ))}
            </div>

            {/* Code Screen lines */}
            <div className="p-5 font-mono text-xs text-white overflow-x-auto bg-black leading-relaxed min-h-[14rem]">
              <pre>{codeSnippets[selectedLang]}</pre>
            </div>
          </div>

          {/* Code Live Endpoint Sandbox executing block */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-zinc-950 border border-zinc-900 overflow-hidden shadow-2xl p-5 relative">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block mb-4">⭐ Realtime Sandbox Query Environment</span>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[9px] font-mono uppercase text-zinc-400 block tracking-widest mb-1.5">target path route</label>
                  <select
                    value={sandboxRoute}
                    onChange={(e) => {
                      setSandboxRoute(e.target.value);
                      setSandboxResult(null);
                    }}
                    className="w-full bg-black border border-zinc-850 focus:border-indigo-500 p-2.5 rounded-xl text-xs text-white focus:outline-none font-mono"
                  >
                    <option value="/v1/chat/completions">POST /v1/chat/completions (Ultra)</option>
                    <option value="/v1/audio/transcription">POST /v1/audio/transcription (Voice)</option>
                  </select>
                </div>

                <button
                  onClick={executeSandboxQuery}
                  disabled={triggerSandbox}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-600 disabled:opacity-50 text-white font-sans font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  {triggerSandbox ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Retrieving pipeline weights...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Execute Sandbox Handshake</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Simulated Raw Response screen block */}
            <div className="mt-6 border-t border-zinc-900 pt-5">
              <span className="text-[9px] font-mono text-zinc-550 block uppercase tracking-widest mb-2 font-bold font-mono">live API raw output json //</span>
              <div className="p-3.5 bg-black border border-zinc-900 rounded-xl min-h-[9rem] max-h-[14rem] overflow-y-auto text-left">
                {sandboxResult ? (
                  <pre className="text-[10.5px] font-mono text-emerald-400 leading-normal">
                    {JSON.stringify(sandboxResult, null, 2)}
                  </pre>
                ) : triggerSandbox ? (
                  <span className="text-[10.5px] text-zinc-500 font-mono italic animate-pulse">Request pending resolving nodes...</span>
                ) : (
                  <span className="text-[10.5px] text-zinc-650 font-mono italic block">Click above to dispatch and watch live payload schema transformations.</span>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Guidelines SDK card parameters list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          
          <div className="glass-panel p-6 rounded-3xl border border-zinc-900 bg-zinc-950/20">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center p-2 mb-6">
              <Key className="w-4.5 h-4.5 text-indigo-400" />
            </div>
            <h3 className="text-base font-bold text-white font-display tracking-tight mb-2">Bearer Authentication</h3>
            <p className="text-zinc-505 text-xs leading-relaxed">
              Every request to SonifyAI REST target loops must include the Bearer token inside the client request headers. Guard keys strictly within server environments.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-zinc-900 bg-zinc-950/20">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center p-2 mb-6">
              <Github className="w-4.5 h-4.5 text-indigo-400" />
            </div>
            <h3 className="text-base font-bold text-white font-display tracking-tight mb-2">SDK Repositories</h3>
            <p className="text-zinc-505 text-xs leading-relaxed">
              Check out our pre-packaged wrappers for Go, Javascript, Python, and C# distributed directly through our public GitHub registry workspace.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-zinc-900 bg-zinc-950/20">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center p-2 mb-6">
              <Cloud className="w-4.5 h-4.5 text-indigo-400" />
            </div>
            <h3 className="text-base font-bold text-white font-display tracking-tight mb-2">Webhooks Integrations</h3>
            <p className="text-zinc-505 text-xs leading-relaxed">
              Listen to asynchronous translation completions or voice file compilation finishes with symmetric secure signature verification keys.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
