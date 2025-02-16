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
      },
      fontFamily: {
        suisseintl: ["SuisseIntl", "sans-serif"],
      },
      fontSize: {
        lg: "1.25rem",
        "6xl": "4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
