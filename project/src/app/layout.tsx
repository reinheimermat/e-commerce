import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/navbar'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next E-Commerce 13',
  description: 'Next E-Commerce utilizando a versão 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='antialiased'>
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <Navbar />
        <main className='h-screen p-16'>
          {children}  
        </main>
      </body>
    </html>
  )
}
