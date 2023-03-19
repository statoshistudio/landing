/** @type {Plugin} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AA20DA',
      },
      fontFamily: {
        engagement: ['Engagement', 'cursive'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    plugin(function ({ addVariant }) {
      addVariant(
        'sm-only',
        "@media screen and (max-width: theme('screens.sm'))"
      ); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
      addVariant(
          'md-only',
          "@media screen and (max-width: theme('screens.md'))"
      ); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
      addVariant(
          'lg-only',
          "@media screen and (max-width: theme('screens.lg'))"
      ); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),
  ],
};
