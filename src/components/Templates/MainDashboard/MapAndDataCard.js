import useDevices from '@/stores/deviceStore';
import dynamic from 'next/dynamic';
import React from 'react'
import DeviceDataCard from './DeviceData';
import AreaChart from '@/components/module/Charts/AreaChart';
import RangeChart from '@/components/module/Charts/Range';

import useRealtimeCumulative from '@/hooks/useRealtimeCumulative';
const MapView = dynamic(() => import('@/components/module/Maps/MapView'), {
  ssr: false,
});

export default function MapAndDataCard() {

  const { devices, selectedDevice, setSelectedDevice } = useDevices()
  const { realTimeCumulative } = useRealtimeCumulative(selectedDevice.id)


  return (
    <div className='px-5'>

      <div className='flex lg:flex-row flex-col gap-5 mb-3 w-full'>

        <div className='w-full flex flex-col gap-5'>

          <div className='w-full h-[60dvh] lg:h-[70dvh]'>
            <MapView
              type={'monitoring'}
              devices={devices}
              selectedDevice={selectedDevice}
              setSelectedDevice={setSelectedDevice}
            />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='h-[clamp(300px,17dvw,400px)] bg-[var(--colCard)] rounded-xl shadow-md p-3'>
              {
                realTimeCumulative && (
                  <AreaChart labelSize={8} data={realTimeCumulative} />
                )
              }
            </div>
            <div className='h-[clamp(300px,17dvw,400px)] bg-[var(--colCard)] rounded-xl shadow-md p-3'>
              <RangeChart />
            </div>
          </div>

        </div>

        <DeviceDataCard selectedDevice={selectedDevice} />

      </div>

    </div>
  )
}
