import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { urbanist } from './fonts'
import { PropsWithChildren } from 'react'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    template: `${siteConfig.name} - %s`,
    default: siteConfig.name
  },
  description: siteConfig.description,
  keywords: [
    'medical',
    'appointment',
    'booking',
    'doctor',
    'patient',
    'healthcare',
    'medicine',
    'health',
    'patient'
  ],
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1500,
        height: 1000,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${siteConfig.url}/site.webmanifest`
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <ClerkProvider>
      <html lang='en' className='scrollbar-hide'>
        <body className={`${urbanist.variable} font-sans`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
