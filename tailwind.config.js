// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/*.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};