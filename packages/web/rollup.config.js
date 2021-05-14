import path from "path";
import dotenv from "dotenv";
dotenv.config();

import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      emitCss: true,
      compilerOptions: {
        dev: !production,
      },

      preprocess: sveltePreprocess({
        replace: [
          ["process.env.URL_GRAPHQL", JSON.stringify(process.env.URL_GRAPHQL)],
        ],
      }),
    }),

    postcss({
      extract: path.resolve("public/build/bundle.css"),
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
      extensions: [".svelte", ".js", ".ts"],
    }),

    commonjs(),

    typescript({
      sourceMap: false,
      inlineSources: false,
    }),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
