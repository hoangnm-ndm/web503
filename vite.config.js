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

      // Optional, default: {
      // jsc: {
      //   target: 'es2019',
      //   parser: {
      //     syntax: 'typescript',
      //     decorators: true
      //   },
      //  transform: {
      //     legacyDecorator: true,
      //     decoratorMetadata: true
      //   }
      // }
      // }
      // swc configs, see [swc doc](https://swc.rs/docs/configuration/swcrc)
      swcOptions: {},
    }),
  ],
  optimizeDeps: {
    // Vite does not work well with optionnal dependencies,
    // you can mark them as ignored for now
    // eg: for nestjs, exlude these optional dependencies:
    // exclude: [
    //   '@nestjs/microservices',
    //   '@nestjs/websockets',
    //   'cache-manager',
    //   'class-transformer',
    //   'class-validator',
    //   'fastify-swagger',
    // ],
  },
});
