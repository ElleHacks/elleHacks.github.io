/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      colors: {
        mainBgRed: "#712323",
        faintBgRed: "#A45555",
        section1FaintBgYellow: "#FFCE82",
        section1FaintBgYellowHover: "#D8A267",
        section2mainBgRedHover: "#511010",
        section3FaintBgGreen: "#B0BBA0",
        section3FaintBgGreenHover: "#899078"
      },
      fontFamily: {
        body: ['Roboto Slab', "serif"]
      },
      height: {
        '88': '23rem',
      }
    },
  },
  plugins: [],
}