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

        return new Response(JSON.stringify((dashboardResponse.data)), { status: 200 })

    } catch (err) {

        console.log('Error =>', err)

        if (err.response?.status === 404) {
            return new Response(JSON.stringify({ message: 'Not Found' }), { status: 404 })
        }

        return new Response(JSON.stringify({ message: 'ServerError' }), { status: 500 })

    }


}

export async function PATCH(req, context) {

    try {

        const { widgets } = await req.json()
        const { params } = await context
        const id = params.id
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const res = await apiRequest.patch(`/dashboards/${id}/`, { widgets }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (res.status === 200) {
            return new Response('Updated', {
                status: 200
            })
        }


    } catch (err) {

        console.log('Error =>', err.response);

        return new Response(JSON.stringify({ message: 'ServerError' }))

    }

}