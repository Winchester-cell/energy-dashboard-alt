import { deleteDeviceProfile } from '@/axios/requests/devices/deleteDeviceProfile';
import useDeleteDeviceProfile from '@/hooks/queryHooks/devices/useDeleteDeviceProfile';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { MdDelete } from "react-icons/md";

export default function DevicesProfileCard(props) {
    const { id, name, manufacturer } = props
    const deleteProfileMutation = useDeleteDeviceProfile()

    return (
        <div className={`w-full h-auto bg-[var(--colCard)] rounded-xl shadow-lg p-4 flex flex-col gap-3`}>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{name}</div>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{manufacturer}</div>
            <button onClick={() => deleteProfileMutation.mutate(id)} className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center flex justify-center'><MdDelete className='w-5 h-5' /></button>
        </div>
    )
}
