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
        doctrin: {
          neutral: {
            primary: 'var(--doctrin-neutral-primary)',
            secondary: 'var(--doctrin-neutral-secondary)',
            100: 'var(--doctrin-neutral-100)'
          },
          light: { blue: 'var(--doctrin-light-blue)' },
          dark: { blue: 'var(--doctrin-dark-blue)' },
          blue: 'var(--doctrin-blue)'
        }
      },
      fontFamily: {
        sans: ['var(--font-urbanist)']
      },
      width: {
        xl: '1028px'
      },
      maxWidth: { desktop: '1200px', tablet: '676px' }
    }
  },
  plugins: []
}
export default config
