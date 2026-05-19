/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        cyber: {
          dark: "#0a0a0f",
          gray: "#1a1a2e",
          blue: "#16213e",
          "neon-blue": "#00d4ff",
          "neon-purple": "#a855f7",
          "neon-green": "#22c55e",
        },
        "dark-bg": "#0a0a0f",
        "dark-panel": "#1a1a2e",
        "neon-blue": "#00d4ff",
        "neon-purple": "#a855f7",
        "neon-yellow": "#fbbf24",
        "accent-green": "#22c55e",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        noto: ["Noto Sans SC", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 20px rgba(0, 212, 255, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px rgba(0, 212, 255, 0.5)",
          },
        },
        glowPulse: {
          "0%, 100%": {
            textShadow:
              "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px rgba(0, 212, 255, 0.4)",
          },
          "50%": {
            textShadow:
              "0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 80px rgba(0, 212, 255, 0.6)",
          },
        },
        fillBar: {
          "0%": { width: "0%" },
          "100%": { width: "var(--fill-width, 100%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.5)" },
        },
        scrollIndicator: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
        glow: "glow 2s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        fillBar: "fillBar 1.2s ease-out forwards",
        twinkle: "twinkle 3s ease-in-out infinite",
        "scroll-indicator": "scrollIndicator 2s ease-in-out infinite",
      },
      boxShadow: {
        "neon-blue": "0 0 15px rgba(0, 212, 255, 0.3), 0 0 30px rgba(0, 212, 255, 0.1)",
        "neon-purple": "0 0 15px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.1)",
        "neon-green": "0 0 15px rgba(34, 197, 94, 0.3), 0 0 30px rgba(34, 197, 94, 0.1)",
      },
    },
  },
  plugins: [],
};
