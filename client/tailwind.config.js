/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#815FD3",
                secondary: "#353535",
                purpleText: "#7D2AD2",
                midText: "#BC5A9A",
                orangeText: "#FB8B61",
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
