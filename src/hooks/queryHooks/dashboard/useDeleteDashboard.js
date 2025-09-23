import { deleteDashboard } from '@/axios/requests/dashboards/deleteDashboard'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export default function useDeleteDashboard() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id) => deleteDashboard(id),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['dashboards'])
        }
    })
}
