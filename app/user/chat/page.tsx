"use client";

import React from 'react';
import { Layout } from 'antd';
import type { Chat } from '@/types/chat';
import PageTitle from '@/components/ui/PageTitle';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getAllChat } from '@/app/api/user/chatService';

const Chat: React.FC = () => {

    const router = useRouter();
    
    const {data:chatList, error, isLoading} = useQuery<Chat[] | undefined | null>({
        queryKey:["getAllChat"],
        queryFn: () => getAllChat()
    })

    return (
        <Layout>
            <PageTitle title='RUCCAN CHAT' />
            <div className="flex flex-col h-screen w-full bg-white">
                {/* Chat List */}
                {chatList?.map((chat) => {

                    const lastChat = chat.chatList[chat.chatList.length - 1] 

                    const unreadCount = chat.chatList.reduce((accum, chatItem) => {
                        return chatItem.read ? accum : accum + 1;
                    }, 0);

                    return (
                        <div
                            key={chat.id}
                            className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex flex-col gap-1"
                            onClick={()=>{
                                router.push(`/user/chat/${chat.id}`)
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">{chat.name}</span>
                                <span className="text-xs text-gray-500">{lastChat.time}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-600 truncate max-w-[250px]">
                                    {lastChat.text}
                                </p>
                                {(unreadCount > 0) && (
                                    <span className="bg-[#72c4ff] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                        {unreadCount}
                                    </span>
                                )}

                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    );
};

export default Chat;
