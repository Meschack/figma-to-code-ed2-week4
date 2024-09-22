import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-blue': '#1376f8',
        'light-blue': '#E6F6FE',
        'dark-blue': '#011632',
        'body-text': '#3C4959',
        'sky-blue': '#25B4F8',
      },

      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
        'general-sans': ['var(--font-general-sans)', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
