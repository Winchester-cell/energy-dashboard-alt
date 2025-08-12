import { getDeviceCount } from '@/axios/requests/devices/getDeviceCount'
import CountInfoCard from '@/components/Modules/Cards/CountInfoCard'
import peopleCountSectionContent from '@/content/peopleCountSectionContent'
import { useDevicesStore } from '@/stores/useDevicesStore'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function PeopleCountSection() {

  const { currentDevice } = useDevicesStore()
  const { data, isLoading } = useQuery({
    queryKey: ['deviceCount', currentDevice],
    queryFn: () => getDeviceCount(currentDevice),
    enabled: currentDevice != null,
    refetchInterval: 3000
  })

  return (
    <div className='w-full flex flex-col lg:flex-row gap-5'>
      <CountInfoCard title={'افراد وارد شده'} count={data?.live_stats.total_in_today} isLoading={isLoading} />
      <CountInfoCard title={'افراد خارج شده'} count={data?.live_stats.total_out_today} isLoading={isLoading} />
      {/* {
        peopleCountSectionContent.cards.map((item, index) => {
          return <CountInfoCard key={index} {...item} />
        })
      } */}
    </div>
  )
}
