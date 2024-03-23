/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: 'var(--dark-blue)',
        darkGray: 'var(--dark-gray)',
        darkGreen: 'var(--dark-green)',
        lightGreen: 'var(--light-green)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
};
