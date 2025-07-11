import { Dispatch, SetStateAction } from 'react'

export interface BellNotificationProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}