import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'


export default function BPMCard(props) {

    let durationPart = ``
    let bgColor = ``

    if (props.status === 'در حال انجام') {
        bgColor = `#eab308 `
    } else if (props.status === 'تکمیل شده') {
        bgColor = `#059669`
    } else {
        bgColor = `#ef4444`
    }

    if (props.duration) {
        durationPart = `مدت زمان : ${props.duration}`
    } else if (props.estimatedTime) {
        durationPart = `زمان تخمینی : ${props.estimatedTime}`
    } else if (props.startAfter) {
        durationPart = `زمان شروع : ${props.startAfter}`
    } else (
        durationPart = `پیشرفت : %${toPersianDigits(props.progress.percent)} (${toPersianDigits(props.progress.done)} از ${toPersianDigits(props.progress.total)})`
    )

    return (
        <div style={{ boxShadow: `2px 2px 4px ${bgColor}` }} className='p-5 bg-[var(--colBg)] rounded-2xl hover:scale-[1.02] transition-transform duration-500'>

            <div className='flex items-center justify-between'>
                <div className='font-semibold'>
                    {props.step} : {props.title}
                </div>
                <div style={{ backgroundColor: bgColor }} className='py-2 px-5 rounded-full text-white bg-red-500'>
                    {props.status}
                </div>
            </div>
            <p className='mt-2 mb-4 text-[var(--colTextB)]'>{props.description}</p>
            <div className='flex items-center justify-between'>
                <div>
                    مسئول : {props.responsible}
                </div>
                <div>
                    {durationPart}
                </div>
            </div>
        </div>
    )
}
