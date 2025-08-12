import LineChart from '@/components/Modules/Charts/LineChart'
import CircularProgress from '@/components/Modules/Charts/RadialChart'
import RangeChart from '@/components/Modules/Charts/Range'
import AreaChart from '@/components/Modules/Charts/AreaChart'
import { useDevicesStore } from '@/stores/useDevicesStore'
import { processTimeSeriesDataCumulative } from '@/utils/processTimeSeriesDataCumulative'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'

export default function ChartsGridsss() {

  const { t } = useTranslation()


  const { currentDevice } = useDevicesStore()
  const [chartData, setChartData] = useState(null)

  const { data } = useQuery({
    queryKey: ['timeSeriesReport', currentDevice],
    queryFn: () => getTimeSeriesReport(currentDevice),
    enabled: currentDevice != null,
  })

  useEffect(() => {
    if (data) {
      const newData = processTimeSeriesDataCumulative(data)
      setChartData(newData)
    }
  }, [data])

  const data01 = [
    10, 15, 20, 40, 25, 30,
    35, 15, 10, 15, 35, 25
  ]

  const data02 = [
    10, 15, 20, 30, 25, 10,
    35, 25, 25, 30, 25, 20
  ]

  return (
    <div className='px-5 pb-5 gap-5 grid grid-cols-1 lg:grid-cols-2'>

      <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
        {
          chartData !== null &&
          <AreaChart title={'آمار تجمیعی'} {...chartData} />
        }
      </div>
      <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
        <LineChart color={"#00e396"} title={t('common.week')} data={data02} />
      </div>
      <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
        <RangeChart />
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
