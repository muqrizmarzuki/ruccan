'use client'

import {
  BellOutlined,
} from '@ant-design/icons'
import { Badge, Dropdown, Space, List, Typography } from 'antd'
import type { MenuProps } from 'antd'

const { Text } = Typography

// Example Notification Data
const notifications = [
  {
    id: '1',
    title: 'New Message',
    description: 'You have received a new message from John.',
    time: '2 min ago',
  },
  {
    id: '2',
    title: 'Server Update',
    description: 'Server will restart at 12:00 AM.',
    time: '10 min ago',
  },
  {
    id: '3',
    title: 'Payment Received',
    description: 'You have received a payment of $120.',
    time: '1 hour ago',
  },
]

const NotificationList = () => (
  <div className="w-80 max-h-96 overflow-auto bg-white rounded p-2 border border-gray-200 absolute" style={{right:-16}}>
    <List
      itemLayout="horizontal"
      dataSource={notifications}
      renderItem={(item) => (
        <List.Item className="hover:bg-gray-50 px-3 py-2 cursor-pointer transition-all">
          <List.Item.Meta
            title={<Text strong>{item.title}</Text>}
            description={
              <div className="flex justify-between text-xs text-gray-500">
                <span>{item.description}</span>
                <span className="whitespace-nowrap">{item.time}</span>
              </div>
            }
          />
        </List.Item>
      )}
    />
  </div>
)

const BellNotification = () => {
  return (
    <Dropdown
      popupRender={() => <NotificationList />}
      placement="bottomRight"
      trigger={['click']}
      arrow
    >
      <Space className="cursor-pointer relative">
        <Badge count={notifications.length} size="small" offset={[-2, 2]}>
          <BellOutlined style={{ fontSize: 20, color: 'black' }} />
        </Badge>
      </Space>
    </Dropdown>
  )
}

export default BellNotification
