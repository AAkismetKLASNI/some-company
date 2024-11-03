import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        dark: 'var(--dark)',
      },
      space: {
        section: 'clamp(1.25rem, 0.781rem + 2.34vw, 3.125rem)',
        ['big-section']: 'clamp(3.75rem, 0.938rem + 14.06vw, 15rem)',
        layout: 'clamp(1.25rem, 0.625rem + 3.13vw, 3.75rem)',
      },
    },
    screens: {
      md: '900px',
      lg: '1300px',
      xl: '1600px',
    },
  },
  plugins: [],
};
export default config;
