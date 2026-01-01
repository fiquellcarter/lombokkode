import { type Config } from "prettier";

const config: Config = {
  bracketSameLine: true,
  printWidth: 100,
  trailingComma: "es5",
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrder: ["<BUILTIN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^~/(.*)$", "", "^[.]"],
  importOrderTypeScriptVersion: "5.0.0",
  tailwindStylesheet: "./app/app.css",
  tailwindFunctions: ["clsx", "cva"],
};

export default config;
