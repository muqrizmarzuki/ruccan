"use client";

import { useState } from 'react';
import PageTitle from '@/components/ui/PageTitle';
import { Typography, Button, Input, Form, Select, Switch, Flex, Row, Col } from 'antd';
import Link from 'next/link';

import type { PaymentType } from '@/types/payment';
import { useQuery } from '@tanstack/react-query';
import { getPaymentType } from '@/app/api/general/paymentService';
import AltLayout from '@/components/layout/AltLayout';
import PrimaryButton from '@/components/ui/PrimaryButton';
import IconCard from '@/components/ui/IconCard';
import LoadingScreen from '@/components/layout/LoadingScreen';

const { Text, Title } = Typography;

const CreatePersona: React.FC = () => {
  // Form states
  const [selectedPaymentID, setSelectedPaymentID] = useState<number | undefined>();
  const [companyName, setCompanyName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [cvc, setCvc] = useState('');

  // Fetch payment types using React Query
  const { data: paymentType, error, isLoading } = useQuery<PaymentType[] | undefined>({
    queryKey: ['getPaymentType'],
    queryFn: getPaymentType
  });

  // Show loading state while fetching data
  if (isLoading) return <LoadingScreen/>

  return (
    <AltLayout header={<PageTitle backButton={true}>PAYMENT</PageTitle>}>
      <Row className='!bg-white'>
        <Col span={24} className='!p-4'>
          {/* Section intro */}
          <Flex vertical gap={10} className='!mb-8'>
            <Text className='!font-semibold !text-xs !text-gray-400'>Enter your payment details <br />
              <Text italic className='!text-xs'>
                By continuing you agree to our <Link href="/">Terms</Link>
              </Text>
            </Text>
          </Flex>

          {/* Payment type selection */}
          <Flex wrap gap={8}>
            {paymentType?.map(({ id, type, description, icon_id }) => <IconCard key={id} active={selectedPaymentID === id} iconName={icon_id} text={description} handleClick={() => { setSelectedPaymentID(id)}} />)}
          </Flex>

          {/* Payment form */}
          <Row>
            <Col span={24} className="px-2 mt-4">
              <Form layout="vertical">
                <Row>
                  <Col span={24}>

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
                    <Flex gap={10}>
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
                    </Flex>

                    {/* CVC with note */}
                    <Form.Item label={<Text className='!italic !text-xs !font-semibold'>CVC</Text>}>
                      <Flex gap={12}>
                        <Input
                          placeholder="123"
                          className='!max-w-[50px]'
                          value={cvc}
                          onChange={(e) => {
                            const rawValue = e.target.value.replace(/\D/g, '').slice(0, 4);
                            setCvc(rawValue);
                          }}
                        />
                        <Text className='!text-gray-300 !max-w-[160px]' style={{ fontSize: 10 }}>
                          3 or 4 digits usually found on the signature strip
                        </Text>
                      </Flex>
                    </Form.Item>

                    {/* Default payment switch */}
                    <Form.Item>
                      <Flex gap={4}>
                        <Switch checked={isDefault} onChange={setIsDefault} />
                        <Text className='!text-xs font-semibold'>SET AS DEFAULT</Text>
                      </Flex>
                    </Form.Item>
                  </Col>
                </Row>

                {/* Submit Button */}
                <PrimaryButton customStyle='!w-full !py-3'>
                  CONFIRM
                </PrimaryButton>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </AltLayout>
  );
};

export default CreatePersona;
