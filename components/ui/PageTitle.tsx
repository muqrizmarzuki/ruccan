import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography;

type PageTitleProps = {
    title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    return (
        <div className='bg-[#480066] flex justify-center py-3'>
            <Title level={4} style={{margin:0, color:"white"}}>
                {title}
            </Title>

        </div>
    )
}

export default PageTitle