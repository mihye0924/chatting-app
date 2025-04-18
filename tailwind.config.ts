import type { Config } from "tailwindcss";
import tailwindCSSAnimate from "tailwindcss-animate";
import tailwindCSSScrollbarHide from "tailwind-scrollbar-hide";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      fontSize: {
        24: "1.6rem",
      },
      colors: {
        transparent: "transparent",
        gray: {
          1: "#e5e7eb",
          2: "#fafaf9",
          3: "#d9d9d9",
          4: "#e4e4e4",
          5: "#696969",
        },
        pink: "#ff4c87",
      },
      borderRadius: {
        sm: "1rem",
        md: "2rem",
        lg: "5rem",
        full: "50%",
      },
    },
  },
  plugins: [tailwindCSSAnimate, tailwindCSSScrollbarHide],
} satisfies Config;
