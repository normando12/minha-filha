/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magic: {
          950: "#080412",
          900: "#120818",
          800: "#1a0a32",
        },
        neon: {
          pink: "#ff4d9d",
          rose: "#ff2d6f",
          glow: "#ff6eb4",
          lavender: "#c084fc",
          violet: "#a78bfa",
          sky: "#7dd3fc",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        script: ['"Dancing Script"', "cursive"],
        sans: ['"Outfit"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(255, 77, 157, 0.5), 0 0 40px rgba(255, 45, 111, 0.25)",
        "neon-lg": "0 0 30px rgba(255, 77, 157, 0.6), 0 0 60px rgba(255, 45, 111, 0.35)",
        "neon-xl": "0 0 40px rgba(255, 77, 157, 0.7), 0 0 80px rgba(255, 45, 111, 0.4)",
      },
      animation: {
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
