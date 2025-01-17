import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
      lineHeight: {
        'header': '4.5rem',
        '12': '3rem',
      }
		},
	},
  plugins: [require('tailwindcss-animated')],
} satisfies Config;
