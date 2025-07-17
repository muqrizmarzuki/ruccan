"use client";

import React from 'react';
import { Flex, Typography, Layout } from 'antd';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import PageTitle from '@/components/ui/PageTitle';
import type { Chat } from '@/types/chat';
import { getAllChat } from '@/app/api/user/chatService';

const { Text } = Typography;

const ChatPage: React.FC = () => {
    const router = useRouter();

    // Fetch chat data using React Query
    const {
        data: chatList = [],
        error,
        isLoading,
    } = useQuery<Chat[] | undefined | null>({
        queryKey: ['getAllChat'],
        queryFn: getAllChat,
    });

    // Show loading state while fetching data
    if (isLoading) {
        return (
            <Layout>
                <PageTitle>RUCCAN CHAT</PageTitle>
                {/* You can drop in a Skeleton or Spinner here later */}
            </Layout>
        );
    }

    // Optional: handle unexpected empty/null data
    if (!chatList || chatList.length === 0) {
        return (
            <Layout>
                <PageTitle>RUCCAN CHAT</PageTitle>
                <Flex vertical justify="center" align="center">
                    <Text type="secondary">No chat data available.</Text>
                </Flex>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageTitle>RUCCAN CHAT</PageTitle>

            {/* Chat List */}
            <Flex vertical className="!w-full !bg-white overflow-y-auto">
                {chatList.map((chat) => {
                    // Get last message from chat
                    const lastChat = chat.chatList?.[chat.chatList.length - 1];

                    // Count unread messages
                    const unreadCount = chat.chatList?.reduce(
                        (acc, item) => (!item.read ? acc + 1 : acc),
                        0
                    ) ?? 0;

                    return (
                        <Flex
                            key={chat.id}
                            vertical
                            gap={4}
                            className="!px-4 !py-3 !border-b !border-gray-100 hover:!bg-gray-50 !cursor-pointer"
                            onClick={() => router.push(`/user/chat/${chat.id}`)}
                        >
                            {/* Chat Name & Time */}
                            <Flex justify="space-between" align="center">
                                <Text className="!font-medium text-gray-900">{chat.name}</Text>
                                <Text className="!text-xs text-gray-500">
                                    {lastChat?.time ?? ''}
                                </Text>
                            </Flex>

                            {/* Last Message & Unread Count */}
                            <Flex justify="space-between" align="center">
                                <Text
                                    className="!text-sm text-gray-600 truncate max-w-[250px]"
                                    title={lastChat?.text}
                                >
                                    {lastChat?.text ?? 'No messages yet.'}
                                </Text>

                                {/* Show unread count if > 0 */}
                                {unreadCount > 0 && (
                                    <Text className="!bg-[#72c4ff] !text-white !text-xs !font-bold px-2 py-0.5 !rounded-full">
                                        {unreadCount}
                                    </Text>
                                )}
                            </Flex>
                        </Flex>
                    );
                })}
            </Flex>
        </Layout>
    );
};

export default ChatPage;
