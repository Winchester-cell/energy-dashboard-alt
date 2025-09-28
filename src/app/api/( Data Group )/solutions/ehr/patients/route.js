import apiRequest from "@/axios/instacne/mainApi";
import { cookies } from "next/headers";

export async function GET() {

    try {

        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const res = await apiRequest.get('/solutions/ehr/patients/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (res.status === 200) {
            return new Response(JSON.stringify(res.data, null, 2), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            })
        }


    } catch (err) {
        console.log('Error =>', err);
        return new Response(JSON.stringify({ message: 'Server Error' }, null, 2), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        })
    }


}