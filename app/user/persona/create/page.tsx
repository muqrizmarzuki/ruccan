"use client";

import { useState, useEffect } from 'react'
import PageTitle from '@/components/ui/PageTitle';
import { Input, Typography, Select, Switch, Upload, Form, Button, Tag, Col, Row, Flex } from 'antd'
import AltLayout from '@/components/layout/AltLayout';
import { UploadOutlined } from '@ant-design/icons';
import type { SelectProps } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useQuery } from '@tanstack/react-query';
import { getPersonaStyle } from '@/app/api/user/personaService';
import type { RcFile } from 'antd/es/upload';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const { Text, Title } = Typography

const CreatePersona: React.FC = () => {

    const [name, setName] = useState<string | undefined>("")
    const [phone, setPhone] = useState('');
    const [options, setOptions] = useState<SelectProps[] | undefined>()
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [fileList, setFileList] = useState<any[]>([]);
    const [enabled, setEnabled] = useState({
        isManualKnowledgeEntry: false,
        isUploadTextDocument: false,
        isImportWebLink: false,
        isDallEImageGen: false,
        isSOPAutoLearn: false
    });

    const { data: personaStyleList, error, isLoading } = useQuery({
        queryKey: ["personaStyle"],
        queryFn: () => getPersonaStyle()
    })

    useEffect(() => {

        const latestData: SelectProps[] | undefined = personaStyleList?.map(persona => {
            return {
                label: persona.name,
                value: persona.id
            }
        })

        setOptions(latestData)

    }, [personaStyleList])

    const handleBeforeUpload = (file: RcFile) => {
        const isImage = file.type.startsWith('image/');
        if (!isImage) {
            // message.error('Only image files are allowed!');
        }

        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            //message.error('Image must be smaller than 2MB!');
        }

        if (isImage && isLt2M) {
            const reader = new FileReader();
            reader.onload = () => setImageUrl(reader.result as string);
            reader.readAsDataURL(file);
        }

        // prevent automatic upload
        return false;
    };

    return (
        <AltLayout header={<PageTitle backButton={true}>Create Persona</PageTitle>}>
            <Row className='px-4'>
                <Col span={24}>
                    <Form layout="vertical">
                        <Form.Item label={<p className='font-bold'>Persona Name</p>}>
                            <Input
                                style={{ padding: 10 }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item label={<p className='font-bold'>Avatar Upload</p>}>
                            <Upload
                                beforeUpload={handleBeforeUpload}
                                fileList={fileList}
                                onRemove={() => {
                                    setFileList([]);
                                    setImageUrl(null);
                                }}
                                onChange={({ fileList }) => setFileList(fileList)}
                                maxCount={1}
                                accept="image/*"
                                listType="picture"
                            >
                                <button className='border border-gray-300 px-4 py-2 rounded hover:bg-gray-50'>
                                    <UploadOutlined /> Click to Upload
                                </button>
                            </Upload>
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt="Uploaded Preview"
                                    className="mt-2 w-32 h-32 object-cover border rounded"
                                />
                            )}
                        </Form.Item>

                        <Form.Item label={<p className='font-bold'>Role / Department</p>}>
                            <Input
                                style={{ padding: 10 }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item label={<p className='font-bold'>Description</p>}>
                            <TextArea
                                style={{ padding: 10 }}
                                rows={6}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item label={<p className='font-bold'>Persona Style</p>}>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                options={options}
                            />
                        </Form.Item>

                        <Form.Item label={<p className='font-bold'>Greeting Message</p>}>
                            <TextArea
                                style={{ padding: 10 }}
                                rows={3}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item label={<p className='font-bold'>Persona Training Center</p>}>
                            <Flex vertical gap={10}>
                                <Flex gap={10}>
                                    <Switch
                                        checked={enabled.isManualKnowledgeEntry}
                                        onChange={(checked) =>
                                            setEnabled({ ...enabled, isManualKnowledgeEntry: checked })
                                        }
                                    />
                                    <Text className='font-bold'>Manual Knowledge Entry</Text>
                                </Flex>
                                <Flex gap={10}>
                                    <Switch
                                        checked={enabled.isUploadTextDocument}
                                        onChange={(checked) =>
                                            setEnabled({ ...enabled, isUploadTextDocument: checked })
                                        }
                                    />
                                    <Text className='font-bold'>Upload Text Document</Text>
                                </Flex>
                                <Flex gap={10}>
                                    <Switch
                                        checked={enabled.isImportWebLink}
                                        onChange={(checked) =>
                                            setEnabled({ ...enabled, isImportWebLink: checked })
                                        }
                                    />
                                    <Text className="font-bold">
                                        Import from Web Link{' '}
                                        <Tag color="blue" className="font-semibold text-xs px-2 py-[2px] !rounded-full">
                                            Premium
                                        </Tag>
                                    </Text>
                                </Flex>
                                <Flex gap={10}>
                                    <Switch
                                        checked={enabled.isDallEImageGen}
                                        onChange={(checked) =>
                                            setEnabled({ ...enabled, isDallEImageGen: checked })
                                        }
                                    />
                                    <Text className="font-bold">
                                        DALL-E Image Generation{' '}
                                        <Tag color="blue" className="font-semibold text-xs px-2 py-[2px] !rounded-full">
                                            Premium
                                        </Tag>
                                    </Text>
                                </Flex>
                                <Flex gap={10}>
                                    <Switch
                                        checked={enabled.isSOPAutoLearn}
                                        onChange={(checked) =>
                                            setEnabled({ ...enabled, isSOPAutoLearn: checked })
                                        }
                                    />
                                    <Text className="font-bold">
                                        Enable SOP Auto-Learning{' '}
                                        <Tag color="blue" className="font-semibold text-xs px-2 py-[2px] !rounded-full">
                                            Premium
                                        </Tag>
                                    </Text>
                                </Flex>
                            </Flex>
                        </Form.Item>

                        <Form.Item label={<p className='font-bold'>Assign Whatsapp Line</p>}>
                            <PhoneInput
                                country={'my'} // default country
                                value={phone}
                                onChange={(phone, countryData) => {
                                    setPhone(phone);
                                    console.log("Phone Number:", phone);
                                    console.log("Country Info:", countryData);
                                }}
                                enableSearch
                                preferredCountries={['my', 'sg', 'id']}
                                inputStyle={{ width: '100%' }}
                                containerStyle={{ width: '100%' }}
                            />
                        </Form.Item>

                        <Row >
                            <Col span={24} className='!text-center'>
                                <Button type="primary" className='!w-fit !py-3 !text-xs !font-bold !px-10'>CREATE PERSONA</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </AltLayout>
    )
}

export default CreatePersona