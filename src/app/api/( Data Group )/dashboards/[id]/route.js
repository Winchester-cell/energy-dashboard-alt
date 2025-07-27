import apiRequest from "@/axios/instacne/mainApi"
import { cookies } from "next/headers"

export async function GET(req, { params }) {

    try {

        const id = params.id
        const cookieStore = cookies()
        const token = cookieStore.get('token')?.value

        const dashboardResponse = await apiRequest.get(`/dashboards/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return new Response(JSON.stringify((dashboardResponse.data)))

    } catch (err) {

        console.log('Error =>', err);

        return new Response(JSON.stringify({ message: 'ServerError' }))

    }



}