import { getUserInfo } from '@/axios/requests/account/users/getUserInfo'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export default function PatientInfoCard(props) {

    const { data: userData } = useQuery({
        queryKey: ['user', props.user],
        queryFn: () => getUserInfo(props.user)
    })

    useEffect(() => {

        console.log(userData);

    }, [userData])

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className={`p-5 ${style.cardStyleB} shadow-lg rounded-2xl gap-5 grid grid-cols-8 cursor-pointer hover:py-7 transition-all duration-500`}>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{toPersianDigits(props.index + 1)}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{userData?.first_name} {userData?.last_name}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{toPersianDigits(props.national_id)}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>---</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>---</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>---</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>---</div>
            <div>---</div>
        </div >
    )
}
