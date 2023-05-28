const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontSize: {
      0: [
        "0px",
        {
          letterSpacing: "0px",
        },
      ],
      xxsm: [
        ".5rem",
        {
          lineHeight: "14px",
        },
      ],
      xsm: [
        ".75rem",
        {
          lineHeight: "21px",
        },
      ],
      sm: [
        ".875rem",
        {
          lineHeight: "24.5px",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "28px",
        },
      ],
      md: [
        "1.125rem",
        {
          lineHeight: "31.5px",
        },
      ],
      lg: [
        "1.25rem",
        {
          lineHeight: "35px",
        },
      ],

      xl: [
        "1.5rem",
        {
          lineHeight: "42px",
        },
      ],

      "2xl": [
        "2rem",
        {
          lineHeight: "56px",
        },
      ],

      "3xl": [
        "2.5rem",
        {
          lineHeight: "70px",
        },
      ],

      "4xl": [
        "3.5rem",
        {
          lineHeight: "98px",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: {
        100: "#F9F9F9",
        200: "#F0F0F0",
        300: "#D1D5DB",
        400: "#666666",
        500: "#333333",
        600: "#0F172A", // extra
      },
      "form-border": "#e0e0e0",
      info: "#3FA2F7",
      positive: "#56C568",
      negative: "#EB5757",
      warning: "#FFC400",

      disable: "#979797",
      "main-primary": "#6366F1",
      "main-secondary": "#608CF4",

      slate: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },
    },
    fontFamily: {
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      rotate: {
        360: "360deg",
      },
      zIndex: {
        "-1": "-1",
        1: "1",
        "-10": "-10",
        100: "100",
      },
      borderRadius: {
        xmd: "10px",
      },
      backgroundImage: {
        "main-gradient-left":
          "linear-gradient(to left top, #a34cf5, #8d63fa, #7973fc, #6981f9, #608cf4)",
        "main-gradient-right":
          "linear-gradient(to right top, #a34cf5, #8d63fa, #7973fc, #6981f9, #608cf4)",
        "main-gradient-top":
          "linear-gradient(to left bottom, #a34cf5, #8d63fa, #7973fc, #6981f9, #608cf4)",

        "main-gradient-bottom":
          "linear-gradient(to right bottom, #a34cf5, #8d63fa, #7973fc, #6981f9, #608cf4)",
        "text-gradient":
          "linear-gradient(90deg, rgba(186,126,207,1) 0%, rgba(241,158,208,1) 25%, rgba(148,141,242,1) 50%, rgba(185,194,255,1) 75%, rgba(251,206,165,1) 100%)",
      },
    },

    screens: {
      "2xl": { min: "1536px" },
      // => @media (max-width: 1535px) { ... }
      xl: { min: "1280px" },
      // => @media (max-width: 1279px) { ... }
      lg: { min: "1024px" },
      // => @media (max-width: 1023px) { ... }
      md: { min: "768px" },
      // => @media (max-width: 767px) { ... }
      sm: { min: "600px" },
      // => @media (max-width: 639px) { ... }
      xsm: { min: "480px" },
      xlmx: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }
      lgmx: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }
      mdmx: { max: "768px" },
      // => @media (max-width: 767px) { ... }
      smmx: { max: "600px" },
      // => @media (max-width: 639px) { ... }
      xsmmx: { max: "480px" },
    },
  },
  plugins: [],
};
