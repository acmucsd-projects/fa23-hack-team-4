import './globals.css'
import { Fraunces } from 'next/font/google'
import React from 'react'
import SignOutButton from './authentication/SignOutButton'

const fraunces = Fraunces({ subsets: ['latin'] })

export const metadata = {
  title: 'Triton Marketplace',
  description: 'UCSD Free and For Sale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={fraunces.className}>
          {children}
        </body>
    </html>
  )
}
