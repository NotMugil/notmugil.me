/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },

      boxShadow: {
        glow: '4px 4px 4px 4px rgba(255,255,255,0.4)',
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
        'pwhite': '#fefffe',
        'read': '#1d8955',
				'toread': '#8a62b7',
				'reading': '#e5e619',
        'default': '#f2f2f2',
      },
  },
  plugins: [
    require('tailwindcss-filters'),
  ]

}
};