module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        './src/navbar/navbar.jsx'
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1976px',
            xl: '2500px',
        },

        colors :{
            'primary': "#FFDBEA",
            'secondary': "#FF689B",
            'accent': "#8B113A",
        },
        fontFamily: {
            serif: ['Merriweather', 'Josefin Slab']
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        },
    },
    plugins: [
        require ("daisyui"),
        require('@tailwindcss/typography'),]
}