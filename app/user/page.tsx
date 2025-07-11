"use client";

import React from 'react'
import { Flex, Typography, Divider, Layout, Button } from 'antd';
import { RightOutlined, PhoneOutlined } from '@ant-design/icons';
import SectionTitle from '@/components/ui/SectionTitle';
import PageTitle from '@/components/ui/PageTitle';

import LoadingMeter from '@/components/ui/LoadingMeter';

const { Title, Text } = Typography;

/* Main Dashboard */
const page = () => {

    return (
        <section className="space-y-4">

            <PageTitle title='DASHBOARD' />

            <div className='px-4'>
                <SectionTitle title='Plan Details' />

                <Layout className='border-2 rounded border-cyan-500 px-4 py-2'>
                    <div>
                        <Text strong>Plan: </Text>
                        <Text className='!text-blue-500'>Free Plan</Text>
                    </div>

                    <Text className='!text-xs mb-2'>
                        This product is still in beta testing. There might be some issue, use at your own risk.
                    </Text>

                    <div className='mb-2'>
                        <PhoneOutlined className='me-1' style={{ color: "red" }} />
                        <Text strong className='!text-xs'>Contact: </Text>
                        <Text className='!text-blue-500 !text-xs'>Aliff Akmal Bahri</Text>
                    </div>

                    <div className='!mb-2'>
                        <Button className='!w-fit !rounded-full !text-xs !bg-[#b64fb1] !text-white'>Upgrade Plan <RightOutlined /> </Button>
                    </div>

                    <div className='border-2 rounded border-cyan-500 !bg-cyan-500 px-4 py-2 flex flex-row flex-wrap'>
                        <div className='text-white'>
                            <p className='text-xs font-bold mb-2'>Ruccan AI Labs </p>
                            <p className='text-xs'>Explore our latest AI experiments </p>
                            <p className='text-xs text-[#ebda5a]'>New tools added regularly!</p>
                        </div>
                        <div className='mx-auto text-center'>
                            <img src={"/flask.png"} width="75" className='mb-2 mx-auto'/>
                            <button className='w-fit rounded-lg text-xs px-4 py-2 bg-[#369cc1] hover:bg-[#436d86] text-white shadow border-0'>
                                <span className='me-1'>Upgrade Plan</span> <RightOutlined />
                            </button>
                        </div>
                    </div>

                </Layout>

                <SectionTitle title='Usage Limits' />

                <Layout className='border-2 rounded border-cyan-500 px-4 py-2 bg-white'>
                    <LoadingMeter title='AI Persona' progress={3} total={3} />
                    <LoadingMeter title='Monthly Messages' progress={12} total={100} />
                    <LoadingMeter title='Knowledge Base Scans' progress={1} total={10} />
                </Layout>
            </div>

        </section>
    )
}

export default page