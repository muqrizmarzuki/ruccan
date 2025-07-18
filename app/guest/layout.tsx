'use client'

import React from 'react'
import { Layout, Flex } from 'antd'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="!w-full !max-w-[430px] !mx-auto !relative overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-sm scale-105"
        style={{
          backgroundImage: "url('/ruccan_bg.jpg')", // Change this to your image path
        }}
      />

      {/* Foreground Content */}
      <Flex
        vertical
        style={{ minHeight: "100vh" }}
        align="center"
        justify="center"
        className="relative z-10 !bg-gray-50/60 backdrop-blur-md !px-2 !py-10"
      >
        {children}
      </Flex>
    </Layout>
  );
}

export default AppLayout;
