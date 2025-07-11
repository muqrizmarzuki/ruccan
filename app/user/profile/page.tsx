'use client'

import {
    UploadOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import { Button, Input, Typography, Upload, Form } from 'antd'
import { useState } from 'react'

const { Title, Text } = Typography

const ProfileSettings = () => {
    const [companyName, setCompanyName] = useState('')
    const [role, setRole] = useState('')
    const [profileName, setProfileName] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <Form layout="vertical" className="!flex !flex-col !gap-y-8 !max-w-2xl !mx-auto !p-5">
            {/* 1. Profile Photo */}
            <div>
                <p className="font-bold text-white bg-pink-300 py-1 px-5 w-fit rounded-full">
                    Profile Photo
                </p>
                <div className="flex flex-col items-center gap-4 mt-4">
                    <img
                        src="/default-avatar.png"
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover border"
                    />
                    <Upload showUploadList={false}>
                        <Button type='primary'>
                            <span className='font-bold'>Upload Photo</span>
                        </Button>
                    </Upload>
                </div>
            </div>

            {/* 2. Company Info */}
            <div>
                <p className="font-bold text-white bg-pink-300 py-1 px-5 w-fit rounded-full">
                    Company Info
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <Form.Item label={<Title level={5}>Company Name</Title>}>
                        <Input
                            placeholder="Company Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label={<Title level={5}>My Role</Title>}>
                        <Input
                            placeholder="My Role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </Form.Item>
                </div>
            </div>

            {/* 3. Profile Name */}
            <div>
                <p className="font-bold text-white bg-pink-300 py-1 px-5 w-fit rounded-full">
                    Profile Name
                </p>
                <div className="mt-4">
                    <Form.Item label={<Title level={5}>Profile Name</Title>}>
                        <Input
                            placeholder="Profile Name"
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                        />
                    </Form.Item>
                </div>
            </div>

            {/* 4. Change Password */}
            <div>
                <p className="font-bold text-white bg-pink-300 py-1 px-5 w-fit rounded-full">
                    Change Password
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <Form.Item label={<Title level={5}>New Password</Title>}>
                        <Input.Password
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label={<Title level={5}>Confirm Password</Title>}>
                        <Input.Password
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Item>
                </div>
                <Button
                    type="primary"
                    className="mt-4 w-fit mx-auto"
                    onClick={() => console.log('Change password confirmed')}
                >
                    <span className='px-10 font-bold'>Save</span>
                </Button>
            </div>

            {/* 5. Delete Account */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <DeleteOutlined className="text-xl" style={{ color: "red" }} />
                    <p className="font-bold text-red-600 py-1 w-fit">
                        Delete Account
                    </p>
                </div>
                <Text type="danger">
                    Your account and data will be permanently deleted.
                </Text>
                <div className="mt-4 flex flex-col">
                    <Button
                        danger
                        className='w-fit mx-auto'
                        type="primary"
                        onClick={() => console.log('Account deletion confirmed')}
                    >
                        <span className='px-10 font-bold'>Delete</span>
                    </Button>
                </div>
            </div>
        </Form>
    )
}

export default ProfileSettings
