import React from 'react'

export default function DeviceIdleCard(props) {
    const { name, status, idleHours } = props
    return (
        <div className='w-full bg-[var(--colCard)] p-5 rounded-xl flex flex-col gap-2'>
            <div>
                نام دستگاه : {name}
            </div>
            <div>
                اخرین وضعیت : {status}
            </div>
            <div>
                ساعت بیکاری : {idleHours}
            </div>

        </div>
    )
}
