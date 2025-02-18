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
      keyframes: {
        showcaseReelCursorIntro: {
          "0%%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        showcaseReelCursorExit: {
          "0%%": { transform: "translateY(100%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        showcaseReelCursorIntro:
          "showcaseReelCursorIntro 0.3s ease-in-out forwards",
        showcaseReelCursorExit:
          "showcaseReelCursorExit 0.3s ease-in-out forwards",
      },
      transitionTimingFunction: {
        "cubic-bezier-cursor": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "cubic-bezier-link": "cubic-bezier(0.52, 0, 0, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
