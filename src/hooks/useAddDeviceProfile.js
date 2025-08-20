import { postDeviceProfile } from "@/axios/requests/devices/postDeviceProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAddDeviceProfile() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (profile) => postDeviceProfile(profile),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['devices-profiles'])
            alert('added')
        }
    })
}
