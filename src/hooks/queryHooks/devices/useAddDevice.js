import { postDevice } from "@/axios/requests/devices/postDevice";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAddDevice() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (device) => postDevice(device),
        onSuccess: async () => {
            await queryClient.invalidateQueries(['devices'])
            alert('added')
        },
        onError: () => {
            alert('failed')
        }
    })
}
