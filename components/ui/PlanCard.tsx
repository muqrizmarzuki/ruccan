import { Typography, Button, Row, Col, Card, Flex } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import PrimaryButton from './PrimaryButton';

const { Title, Text } = Typography;

type Feature = {
    available: boolean;
    text: string;
};

type PlanCardProps = {
    title: string;
    price: string;
    description: string;
    features: Feature[];
};

const PlanCard: React.FC<PlanCardProps> = ({ title, price, description, features }) => {
    return (
        <Card
            bordered
            className="!w-full !h-full"
            bodyStyle={{ padding: 0 }}
            headStyle={{border:"none"}}
            title={<Title level={4} className="!mb-0 !text-blue-600">{title}</Title>}
        >
            <Flex justify="space-between" align="center" className="!p-4">
                <Flex gap={8}>
                    <Title level={3} className="!m-0">{price}</Title>
                    <div>
                        <Text className="!text-xs !font-semibold block">Per agent</Text>
                        <Text className="!text-xs !font-semibold block">Per month</Text>
                    </div>
                </Flex>
                <Flex align='center'>
                    <PrimaryButton customStyle="!font-bold !px-10 !rounded-md">Select</PrimaryButton>
                </Flex>
            </Flex>

            <div className="text-center border-y py-1 mb-2 !border-gray-300">
                <Text className="!text-xs">{description}</Text>
            </div>

            <Flex vertical gap={8} className="!px-8 !py-4">
                {features.map((feature, idx) => (
                    <Flex key={idx} align="center" gap={6}>
                        {feature.available ? (
                            <CheckCircleOutlined className="!text-blue-600 text-xs" />
                        ) : (
                            <CloseCircleOutlined className="!text-red-500 text-xs" />
                        )}
                        <Text className="!text-xs !font-semibold">{feature.text}</Text>
                    </Flex>
                ))}
            </Flex>
        </Card>
    );
};

export default PlanCard;