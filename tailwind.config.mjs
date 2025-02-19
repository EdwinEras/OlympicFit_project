/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'off-white': '#f5f4f2',
        'brand-200': '#dcd5cf',
        'old-black': '#2c2b2a',
        'midnights': '#232a2c',
        'silver-slate': '#5b838f',
        'ocean-blue': '#205771',
        'red': '#a42220',
      },
    },
  },
  plugins: [],
};
