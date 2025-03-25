/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: { 
        default_back: '#4a5568', 
        dark_back: '#2d3748',
        bright_back: '#718096',
        very_bright_back: '#98a3b3'
      },
      screens: {
        'max-sm': {'max':'480px'},
      },
      fontFamily: {
        'qanelas': ['Qanelas Regular', 'sans-serif']
      },
    },
  },
  plugins: [],
}

