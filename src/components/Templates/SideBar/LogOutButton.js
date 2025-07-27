import logoutUser from '@/axios/requests/auth/logoutUser';
import { useAuthStore } from '@/stores/useAuthStore';
import useSideBarStore from '@/stores/useSideBarStore';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import { IoMdLogOut } from "react-icons/io";

export default function LogOutButton() {

    const { isSideBarCollapsed } = useSideBarStore()
    
    const logoutHandler = async () => {
        const logoutResult = await logoutUser()
        if (logoutResult.isOk) {
            redirect('/login')
        } else {
            alert('مشکلی در خروج رخ داد');
        }
    }

    return (
        <button onClick={logoutHandler} className={`flex ${isSideBarCollapsed ? `w-full justify-center` : ``} items-center gap-1 text-[var(--colTextA)] btnHover mb-5`}>
            <IoMdLogOut className='w-8 h-8' />
            {
                !isSideBarCollapsed &&
                <span className='text-lg'>خروج</span>
            }
        </button>
    )
}
