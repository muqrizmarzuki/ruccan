'use client';

import React from 'react';
import PageTitle from '@/components/ui/PageTitle';
import {
    EyeOutlined,
    EditOutlined,
    SortAscendingOutlined,
    PlusCircleFilled
} from '@ant-design/icons';
import type { Knowledge } from '@/types/knowledge';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { Flex, Row, Col, Tag, Button, Table, Layout, Image, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getAllKnowledge } from '@/app/api/user/knowledgeService';

const { Text, Title } = Typography;

const columns: ColumnsType<Knowledge> = [
    {
        title: (
            <Text className="flex items-center gap-1">
                Knowledge Source <SortAscendingOutlined className="text-xs text-gray-400" />
            </Text>
        ),
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: (
            <Text className="flex items-center gap-1">
                AI Persona <SortAscendingOutlined className="text-xs text-gray-400" />
            </Text>
        ),
        dataIndex: 'personas',
        key: 'personas',
        render: (_: any, record: Knowledge) => {
            if (!record.personas?.length) return '-';

            return (
                <Flex wrap>
                    {record.personas.map((persona) => (
                        <Tag key={persona.id} color="blue">
                            {persona.name}
                        </Tag>
                    ))}
                </Flex>
            );
        },
    },
    {
        title: 'Action',
        key: 'action',
        align: 'center' as const,
        render: (_: any, record: Knowledge) => (
            <Flex justify="center">
                <Button type="text" icon={<EditOutlined />} />
                <Button type="text" icon={<EyeOutlined />} />
            </Flex>
        ),
    },
]

const Knowledge: React.FC = () => {

    const { data: knowledges, error, isLoading } = useQuery<Knowledge[]>({
        queryKey: ["getAllKnowledge"],
        queryFn: () => getAllKnowledge()
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!knowledges) {
        return <p></p>
    }

    return (
        <main className="flex flex-col bg-white h-full">
            <PageTitle>KNOWLEDGE SOURCES</PageTitle>
            {knowledges.length > 0 ? <KnowledgeList knowledgeData={knowledges} /> : <EmptyKnowledgeIntro />}
        </main>
    );
};

const EmptyKnowledgeIntro: React.FC = () => {

    const router = useRouter();

    return (
        <Flex vertical flex={1} justify="center" align="center">
            <Row justify="center" style={{ width: '100%', padding: '0 24px' }}>
                <Col xs={24} sm={20} md={16} lg={12} xl={8}>
                    <Flex
                        vertical
                        align="center"
                        className="!text-center"
                        style={{
                            border: '2px solid #06b6d4', // cyan-500
                            borderRadius: 12,
                            padding: '40px 24px',
                            boxShadow: '0 10px 100px 30px rgba(59, 130, 246, 0.3)',
                            background: '#fff',
                        }}
                    >
                        <Title level={5} style={{ color: '#1f2937', marginBottom: 8 }}>
                            NO SOURCE ADDED YET
                        </Title>

                        <Text type="secondary" style={{ marginBottom: 24 }}>
                            Get started by adding your first knowledge source
                        </Text>

                        <Image
                            src="/ruccan_logo2.png"
                            alt="Ruccan Logo"
                            width={150}
                            preview={false}
                            style={{ marginBottom: 24 }}
                        />

                        <PrimaryButton onClick={()=>{router.push("/user/knowledge/create")}}>
                            ADD FIRST SOURCE
                        </PrimaryButton>
                    </Flex>
                </Col>
            </Row>
        </Flex>
    );
};

interface KnowledgeListProps {
    knowledgeData: Knowledge[] | undefined;
}

const KnowledgeList: React.FC<KnowledgeListProps> = ({ knowledgeData }) => {

    const router = useRouter();

    return (
        <Layout className="!overflow-x-auto">
            <Flex className='!px-2 !py-4 !justify-end'>
                <PrimaryButton onClick={() => { router.push('knowledge/create') }}>
                    <PlusCircleFilled /> Add Source
                </PrimaryButton>
            </Flex>
            <Table
                className="[&_.ant-table-cell]:!p-2"
                rowKey="id"
                columns={columns}
                dataSource={knowledgeData}
                pagination={false}
                bordered
            />
        </Layout>
    );
};

export default Knowledge;
