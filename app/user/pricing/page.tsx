"use client";

import { useState, useEffect } from 'react'
import PageTitle from '@/components/ui/PageTitle';
import { Typography, Button } from 'antd'
import { CheckCircleOutlined, XOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const basicPlan = [
    {
        available: true,
        text: "Manual Knowledge Entry"
    },
    {
        available: true,
        text: "Upload 5 Text Docs/months"
    },
    {
        available: false,
        text: "No Web Link Import"
    },
    {
        available: false,
        text: "No Image-to-text OCR"
    },
    {
        available: false,
        text: "No SOP Auto-Learning"
    },
    {
        available: true,
        text: "Max 10 Knowledge Sources"
    },
    {
        available: true,
        text: "Email Support"
    }
]

const standardPlan = [
    {
        available: true,
        text: "Manual Knowledge Entry"
    },
    {
        available: true,
        text: "Upload 5 Text Docs/months"
    },
    {
        available: true,
        text: "No Web Link Import"
    },
    {
        available: true,
        text: "No Image-to-text OCR"
    },
    {
        available: false,
        text: "No SOP Auto-Learning"
    },
    {
        available: true,
        text: "Max 10 Knowledge Sources"
    },
    {
        available: true,
        text: "Email Support"
    }
]

const premiumPlan = [
    {
        available: true,
        text: "Manual Knowledge Entry"
    },
    {
        available: true,
        text: "Upload 5 Text Docs/months"
    },
    {
        available: true,
        text: "No Web Link Import"
    },
    {
        available: true,
        text: "No Image-to-text OCR"
    },
    {
        available: true,
        text: "No SOP Auto-Learning"
    },
    {
        available: true,
        text: "Max 10 Knowledge Sources"
    },
    {
        available: true,
        text: "Email Support"
    }
]

const CreatePersona: React.FC = () => {


    return (
        <div className="flex flex-col bg-white">
            <PageTitle title='PREMIUM PLAN' />
            <div className='p-4 px-8 flex flex-col gap-5'>
                <div className='border rounded-lg border-black flex flex-col overflow-hidden'>
                    <div className='flex flex-col py-2 px-3'>
                        <Title level={5}>Basic</Title>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center gap-3'>
                                <Title level={3} className='!m-0'>$5</Title>
                                <div>
                                    <p className='p-0 text-xs font-semibold'>Per agent</p>
                                    <p className='p-0 text-xs font-semibold'>Per month</p>
                                </div>
                            </div>
                            <div>
                                <Button type='primary' className='!px-10 !font-bold'>Select</Button>
                            </div>
                        </div>
                    </div>

                    <div className='text-center border-y border-gray-200'>
                        <p>ideal for simple, entry-level AI personas</p>
                    </div>

                    <div className='flex flex-col py-2 px-3 ps-10'>
                        {basicPlan.map(({available, text}) => (
                            <div>
                                {(available) ? <CheckCircleOutlined className='!text-xs !align-middle !text-blue-800' /> : <XOutlined className='!text-xs !align-middle !text-red-800' />}
                                <span className="ml-1 align-middle text-xs font-semibold">{text}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='border rounded-lg border-black flex flex-col overflow-hidden'>
                    <div className='flex flex-col py-2 px-3'>
                        <Title level={5}>Standard</Title>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center gap-3'>
                                <Title level={3} className='!m-0'>$15</Title>
                                <div>
                                    <p className='p-0 text-xs font-semibold'>Per agent</p>
                                    <p className='p-0 text-xs font-semibold'>Per month</p>
                                </div>
                            </div>
                            <div>
                                <Button type='primary' className='!px-10 !font-bold'>Select</Button>
                            </div>
                        </div>
                    </div>

                    <div className='text-center border-y border-gray-200'>
                        <p>Perfect for growing AI needs</p>
                    </div>

                    <div className='flex flex-col py-2 px-3 ps-10'>
                        {standardPlan.map(({available, text}) => (
                            <div>
                                {(available) ? <CheckCircleOutlined className='!text-xs !align-middle !text-blue-800' /> : <XOutlined className='!text-xs !align-middle !text-red-800' />}
                                <span className="ml-1 align-middle text-xs font-semibold">{text}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='border rounded-lg border-black flex flex-col overflow-hidden'>
                    <div className='flex flex-col py-2 px-3'>
                        <Title level={5}>Premium</Title>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center gap-3'>
                                <Title level={3} className='!m-0'>$45</Title>
                                <div>
                                    <p className='p-0 text-xs font-semibold'>Per agent</p>
                                    <p className='p-0 text-xs font-semibold'>Per month</p>
                                </div>
                            </div>
                            <div>
                                <Button type='primary' className='!px-10 !font-bold'>Select</Button>
                            </div>
                        </div>
                    </div>

                    <div className='text-center border-y border-gray-200'>
                        <p>Perfect for large enterprise AI model</p>
                    </div>

                    <div className='flex flex-col py-2 px-3 ps-10'>
                        {premiumPlan.map(({available, text}) => (
                            <div>
                                {(available) ? <CheckCircleOutlined className='!text-xs !align-middle !text-blue-800' /> : <XOutlined className='!text-xs !align-middle !text-red-800' />}
                                <span className="ml-1 align-middle text-xs font-semibold">{text}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreatePersona