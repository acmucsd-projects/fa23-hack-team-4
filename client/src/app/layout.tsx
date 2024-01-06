import './globals.css'
import { Fraunces } from 'next/font/google'
import React from 'react'
import SignOutButton from './authentication/SignOutButton'
import {CurrentUserBtn, CreateProductBtn, UpdateProductBtn, DeleteProductBtn} from './fetch/fetchBtns'

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
          <CreateProductBtn />
          <CurrentUserBtn></CurrentUserBtn>
          <UpdateProductBtn></UpdateProductBtn>
          <DeleteProductBtn />
          {children}
        </body>
    </html>
  )
}
