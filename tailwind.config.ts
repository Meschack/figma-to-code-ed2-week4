import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
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
        doctrin: {
          neutral: {
            primary: 'var(--doctrin-neutral-primary)',
            secondary: 'var(--doctrin-neutral-secondary)',
            100: 'var(--doctrin-neutral-100)'
          },
          light: { blue: 'var(--doctrin-light-blue)' },
          dark: {
            blue: 'var(--doctrin-dark-blue)',
            'cta-section': 'var(--doctrin-dark-cta-section)'
          },
          blue: 'var(--doctrin-blue)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        }
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
        'general-sans': ['var(--font-general-sans)', 'sans-serif'],
        sans: ['var(--font-urbanist)']
      },
      width: { xl: '1028px' },
      maxWidth: { desktop: '986px', tablet: '676px', large: '1200px' },
      keyframes: {
        shimmer: { '100%': { transform: 'translateX(100%)' } }
      },
      animation: { shimmer: 'shimmer 2s infinite' }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
