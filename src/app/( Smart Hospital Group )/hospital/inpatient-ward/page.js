'use client'
import WardInfoContainer from '@/components/Templates/Hospital/InpatientWard/WardInfoContainer'
import WarnNotifyBar from '@/components/Templates/Hospital/InpatientWard/WarnNotifyBar'
import React from 'react'

export default function InpatientWardPage() {
    return (

        <div className='w-full flex gap-5 p-5'>

            <WarnNotifyBar />

            <WardInfoContainer />

        </div>

    )
}
