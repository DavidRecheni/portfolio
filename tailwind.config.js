module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        github: {
          gray: '#c9d1d9',
          dark: '#0d1117',
          blue: '#4c8eda',
        },
      },
      fontFamily: {
        handwritten: ['Sedgwick Ave'],
      },
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
