import React from 'react'
import ModalBase from '../ModalBase'
import { usePathname } from 'next/navigation'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { colorVariantSelector } from '@/data/themeVariants'
import { FaUser } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";


export default function WorkListModal({ isOpen, setIsOpen, selectedWork }) {

    const path = usePathname()
    const { themeType } = useThemeTypeStore()
    const style = colorVariantSelector(path, themeType)

    return (
        <ModalBase isOpen={isOpen} setIsOpen={setIsOpen}>
            {
                isOpen && (
                    <div className={`${style.cardStyleA} shadow-lg w-[70%] p-5 rounded-2xl`}>
                        <h2 className='text-2xl'>جزئیات نسخه </h2>

                        <div className={`${style.cardStyleB} shadow-lg w-full p-5 mt-5 rounded-xl flex items-center justify-between`}>
                            <div className='flex items-center gap-3'>
                                <FaUser className='w-16 h-16' />
                                <div className='text-lg'>
                                    <div>{selectedWork.name}</div>
                                    <div className={`${style.textStyleB} text-[1rem] mt-1`}>{selectedWork.age} ساله , {selectedWork.ward} , {selectedWork.priority}</div>
                                </div>
                            </div>
                            <div>{selectedWork.status}</div>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <div className={`${style.cardStyleB} shadow-lg w-full p-5 mt-5 rounded-xl`}>
                                <div className={`${style.textStyleB}`}>دارو</div>
                                <div className='text-xl mt-2'>{selectedWork.drug.name}</div>
                                <div className={`${style.textStyleB} mt-2`}>{selectedWork.drug.dosage} , {selectedWork.drug.type} , روزانه , هفت روز</div>
                            </div>
                            <div className={`${style.cardStyleB} shadow-lg w-full p-5 mt-5 rounded-xl`}>
                                <div className={`${style.textStyleB}`}>پزشک</div>
                                <div className='text-xl mt-2'>{selectedWork.doctor}</div>
                                <div className={`${style.textStyleB} mt-2`}>{selectedWork.registeredAt}</div>
                            </div>
                        </div>

                        <div className={`${style.cardStyleB} shadow-lg w-full p-5 mt-5 rounded-xl flex items-center justify-between`}>
                            <div className='flex items-center gap-3'>
                                <IoWarning className='w-16 h-16' />
                                <div className='text-lg'>
                                    <div>بررسی ایمنی</div>
                                    <div className={`${style.textStyleB} text-[1rem] mt-1`}>هشدارهای گزارش شده توسط MedicationSafetyService : </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <div className={`${style.cardStyleB} shadow-lg w-full p-5 mt-5 rounded-xl`}>
                                <div className={`text-xl`}>تداخل دارویی</div>
                                <div className={`${style.textStyleB} mt-2`}>خطر تداخل با داروی آمیودارون</div>
                                <div className={`bg-red-200 text-red-600 w-fit py-2 px-5 rounded-full mt-2`}>شدت : high</div>
                            </div>
                            <div className={`${style.cardStyleB} shadow-lg w-full p-5 mt-5 rounded-xl`}>
                                <div className={`text-xl`}>آلرژی</div>
                                <div className={`${style.textStyleB} mt-2`}>سوابق آلرژی احتمالی به سالیسیلات‌ها</div>
                                <div className={`bg-red-200 text-red-600 w-fit py-2 px-5 rounded-full mt-2`}>شدت: medium</div>
                            </div>
                        </div>

                        <div className='mt-5 text-white'>
                            <button className='bg-green-700 px-5 py-2 rounded-xl me-5'>تایید نسخه</button>
                            <input className={`${style.cardStyleB} rounded-xl px-5 py-2 text-[var(--colTextA)]`} type="text" placeholder='علت رد ...' />
                            <button className='bg-red-700 px-5 py-2 rounded-xl'>رد نسخه</button>
                        </div>
                    </div>
                )
            }
        </ModalBase>
    )
}
