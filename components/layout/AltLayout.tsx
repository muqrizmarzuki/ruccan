import React from 'react';
import { Flex, Layout, Row, Col } from 'antd';
import Navigation from '@/components/layout/Navigation';

// This layout component is an alternative layout for Next.js routes 
// where the default layout from app/layout.tsx is intentionally skipped.
// It is useful when you define certain paths to avoid the global layout (e.g., login pages, special full-screen pages).

type AltLayoutProps = {
    header?: React.ReactNode;    // Optional header component
    children?: React.ReactNode;  // Main content of the page
    footer?: React.ReactNode;    // Optional footer component (defaults to <Navigation />)
};

// Functional component definition with default props set
const AltLayout: React.FC<AltLayoutProps> = ({
    header = <></>,              // Empty fragment by default if no header passed
    children = <></>,            // Empty fragment by default if no children passed
    footer = <Navigation />      // Defaults to Navigation if no footer is passed
}: AltLayoutProps) => {
    return (
        // Top-level Layout from Ant Design
        <Layout className="!w-full !max-w-[430px] !mx-auto !relative !bg-white">
            {/* Full vertical height flex container */}
            <Flex vertical className="!h-screen">

                {/* Header Row (if provided) */}
                <Row>
                    <Col span={24}>
                        {header}
                    </Col>
                </Row>

                {/* Content Row: grows to take available space, scrollable vertically only */}
                <Row className="flex-1 overflow-y-scroll overflow-x-hidden">
                    <Col span={24}>
                        <Flex vertical className="!bg-white">
                            {/* Content wrapper - handles chat body or main content scroll */}
                            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                                {children}
                            </div>
                        </Flex>
                    </Col>
                </Row>

                {/* Footer section - typically bottom navigation */}
                <div>
                    {footer}
                </div>

            </Flex>
        </Layout>
    );
};

export default AltLayout;
