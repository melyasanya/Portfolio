/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1200px",
      dpr: {
        raw: "screen and (min-device-pixel-ratio: 2)",
      },
    },
    extend: {
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
        openSans: ["Open-Sans", "sans-serif"],
      },
      fontSize: {
        small: "12px",
        base: "14px",
        middle: "16px",
        medium: "18px",
        large: "24px",
        extraLarge: "36px",
      },
      spacing: {
        thin: "6px",
        extraSmall: "8px",
        small: "12px",
        base: "24px",
        middle: "36px",
        medium: "48px",
      },
    },
  },
  plugins: [],
};
