import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');
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
      boxShadow: {
        primary: '1px 1px 3px var(--shadow-primary)',
        secondary: '1px 1px 3px var(--shadow-secondary)',
        accent: '1px 1px 3px var(--shadow-accent)',
        neutral: '1px 1px 3px var(--shadow-neutral)',
        danger: '1px 1px 3px var(--shadow-danger)',
        success: '1px 1px 3px var(--shadow-success)',
      },
      textShadow: {
        sm: '0 1px 2px var(--shadow-primary)',
        DEFAULT: '0 2px 4px var(--shadow-primary)',
        lg: '0 8px 16px var(--shadow-primary)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'text-shadow': (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
export default config;
