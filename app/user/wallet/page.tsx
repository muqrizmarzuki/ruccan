'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PageTitle from '@/components/ui/PageTitle';
import {
    Typography,
    Input,
    Button,
    Radio,
    Row,
    Col,
    Card,
    Form,
    Space,
} from 'antd';

const { Text, Title } = Typography;

const Wallet: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [autoRenew, setAutoRenew] = useState(false);

    const router = useRouter();

    return (
        <main className="min-h-screen bg-white">
            {/* Page Header */}
            <PageTitle>Wallet</PageTitle>

            <Row justify="center" className="mt-6 px-4">
                <Col xs={24} sm={20} md={16} lg={12}>
                    <Form layout="vertical" className="space-y-6">

                        {/* 1. Balance + History Link */}
                        <Form.Item>
                            <Space className="w-full justify-between" align="center">
                                <Text strong>Current Balance</Text>
                                <Link
                                    href="/transaction-history"
                                    className="text-blue-500 underline text-sm"
                                >
                                    Transaction History
                                </Link>
                            </Space>
                        </Form.Item>

                        {/* 2. Top-Up Section */}
                        <Form.Item label="Top-Up Amount (RM)">
                            <Input
                                placeholder="Enter amount"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                size="large"
                                className="border-blue-500 bg-blue-50"
                            />
                        </Form.Item>

                        <Form.Item className="!text-right">
                            <Button
                                type="primary"
                                className="!text-xs !font-bold !px-6 !py-2"
                                onClick={() => {
                                    router.push('/user/payment')
                                }}
                            >
                                Top Up Wallet
                            </Button>
                        </Form.Item>

                        {/* 3. Auto-Renew */}
                        <Form.Item>
                            <Row align="top" gutter={16}>
                                <Col>
                                    <Radio
                                        checked={autoRenew}
                                        onChange={(e) => setAutoRenew(e.target.checked)}
                                    />
                                </Col>
                                <Col flex="auto">
                                    <Text strong>Auto-Renew Subscription</Text>
                                    <p className="text-xs text-gray-500">
                                        Enable monthly or yearly auto payment using wallet.
                                    </p>
                                </Col>
                            </Row>
                        </Form.Item>

                        {/* 4. Current Plan Display */}
                        <Card
                            bordered
                            className="border-blue-700 border-2"
                            bodyStyle={{ padding: '12px' }}
                        >
                            <Text>
                                <Text strong>Current Plan:</Text> Premium (RM25/Month)
                            </Text>
                        </Card>
                    </Form>
                </Col>
            </Row>
        </main>
    );
};

export default Wallet;
