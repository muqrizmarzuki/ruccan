import React, { useCallback } from 'react'
import { Typography } from 'antd';
import { BankFilled, WalletFilled } from '@ant-design/icons';

const { Text, Title } = Typography

const IconCard = ({ active, iconName, text, handleClick }) => {

    const renderIcon = useCallback((nameId: string) => {
        if (nameId === "card") return <WalletFilled className='!text-white !text-xl' />
        else if (nameId === "bank") return <BankFilled className='!text-white !text-xl' />
        else return <></>
    }, [])


    return (
        <div
            onClick={handleClick}
            className={`
                  ${active ? 'bg-blue-950' : 'bg-gray-400'} 
                  hover:bg-blue-950 transition-all ease-in-out 
                  rounded-lg p-4 max-w-[160px] cursor-pointer
                `}
        >
            {renderIcon(iconName)}
            <Text className='!text-xs !text-white !block'>{text}</Text>
        </div>
    )
}

export default IconCard