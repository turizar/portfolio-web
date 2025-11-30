// Import necessary components and styles
import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

