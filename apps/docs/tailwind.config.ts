// tailwind config is required for editor support

import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets" | "content"> = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [sharedConfig],
};

export default config;
