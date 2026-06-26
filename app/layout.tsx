import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Franco — Unreal Engine Developer & Technical Instructor',
  description:
    'Unreal Engine developer, Blueprint specialist and technical instructor building production-grade gameplay systems, editor tools and developer workflows — and teaching teams how to do the same.',
  generator: 'v0.app',
  keywords: [
    'Unreal Engine',
    'Blueprint',
    'Gameplay Systems',
    'Editor Tools',
    'Technical Instructor',
    'Epic Authorized Instructor',
  ],
  openGraph: {
    title: 'Franco — Unreal Engine Developer & Technical Instructor',
    description:
      'Production-grade Unreal Engine systems and technical training for studios, teams and developers.',
    type: 'website',
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
