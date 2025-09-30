import DeviceIdleCard from '@/components/Modules/Cards/HospitalCards/DeviceIdleCard'
import SearchInput from '@/components/Modules/Inputs/SearchInput'
import { hospitalDevices } from '@/data/fakeData'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'
import SimpleBar from 'simplebar-react'

export default function DevicesIdleSection() {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <>
            <h2 className='font-bold text-[20px] my-5'>مانتورینگ دستگاها و ساعات بیکاری</h2>
            <div className={`${style.cardStyleA} rounded-3xl shadow-lg w-full p-5`}>
                <div>
                    <SearchInput />
                </div>
                <div className={`${style.cardStyleD} rounded-3xl mt-5`}>
                    <SimpleBar className='mt-5' style={{ height: 295 }}>
                        <div className='p-5 rounded-xl grid grid-cols-3 gap-5'>
                            {hospitalDevices.map(dev => <DeviceIdleCard  color={'#008ffb'} key={dev.id} {...dev} />)}
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </>
    )
}
