"use client";

import { useCallback, useState } from 'react';
import PageTitle from '@/components/ui/PageTitle';
import { Typography, Button, Input, Form, Select, Switch, Flex } from 'antd';
import Link from 'next/link';
import { BankFilled, WalletFilled } from '@ant-design/icons';
import type { PaymentType } from '@/types/payment';
import { useQuery } from '@tanstack/react-query';
import { getPaymentType } from '@/app/api/general/paymentService';
import AltLayout from '@/components/layout/AltLayout';

const { Text, Title } = Typography;

const CreatePersona: React.FC = () => {
  // Form states
  const [selectedPaymentID, setSelectedPaymentID] = useState<number | undefined>();
  const [companyName, setCompanyName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');

  // Fetch payment types using React Query
  const { data: paymentType, error, isLoading } = useQuery<PaymentType[] | undefined>({
    queryKey: ['getPaymentType'],
    queryFn: getPaymentType
  });

  const renderIcon = useCallback((nameId: string) => {
    if (nameId === "card") return <WalletFilled className='!text-white !text-xl' />
    else if (nameId === "bank") return <BankFilled className='!text-white !text-xl' />
    else return <></>
  }, [])

  if (isLoading) return <p>Loading...</p>;

  return (
    <AltLayout header={<PageTitle backButton={true}>PAYMENT</PageTitle>}>
      <Flex vertical className='!bg-white'>
        <div className='p-4'>
          {/* Section intro */}
          <div className='flex flex-col gap-5 mb-8 text-xs text-gray-400'>
            <p className='font-semibold'>Enter your payment details <br />
              <span className='font-semibold italic'>
                By continuing you agree to our <Link href="/">Terms</Link>
              </span>
            </p>
          </div>

          {/* Payment type selection */}
          <div className='flex flex-row flex-wrap gap-2'>
            {paymentType?.map(({ id, type, description, icon_id }) => (
              <div
                key={id}
                className={`
                  ${selectedPaymentID === id ? 'bg-blue-950' : 'bg-gray-400'} 
                  hover:bg-blue-950 transition-all ease-in-out 
                  rounded-lg p-4 max-w-[160px] cursor-pointer
                `}
                onClick={() => setSelectedPaymentID(id)}
              >
                {renderIcon(icon_id)}
                <p className='text-white'>Transfer via card number</p>
              </div>
            ))}
          </div>

          {/* Payment form */}
          <div className="px-2 mt-4">
            <Form layout="vertical">
              <div className="grid grid-cols-1 sm:grid-cols-2">

                {/* Company Name */}
                <Form.Item label={<Text className='!italic !text-xs !font-semibold'>Company Name</Text>}>
                  <Input
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Form.Item>

                {/* Card Number with formatting */}
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

                {/* Expiration Month & Year */}
                <div className='flex flex-row gap-5'>
                  <Form.Item label={<Text className='!italic !text-xs !font-semibold'>Exp Month</Text>} className="w-full">
                    <Select
                      allowClear
                      placeholder="Please select"
                      options={Array.from({ length: 12 }, (_, i) => {
                        const month = String(i + 1).padStart(2, '0');
                        return { label: month, value: month };
                      })}
                    />
                  </Form.Item>

                  <Form.Item label={<Text className='!italic !text-xs !font-semibold'>Exp Year</Text>} className="w-full">
                    <Select
                      allowClear
                      placeholder="Please select"
                      options={Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() + i;
                        return { label: String(year), value: String(year) };
                      })}
                    />
                  </Form.Item>
                </div>

                {/* CVC with note */}
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
                      3 or 4 digits usually found on the signature strip
                    </p>
                  </div>
                </Form.Item>

                {/* Default payment switch */}
                <Form.Item>
                  <div className='flex flex-row items-center gap-2'>
                    <Switch checked={true} onChange={() => { }} />
                    <Text className='!text-xs font-semibold'>SET AS DEFAULT</Text>
                  </div>
                </Form.Item>
              </div>

              {/* Submit Button */}
              <Button type="primary" className='!w-full !py-3'>
                CONFIRM
              </Button>
            </Form>
          </div>
        </div>
      </Flex>
    </AltLayout>
  );
};

export default CreatePersona;
