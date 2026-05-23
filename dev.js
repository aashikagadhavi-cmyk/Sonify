import esbuild from "esbuild";
import { spawn } from "child_process";

let child = null;

function startServer() {
  if (child) {
    try {
      child.kill("SIGTERM");
    } catch (e) {
      // Ignore
    }
  }
  // Run the compiled server
  child = spawn("node", ["dist/server-dev.js"], { stdio: "inherit" });
}

async function run() {
  try {
    const ctx = await esbuild.context({
      entryPoints: ["server.ts"],
      bundle: true,
      platform: "node",
      format: "esm",
      packages: "external",
      outfile: "dist/server-dev.js",
      plugins: [
        {
          name: "on-rebuild",
          setup(build) {
            build.onEnd((result) => {
              if (result.errors.length === 0) {
                console.log("⚡ [SonifyAI Server] Rebuilt successfully. Launching server...");
                startServer();
              } else {
                console.error("❌ [SonifyAI Server] Build failed:", result.errors);
              }
            });
          },
        },
      ],
    });

    console.log("👀 [SonifyAI Dev] Watching server.ts for changes...");
    await ctx.watch();
  } catch (error) {
    console.error("❌ Failed to initiate development runner:", error);
    process.exit(1);
  }
}

run();
