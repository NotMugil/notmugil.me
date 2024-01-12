/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },

      fontSize : {
        'h1': '2.986rem',
        'h2': '2.488rem',
        'h3': '2.074rem',
        'h4': '1.728rem',
        'h5': '1.44rem',
        'h6': '1.2rem',
        'p': '1rem',
        'small': '0.833rem',
        'xsmall': '0.694rem'
      },
      colors: {
        'read': '#1d8955',
				'toread': '#ad3b3b',
				'reading': '#e5e619'
      },
  },
  plugins: [
    require('tailwindcss-filters'),
  ]

}
};