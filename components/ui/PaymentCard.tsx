import React, { useState } from 'react';
import { Typography, Flex} from 'antd';
import type { Transaction } from '@/types/payment';
import formatDate from '@/helper/util/formatDateTime';

const { Text, Title } = Typography;

type PaymentCardProps = Omit<Transaction, 'id'>

const PaymentCard: React.FC<PaymentCardProps> = ({ name, created_at, amount }: PaymentCardProps) => {

  const sign = (amount > 0) ? "+" : "-";

  return (
    <Flex className='border-y !bg-white hover:!bg-gray-100 cursor-pointer !border-gray-100 !py-2 !px-6'>
      <Flex vertical flex={1}>
        <Text className='!font-bold'>{name}</Text>
        <Text>{formatDate(created_at)}</Text>
      </Flex>
      <Flex align='center'>
        <Text className={`!font-bold ${(amount > 0) ? '!text-green-700' : '!text-red-700'} `}>
          {`${sign} RM ${Math.abs(amount).toFixed(2)}`}
        </Text>
      </Flex>
    </Flex>
  )
}

export default PaymentCard;