import React from 'react';
import { Typography, Flex, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

type PageTitleProps = {
    children?: React.ReactNode;
    position?: 'left' | 'center' | 'right';
    backButton?: boolean;
};

const PageTitle: React.FC<PageTitleProps> = ({
    children = <></>,
    position = 'center',
    backButton = false,
}) => {
    const router = useRouter();

    const justifyMap: Record<string, 'flex-start' | 'center' | 'flex-end'> = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end',
    };

    return (
        <Flex
            align="center"
            justify="space-between"
            className="!bg-[#602FD0] !py-3 !px-5"
        >
            {/* Back Button */}
            {backButton ? (
                <Button
                    type="text"
                    icon={<FontAwesomeIcon icon={faArrowLeft} />}
                    onClick={() => router.back()}
                    style={{ fontSize: 20 }}
                className="!text-white"
                />
            ) : (
                <div style={{ width: 40 }} /> // Placeholder to keep spacing
            )}

            {/* Title */}
            <Flex style={{ flex: 1 }} justify={justifyMap[position]}>
                <Title level={4} style={{ margin: 0, color: 'white' }}>
                    {children}
                </Title>
            </Flex>

            {/* Right Spacer to balance layout */}
            <div style={{ width: 40 }} />
        </Flex>
    );
};

export default PageTitle;
