/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "class",
  content: ["./.storybook/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
