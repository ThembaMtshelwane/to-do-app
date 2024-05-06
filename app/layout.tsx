import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar/Navbar'

import { Roboto_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: 'To Do App',
  description: 'Add, Edit and Delete tasks',
}
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Navbar />
        <main className="main">{children}</main>
      </body>
    </html>
  )
}
