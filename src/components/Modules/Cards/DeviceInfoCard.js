import React from 'react'
import { useTranslation } from 'react-i18next'

export default function DeviceInfoCard(props) {

    const { id, uid, ip, metadata } = props
    const { t } = useTranslation()
    const status = true

    return (
        <div
            className="bg-[var(--colCard)] rounded-lg shadow p-4 flex flex-col gap-2"
        >
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-[var(--colTextA)]">
                    {uid} <span className=" text-sm">({id})</span>
                </span>
                <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${status
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                        }`}
                >
                    {status ? 'Active' : 'Inactive'}
                </span>
            </div>
            <div className="text-[var(--colTextB)] font-medium">
                {t('deviceInfoCard.deviceIP')} : {ip}
            </div>
            <div className="text-[var(--colTextB)] font-medium">
                {t('deviceInfoCard.deviceLocation')} : {metadata.location ? metadata.location : '---'}
            </div>
        </div>
    )
}