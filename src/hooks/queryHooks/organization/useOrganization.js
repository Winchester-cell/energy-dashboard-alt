import getOrganizations from '@/axios/requests/organization/getOrganizations'
import { useQuery } from '@tanstack/react-query'

export default function useOrganizations() {

    return useQuery({
        queryKey: ['Organization'],
        queryFn: getOrganizations,
        staleTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    })

}
