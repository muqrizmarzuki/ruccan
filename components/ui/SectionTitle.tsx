import React from 'react'
import { Typography, Divider } from 'antd';
const { Title } = Typography;

type SectionTitleProps = {
    title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className='relative bg-black'>
            <Divider />
            <Title
                level={5}
                className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-2 text-white"
                style={{ margin: 0 }}
            >
                {title}
            </Title>
        </div>
    )
}

export default SectionTitle