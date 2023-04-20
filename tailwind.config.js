/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {

            fontFamily: {
                'runda-normal': ['Runda_Normal', 'sans'],
                'runda-light': ['Runda_Light', 'sans'],
                'runda-bold': ['Runda_Bold', 'sans']
            },
            colors: {
                'bright-purple': '#7B1FA2',
                'dark-purple': '#431C60',
                'bg-purple': '#261136',
                'light-blue': '#AAB5E0',
                'royal-blue': '#4527A0',
                'vivid-green': '#8BC34A',
                'soft-black': '#272727',
            },
            backgroundImage: {
                'hero': "url('/src/assets/images/hero_image.png')",
            }
        },
    },
    plugins: [],
}