/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        themeColor: "#3A36FD",
        themeYellow: "#FFDE2E",
        themeGreen: "#32C76D",
        themeColorDark: "#0F0E44",
        themeColorSemiDark: "rgb(15,14,68)",
        themeRed: "#F35353",
        themeblue: "#393FCF",
        themeLBlue: "#CDD8FF",
        themedpurple: "#626381",
        themegrey: "#D9D9D9",
        themeGrey2: "#F7F7F7",
        themeGrey3: "#9D9EA2",
      }
    },
  },
  plugins: [],
}
