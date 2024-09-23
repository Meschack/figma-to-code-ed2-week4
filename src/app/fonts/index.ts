import localFont from 'next/font/local'

const urbanist = localFont({
  src: [
    {
      path: './urbanist/Urbanist-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './urbanist/Urbanist-ThinItalic.ttf',
      weight: '100',
      style: 'italic'
    },
    {
      path: './urbanist/Urbanist-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './urbanist/Urbanist-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic'
    },
    {
      path: './urbanist/Urbanist-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './urbanist/Urbanist-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: './urbanist/Urbanist-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './urbanist/Urbanist-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './urbanist/Urbanist-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './urbanist/Urbanist-MediumItalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: './urbanist/Urbanist-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './urbanist/Urbanist-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: './urbanist/Urbanist-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './urbanist/Urbanist-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: './urbanist/Urbanist-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './urbanist/Urbanist-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic'
    },
    {
      path: './urbanist/Urbanist-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './urbanist/Urbanist-BlackItalic.ttf',
      weight: '900',
      style: 'italic'
    }
  ],
  variable: '--font-urbanist'
})

export { urbanist }
