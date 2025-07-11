'use client';
import { useState } from 'react';
import type { Chat } from '@/types/chat';
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query';
import { getChat } from '@/app/api/user/chatService';

const ChatPage: React.FC = () => {

    const params = useParams()
    const chatID = Number(params.chatID);

    const {data:chat, error, isLoading} = useQuery<Chat | undefined>({
        queryKey: ["getChat"],
        queryFn: () => getChat(chatID)
    })

    const [enabled, setEnabled] = useState(false);

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Loading...</p>
    }

    return (
        <div className="flex flex-col bg-gray-100 h-screen">
            {/* Header */}
            <div className="bg-white shadow p-4 flex flex-row">
                <div>
                    <img
                        src="/default-avatar.png"
                        alt="Profile"
                        className="w-15 h-15 rounded-full object-cover border"
                    />
                </div>
                <div className='ps-2'>
                    <p className="text-xl text-gray-500">{}</p>
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

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4" style={{ maxHeight: "65vh" }}>
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

            {/* Input area */}
            <div className="p-4 pb-0 bg-white border-t">
                <input
                    type="text"
                    placeholder="Taip mesej..."
                    className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>

    );
};

export default ChatPage;
