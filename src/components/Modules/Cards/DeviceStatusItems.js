import { useDevicesStore } from '@/stores/useDevicesStore'
import { toPersianDigits } from '@/utils/toPersianDigits'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function DeviceStatusItems({ id, name }) {

    const { t } = useTranslation()
    const { setCurrentDevice , currentDevice } = useDevicesStore()
    const clickHandler = () => {
        setCurrentDevice(id)
    }

    return (
        <div onClick={() => clickHandler()} className={`${currentDevice === id ? `border-2` : ``} w-full flex justify-between bg-[var(--colBg)] rounded-lg px-3 py-5 cursor-pointer`}>

            <div className='flex flex-col gap-2'>
                <div className='font-semibold'>{name}</div>
                {/* <div>{t('deviceStatusCard.countToday')}</div> */}
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='rounded-full bg-green-200 flex items-center gap-2 p-1 w-fit text-zinc-800 font-semibold'> <div className='w-3 h-3 bg-green-500 rounded-full' /> </div>
                {/* <div>{toPersianDigits(200)}</div> */}
            </div>

        </div>
    )
}
