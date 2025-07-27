import React from 'react'
import { useTranslation } from 'react-i18next'

export default function UserInfoCard(props) {

    const { user_details , role_details } = props

    const { t } = useTranslation()

    return (
        <div
            className="bg-[var(--colCard)] rounded-lg shadow p-4 flex flex-col gap-2"
        >
            <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-[var(--colTextA)]">
                    {user_details?.first_name}
                </span>
                <span className="font-bold text-lg text-[var(--colTextA)]">
                    {user_details?.last_name}
                </span>
            </div>
            <div className="text-[var(--colTextB)] text-sm">
                {t('email')} : {user_details?.email}
            </div>
            <div className="text-[var(--colTextB)] text-sm">
                {t('userInfoCard.role')} : {role_details?.name}
            </div>

        </div>
    )
}
