/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind where to look for classes in your files
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, etc. here if needed
    },
  },
  plugins: [],
}

