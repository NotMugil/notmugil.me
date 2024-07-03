import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts,tsx,md,mdx}"],
    theme: {
            fontFamily: { 
                'primary': ['Satoshi', 'sans-serif'],
                'secondary': ['Merriweather', 'serif'],
            },
            fontSize : {
                'h1': '3.8125rem',
                'h2': '2.875rem',
                'h3': '2.125rem',
                'h4': '1.5625rem',
                'h5': '1.1875rem',
                'p': '1rem',
                'small': '0.833rem',
                'xsmall': '0.694rem'
            },
            
        extend: {
            colors: {

                'pwhite': '#fefffe',
                'read': '#1d8955',
                'toread': '#8a62b7',
                'reading': '#e5e619',
                'default': '#f2f2f2',

                'primary': '#F9F9F9',
                'secondary': '#bac2de',
                'disabled': '#24273a',
                'accent': '#8aadf4',
                // #8087a2

                'dark-bg': '#070707',
                'light-bg': '',

                'dark': '#121212',
                'darker': '#303446',
                'darkest': '#070707',
                'light': '',
                'lighter': '',
                'lightest': '',

                'error-fg': '#c93c3c',
                'warning-fg': '',
                'success-fg': '#a6d189',
                'error-bg': '',
                'warning-bg': '',
                'success-bg': '',

            },
            screens: { 
                'md': '576px',
                'lg': '960px',
                'xl': '1024px',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ], 
} as Config;