/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spcRed: "#A52A2A",
        spcWhite: "#fffdf5",
        spcYellow: "#FFD700",
      },
      fontFamily: {
        quicksand: "Quicksand",
        poppins: ['"Poppins"', "sans-serif"],
        playwrite: ["'Playwrite GB S'", "serif"],
      },
    },
  },
  plugins: [],
};
