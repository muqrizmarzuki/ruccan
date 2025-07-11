import type { Chat } from '@/types/chat';

const dummyChatData: Chat[] = [
    {
        id: 1,
        name: 'Sarah Badlishah',
        persona: {
            id: 1,
            name: "Bella",
            styles: [
                {
                    id: 1,
                    name: "funny"
                },
                {
                    id: 2,
                    name: "energetic"
                }
            ],
            role: "Sales Assistant",
            active: true
        },
        chatList: [
            {
                self: true,
                text: "saya nak buat payment",
                time: "12:30",
                date: "07/07/2025",
                read: true
            },
            {
                self: false,
                text: "Selamat Datang !",
                time: "12:30",
                date: "07/07/2025",
                read: true
            },
            {
                self: false,
                text: "Terima Kasih atas makluman! anda boleh buat bayaran melalui kaedah berikut:\n1. Online Transfer / FPX\n2. E-Wallet / QR Pay",
                time: "12:30",
                date: "07/07/2025",
                read: true
            },
            {
                self: true,
                text: "Hello, boleh ke saya beli guna kad kredit ?",
                time: "12:33",
                date: "07/07/2025",
                read: false
            },
            {
                self: true,
                text: "saya nak buat payment",
                time: "12:30",
                date: "07/07/2025",
                read: true
            },
            {
                self: false,
                text: "Selamat Datang !",
                time: "12:30",
                date: "07/07/2025",
                read: true
            },
            {
                self: false,
                text: "Terima Kasih atas makluman! anda boleh buat bayaran melalui kaedah berikut:\n1. Online Transfer / FPX\n2. E-Wallet / QR Pay",
                time: "12:30",
                date: "07/07/2025",
                read: true
            },
            {
                self: true,
                text: "Hello, boleh ke saya beli guna kad kredit ?",
                time: "12:33",
                date: "07/07/2025",
                read: false
            }
        ]
    },
    {
        id: 2,
        name: 'Haziq Imran',
        persona: {
            id: 2,
            name: "Rafiq",
            styles: [
                {
                    id: 2,
                    name: "energetic"
                },
                {
                    id: 3,
                    name: "serious"
                }
            ],
            role: "Sales Assistant",
            active: false
        },
        chatList: [
            {
                self: true,
                text: "saya dah buat bayaran, tolong semak ya",
                time: "16:39",
                date: "07/07/2025",
                read: true
            },
            {
                self: false,
                text: "Baik, saya semak dahulu ya",
                time: "16:40",
                date: "07/07/2025",
                read: true
            },
            {
                self: false,
                text: "Okay, bayaran anda telah diterima.",
                time: "16:41",
                date: "07/07/2025",
                read: true
            },
            {
                self: true,
                text: "okay terima kasih",
                time: "16:41",
                date: "07/07/2025",
                read: true
            }
        ]
    },
    {
        id: 3,
        name: 'Jimmy Tan',
        persona: {
            id: 3,
            name: "Lina",
            styles: [
                {
                    id: 3,
                    name: "serious"
                },
                {
                    id: 4,
                    name: "professional"
                }
            ],
            role: "HR Assistant",
            active: true
        },
        chatList: [
            {
                self: true,
                text: "how to refund this order?",
                time: "08:35",
                date: "07/07/2025",
                read: true
            },
            {
                self: false,
                text: "Hi Jimmy! You can request a refund via our portal or contact our support. May I know your order ID?",
                time: "08:36",
                date: "07/07/2025",
                read: true
            },
            {
                self: true,
                text: "Order ID is #54321",
                time: "08:38",
                date: "07/07/2025",
                read: true
            },
            {
                self: false,
                text: "Noted, refund will be processed within 3 working days.",
                time: "08:39",
                date: "07/07/2025",
                read: false
            }
        ]
    },
    {
        id: 4,
        name: 'Devaraj Elamko',
        persona: {
            id: 1,
            name: "Bella",
            styles: [
                {
                    id: 1,
                    name: "funny"
                },
                {
                    id: 2,
                    name: "energetic"
                }
            ],
            role: "Sales Assistant",
            active: true
        },
        chatList: [
            {
                self: true,
                text: "boleh ke jadikan order ni as a gift?",
                time: "18:55",
                date: "06/07/2025",
                read: true
            },
            {
                self: false,
                text: "Ya boleh, cik boleh pilih 'Gift Option' semasa checkout.",
                time: "18:56",
                date: "06/07/2025",
                read: true
            }
        ]
    },
    {
        id: 5,
        name: 'Nur Nadia',
        persona: {
            id: 3,
            name: "Lina",
            styles: [
                {
                    id: 3,
                    name: "serious"
                },
                {
                    id: 4,
                    name: "professional"
                }
            ],
            role: "HR Assistant",
            active: true
        },
        chatList: [
            {
                self: true,
                text: "saya nak order ni sampai hari jumaat ni",
                time: "09:15",
                date: "04/07/2025",
                read: true
            },
            {
                self: false,
                text: "Noted! Kami akan usahakan penghantaran sebelum hari Jumaat.",
                time: "09:16",
                date: "04/07/2025",
                read: true
            },
            {
                self: true,
                text: "Thank you!",
                time: "09:17",
                date: "04/07/2025",
                read: true
            }
        ]
    }
];

export const getAllChat = async (): Promise<Chat[]> => {
    return dummyChatData
}

export const getChat = async (id: number): Promise<Chat | undefined> => {
    return dummyChatData.find( chat => chat.id === id)
}