'use client';

import React from 'react';
import { Button } from 'antd';
import { useThemeToken } from '@/hooks/useThemeToken';
import classNames from 'classnames';

type PrimaryButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
    customStyle?: string;
    outline?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    onClick = () => { },
    children,
    customStyle = '',
    outline = false,
}: PrimaryButtonProps) => {

    const token = useThemeToken();

    const baseClasses = 'mt-2 !rounded-full !px-6 !py-4';
    const filledClasses = '!border-0 !bg-[#602FD0] !text-[#fff] hover:!bg-[#271550]';
    const outlineClasses = '!border !bg-[#fff] !text-[#602FD0] hover:!bg-[#602FD0] hover:!text-[#fff]';

    return (
        <Button
            size="small"
            className={classNames(
                baseClasses,
                outline ? outlineClasses : filledClasses,
                customStyle
            )}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
