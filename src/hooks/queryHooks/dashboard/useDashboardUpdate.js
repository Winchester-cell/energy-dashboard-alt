import postDashboard from "@/axios/requests/dashboards/postDashboard";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAddDashboard() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (dashboard) => postDashboard(dashboard),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['dashboards'])
        },
    })
}
