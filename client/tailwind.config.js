/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#f3c614",
                secondary: "#353535",
                light: "#f4f4f4",
                dark: "#222",
                danger: "#e3342f",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
        screens: {
            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
    },
    plugins: [],
};
