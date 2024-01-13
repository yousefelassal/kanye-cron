import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kanye Cron',
  description: 'A daily cron job that refetch a new quote by kanye every morning',
  metadataBase: new URL('https://kanye-cron.vercel.app'),
  openGraph: {
    images: '/opengraph-image.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
