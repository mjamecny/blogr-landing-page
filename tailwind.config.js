// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    fontFamily: {
      sans: ["Overpass", "sans-serif"],
      ubuntu: ["Ubuntu", "serif"],
    },
    colors: {
      lightRed: "hsl(356, 100%, 66%)",
      veryLightRed: "hsl(355, 100%, 74%)",
      veryDarkBlue: "hsl(208, 49%, 24%)",
      white: "hsl(0, 0%, 100%)",
      grayishBlue: "hsl(240, 2%, 79%)",
      veryDarkGrayishBlue: "hsl(207, 13%, 34%)",
      veryDarkBlackBlue: "hsl(240, 10%, 16%)",
      veryLightRedGradient: "hsl(13, 100%, 72%)",
      lightRedGradient: "hsl(353, 100%, 62%)",
      veryDarkGrayBlueGradient: "hsl(237, 17%, 21%)",
      veryDarkDesaturatedBlueGradient: "hsl(237, 23%, 32%)",
    },
  },
  plugins: [],
}
