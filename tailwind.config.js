module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: {
    extend: {
      fontFamily: {
        caption: "var(--caption-font-family)",
        h1: "var(--h1-font-family)",
        "h2-surlign": "var(--h2-surlign-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
};
