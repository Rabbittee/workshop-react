module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Amatic: ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
};
