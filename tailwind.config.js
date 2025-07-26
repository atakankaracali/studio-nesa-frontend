/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          neonPink: '#FF00D4',
          neonYellow: '#FFF700',
          neonGreen: '#39FF14',
          lightPink: '#ffe4ec',
        },
      },
    },
    plugins: [],
  };
  