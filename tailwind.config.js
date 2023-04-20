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
                'custom-bright-purple': '#7B1FA2',
                'custom-dark-purple': '#431C60',
                'custom-bg-purple': '#261136',
                'custom-light-blue': '#AAB5E0',
                'custom-royal-blue': '#4527A0',
                'custom-vivid-green': '#8BC34A',
                'custom-soft-black': '#272727',
                'custom-line-grey': '#707070',
            },
            backgroundImage: {
                'hero': "url('/src/assets/images/hero_image.png')",
                'accomodation': "url('/src/assets/images/hotel_bed.png')",
                'driver': "url('/src/assets/images/car_driver.png')",

            }
        },
    },
    plugins: [],
}