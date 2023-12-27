import './css/globals.css'
import { Fraunces } from 'next/font/google'

const fraunces = Fraunces({ subsets: ['latin'] })

export const metadata = {
  title: 'Triton Marketplace',
  description: 'UCSD Free and For Sale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fraunces.className}>{children}</body>
    </html>
  )
}
