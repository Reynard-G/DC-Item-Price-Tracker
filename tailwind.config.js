const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    theme: {
      dark: {
        background: {
            // Background
            DEFAULT: "#262626",
            backgroundAlpha: "rgba(25, 25, 25, 0.6)",
            foreground: "#d9d9d9",
            backgroundContrast: "#262626",
        },
        primary: {
            primaryLight: "$gray300",
            primaryLightHover: "$gray500",
            primaryLightActive: "$gray600",
            primaryLightContrast: "$gray900",
            DEFAULT: "linear-gradient(to right, rgb(33, 150, 243), rgb(156, 39, 176), rgb(233, 30, 99))",
            shadow: "rgba(156, 39, 176, 0.5)",
        }
      }
    }
  })],
}
