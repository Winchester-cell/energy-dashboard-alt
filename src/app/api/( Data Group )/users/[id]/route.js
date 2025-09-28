import apiRequest from "@/axios/instacne/mainApi"
import { cookies } from "next/headers"

export async function GET(req, { params }) {

    try {

        const id = params.id
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const res = await apiRequest.get(`/accounts/users/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return new Response(JSON.stringify((res.data)) , {status:200} )

    } catch (err) {

        console.log('Error =>', err)

        return new Response(JSON.stringify({ message: 'ServerError' }))

    }


}
