import { topConsumer } from '@/data/fakeData'
import { toPersianDigits } from '@/utils/toPersianDigits'
import React from 'react'

export default function Table() {
    return (
        <div className='w-full h-full text-[var(--colCardA)]'>

            <h2 className='w-full text-center font-bold'>پر مصرف ترین مجموعه ها</h2>

            <table className="w-full text-[14px] text-center mt-5">

                <thead className="border-b-2 border-[var(--colTextC)]">
                    <tr>
                        <th className="px-5 pb-2">ردیف</th>
                        <th className="px-5 pb-2">نام مجموعه</th>
                        <th className="px-5 pb-2">مصرف برق</th>
                        <th className="px-5 pb-2">مصرف گاز</th>
                        <th className="px-5 pb-2">مبلغ</th>
                    </tr>
                </thead>

                <tbody>
                    {topConsumer.map((item , index) => (
                        <tr
                            key={item.id}
                            className={`${topConsumer.length - 1 === index ? `` : `border-b-2 border-[var(--colTextC)]`} `}
                        >
                            <td className="p-2">{toPersianDigits(item.id)}</td>
                            <td className="p-2">{toPersianDigits(item.name)}</td>
                            <td className="p-2">{toPersianDigits(item.totalPowerConsume)}</td>
                            <td className="p-2">{toPersianDigits(item.totalGasConsume)}</td>
                            <td className="p-2">{toPersianDigits(item.cost)}</td>

                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}
