import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

// Create application
const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized GoogleGenAI client helper
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // In pre-configured environments or during early load, write clean logs.
      // We will handle key-check in the route, but avoid crashing the module load.
      console.warn("GEMINI_API_KEY is not defined in environments. Server initialized without it.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "PLACEHOLDER_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return aiClient;
}

// -----------------------------------------------------------------------------
// SECURE API ENDPOINTS
// -----------------------------------------------------------------------------

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Interactive AI Playground Generator
app.post("/api/playground/generate", async (req: express.Request, res: express.Response) => {
  const { businessType, prompt, focusArea } = req.body;

  if (!businessType && !prompt) {
    res.status(400).json({ error: "Missing required parameters: businessType or prompt" });
    return;
  }

  // Construct a prompt for the model
  const userPrompt = prompt 
    ? `Create a customized generative AI workflow layout for: "${prompt}". Focus area is "${focusArea || "General Operations"}".`
    : `Create a customized generative AI workflow for a "${businessType}" business specializing in "${focusArea || "Automated Scale"}".`;

  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Graceful fallback with high-quality structural mock data for immediate out-of-the-box preview
      console.log("No GEMINI_API_KEY provided. Returning pre-designed Sonify mock workflow.");
      res.json(getMockWorkflowResponse(businessType || "Enterprise", focusArea || "Operations", prompt));
      return;
    }

    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: `You are the core SonifyAI Generative Orchestrator Engine.
Your job is to analyze a business request and output an organized, fully functional, highly detailed business automation workspace concept in clean JSON format.
Keep the design clean, human-centric, and premium.
The workspace should feature 3 core intelligent agents and a 4-step sequence of automation.

You MUST strict return ONLY a valid raw JSON object. Do not wrap in markdown \`\`\`json blocks.
The JSON structure must match exactly:
{
  "title": "A short premium tagline for this custom engine",
  "summary": "A 2-3 sentence overview describing how SonifyAI powers this workspace to automate digital content, workflows, or customer engagement.",
  "agents": [
    {
      "name": "Name of Agent 1 (e.g. Lexicon Intel, Dialog Core)",
      "role": "Specific automated capability (e.g. Multi-format scriptwriting, voice synclost)",
      "status": "Active / Idle",
      "specialty": "A brief feature set describing what they do",
      "efficiency": "e.g., +85% speed, 2.4s latency"
    },
    ... (total exactly 3 agents)
  ],
  "timeline": [
    {
      "phase": "Discover",
      "detail": "How SonifyAI ingests or tracks this business data",
      "estTime": "Real-time / Instant"
    },
    {
      "phase": "Design",
      "detail": "AI blueprints or compiles the optimal pipeline",
      "estTime": "12 seconds"
    },
    {
      "phase": "Automate",
      "detail": "Actionable task execution, voice generation, or response triggers",
      "estTime": "Automatic"
    },
    {
      "phase": "Scale",
      "detail": "Data is synced and distributed across enterprise channels",
      "estTime": "Continuously"
    }
  ]
}`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["title", "summary", "agents", "timeline"],
          properties: {
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            agents: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["name", "role", "status", "specialty", "efficiency"],
                properties: {
                  name: { type: Type.STRING },
                  role: { type: Type.STRING },
                  status: { type: Type.STRING },
                  specialty: { type: Type.STRING },
                  efficiency: { type: Type.STRING }
                }
              }
            },
            timeline: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["phase", "detail", "estTime"],
                properties: {
                  phase: { type: Type.STRING },
                  detail: { type: Type.STRING },
                  estTime: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const responseText = response.text ? response.text.trim() : "";
    
    // Parse response
    try {
      const data = JSON.parse(responseText);
      res.json(data);
    } catch (parseErr) {
      console.error("JSON parsing error of model response:", parseErr, "Raw was:", responseText);
      // Fallback
      res.json(getMockWorkflowResponse(businessType || "Interactive Cloud", focusArea || "Dynamic Logic", prompt));
    }

  } catch (apiErr: any) {
    console.error("Gemini API error during generation:", apiErr);
    res.status(500).json({ error: "Fail to connect to AI engine", details: apiErr.message });
  }
});

// Mock generator for fallback / no API key scenarios to guarantee a robust experience
function getMockWorkflowResponse(businessType: string, focusArea: string, customPrompt?: string) {
  const query = customPrompt || `${businessType} in ${focusArea}`;
  return {
    title: `SonifyAI Custom Workspace: ${query.length > 25 ? query.substring(0, 25) + "..." : query}`,
    summary: `Tailored workflow integration utilizing SonifyAI's sub-second inference structures. This specialized setup coordinates language automation models and advanced text-to-speech rendering pipelines to eliminate human-to-system data delays across your standard channels.`,
    agents: [
      {
        name: "Aetheria-9 Core Engine",
        role: "Real-time context indexing",
        status: "Active",
        specialty: "Structures unstructured user emails and records using advanced semantic models",
        efficiency: "+140% speed optimization"
      },
      {
        name: "Voice-Synthesis Synaptic Hub",
        role: "Natural voice broadcasting",
        status: "Active",
        specialty: "Drafts and outputs rich, vocal dialogues and interactive call summaries instantaneously",
        efficiency: "< 0.8s latency average"
      },
      {
        name: "Automata Flow Controller",
        role: "Continuous operations router",
        status: "Idle",
        specialty: "Triggers CRM updates, dispatch messages, and multi-channel API hooks reliably",
        efficiency: "100% operation accuracy"
      }
    ],
    timeline: [
      {
        phase: "Discover",
        detail: `Analyze system requests related to "${query}" and parse telemetry details.`,
        estTime: "Instant ingestion"
      },
      {
        phase: "Design",
        detail: "Align parsed intents with existing enterprise templates and workflow permissions.",
        estTime: "12 seconds"
      },
      {
        phase: "Automate",
        detail: "Inference engines trigger voice generators and deploy robotic process routes.",
        estTime: "Sub-second action"
      },
      {
        phase: "Scale",
        detail: "Commit final logs to server logs and balance subsequent request quotas.",
        estTime: "Continuously"
      }
    ]
  };
}

// -----------------------------------------------------------------------------
// VITE OR STATIC STATIC SERVING
// -----------------------------------------------------------------------------

async function initializeServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development mode with Vite's middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production mode - static assets
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SonifyAI Webapp] Fullstack server booted on port ${PORT}`);
  });
}

initializeServer().catch((err) => {
  console.error("Critical failure during server startup:", err);
});
