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
  title: 'Franco — Desarrollador de Unreal Engine e instructor técnico',
  description:
    'Desarrollador de Unreal Engine, especialista en Blueprint e instructor técnico. Creo sistemas de gameplay, Editor Tools y flujos de trabajo listos para producción, y enseño a los equipos a hacer lo mismo.',
  generator: 'v0.app',
  keywords: [
    'Unreal Engine',
    'Blueprint',
    'Sistemas de gameplay',
    'Editor Tools',
    'Instructor técnico',
    'Epic Authorized Instructor',
  ],
  openGraph: {
    title: 'Franco — Desarrollador de Unreal Engine e instructor técnico',
    description:
      'Sistemas de Unreal Engine listos para producción y formación técnica para estudios, equipos y desarrolladores.',
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
