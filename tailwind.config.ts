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
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          accent: 'var(--color-text-accent)',
          neutral: 'var(--color-text-neutral)',
          danger: 'var(--color-text-danger)',
          success: 'var(--color-text-success)',
        },
      },
      backgroundColor: {
        skin: {
          primary: 'var(--color-background)',
          secondary: 'var(--color-secondary-background)',
          accent: 'var(--color-accent-background)',
          neutral: 'var(--color-neutral-background)',
          danger: 'var(--color-danger-background)',
          success: 'var(--color-success-background)',
        },
      },
      borderColor: {
        skin: {
          primary: 'var(--color-border)',
          accent: 'var(--color-accent-border)',
          danger: 'var(--color-danger-border)',
          success: 'var(--color-success-border)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
