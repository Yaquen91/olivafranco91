import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { getDictionary } from '@/i18n/dictionary'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const copy = getDictionary().metadata

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: copy.title,
  description: copy.description,
  generator: 'v0.app',
  keywords: copy.keywords,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: copy.openGraph.title,
    description: copy.openGraph.description,
    type: 'website',
    url: '/',
    siteName: 'Franco',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0b0e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
