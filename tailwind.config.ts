import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          accent: 'var(--color-text-accent)',
          neutral: 'var(--color-text-neutral)',
          danger: 'var(--color-text-danger)',
          success: 'var(--color-text-success)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
