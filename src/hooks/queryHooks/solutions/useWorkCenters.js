import { getWorkCenters } from '@/axios/requests/solutions/manufacturing/getWorkCenters'
import { useQuery } from '@tanstack/react-query'

export default function useWorkCenters() {
  return useQuery({
    queryKey:['work-centers'],
    queryFn:getWorkCenters,
  })
}
