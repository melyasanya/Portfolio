/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1440px",
      dpr: {
        raw: "screen and (min-device-pixel-ratio: 2)",
      },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2.5rem",
          xl: "5rem",
        },
      },
      colors: {
        text: "#666666",
        white: "#FFF",
        black: "#1A1A1A",
        blackSecondary: "#333333",
        greenStatus: "#19B373",
        bgGreenStatus: "#E9FCF4",
        bgColor: "#FAFAFA",
        error: "#FF0000",
        activeLink: "#eeeeee",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        small: "12px",
        base: "14px",
        middle: "16px",
        medium: "18px",
        extraLarge: "36px",
      },
      spacing: {
        extraSmall: "8px",
        small: "12px",
        base: "24px",
        medium: "48px",
      },
    },
  },
  plugins: [],
};
