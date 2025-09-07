import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { FaBedPulse } from "react-icons/fa6";

import React from 'react'

export default function BedsInfoCard({ bedNumber, patient }) {

  let cardColor = null
  if (patient.status === 'مستقر') {
    cardColor = 'bg-[#35de732d]'
  } else if (patient.status === 'بحرانی') {
    cardColor = 'bg-[#de35353c]'
  } else {
    cardColor = 'bg-[#ffffff1f]'
  }

  return (
    <div className={`p-5 rounded-xl ${cardColor} glass-card-no-bg w-full flex items-center justify-center gap-5`}>
      <FaBedPulse className='text-4xl'/>
      <div className='flex flex-col items-center'>
        <div className='text-[12px] text-[#ebebeb]'>تخت شماره {toPersianDigits(bedNumber)}</div>
        <div>{patient.name}</div>
      </div>
    </div>
  )
}
