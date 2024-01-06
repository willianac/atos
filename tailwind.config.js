/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
			colors: {
				blue: '#040464',
				orange: '#FF6600'
			}
		}
  },
  plugins: [],
}

