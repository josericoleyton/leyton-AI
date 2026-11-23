import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDFBF7',
          light: '#FFFFFF',
          dark: '#F5EFE6',
        },
        terracotta: {
          DEFAULT: '#C86D51',
          light: '#D98267',
          dark: '#A9543B',
        },
        sage: {
          DEFAULT: '#82957B',
          light: '#9CAF95',
          dark: '#677A60',
        },
        espresso: {
          DEFAULT: '#2C2523',
          light: '#423B38',
          dark: '#1C1715',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
