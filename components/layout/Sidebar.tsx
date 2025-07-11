'use client'

import { Drawer, Menu, Divider, Avatar, Typography } from 'antd'
import {
  HomeOutlined,
  MessageOutlined,
  UserOutlined,
  BookOutlined,
  ApiOutlined,
  WalletOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  LeftOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import type { SidebarProps } from '@/types/sidebar'

const { Text } = Typography

const Sidebar = ({ open = false, setOpen = () => { } }: SidebarProps) => {
  const router = useRouter()

  const handleClick = (e: { key: string }) => {
    router.push(e.key)
    setOpen(false)
  }

  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={() => setOpen(false)}
      open={open}
      width={250}
      mask={false}
      styles={{
        body: {
          padding: "0 10px",
        },
      }}
    >
      {/* Custom Close Button */}
      <button
        className="p-2 bg-white hover:bg-gray-100 rounded shadow text-xs cursor-pointer"
        onClick={() => {
          setOpen(false)
        }}
        style={{
          position: 'absolute',
          top: 30,
          right: -20,
        }}
      >
        <LeftOutlined />
      </button>

      {/* Top: Avatar/Profile */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200">
        <Avatar size="large" icon={<UserOutlined />} />
        <div>
          <div className="text-xs text-gray-500">PRODUCT MANAGER</div>
          <Text strong>Amirul Baharuddin</Text>
        </div>
      </div>

      {/* Main Menu */}
      <div className='border-b border-gray-200'>
        <p className='px-7 pt-3 text-gray-500 text-xs text-bold'>MAIN</p>
        <Menu
          mode="inline"
          onClick={handleClick}
          items={[
            {
              key: '/dashboard',
              icon: <HomeOutlined />,
              label: 'Dashboard',
            },
            {
              key: '/chat',
              icon: <MessageOutlined />,
              label: 'Ruccan Chat',
            },
            {
              key: '/persona',
              icon: <UserOutlined />,
              label: 'Persona',
            },
            {
              key: '/knowledge',
              icon: <BookOutlined />,
              label: 'Knowledge',
            },
            {
              key: '/integration',
              icon: <ApiOutlined />,
              label: 'Integration',
            },
            {
              key: '/wallet',
              icon: <WalletOutlined />,
              label: 'Wallet',
            },
          ]}
        />
      </div>

      {/* Settings & Others */}
      <div>
        <p className='px-7 pt-3 text-gray-500 text-xs text-bold'>SETTINGS</p>
        <Menu
          mode="inline"
          onClick={handleClick}
          items={[
            {
              key: 'settings-parent',
              icon: <SettingOutlined />,
              label: 'Settings',
              children: [
                {
                  key: '/settings/general',
                  icon: <SettingOutlined />, // General settings still makes sense
                  label: 'General',
                },
                {
                  key: '/settings/profile',
                  icon: <UserOutlined />, // Profile = user-related
                  label: 'Profile',
                },
                {
                  key: '/settings/chat-preference',
                  icon: <MessageOutlined />, // Chat preference = chat/message
                  label: 'Chat Preference',
                }
              ]
            }
          ]}
        />
      </div>
      <div>
        <Menu
          mode="inline"
          onClick={handleClick}
          style={{ position: "absolute", bottom: 0, left: 0 }}
          items={[

            {
              key: '/help',
              icon: <QuestionCircleOutlined />,
              label: 'Help',
            },
            {
              key: '/logout',
              icon: <LogoutOutlined style={{ color: "red" }} />,
              label: <p className='text-red-400 font-bold'>Logout</p>,
            },
          ]}
        />
      </div>
    </Drawer>
  )
}

export default Sidebar
