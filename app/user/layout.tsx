'use client'

import React from 'react'
import { Layout, Flex, Row, Col } from 'antd'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import { usePathname } from 'next/navigation'


const AppLayout = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname()

  const skipLayoutPrefixes = [
    '/user/chat/',
    '/user/persona/create',
    '/user/knowledge/create',
    '/user/settings/profile',
    '/user/payment',
    '/user/payment',
    '/user/pricing'
  ];

  const shouldSkipLayout = skipLayoutPrefixes.some(prefix =>
    pathname.startsWith(prefix)
  );

  if (shouldSkipLayout) {
    return <>{children}</>;
  }

  return (
    <Layout className="!w-full !max-w-[430px] !mx-auto !relative !bg-white">
      <Flex vertical className='!h-screen'>
        <Row>
          <Col span={24}>
            <Header />
          </Col>
        </Row>

        <Row className='flex-1 overflow-y-scroll overflow-x-hidden'>
          <Col span={24}>{children}</Col>
        </Row>

        <div>
          <Navigation />
        </div>
      </Flex>
    </Layout>
  );
}

export default AppLayout;
