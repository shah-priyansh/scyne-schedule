/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                light: "#7C7C7C",
                dark: "#292929",
                "light-300": "#F4F6FA",
                primary: "#16A34A",
                "primary-light": "#DCFCE7",
                "border-light": "#DCDCDC",
            },
            keyframes: {
                "fade-zoom-in": {
                    "0%":   { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
            },
            animation: {
                "fade-zoom-in": "fade-zoom-in 0.5s ease-out forwards",
            },
        },
    },
    plugins: [],
}


// rounded-xs (2px)
// rounded-sm (4px)
// rounded-md (6px)
// rounded-lg (8px)
// rounded-xl (12px)
// rounded-2xl (16px)
// rounded-3xl (24px)
// rounded-4xl (32px)
// rounded-none
// rounded-full

// text-xs (12px)
// text-sm (14px)
// text-base (16px)
// text-lg (18px)
// text-xl (20px)
// text-2xl (24px)
// text-3xl (30px)
// text-4xl (36px)
// text-5xl (48px)
// text-6xl (60px)
// text-7xl (72px)
// text-8xl (96px)
// text-9xl (128px)