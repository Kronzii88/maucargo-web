/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#062A5C",
        accent: "#2F8FD4",
        accentDark: "#1F6FA8",
        neutral: "#F5FAFF",
      },
    },
  },
  plugins: [],
};
