import apiRequest from "@/axios/instacne/mainApi";
import { cookies } from "next/headers";

export async function GET() {

    try {

        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const workCenterResponse = await apiRequest.get('/solutions/manufacturing/work-centers/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (workCenterResponse.status === 200) {
            return new Response(JSON.stringify(workCenterResponse.data, null, 2), {
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


export async function POST(req) {

    try {

        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const workCenter = await req.json()

        const workCenterResponse = await apiRequest.post('/solutions/manufacturing/work-centers/', workCenter, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (workCenterResponse.status === 201) {
            return new Response(JSON.stringify(workCenterResponse.data, null, 2), {
                status: 201,
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