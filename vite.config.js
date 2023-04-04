import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;
export default defineConfig({
  server: {
    port: PORT,
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",

      // tell the plugin where is your project entry
      appPath: "./src/app.js",

      // Optional, default: 'viteNodeApp'
      // the name of named export of you app from the appPath file
      exportName: "viteNodeApp",
      tsCompiler: "esbuild",
      swcOptions: {},
    }),
  ],
  optimizeDeps: {},
});
