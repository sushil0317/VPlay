/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#0d0d0f",
                gray: "#1c1d1f",
                pink: "#f20e89",
                purple: "#e473ff",
                white: "#f5f5f5",
            },
            fontFamily: {
                righteous: "Righteous",
                gothic: "Gothic A1",
            },
        },
    },
    plugins: [],
};
