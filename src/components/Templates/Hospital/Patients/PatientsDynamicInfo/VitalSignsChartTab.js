import AreaChart from '@/components/Modules/Charts/AreaChart'
import React from 'react'

export default function VitalSignsChartTab() {

  const categories = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00']
  const heartbeatSeries = [
    { name: '', data: [68, 72, 75, 78, 74, 70, 72] },
  ]
  const bodyTempSeries = [
    { name: '', data: [36.5, 36.7, 36.8, 37, 36.9, 36.7, 36.8] },
  ]
  const oxygenPercentSeries = [
    { name: '', data: [97, 98, 99, 98, 97, 96, 98] },
  ]

  return (
    <>
      <div style={{boxShadow:`2px 2px 4px #f580bd`}} className='glass-card rounded-3xl p-5'>

        <h2 className='font-bold text-lg'>ضربان قلب ( ۲۴ ساعت گذشته )</h2>

        <div className='h-[400px]'>
          <AreaChart yMin={60} colors={["#D58CD4"]} categories={categories} series={heartbeatSeries} />
        </div>


      </div>

      <div style={{boxShadow:`2px 2px 4px #00e396`}} className='glass-card rounded-3xl p-5 mt-5'>

        <h2 className='font-bold text-lg'>دمای بدن ( ۲۴ ساعت گذشته )</h2>

        <div className='h-[400px]'>
          <AreaChart yMin={30} colors={["#00e396"]} categories={categories} series={bodyTempSeries} />
        </div>


      </div>

      <div style={{boxShadow:`2px 2px 4px #008ffb`}} className='glass-card rounded-3xl p-5 mt-5'>

        <h2 className='font-bold text-lg'> اکسیژن خون ( ۲۴ ساعت گذشته )</h2>

        <div className='h-[400px]'>
          <AreaChart yMin={70} colors={["#008ffb"]} categories={categories} series={oxygenPercentSeries} />
        </div>


      </div>
    </>
  )
}
