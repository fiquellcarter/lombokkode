import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import type { UserConfig } from "vite";
import { imagetools } from "vite-imagetools";
import devtoolsJson from "vite-plugin-devtools-json";
import tsconfigPaths from "vite-tsconfig-paths";

const config: UserConfig = {
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), imagetools(), devtoolsJson()],
};

export default config;
