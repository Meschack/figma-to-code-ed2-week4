import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { urbanist } from './fonts'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: {
    template: 'Doctrin - %s',
    default: 'Doctrin'
  },
  description: 'Application de prise de rendez-vous médicaux en ligne'
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${urbanist.variable} font-sans`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
