'use client'

import { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons'
import { Button, Space, Image, Flex, Typography } from 'antd'
import Sidebar from '@/components/layout/Sidebar'
import BellNotification from '@/components/ui/BellNotification'

const { Text, Title } = Typography

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <Flex align='center' className="!px-4 !py-2 !relative !z-40 !bg-white !shadow-sm">
      {/* Sidebar Trigger */}
      <Button
        type="text"
        icon={<FontAwesomeIcon icon={faBars} />}
        onClick={() => setShowSideBar(true)}
        className="text-lg text-gray-700"
      />

      {/* Sidebar Component */}
      <Sidebar open={showSideBar} setOpen={setShowSideBar} />

      {/* Logo + Brand */}
      <Flex justify='center' className="!ms-3">
        <Image
          src="/ruccan_logo.png"
          alt="Ruccan Logo"
          preview={false}
          height={24}
        />
        <Text className="!text-black !font-bold !ms-3">Ruccan.com</Text>
      </Flex>

      {/* Notification Bell */}
      <div className="ms-auto">
        <BellNotification />
      </div>
    </Flex>
  )
}

export default Header
