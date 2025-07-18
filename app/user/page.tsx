"use client";

import React from 'react';
import { Flex, Typography, Divider, Layout, Button, Row, Col, Image } from 'antd';
import { RightOutlined, PhoneOutlined } from '@ant-design/icons';
import SectionTitle from '@/components/ui/SectionTitle';
import PageTitle from '@/components/ui/PageTitle';
import LoadingMeter from '@/components/ui/LoadingMeter';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const page = () => {

    const router = useRouter()

    return (
        <Layout className="!space-y-4 !bg-white">
            <PageTitle>DASHBOARD</PageTitle>

            {/* Plan Details */}
            <Row>
                <Col span={24}>
                    <SectionTitle title="Plan Details" />
                </Col>

                <Col span={24} className="px-4">
                    <Row className="border-2 rounded border-cyan-500 px-4 py-2" >
                        <Col span={24}>
                            <Text strong>Plan: </Text>
                            <Text type="success">Free Plan</Text>
                            <Text className="!text-xs block mb-1">
                                This product is still in beta testing. There might be some issues. Use at your own risk.
                            </Text>
                        </Col>

                        <Col span={24} className='mb-2'>
                            <PhoneOutlined className="me-1" style={{ color: 'red' }} />
                            <Text strong className="!text-xs">Contact: </Text>
                            <Text className="!text-blue-500 !text-xs">Aliff Akmal Bahri</Text>
                        </Col>

                        <Col span={24} className='mb-2'>
                            <PrimaryButton onClick={()=>{ router.push("user/pricing") }}>
                                Upgrade Plan <RightOutlined />
                            </PrimaryButton>
                        </Col>

                        {/* Ruccan AI Labs Section */}
                        <Col span={24} className="border-2 rounded border-cyan-500 !bg-cyan-600 !px-2 py-2 !mb-4">
                            <Row>
                                <Col span={12}>
                                    <Text strong className="!text-xs !text-white block mb-2">Ruccan AI Labs</Text>
                                    <Text className="!text-xs !text-white block mb-2">Explore our latest AI experiments</Text>
                                    <Text className="!text-xs block !text-[#f7ea8e]">New tools added regularly!</Text>
                                </Col>

                                <Col span={12} className="text-center mt-2 flex flex-col">
                                    <Image
                                        src="/flask.png"
                                        width={70}
                                        preview={false}
                                        className="mb-2 mx-auto"
                                        alt="Ruccan AI Labs"
                                    />
                                    <PrimaryButton outline={true} onClick={()=>{alert("Hello")}}>
                                        Explore Lab <RightOutlined />
                                    </PrimaryButton>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Usage Limits */}
            <Row className='mb-5'>
                <Col span={24}>
                    <SectionTitle title="Usage Limits" />
                </Col>

                <Col span={24} className="px-4">
                    <Layout className="border-2 rounded border-cyan-500 px-4 py-2 bg-white">
                        <LoadingMeter title="AI Persona" progress={3} total={3} />
                        <LoadingMeter title="Monthly Messages" progress={12} total={100} />
                        <LoadingMeter title="Knowledge Base Scans" progress={1} total={10} />
                    </Layout>
                </Col>
            </Row>
        </Layout>
    );
};

export default page;
