import { readFileSync } from "node:fs";
import { defineConfig } from "tsup";

const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "es2022",
  outDir: "build",
  clean: true,
  dts: true,
  sourcemap: true,
  noExternal: [/.*/], // Bundle all dependencies
  banner: {
    js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);",
  },
  define: {
    __VERSION__: `"${packageJson.version}"`,
  },
});
