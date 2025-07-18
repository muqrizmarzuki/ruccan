import React from 'react'
import { Menu } from 'antd'
import {
    HomeOutlined,
    MessageOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { useRouter, usePathname } from 'next/navigation'

const navItems = [
    {
        key: '/user/',
        icon: <HomeOutlined />,
        label: 'Home',
    },
    {
        key: '/user/chat',
        icon: <MessageOutlined />,
        label: 'Chat',
    },
    {
        key: '/user/settings/profile',
        icon: <UserOutlined />,
        label: 'Profile',
    },
];

const Navigation = () => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            onClick={({ key }) => router.push(key)}
            items={navItems}
            className="custom-center-menu"
        />
    )
}

export default Navigation