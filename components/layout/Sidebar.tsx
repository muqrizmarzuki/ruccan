'use client'

import { Drawer, Menu, Avatar, Typography, Image, Flex, Row, Col } from 'antd'
import {
  UserOutlined,
  LeftOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import type { SidebarProps } from '@/types/sidebar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faComment, faUserAlt, faQuestionCircle, faPlug, faWallet, faCog, faSignOut } from '@fortawesome/free-solid-svg-icons'

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
      <Flex className="!items-center !gap-3 !px-4 !py-4 !border-b !border-gray-200">
        <Image
          src="/user.svg"
          width={25}
          preview={false}
          className="!mx-auto !my-auto"
          alt="Ruccan AI Labs"
        />
        <Row className='!ps-1'>
          <Col span={24}>
            <Text className="!text-xs !text-gray-500">PRODUCT MANAGER</Text>
          </Col>
          <Col span={24}>
            <Text strong>Amirul Baharuddin</Text>
          </Col>
        </Row>
      </Flex>

      {/* Main Menu */}
      <Row className='border-b border-gray-200'>
        <Col span={24} className='!pt-3'>
          <Text className='!px-7 !text-gray-500 !text-xs !text-bold'>MAIN</Text>
          <Menu
            mode="inline"
            className="!border-r-0"
            onClick={handleClick}
            items={[
              {
                key: '/user',
                icon: <FontAwesomeIcon icon={faHome} />,
                label: 'Dashboard',
              },
              {
                key: '/user/chat',
                icon: <FontAwesomeIcon icon={faComment} />,
                label: 'Ruccan Chat',
              },
              {
                key: '/user/persona',
                icon: <FontAwesomeIcon icon={faUserAlt} />,
                label: 'Persona',
              },
              {
                key: '/user/knowledge',
                icon: <FontAwesomeIcon icon={faQuestionCircle} />,
                label: 'Knowledge',
              },
              {
                key: '/user/integration',
                icon: <FontAwesomeIcon icon={faPlug} />,
                label: 'Integration',
              },
              {
                key: '/user/wallet',
                icon: <FontAwesomeIcon icon={faWallet} />,
                label: 'Wallet',
              },
            ]}
          />
        </Col>
      </Row>

      {/* Settings & Others */}
      <Row>
        <Col span={24} className='!pt-3'>
          <Text className='!px-7 !text-gray-500 !text-xs !text-bold'>SETTINGS</Text>
          <Menu
            mode="inline"
            className="!border-r-0"
            onClick={handleClick}
            items={[
              {
                key: 'settings-parent',
                icon: <FontAwesomeIcon icon={faCog} />,
                label: 'Settings',
                children: [
                  {
                    key: 'user/settings/general',
                    icon: <FontAwesomeIcon icon={faCog} />,
                    label: 'General',
                  },
                  {
                    key: 'user/settings/profile',
                    icon: <FontAwesomeIcon icon={faUserAlt} />,
                    label: 'Profile',
                  },
                  {
                    key: 'user/settings/chat-preference',
                    icon: <FontAwesomeIcon icon={faComment} />,
                    label: 'Chat Preference',
                  }
                ]
              }
            ]}
          />
        </Col>
      </Row>
      <Menu
        mode="inline"
        className="!border-r-0"
        onClick={handleClick}
        style={{ position: "absolute", bottom: 0, left: 0 }}
        items={[

          {
            key: '/help',
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            label: 'Help',
          },
          {
            key: '/guest',
            icon: <FontAwesomeIcon icon={faSignOut} className='!text-red-600' />,
            label: <p className='text-red-400 font-bold'>Logout</p>,
          },
        ]}
      />
    </Drawer>
  )
}

export default Sidebar
