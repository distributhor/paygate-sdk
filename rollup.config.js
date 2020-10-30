import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    plugins: [
      json(),
      resolve(),
      commonjs(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            outDir: "browser",
            module: "es2015",
          },
        },
      }),
    ],
    input: "src/browser.ts",
    output: {
      file: "browser/paygate.js",
      name: "paygate",
      format: "iife",
    },
  },
];
