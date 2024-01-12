import './globals.css'
import { Fraunces } from 'next/font/google'
import React from 'react'
import SignOutButton from './authentication/LogOutButton'
import {CurrentUserBtn, GetProductsBtn, CreateProductBtn, UpdateProductBtn, DeleteProductBtn, GetOffersBtn, CreateOfferBtn, UpdateOfferBtn} from './fetch/fetchBtns'

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
          <GetProductsBtn></GetProductsBtn>
          <CreateProductBtn />
          <CurrentUserBtn></CurrentUserBtn>
          <UpdateProductBtn></UpdateProductBtn>
          <DeleteProductBtn />
          <GetOffersBtn></GetOffersBtn>
          <CreateOfferBtn></CreateOfferBtn>
          <UpdateOfferBtn></UpdateOfferBtn>
          {children}
        </body>
    </html>
  )
}
