import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#B45309",
        cream: "#FFFBEB",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
