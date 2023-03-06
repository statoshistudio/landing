/** @type {import('tailwindcss').Config} */
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
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
