import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Videojuegos y Consolas | MercadoLibre 📦',
  description: 'Encuentra videojuegos para PS5, Xbox, Nintendo Switch y PC en Mercado Libre Colombia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased bg-[#ebebeb]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
