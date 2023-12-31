import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Open_Sans } from "next/font/google";
import Navbar from './(shared)/Navbar';
import Footer from './(shared)/Footer';

const openSans = Open_Sans( {
  subsets: [ "latin" ],
} );

export const metadata: Metadata = {
  title: 'AI Blog App',
  description: 'AI Blog App built with NextJS',
}

export default function RootLayout ( {
  children,
}: {
  children: React.ReactNode
} )
{
  return (
    <html lang="en">
      <body className={ openSans.className } lang="en">
        <Navbar />
        { children }
        <Footer />
      </body>
    </html>
  )
}
