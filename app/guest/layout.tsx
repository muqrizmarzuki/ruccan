// app/layout.tsx
import 'antd/dist/reset.css' // or 'antd/dist/antd.css' for older versions
import './globals.css'

import type { Metadata } from 'next'

import { Home, MessageCircle, User } from 'lucide-react'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Mobile App',
  description: 'Responsive app layout with sidebar',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="w-full max-w-[430px] min-h-screen flex flex-col justify-between relative bg-white shadow-xl">
    </div>
  )
}
