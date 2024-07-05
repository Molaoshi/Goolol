import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,ico}",
  ],
  theme: {
    extend: {
      colors: {
        activeLink: "#681da8",
        link: "#1a0dab",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "homepage-bg": `url("/assets/images/home-background.svg")`,
      },
    },
  },
  plugins: [],
};
export default config;
