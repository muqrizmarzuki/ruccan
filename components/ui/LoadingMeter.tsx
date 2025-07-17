import React from 'react';
import { Flex, Typography, Divider, Layout, Button, Row, Col, Image } from 'antd';

const { Title, Text } = Typography;

type LoadingMeterProps = {
    title: string,
    progress: number,
    total: number
}

const LoadingMeter: React.FC<LoadingMeterProps> = ({ title = "Title", progress = 0, total = 0 }) => {


    const barProgress = (progress * 100) / total;

    if (progress > total) return <Text className='!text-red-500'>Progress is more than total</Text>

    return (
        <Flex vertical gap={2} className="!w-full !max-w-md !mb-2">
            {/* Header Row */}
            <Row className="flex flex-row justify-between text-sm font-medium text-gray-700">
                <Col span={24}>
                    <Text className='!text-xs'>{`${title}: `}</Text>
                    <Text className='!text-xs'>{`${progress}/${total}`}</Text>
                </Col>
            </Row>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full border overflow-hidden">
                <div
                    className="h-full bg-[#602FD0] rounded-full transition-all duration-500"
                    style={{ width: `${barProgress}%` }}
                ></div>
            </div>
        </Flex>
    );
};

export default LoadingMeter;
