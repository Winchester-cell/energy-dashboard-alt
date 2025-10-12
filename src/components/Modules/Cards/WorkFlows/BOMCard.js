import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import SingleSelectInput from '../../Inputs/SingleSelectInput';
import { selectBoxStyleNoPadding } from '@/data/stylesData';


export default function BOMCard(props) {

    return (
        <div style={{ boxShadow: `2px 2px 4px #f55b75` }} className={`p-5 bg-[var(--colCard)] shadow-lg rounded-2xl gap-5 grid grid-cols-5 cursor-pointer hover:py-7 transition-all duration-500`}>
            <div className={`border-l-2 border-[white] pe-5`}><SingleSelectInput hasDefaultSelect={true} style={selectBoxStyleNoPadding} staticOption={props.list} /></div>
            <div className={`border-l-2 border-[white] flex items-center justify-center`}>
                <input className='bg-[var(--colBg)] py-2 rounded-full ps-10' type='number' defaultValue={props.amount} />
            </div>
            <div className={`border-l-2 border-[white] pe-5`}><SingleSelectInput hasDefaultSelect={true} style={selectBoxStyleNoPadding} staticOption={props.unit} /></div>
            <div className={`border-l-2 border-[white] flex items-center`}>{toPersianDigits(props.price)}</div>
            <div className='flex items-center gap-5'>
                <MdEdit className='w-5 h-5' />
                <MdDelete className='w-5 h-5' />
            </div>
        </div >
    )
}
