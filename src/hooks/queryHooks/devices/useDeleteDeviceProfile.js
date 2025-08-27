import { deleteDeviceProfile } from "@/axios/requests/devices/deleteDeviceProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteDeviceProfile() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id) => deleteDeviceProfile(id),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['devices-profiles'])
            alert('deleted')
        }
    })
}
