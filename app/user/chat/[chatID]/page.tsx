'use client';
import { useState } from 'react';
import type { Chat } from '@/types/chat';
import { Flex, Layout, Row, Col, Input, Space, Upload, Button, Result } from 'antd';
import PageTitle from '@/components/ui/PageTitle';
import Navigation from '@/components/layout/Navigation'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query';
import { getChat } from '@/app/api/user/chatService';
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons'
import LoadingScreen from '@/components/layout/LoadingScreen';
import ErrorPage from '@/components/layout/ErrorPage';

const ChatPage: React.FC = () => {

    const params = useParams()
    const chatID = Number(params.chatID);

    const { data: chat, error, isLoading } = useQuery<Chat | undefined>({
        queryKey: ["getChat"],
        queryFn: () => getChat(chatID)
    })

    const [enabled, setEnabled] = useState(false);

    if (isLoading) return <LoadingScreen />

    if (error) return <ErrorPage/>

    return (
        <Layout className="!w-full !max-w-[430px] !mx-auto !relative !bg-white">
            <Flex vertical className='!h-screen'>
                <Row>
                    <Col span={24}>
                        <PageTitle position='center' backButton={true}>{chat?.name}</PageTitle>
                        <div className="bg-white shadow p-4 flex flex-row border-b-2">
                            <div>
                                <img
                                    src="/default-avatar.png"
                                    alt="Profile"
                                    className="w-15 h-15 rounded-full object-cover border"
                                />
                            </div>
                            <div className='ps-2'>
                                <p className="text-xl text-gray-500">{ }</p>
                                <p className="text-md text-gray-500">{chat?.persona?.role}</p>
                            </div>
                            <div className='ps-2 flex flex-row gap-2 items-center ms-auto'>
                                <span>Live</span>
                                <button
                                    onClick={() => setEnabled(!enabled)}
                                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${enabled ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                >
                                    <div
                                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${enabled ? 'translate-x-6' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                                <span>Offline</span>

                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='flex-1 overflow-y-scroll overflow-x-hidden'>
                    <Col span={24}>
                        <Flex vertical className="!bg-white">
                            {/* Chat messages */}
                            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                                {chat?.chatList.map((msg, index) => (
                                    <div key={index}>
                                        <p className={`mb-1 text-gray-500 ${msg.self ? 'text-left' : 'text-right'}`}>
                                            {msg.self ? 'Visitor' : 'Ruccan Chat'}
                                        </p>
                                        <div className={`flex ${msg.self ? 'justify-start' : 'justify-end'}`}>
                                            <div className={`max-w-xs whitespace-pre-wrap px-4 py-2 rounded-lg text-sm ${msg.self ? 'bg-white text-gray-800 shadow' : 'bg-blue-500 text-white'}`}>
                                                {msg.text}
                                                <div className="text-[10px] mt-1 text-right opacity-70">
                                                    {msg.time}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </Flex>
                    </Col>
                </Row>

                <div>
                    <Flex vertical={false} className="!bg-gray-200 !p-4" align="center" justify="space-between">
                        <Input.TextArea
                            placeholder="Write a message"
                            className='!bg-gray-200 !border-0 !text-black'
                            autoSize={{ minRows: 1, maxRows: 4 }}
                            style={{ color: 'black', fontSize: 20, resize: 'none', flex: 1 }}
                        />
                        <Space size="middle" className="!ps-3">
                            <Upload showUploadList={false}>
                                <Button
                                    icon={<PaperClipOutlined style={{ fontSize: 24 }} />}
                                    type="text"
                                    size="large"
                                    style={{ height: 28, width: 28, padding: 0 }}
                                />
                            </Upload>
                            <Button
                                icon={<SendOutlined style={{ fontSize: 24 }} />}
                                type="text"
                                size="large"
                                style={{ height: 28, width: 28, padding: 0 }}
                            />
                        </Space>

                    </Flex>
                    <Navigation />
                </div>

            </Flex>
        </Layout>
    );
};

export default ChatPage;
