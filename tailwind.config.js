/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                'bright-purple': '#7B1FA2',
                'dark-purple': '#431C60',
                'light-blue': '#AAB5E0',
                'royal-blue': '#4527A0',
                'vivid-green': '#8BC34A',
                'soft-black': '#272727',
            },
        },
    },
    plugins: [],
}