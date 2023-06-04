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
            "french-gray": "#C1C5D2ff",
            "space-cadet": "#1E2A52ff",
            "alice-blue": "#F0F5F9ff",
            platinum: "#DDE4E8ff",
            "yinmn-blue": "#454D6Bff",
            "off-white": "#FCFCFEff",
            "backdrop-white": "#FBFBFDd0",
            white: "#FBFBFDff",
        },
        extend: {
            backgroundImage: {
                flower: "url('./src/assets/bg.jpg')",
            },
        },
    },
    plugins: [],
};
