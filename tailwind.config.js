/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#0a0a0a",
          "bg-secondary": "#1a1a1a",
          "bg-card": "#1e1e1e",
          text: "#ffffff",
          "text-secondary": "#b0b0b0",
        },
        accent: {
          green: "#00ff88",
          "green-dark": "#00cc66",
          "green-glow": "rgba(0, 255, 136, 0.3)",
        },
        border: "#333333",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "orb-glow": "orbGlow 4s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-left": "fadeInLeft 0.6s ease-out",
        "fade-in-right": "fadeInRight 0.6s ease-out",
      },
      keyframes: {
        orbGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 100px rgba(0,255,136,0.3), 0 0 200px rgba(0,255,136,0.3), 0 0 300px rgba(0,255,136,0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 150px rgba(0,255,136,0.3), 0 0 250px rgba(0,255,136,0.3), 0 0 350px rgba(0,255,136,0.3)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
