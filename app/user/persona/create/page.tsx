"use client";

import { useState, useEffect } from 'react'
import PageTitle from '@/components/ui/PageTitle';
import { Input, Typography, Select, Switch, Upload, Form, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import type { SelectProps } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useQuery } from '@tanstack/react-query';
import { getPersonaStyle } from '@/app/api/user/personaService';
import type { RcFile } from 'antd/es/upload';


const CreatePersona: React.FC = () => {


    const [name, setName] = useState<string | undefined>("")
    const [options, setOptions] = useState<SelectProps[] | undefined>()
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [fileList, setFileList] = useState<any[]>([]);
    const [enabled, setEnabled] = useState({
        isManualKnowledgeEntry: false,
        isUploadTextDocument: false,
        isImportWebLink: false,
        isCodeInterpreter: false
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
        <div className="flex flex-col bg-white">
            <PageTitle title='CREATE PERSONA' />
            <div className='px-4 py-6'>
                <Form layout="vertical">
                    <Form.Item label="Profile Name">
                        <Input
                            style={{ padding: 10 }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Persona Image">
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

                    <Form.Item label="Role / Department">
                        <Input
                            style={{ padding: 10 }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Description">
                        <TextArea
                            style={{ padding: 10 }}
                            rows={6}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Persona Style">
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            options={options}
                        />
                    </Form.Item>

                    <Form.Item label="Greeting Message">
                        <TextArea
                            style={{ padding: 10 }}
                            rows={3}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Persona Training Center">
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <Switch
                                    checked={enabled.isManualKnowledgeEntry}
                                    onChange={(checked) =>
                                        setEnabled({ ...enabled, isManualKnowledgeEntry: checked })
                                    }
                                />
                                <span className='font-bold'>Manual Knowledge Entry</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Switch
                                    checked={enabled.isUploadTextDocument}
                                    onChange={(checked) =>
                                        setEnabled({ ...enabled, isUploadTextDocument: checked })
                                    }
                                />
                                <span className='font-bold'>Upload Text Document</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Switch
                                    checked={enabled.isImportWebLink}
                                    onChange={(checked) =>
                                        setEnabled({ ...enabled, isImportWebLink: checked })
                                    }
                                />
                                <span className='font-bold'>Import from Web Link</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Switch
                                    checked={enabled.isCodeInterpreter}
                                    onChange={(checked) =>
                                        setEnabled({ ...enabled, isCodeInterpreter: checked })
                                    }
                                />
                                <span className='font-bold'>Code Interpreter & Data Analysis</span>
                            </div>
                        </div>
                    </Form.Item>
                    <div className='text-center'>
                        <Button type="primary" className='!w-fit !py-3 !text-xs !font-bold !px-10'>SUBMIT</Button>
                    </div>
                </Form>
            </div>
        </div>

    )
}

export default CreatePersona