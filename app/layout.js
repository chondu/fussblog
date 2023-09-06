import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '仿永硕E盘',
  description: '仿永硕E盘',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh_CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
