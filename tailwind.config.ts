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
            primary: '#192252',
            secondary: '#606D93',
            100: '#EFF3FA'
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-urbanist)']
      }
    }
  },
  plugins: []
}
export default config
