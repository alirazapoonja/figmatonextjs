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
        mypink:"#2F5FFC",
        myblack:"#000000",
        background: "#D8C2EA",
        mynavibarcolor: "#A973C9",
        foreground: "var(--foreground)",
        carrier: "#1DED27", 
      },
    },
  },
  plugins: [],
} satisfies Config;
