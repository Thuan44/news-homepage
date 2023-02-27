/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
              sm: "375px",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                orange: "hsl(31, 77%, 52%)",
                red: "hsl(5, 85%, 63%)",
                offWhite: "hsl(36, 100%, 99%)",
                grayishBlue: "hsl(233, 8%, 79%)",
                darkGrayishBlue: "hsl(236, 13%, 42%)",
                veryDarkBlue: "hsl(240, 100%, 5%)",
            },
        },
    },
    plugins: [],
};
