import { getDevices } from '@/axios/requests/devices/getDevices'
import { useQuery } from '@tanstack/react-query'

export default function useDevices() {
    return useQuery({
        queryKey: ['devices'],
        queryFn: getDevices,
    })
}
