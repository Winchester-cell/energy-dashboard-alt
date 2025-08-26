import { postMetric } from '@/axios/requests/devices/postMetrics'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useAddMetric() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (metric) => postMetric(metric),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['devices-metrics'])
            alert('added')
        },
        onError: () => {
            alert('failed')
            
        }
    })
}
