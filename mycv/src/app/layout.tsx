import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CV Portfolio',
  description: 'Profesyonel CV ve Portföy Sitesi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 