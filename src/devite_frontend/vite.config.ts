import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import environment from "vite-plugin-environment";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

export default defineConfig({
  build: {
    outDir: "../../dist/devite_frontend",
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
    {
      name: "inject-env",
      config: () => ({
        define: {
          "process.env.CANISTER_ID_DEVITE_BACKEND": JSON.stringify(
            "bkyz2-fmaaa-aaaaa-qaaaq-cai"
          ),
          "process.env.CANISTER_ID_DEVITE_FRONTEND": JSON.stringify(
            "bd3sg-teaaa-aaaaa-qaaba-cai"
          ),
          "process.env.DFX_NETWORK": JSON.stringify("local"),
        },
      }),
    },
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "declarations",
        replacement: fileURLToPath(new URL("../declarations", import.meta.url)),
      },
    ],
    dedupe: ["@dfinity/agent"],
  },
});
