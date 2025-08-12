import apiRequest from "@/axios/instacne/mainApi"
import { cookies } from "next/headers"

export async function GET(req, { params }) {

    try {

        const id = params.id
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const deviceCountResponse = await apiRequest.get(`/solutions/counting/analysis/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return new Response(JSON.stringify((deviceCountResponse.data)))

    } catch (err) {

        console.log('Error =>', err)

        return new Response(JSON.stringify({ message: 'ServerError' }))

    }


}
