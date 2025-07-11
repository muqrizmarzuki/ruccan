import { Dispatch, SetStateAction } from 'react'

export interface SidebarProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}