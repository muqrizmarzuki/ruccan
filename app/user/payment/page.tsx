"use client";

import { useState } from 'react'
import PageTitle from '@/components/ui/PageTitle';
import { Typography, Button, Input, Form, Select, Switch } from 'antd'
import Link from 'next/link';
import { BankFilled, WalletFilled } from '@ant-design/icons';
import type { PaymentType } from '@/types/payment';
import { useQuery } from '@tanstack/react-query';
import { getPaymentType } from '@/app/api/general/paymentService';

const { Text, Title } = Typography;

const iconMapper = {
  "card": <WalletFilled className='!text-white !text-xl' />,
  "bank": <BankFilled className='!text-white !text-xl' />
};

const CreatePersona: React.FC = () => {
  const [selectedPaymentID, setSelectedPaymentID] = useState<number | undefined>()
  const [companyName, setCompanyName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cvc, setCvc] = useState("")

  const { data: paymentType, error, isLoading } = useQuery<PaymentType[] | undefined>({
    queryKey: ["getPaymentType"],
    queryFn: () => getPaymentType()
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col bg-white">
      <PageTitle title='PAYMENT' />
      <div className='p-4 px-8 '>
        <div className='flex flex-col gap-5 mb-8'>
          <div className='text-xs'>
            <p className='font-semibold'>Enter your payment details</p>
            <p className='font-semibold italic'>
              By continuing you agree to our <Link href="/">Terms</Link>
            </p>
          </div>
        </div>

        <div className='flex flex-row flex-wrap gap-2'>
          {paymentType?.map(({ id, type, description, icon_id }) => (
            <div
              key={id}
              className={`${selectedPaymentID === id ? 'bg-blue-950' : 'bg-gray-200'} hover:bg-blue-950 transition-all ease-in-out rounded-lg p-4 max-w-[160px] cursor-pointer`}
              onClick={() => setSelectedPaymentID(id)}
            >
              {iconMapper[icon_id]}
              <p className='text-white'>{`Transfer via card number`}</p>
            </div>
          ))}
        </div>

        <div className="px-2 mt-4">
          <Form layout="vertical">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <Form.Item label={<Text className='!italic !text-xs !font-semibold'>Company Name</Text>}>
                <Input
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Item>

              <Form.Item label={<Text className='!italic !text-xs !font-semibold'>Card Number</Text>}>
                <Input
                  value={cardNumber}
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/\D/g, '').slice(0, 16);
                    const formattedValue = rawValue.replace(/(.{4})/g, '$1 ').trim();
                    setCardNumber(formattedValue);
                  }}
                />
              </Form.Item>

              <div className='flex flex-row gap-5'>
                <Form.Item label={<Text className='!italic !text-xs !font-semibold'>Exp Month</Text>} className="w-full">
                  <Select
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    options={
                      Array.from({ length: 12 }, (_, i) => {
                        const month = String(i + 1).padStart(2, '0');
                        return { label: month, value: month };
                      })
                    }
                  />
                </Form.Item>

                <Form.Item label={<Text className='!italic !text-xs !font-semibold'>Exp Year</Text>} className="w-full">
                  <Select
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    options={
                      Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() + i;
                        return { label: String(year), value: String(year) };
                      })
                    }
                  />
                </Form.Item>
              </div>

              <Form.Item label={<Text className='!italic !text-xs !font-semibold'>CVC</Text>}>
                <div className='flex gap-6 items-center'>
                  <Input
                    placeholder="123"
                    className='!max-w-[50px]'
                    value={cvc}
                    onChange={(e) => {
                      const rawValue = e.target.value.replace(/\D/g, '').slice(0, 4);
                      setCvc(rawValue);
                    }}
                  />
                  <p className='text-gray-300 max-w-[160px]' style={{ fontSize: 10 }}>
                    3 or 4 digits usually found on the signature strips
                  </p>
                </div>
              </Form.Item>

              <Form.Item>
                <div className='flex flex-row items-center gap-2'>
                  <Switch checked={true} onChange={() => { }} />
                  <Text className='!text-xs font-semibold'>SET AS DEFAULT</Text>
                </div>
              </Form.Item>
            </div>
            <Button type="primary" className='!w-full !py-3'>CONFIRM</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CreatePersona;
