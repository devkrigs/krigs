/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            keyframes: {
                gradientCycle: {
                    "0%, 25%": {
                        background:
                            "linear-gradient(to bottom, #f7fafc, #d1fae5)",
                    }, // gray-100 to emerald-50
                    "25%, 50%": {
                        background:
                            "linear-gradient(to bottom, #f7fafc, #ebf8ff)",
                    }, // gray-100 to blue-50
                    "50%, 75%": {
                        background:
                            "linear-gradient(to bottom, #f7fafc, #ebf4ff)",
                    }, // gray-100 to indigo-50
                    "75%, 100%": {
                        background:
                            "linear-gradient(to bottom, #f7fafc, #f3e8ff)",
                    }, // gray-100 to violet-50
                },
            },
            animation: {
                "gradient-bg": "gradientCycle 5s ease infinite",
            },
        },
    },
    plugins: [],
};
