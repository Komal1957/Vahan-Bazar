// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     "*",
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        nightIndigo: '#1B003F',
        twilightPurple: '#4B0082',
        midnightBlue: '#191970',
        lavenderHaze: '#E6E6FA',
        duskyBlue: '#6495ED',
      },
      fontFamily: {
        body: ["Inter", "sans-serif"], // or your custom font
      },
    },
  },
  plugins: [],
}
