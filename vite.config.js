import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
export default defineConfig({
  // ...vite configures
  server: {
    port: PORT,
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "./src/app.js",
      exportName: "viteNodeApp",
      tsCompiler: "esbuild",
      swcOptions: {},
    }),
  ],
  optimizeDeps: {},
});
