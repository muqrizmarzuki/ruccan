'use client'

import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  MessageOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Header from '@/components/layout/Header'
import { useRouter, usePathname } from 'next/navigation'

const { Content } = Layout

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    {
      key: '/user/dashboard',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '/user/chatboard',
      icon: <MessageOutlined />,
      label: 'Chat',
    },
    {
      key: '/user/profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
  ]

  return (
    <Layout className="w-full max-w-[430px] min-h-screen mx-auto shadow-xl relative">
      <Header />

      <Content className="flex-1 overflow-auto bg-white pb-20" style={{minHeight:"93vh"}}>
        {children}
      </Content>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 w-full max-w-[430px] mx-auto left-0 right-0 border-t border-gray-200 shadow-inner z-50 bg-white">
        <Menu
          mode="horizontal"
          selectedKeys={[pathname]}
          onClick={({ key }) => router.push(key)}
          items={navItems}
          className="flex justify-around"
        />
      </div>
    </Layout>
  )
}

export default AppLayout
