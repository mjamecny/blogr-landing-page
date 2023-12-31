// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    fontFamily: {
      sans: ["Overpass", "sans-serif"],
      ubuntu: ["Ubuntu", "serif"],
    },
    spacing: {
      0.2: "2px",
      0.4: "4px",
      0.8: "8px",
      1.2: "12px",
      1.6: "16px",
      2.4: "24px",
      3.2: "32px",
      4.8: "48px",
      6.4: "64px",
      8: "80px",
      9.6: "96px",
      12.8: "128px",
    },
    fontSize: {
      1: "10px",
      1.2: "12px",
      1.4: "14px",
      1.6: "16px",
      1.8: "18px",
      2: "20px",
      2.4: "24px",
      3: "30px",
      3.6: "36px",
      4.4: "44px",
      5.2: "52px",
      6.2: "62px",
      7.4: "74px",
      8.6: "86px",
      9.8: "98px",
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
      transparent: "transparent",
    },
    backgroundImage: {
      header:
        "url('./assets/bg-pattern-intro-mobile.svg'), linear-gradient(90deg,#ff896f,#ff525c)",
      feature:
        "url('./assets/bg-pattern-circles.svg'),linear-gradient(90deg,#323348,#3d3f60)",
    },
  },
  plugins: [],
}
