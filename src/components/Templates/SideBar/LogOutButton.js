import logoutUser from '@/axios/requests/auth/logoutUser';
import { colorVariantSelector } from '@/data/themeVariants';
import { useAuthStore } from '@/stores/useAuthStore';
import useSideBarStore from '@/stores/useSideBarStore';
import { redirect, usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import { IoMdLogOut } from "react-icons/io";

export default function LogOutButton() {

    const { isSideBarCollapsed } = useSideBarStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname)

    const logoutHandler = async () => {
        const logoutResult = await logoutUser()
        if (logoutResult.isOk) {
            redirect('/login')
        } else {
            alert('مشکلی در خروج رخ داد');
        }
    }

    return (
        <button onClick={logoutHandler} className={`flex ${style.hoverStyle} ${isSideBarCollapsed ? `w-full justify-center` : ``} items-center gap-1 linkHover mb-5`}>
            <IoMdLogOut className='w-8 h-8' />
            {
                !isSideBarCollapsed &&
                <span className='text-lg'>خروج</span>
            }
        </button>
    )
}
