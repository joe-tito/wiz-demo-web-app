import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			animation: {
				headerTop: 'fadeIn 2s ease-in-out',
        headerBottom: 'fadeIn 3s ease-in-out',
        reason: 'fadeIn 4s ease-in-out'
			},
			keyframes: {
				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
			},
      lineHeight: {
        'header': '4.5rem',
        '12': '3rem',
      }
		},
	},
  plugins: [],
} satisfies Config;
