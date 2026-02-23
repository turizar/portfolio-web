// Import necessary components and styles
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

// Metadata for the website (appears in browser tab and search engines)
export const metadata: Metadata = {
  title: 'Tomas Urizar - Portfolio',
  description: 'Machine Learning & Computer Vision Engineer | Industrial Civil Engineer with expertise in data analysis, automation, and software development',
}

// Root layout component - wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

