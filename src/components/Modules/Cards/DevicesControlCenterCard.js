import React from 'react'
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import Link from 'next/link';

export default function DevicesControlCenterCard(props) {

    let color = ''
    let bgColor = ''

    if (props.status === "در حال کار") {
        color = '#6ed4b2'
        bgColor = '#9bf1d5'
    } else if (props.status === "متوقف (خرابی)") {
        color = '#ef4444'
        bgColor = '#fef2f2'
    } else {
        color = '#f6a317'
        bgColor = '#fefce8'
    }

    return (
        <Link className='block' href={'/control-center/demo-device'}>
            <div style={{ borderColor: color }} className='cursor-pointer hover:scale-[1.02] transition-all duration-500 w-full bg-[var(--colCard)] rounded-xl shadow-lg overflow-hidden p-5 border-t-4'>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center justify-between text-2xl font-bold'>
                        <div>{props.name}</div>
                        <GrStatusGoodSmall style={{ color: color }} />
                    </div>
                    <div style={{ color: color }}>
                        {props.status}
                    </div>
                    <div className='flex items-center justify-between text-[var(--colTextB)]'>
                        <div>{props.workOrder}</div>
                        <div>{`${props.progress ? props.progress : 0}%`}</div>
                    </div>
                    <div className='w-full h-[10px] bg-[#babcc0] rounded-full overflow-hidden'>
                        <div style={{ height: '100%', width: `${props.progress ? props.progress : 0}%`, backgroundColor: '#2b66e6' }} />
                    </div>
                    <div className='grid grid-cols-3 mt-5'>
                        <div className='flex items-center justify-center gap-2'><FaBoltLightning className='mb-[2px]' /> {props.power}</div>
                        <div className='flex items-center justify-center gap-2'><FaThermometerEmpty className='mb-[2px]' />{props.temperature}</div>
                        <div className='flex items-center justify-center gap-2'><FaChartLine className='mb-[2px]' />{props.oee}</div>
                    </div>
                    <div className='mt-5' style={{ color: color }}>آخرین هشدار : {props.lastAlert}</div>
                </div>
            </div>
        </Link>
    )
}
