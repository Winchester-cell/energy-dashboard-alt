import { getDevicesProfiles } from '@/axios/requests/devices/getDevicesProfiles'
import { useQuery } from '@tanstack/react-query'

export default function useDevicesProfiles() {
    return useQuery({
        queryKey: ['devices-profiles'],
        queryFn: getDevicesProfiles,
        staleTime: 1000 * 60 * 5,
    })
}
