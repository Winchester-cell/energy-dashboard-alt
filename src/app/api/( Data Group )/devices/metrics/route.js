import apiRequest from "@/axios/instacne/mainApi";
import { cookies } from "next/headers";

export async function GET() {

    try {

        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const metricsResponse = await apiRequest.get('/devices/metrics/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (metricsResponse.status === 200) {
            return new Response(JSON.stringify(metricsResponse.data, null, 2), {
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

        const metric = await req.json()

        const metricsResponse = await apiRequest.post('/devices/metrics/', metric, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (metricsResponse.status === 201) {
            return new Response(JSON.stringify({ message: 'Metric added successfuly' }, null, 2), {
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