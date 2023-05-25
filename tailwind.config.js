/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            light: "#f9fbfd",
            "light-blue": "#a8c4db",
            blue: "#0850df",
            "sky-blue": "#236db6",
            dark: "#000000",
            gray: "#d4dde8",
        },
        extend: {
            backgroundImage: {
                flower: "url('./src/assets/bg.jpg')",
            },
        },
    },
    plugins: [],
};
