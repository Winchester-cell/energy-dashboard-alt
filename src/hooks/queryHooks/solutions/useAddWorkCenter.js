import { postWorkCenter } from '@/axios/requests/solutions/manufacturing/postWorkCenters'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useAddWorkCenter() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (workCenter) => postWorkCenter(workCenter),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['work-centers'])
        }
    })
}
