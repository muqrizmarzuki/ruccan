'use client';

import React, { useEffect, useState } from 'react';
import PageTitle from '@/components/ui/PageTitle';
import {
    EyeOutlined,
    EditOutlined,
    SortAscendingOutlined,
    PlusCircleFilled
} from '@ant-design/icons';
import type { Persona } from '@/types/persona';
import { getPersona } from '@/app/api/user/personaService';
import { useQuery } from '@tanstack/react-query';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { Flex, Row, Col, Tag, Button, Table, Layout, Image, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useRouter } from 'next/navigation';

const {Text, Title} = Typography;

const columns: ColumnsType<Persona> = [
    {
        title: (
            <Text className="flex items-center gap-1">
                Name <SortAscendingOutlined className="text-xs text-gray-400" />
            </Text>
        ),
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: (
            <Text className="flex items-center gap-1">
                Role <SortAscendingOutlined className="text-xs text-gray-400" />
            </Text>
        ),
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: (
            <Text className="flex items-center gap-1">
                Status <SortAscendingOutlined className="text-xs text-gray-400" />
            </Text>
        ),
        dataIndex: 'active',
        key: 'status',
        align: 'center' as const,
        render: (active: boolean) => (
            <Tag color={active ? 'green' : 'orange'} className="!rounded-full">
                {active ? 'Active' : 'Inactive'}
            </Tag>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        align: 'center' as const,
        render: (_: any, record: Persona) => (
            <Flex justify="center">
                <Button type="text" icon={<EditOutlined />} />
                <Button type="text" icon={<EyeOutlined />} />
            </Flex>
        ),
    },
];


const PersonaPage: React.FC = () => {


    const { data: personas, error, isLoading } = useQuery<Persona[]>({
        queryKey: ["getPersona"],
        queryFn: () => getPersona()
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!personas) {
        return <p></p>
    }

    return (
        <Flex vertical className="!bg-white !h-full">
            <PageTitle>PERSONA</PageTitle>
            {(personas.length > 0) ? <PersonaList personaData={personas} /> : <PersonaIntro />}
        </Flex>
    );
};

const PersonaIntro: React.FC = () => {

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
                            borderRadius: '12px',
                            padding: '40px 24px',
                            boxShadow: '0 10px 100px 30px rgba(59, 130, 246, 0.3)',
                            background: 'white',
                        }}
                    >
                        <Title level={5} style={{ marginBottom: 8, color: '#1f2937' }}>NO PERSONA CREATED YET</Title>
                        <Text type="secondary" style={{ marginBottom: 24 }}>
                            Get started by creating your first AI Persona
                        </Text>

                        <Image
                            src="/Ruccan_Logo2.png"
                            alt="Ruccan Logo"
                            width={150}
                            preview={false}
                            style={{ marginBottom: 24 }}
                        />

                        <PrimaryButton onClick={() => router.push('/user/persona/create')}>
                            CREATE YOUR FIRST PERSONA
                        </PrimaryButton>
                    </Flex>
                </Col>
            </Row>
        </Flex>
    )
}
interface PersonaListProps {
    personaData: Persona[] | undefined;
}

const PersonaList: React.FC<PersonaListProps> = ({ personaData }) => {

    const router = useRouter();

    return (
        <Layout className="!overflow-x-auto">
            <Flex className='!px-2 !py-4 !justify-end'>
                <PrimaryButton onClick={() => { router.push('persona/create') }}>
                    <PlusCircleFilled /> Create New Persona
                </PrimaryButton>
            </Flex>

            <Table
                className="[&_.ant-table-cell]:!p-2"
                rowKey="id"
                columns={columns}
                dataSource={personaData}
                pagination={false}
                bordered
            />
        </Layout>
    );
};

export default PersonaPage;
