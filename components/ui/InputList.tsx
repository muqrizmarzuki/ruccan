import React from 'react';
import { Input, Form, Button, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const InputList: React.FC = () => {
  return (
    <div className='mt-2'>
      <Form.List name="weblinks">
        {(fields, { add, remove }) => (
          <Space direction="vertical" style={{ width: '100%' }}>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} align="baseline" style={{ width: '100%' }}>
                <Form.Item
                  {...restField}
                  name={[name, 'first']}
                  rules={[{ required: true, message: 'Missing link' }]}
                  style={{ flex: 1 }}
                >
                  <Input placeholder="https://example.com/faq" />
                </Form.Item>
                <DeleteOutlined
                  className='!text-red-500'
                  onClick={() => remove(name)}
                />
              </Space>
            ))}

            {fields.length < 5 && (
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            )}
          </Space>
        )}
      </Form.List>
    </div>
  );
};

export default InputList;
