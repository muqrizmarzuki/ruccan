"use client";

import React from 'react';
import PageTitle from '@/components/ui/PageTitle';
import { Typography, Flex, Row, Col } from 'antd';
import type { Transaction } from '@/types/payment';
import { getAllTransaction } from '@/app/api/general/paymentService';
import { useQuery } from '@tanstack/react-query';
import PaymentCard from '@/components/ui/PaymentCard';
import AltLayout from '@/components/layout/AltLayout';
import LoadingScreen from '@/components/layout/LoadingScreen';

const { Text, Title } = Typography;

const now = new Date();
const month = now.toLocaleString('default', { month: 'long' });
const year = now.getFullYear().toString();

const CreatePersona: React.FC = () => {

  // Fetch payment types using React Query
  const { data: transactionList, error, isLoading } = useQuery<Transaction[] | undefined>({
    queryKey: ['getAllTransaction'],
    queryFn: getAllTransaction
  });

  // Show loading state while fetching data
  if (isLoading) return <LoadingScreen/>

  return (
    <AltLayout header={<PageTitle backButton={true}>TRANSACTION HISTORY</PageTitle>}>
      <Row className='!bg-white'>
        <Col span={24} className='z-10'>
          <Row className='!shadow-lg'>
            <Col span={24} className='!px-5 !py-3'>
              <Text className='!font-bold !text-lg'>
                {`Wallet Balance: RM 
                  ${transactionList?.reduce((accumVal, transaction) => accumVal + transaction.amount, 0)}
                `}
                </Text>
            </Col>
            <Col span={24} className='!px-5 !py-1 !bg-gray-200'>
              <Text className='!font-bold !text-sm !text-gray-500'>{`${month} ${year}`}</Text>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Flex vertical>
            {transactionList?.map(({ name, created_at, amount }) => <PaymentCard name={name} created_at={created_at} amount={amount} />)}
          </Flex>
        </Col>
      </Row>
    </AltLayout>
  );
};


export default CreatePersona;
