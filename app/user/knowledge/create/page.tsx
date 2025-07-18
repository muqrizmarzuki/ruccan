"use client";

import { useState, useEffect } from 'react'
import PageTitle from '@/components/ui/PageTitle';
import { Upload, Select, Switch, Form, Button, Tag, Layout, Typography, Input, Row, Col, Flex } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import InputList from '@/components/ui/InputList';
import type { SelectProps } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useQuery } from '@tanstack/react-query';
import { getPersona } from '@/app/api/user/personaService';
import AltLayout from '@/components/layout/AltLayout';

const { Title, Text } = Typography;

const CreatePersona: React.FC = () => {

    const [name, setName] = useState<string | undefined>("")
    const [isPremium, setIsPremium] = useState<boolean>(true)
    const [options, setOptions] = useState<SelectProps[] | undefined>()
    const [enabled, setEnabled] = useState({
        isWebSearch: false,
        isEcommerceShop: false,
        isCanvas: false,
        isDalleImageGeneration: false,
        isCodeInterpreter: false
    });

    const { data: personas } = useQuery({
        queryKey: ["getPersona"],
        queryFn: () => getPersona()
    })

    const uploadProps = {
        beforeUpload: (file: File) => {
            console.log('File uploaded:', file);
            return false; // Prevent automatic upload
        },
    };


    useEffect(() => {
        const latestData: SelectProps[] | undefined = personas?.map(persona => {
            return {
                label: persona.name,
                value: persona.id
            }
        })
        setOptions(latestData)
    }, [personas])

    return (
        <AltLayout header={<PageTitle backButton={true}>ADD KNOWLEDGE SOURCE</PageTitle>}>
            <Row>
                <Col span={24} className='!px-4'>
                    <Form layout="vertical">

                        <Row>
                            <Col span={24}>

                                <Form.Item label={<p className='font-bold'>Name</p>}>
                                    <Input />
                                </Form.Item>

                                <Form.Item label={<p className='font-bold'>Select Persona</p>}>
                                    <Select
                                        allowClear
                                        style={{ width: '100%' }}
                                        placeholder="Select from list ..."
                                        options={options}
                                    />
                                </Form.Item>

                                <Form.Item label={<p className='font-bold'>Description</p>}>
                                    <TextArea
                                        placeholder='Add a short description about what Persona does'
                                        style={{ padding: 10 }}
                                        rows={2}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Item>

                                <Form.Item label={<p className='font-bold'>Instruction</p>}>
                                    <TextArea
                                        placeholder='What does this Persona do?, How does it behave?, What should it avoid doing? '
                                        style={{ padding: 10 }}
                                        rows={4}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Item>

                            </Col>

                            <Col span={24} className={`${isPremium ? '!visible' : '!hidden'}`}>
                                <Form.Item
                                    label={
                                        <Title className='font-bold !text-sm'>
                                            Capabilities
                                            <Tag color="blue" className="!ms-2 font-semibold text-xs px-2 py-[2px] !rounded-full">
                                                Premium
                                            </Tag>
                                        </Title>
                                    }
                                >
                                    <Row gutter={[5, 5]}>

                                        {/* Web Search */}
                                        <Col span={24}>
                                            <Flex gap={8}>
                                                <Switch
                                                    checked={enabled.isWebSearch}
                                                    onChange={(checked) =>
                                                        setEnabled({ ...enabled, isWebSearch: checked })
                                                    }
                                                />
                                                <Text className='font-bold'>Web Search</Text>
                                            </Flex>
                                            {enabled.isWebSearch && <InputList />}
                                        </Col>

                                        {/* Commerce & Shop */}
                                        <Col span={24}>
                                            <Flex gap={8}>
                                                <Switch
                                                    checked={enabled.isEcommerceShop}
                                                    onChange={(checked) =>
                                                        setEnabled({ ...enabled, isEcommerceShop: checked })
                                                    }
                                                />
                                                <Text className='font-bold'>Commerce & Shop</Text>
                                            </Flex>
                                            {enabled.isEcommerceShop && (
                                                <Upload {...uploadProps} className='!mt-2 block'>
                                                    <Button icon={<UploadOutlined />}>Upload Shop Catalog</Button>
                                                </Upload>
                                            )}
                                        </Col>

                                        {/* Canvas */}
                                        <Col span={24}>
                                            <Flex gap={8}>
                                                <Switch
                                                    checked={enabled.isCanvas}
                                                    onChange={(checked) =>
                                                        setEnabled({ ...enabled, isCanvas: checked })
                                                    }
                                                />
                                                <Text className='font-bold'>Canvas</Text>
                                            </Flex>
                                            {enabled.isCanvas && (
                                                <Upload {...uploadProps} className='!mt-2 block'>
                                                    <Button icon={<UploadOutlined />}>Upload Canvas File</Button>
                                                </Upload>
                                            )}
                                        </Col>

                                        {/* DALL·E Image Generation */}
                                        <Col span={24}>
                                            <Flex gap={8}>
                                                <Switch
                                                    checked={enabled.isDalleImageGeneration}
                                                    onChange={(checked) =>
                                                        setEnabled({ ...enabled, isDalleImageGeneration: checked })
                                                    }
                                                />
                                                <Text className='font-bold'>DALL-E Image Generation</Text>
                                            </Flex>
                                            {enabled.isDalleImageGeneration && (
                                                <Upload {...uploadProps} className='!mt-2 block'>
                                                    <Button icon={<UploadOutlined />}>Upload Prompt CSV</Button>
                                                </Upload>
                                            )}
                                        </Col>

                                        {/* Code Interpreter */}
                                        <Col span={24}>
                                            <Flex gap={8}>
                                                <Switch
                                                    checked={enabled.isCodeInterpreter}
                                                    onChange={(checked) =>
                                                        setEnabled({ ...enabled, isCodeInterpreter: checked })
                                                    }
                                                />
                                                <Text className='font-bold'>Code Interpreter & Data Analysis</Text>
                                            </Flex>
                                            {enabled.isCodeInterpreter && (
                                                <Upload {...uploadProps} className='!mt-2 block'>
                                                    <Button icon={<UploadOutlined />}>Upload Data File</Button>
                                                </Upload>
                                            )}
                                        </Col>
                                    </Row>
                                </Form.Item>
                            </Col>

                            <Col span={24} className='!text-center'>
                                <Flex justify='center'>
                                    <Button type="primary" className='!w-fit !py-3 !text-xs !font-bold !px-10'>SUBMIT</Button>
                                </Flex>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        </AltLayout>
    )
}

export default CreatePersona;
