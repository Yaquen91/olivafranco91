import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Inter, JetBrains_Mono } from 'next/font/google'
import { siteContent } from '@/content/site'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  style: ['normal'],
  display: 'swap',
  fallback: ['Arial Narrow', 'Arial', 'sans-serif'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  display: 'swap',
  fallback: ['Cascadia Code', 'Consolas', 'monospace'],
})

const copy = siteContent.metadata

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: copy.title,
  description: copy.description,
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
  themeColor: '#080a0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${inter.variable} ${jetBrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
