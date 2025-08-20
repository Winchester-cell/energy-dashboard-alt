import LineChart from '@/components/Modules/Charts/LineChart'
import CircularProgress from '@/components/Modules/Charts/RadialChart'
import RangeChart from '@/components/Modules/Charts/Range'
import AreaChart from '@/components/Modules/Charts/AreaChart'
import { useDevicesStore } from '@/stores/useDevicesStore'
import { processTimeSeriesDataCumulative } from '@/utils/formaters/processTimeSeriesDataCumulative'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { processAgeCountData } from '@/utils/formaters/processAgeGenderData'

export default function ChartsGrids() {

  const { t } = useTranslation()


  const { currentDevice } = useDevicesStore()
  const [areaChartData, setAreaChartData] = useState(null)
  const [rangeChartData, setRangeChartData] = useState(null)

  const { data: timeSeriesData } = useQuery({
    queryKey: ['timeSeriesReport', currentDevice],
    queryFn: () => getTimeSeriesReport(currentDevice),
    enabled: currentDevice != null,
  })

  const { data: deviceCountData } = useQuery({
    queryKey: ['deviceCount', currentDevice],
    queryFn: () => getDeviceCount(currentDevice),
    enabled: currentDevice != null,
    refetchInterval: 3000
  })

  useEffect(() => {
    if (timeSeriesData) {
      const newData = processTimeSeriesDataCumulative(timeSeriesData)
      setAreaChartData(newData)
    }
  }, [timeSeriesData])
  useEffect(() => {
    if (deviceCountData) {
      const newData = processAgeCountData(deviceCountData?.available_analytics?.age_group?.data)
      setRangeChartData(newData)
    }
  }, [deviceCountData])

  const data02 = [
    10, 15, 20, 30, 25, 10,
    35, 25, 25, 30, 25, 20
  ]

  return (
    <div className='px-5 pb-5 gap-5 grid grid-cols-1 lg:grid-cols-2'>

      <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
        {
          areaChartData !== null &&
          <AreaChart title={'آمار تجمیعی'} {...areaChartData} />
        }
      </div>
      <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
        <LineChart color={"#00e396"} title={t('common.week')} data={data02} />
      </div>

      <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
        {
          rangeChartData !== null &&
          <RangeChart {...rangeChartData} />
        }
      </div>

      <div className='flex flex-col  lg:flex-row flex-grow items-center gap-5 pe-5 w-full'>
        <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg w-full lg:w-1/2'>
          <CircularProgress title={t('common.increasePredictNextYear')} value={75} />
        </div>
        <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg w-full lg:w-1/2'>
          <CircularProgress title={t('common.increasePredictNextWeak')} value={37} />
        </div>
      </div>

    </div>
  )
}
