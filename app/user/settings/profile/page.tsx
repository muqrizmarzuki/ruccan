'use client';

import { useState } from 'react';
import {
    UploadOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import {
    Button,
    Input,
    Typography,
    Upload,
    Form,
    Row,
    Col,
    Divider,
    Flex,
} from 'antd';

import AltLayout from '@/components/layout/AltLayout';
import PageTitle from '@/components/ui/PageTitle';

const { Title, Text } = Typography;

const ProfileSettings: React.FC = () => {
    const [companyName, setCompanyName] = useState('');
    const [role, setRole] = useState('');
    const [profileName, setProfileName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <AltLayout header={<PageTitle backButton={true}>Profile Settings</PageTitle>}>
            <Row justify="center">
                <Col xs={24} sm={20} md={16} lg={12}>
                    <Form layout="vertical" className="px-4 py-6 space-y-10">

                        <Row>
                            <Col span={24}>
                                <Title level={5} className="!mb-3">Profile Photo</Title>
                                <Flex vertical align="center" gap={16}>
                                    <img
                                        src="/default-avatar.png"
                                        alt="Profile"
                                        className="w-20 h-20 rounded-full object-cover border"
                                    />
                                    <Upload showUploadList={false}>
                                        <Button icon={<UploadOutlined />} type="primary">
                                            Upload Photo
                                        </Button>
                                    </Upload>
                                </Flex>
                            </Col>
                            <Divider />
                            <Col span={24}>
                                <Title level={5} className="!mb-3">Company Info</Title>
                                <Row gutter={16}>
                                    <Col xs={24} sm={12}>
                                        <Form.Item label="Company Name">
                                            <Input
                                                placeholder="Company Name"
                                                value={companyName}
                                                onChange={(e) => setCompanyName(e.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12}>
                                        <Form.Item label="My Role">
                                            <Input
                                                placeholder="My Role"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Divider />

                            {/* Profile Name */}
                            <Col span={24}>
                                <Title level={5} className="!mb-3">Profile Name</Title>
                                <Form.Item label="Profile Name">
                                    <Input
                                        placeholder="Profile Name"
                                        value={profileName}
                                        onChange={(e) => setProfileName(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>

                            <Divider />

                            {/* Change Password */}
                            <Col span={24}>
                                <Title level={5} className="!mb-3">Change Password</Title>
                                <Row gutter={16}>
                                    <Col xs={24} sm={12}>
                                        <Form.Item label="New Password">
                                            <Input.Password
                                                placeholder="New Password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12}>
                                        <Form.Item label="Confirm Password">
                                            <Input.Password
                                                placeholder="Confirm Password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Button
                                    type="primary"
                                    className="mt-2"
                                    onClick={() => console.log('Change password confirmed')}
                                >
                                    Save Password
                                </Button>
                            </Col>

                            <Divider />

                            {/* Delete Account */}
                            <Col span={24}>
                                <Flex align="center" gap={8} className="mb-2">
                                    <DeleteOutlined className="text-xl text-red-500" />
                                    <Text strong className="text-red-500">Delete Account</Text>
                                </Flex>
                                <Text type="danger">
                                    Your account and data will be permanently deleted. This action cannot be undone.
                                </Text>
                                <div className="mt-4">
                                    <Button
                                        danger
                                        type="primary"
                                        onClick={() => console.log('Account deletion confirmed')}
                                    >
                                        Delete Account
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        </AltLayout>
    );
};

export default ProfileSettings;
