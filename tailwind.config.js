/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mulish: ["Mulish", "Sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "24px",
      "2xl": "32px",
    },
    colors: {
      primary: "#002D63",
      secondary: "#00A1E5",
      background: "#F5F5F5",
      danger: "#D80000",
      warning: "#EE8F13",
      success: "#019501",
      "light-danger": "#FFE8E8",
      "light-warning": "#FFFBE8",
      "light-success": "#ECFBEC",
      white: "#FFFFFF",
      black: "#000000",
      "dark-grey": "#333333",
      "medium-grey": "#757575",
      "light-grey": "#DDDDDD",
    },
    extend: {},
  },
  plugins: [],
};
