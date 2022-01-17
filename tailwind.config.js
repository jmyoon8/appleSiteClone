module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: {
        max: "767px",
      },
      lg: {
        max: "1023px",
      },
    },
    fontFamily: {
      noto: ["Noto Sans KR", "sans-serif"],
    },
  },
  plugins: [],
};
