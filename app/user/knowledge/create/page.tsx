"use client";

import { useState, useEffect } from 'react'
import PageTitle from '@/components/ui/PageTitle';
import { Upload, Select, Switch, Form, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import InputList from '@/components/ui/InputList';
import type { SelectProps } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useQuery } from '@tanstack/react-query';
import { getPersona } from '@/app/api/user/personaService';

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
        <div className="flex flex-col bg-white">
            <PageTitle title='ADD KNOWLEDGE SOURCE' />
            <div className='px-4 py-6'>
                <Form layout="vertical">
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

                    <div className={`${isPremium ? 'visible' : 'hidden'}`}>
                        <Form.Item
                            label={
                                <p className='font-bold'>
                                    Capabilities
                                    <span className='text-xs font-semibold px-2 py-1 bg-teal-200 rounded-full mx-2'>Premium</span>
                                </p>
                            }
                        >
                            <div className='flex flex-col gap-4'>

                                {/* Web Search */}
                                <div style={{maxHeight:"65px"}}>
                                    <div className='flex items-center gap-2'>
                                        <Switch
                                            checked={enabled.isWebSearch}
                                            onChange={(checked) =>
                                                setEnabled({ ...enabled, isWebSearch: checked })
                                            }
                                        />
                                        <span className='font-bold'>Web Search</span>
                                    </div>
                                    {enabled.isWebSearch && <InputList />}
                                </div>

                                {/* Commerce & Shop */}
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <Switch
                                            checked={enabled.isEcommerceShop}
                                            onChange={(checked) =>
                                                setEnabled({ ...enabled, isEcommerceShop: checked })
                                            }
                                        />
                                        <span className='font-bold'>Commerce & Shop</span>
                                    </div>
                                    {enabled.isEcommerceShop && (
                                        <Upload {...uploadProps} className='!mt-2 block'>
                                            <Button icon={<UploadOutlined />}>Upload Shop Catalog</Button>
                                        </Upload>
                                    )}
                                </div>

                                {/* Canvas */}
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <Switch
                                            checked={enabled.isCanvas}
                                            onChange={(checked) =>
                                                setEnabled({ ...enabled, isCanvas: checked })
                                            }
                                        />
                                        <span className='font-bold'>Canvas</span>
                                    </div>
                                    {enabled.isCanvas && (
                                        <Upload {...uploadProps} className='!mt-2 block'>
                                            <Button icon={<UploadOutlined />}>Upload Canvas File</Button>
                                        </Upload>
                                    )}
                                </div>

                                {/* DALL·E Image Generation */}
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <Switch
                                            checked={enabled.isDalleImageGeneration}
                                            onChange={(checked) =>
                                                setEnabled({ ...enabled, isDalleImageGeneration: checked })
                                            }
                                        />
                                        <span className='font-bold'>DALL-E Image Generation</span>
                                    </div>
                                    {enabled.isDalleImageGeneration && (
                                        <Upload {...uploadProps} className='!mt-2 block'>
                                            <Button icon={<UploadOutlined />}>Upload Prompt CSV</Button>
                                        </Upload>
                                    )}
                                </div>

                                {/* Code Interpreter */}
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <Switch
                                            checked={enabled.isCodeInterpreter}
                                            onChange={(checked) =>
                                                setEnabled({ ...enabled, isCodeInterpreter: checked })
                                            }
                                        />
                                        <span className='font-bold'>Code Interpreter & Data Analysis</span>
                                    </div>
                                    {enabled.isCodeInterpreter && (
                                        <Upload {...uploadProps} className='!mt-2 block'>
                                            <Button icon={<UploadOutlined />}>Upload Data File</Button>
                                        </Upload>
                                    )}
                                </div>
                            </div>
                        </Form.Item>
                    </div>

                    <div className='text-center'>
                        <Button type="primary" className='!w-fit !py-3 !text-xs !font-bold !px-10'>SUBMIT</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default CreatePersona;
