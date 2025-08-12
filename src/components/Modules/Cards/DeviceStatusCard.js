import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import DeviceStatusItems from './DeviceStatusItems'
import SimpleBar from 'simplebar-react'
import { useQuery } from '@tanstack/react-query'
import { getDevices } from '@/axios/requests/devices/getDevices'
import { useDevicesStore } from '@/stores/useDevicesStore'

export default function DeviceStatusCard() {

    const { t } = useTranslation()
    const { setCurrentDevice } = useDevicesStore()

    const { data } = useQuery({
        queryKey: ['devices'],
        queryFn: getDevices,
        refetchInterval: 3000,
    })

    useEffect(() => {
        if (data?.results) {
            setCurrentDevice(data.results[0].id)
        }
    }, [data])

    return (
        <div className='w-full lg:w-1/2 h-full px-3 py-5 bg-[var(--colCard)] shadow-md rounded-xl text-[var(--colTextA)] flex flex-col gap-2'>

            <h2 className='font-bold'>{t('deviceStatusCard.deviceStatus')}</h2>
            <SimpleBar style={{ maxHeight: '90%' }} >
                <div className='flex flex-col gap-2 p-2'>
                    {
                        data?.results?.map((item, index) => {
                            return <DeviceStatusItems key={index} {...item} />
                        })
                    }
                </div>
            </SimpleBar>

        </div>
    )
}
