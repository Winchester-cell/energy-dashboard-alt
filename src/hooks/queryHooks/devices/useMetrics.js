import { getMetrics } from '@/axios/requests/devices/getMetircs'
import { useQuery } from '@tanstack/react-query'

export default function useMetrics() {
    return useQuery({
        queryKey: ['devices-metrics'],
        queryFn: getMetrics,
        staleTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    })
}
