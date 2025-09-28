import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        heading: ["Poppins", "Montserrat", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
      colors: {
        // Base
        background: "#0A0A0C",   // Deep Black
        foreground: "#FFFFFF",  // White text
        border: "#1E1E20",
        input: "#1E1E20",
        ring: "#FFD700",

        // Primary / Secondary
        primary: {
          DEFAULT: "#FFD700",  // Gold
          foreground: "#0A0A0C", // Text on gold
          glow: "#FFEA70", // Lighter golden glow
        },
        secondary: {
          DEFAULT: "#1A1D23",  // Dark Navy / Black
          foreground: "#FFFFFF",
        },

        // Accent
        accent: {
          DEFAULT: "#B8860B",  // Golden Brown
          foreground: "#FFFFFF",
          glow: "#FFD700",
        },

        // Others
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#B0B3C6", // Gray for less important text
          foreground: "#E0E0E0",
        },
        card: {
          DEFAULT: "#111111", 
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
