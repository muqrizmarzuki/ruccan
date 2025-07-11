'use client';

import React, { useState } from 'react';
import PageTitle from '@/components/ui/PageTitle';
import { Input, Radio, Typography } from 'antd';
import Link from 'next/link';

const { Text } = Typography;

const Wallet: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [autoRenew, setAutoRenew] = useState(false);

    return (
        <main className="flex flex-col bg-white min-h-screen">
            <PageTitle title="WALLET" />

            <div className="flex flex-col gap-y-6 mt-6 max-w-md">
                <div className='px-3'>
                    {/* 1. Top Section: Title + History */}
                    <div className="flex justify-between items-center mb-2">
                        <p className="font-bold">Current Balance</p>
                        <Link href="/transaction-history" className="text-blue-500 underline text-sm">
                            Transaction History
                        </Link>
                    </div>

                    {/* 2. RM Input */}
                    <div className='flex flex-col'>
                        <Input
                            className="border border-blue-500 bg-blue-50 mb-3"
                            placeholder="Enter amount in RM"
                            type='number'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            prefix="RM"
                            size="large"
                        />
                        <button className='w-fit rounded-lg text-xs px-4 py-2 bg-[#369cc1] hover:bg-[#436d86] text-white shadow border-0 mb-3 ms-auto'>
                            <span className='font-bold'>Top Up Wallet</span>
                        </button>
                    </div>

                    <div className="flex items-start gap-3 px-3">
                        <Radio
                            checked={autoRenew}
                            onChange={(e) => setAutoRenew(e.target.checked)}
                        />
                        <div>
                            <Text strong>Auto-Renew Subscription</Text>
                            <p className="text-xs text-gray-500">
                                Enable monthly or yearly auto payment using wallet.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. Current Plan */}
                <div className='border-y-2 p-3 border-blue-700'>
                    <p><span className='font-bold'>Current Plan:</span> <span >Premium (RM25/Month)</span> </p>
                </div>
            </div>
        </main>
    );
};

export default Wallet;
