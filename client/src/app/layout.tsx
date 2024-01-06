import './globals.css'
import { Fraunces } from 'next/font/google'
import React from 'react'
import SignOutButton from './authentication/SignOutButton'
import {CurrentUserBtn, CreatePostBtn} from './fetch/fetchBtns'

const fraunces = Fraunces({ subsets: ['latin'] })

export const metadata = {
  title: 'Triton Marketplace',
  description: 'UCSD Free and For Sale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={fraunces.className}>
          <SignOutButton />
          <CreatePostBtn />
          <CurrentUserBtn></CurrentUserBtn>
          {children}
        </body>
    </html>
  )
}
