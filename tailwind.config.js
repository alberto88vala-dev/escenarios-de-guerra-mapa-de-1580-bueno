/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Crimson Text"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        parchment: {
          50:  '#fdf8f0',
          100: '#f9efd8',
          200: '#f2ddb0',
          300: '#e8c882',
          400: '#dcaf55',
          500: '#c9952e',
          600: '#a67520',
          700: '#7d5518',
          800: '#583c13',
          900: '#36240c',
        },
        ink: {
          DEFAULT: '#1a1208',
          light: '#3d2e14',
          faded: '#6b5a3a',
        },
        blood: {
          DEFAULT: '#8b1a1a',
          dark: '#5c0f0f',
          light: '#c0392b',
        },
        moss: {
          DEFAULT: '#3a5a2a',
          light: '#4e7a3a',
        },
        stone: '#8a8070',
      },
      backgroundImage: {
        'parchment-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
