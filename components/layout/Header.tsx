'use client'

import { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import Sidebar from '@/components/layout/Sidebar'
import BellNotification from '@/components/ui/BellNotification'

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <header className="flex items-center px-4 py-2 relative z-40 bg-white shadow-sm">
      {/* Sidebar Trigger */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setShowSideBar(true)}
        className="text-lg text-gray-700"
      />

      {/* Sidebar Component */}
      <Sidebar open={showSideBar} setOpen={setShowSideBar} />

      {/* Logo + Brand */}
      <div className="flex items-center ms-3">
        <img src="/ruccan_logo.png" alt="Ruccan Logo" className="h-8 w-auto" />
        <span className="text-black font-bold text-lg ms-3">Ruccan.com</span>
      </div>

      {/* Notification Bell */}
      <div className="ms-auto">
        <BellNotification />
      </div>
    </header>
  )
}

export default Header
