import React from 'react'
import { Flex, Layout, Row, Col } from 'antd';
import Navigation from '@/components/layout/Navigation'

type AltLayoutProps = {
    header?: React.ReactNode,
    children?: React.ReactNode,
    footer?: React.ReactNode
}

const AltLayout: React.FC<AltLayoutProps> = ({ header = <></>, children = <></>, footer =<Navigation /> }:AltLayoutProps) => {
    return (
        <Layout className="!w-full !max-w-[430px] !mx-auto !relative !bg-white">
            <Flex vertical className='!h-screen'>
                <Row>
                    <Col span={24}>
                        {header}
                    </Col>
                </Row>
                <Row className='flex-1 overflow-y-scroll overflow-x-hidden'>
                    <Col span={24}>
                        <Flex vertical className="!bg-white">
                            {/* Chat messages */}
                            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                                {children}
                            </div>

                        </Flex>
                    </Col>
                </Row>
                <div>
                    {footer}
                </div>
            </Flex>
        </Layout>
    )
}

export default AltLayout