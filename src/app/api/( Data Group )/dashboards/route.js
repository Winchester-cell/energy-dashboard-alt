import apiRequest from "@/axios/instacne/mainApi"
import { cookies } from "next/headers"

export async function POST(req) {

    try {

        const dashboard = await req.json()

        const cookieStore = cookies()
        const token = cookieStore.get('token')?.value

        const dashboardsResponse = await apiRequest.post('/dashboards/', dashboard, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (dashboardsResponse.status === 201) {
            return new Response(JSON.stringify({ message: 'dashboard Post shod' }, null, 2), {
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


export async function GET() {

    try {

        const cookieStore = cookies()
        const token = cookieStore.get('token')?.value

        const dashboardsResponse = await apiRequest.get('/dashboards/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (dashboardsResponse.status === 200) {
            return new Response(JSON.stringify(dashboardsResponse.data, null, 2), {
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


export async function DELETE(req) {

    try {

        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const { id } = await req.json()

        const deleteDashboardResponse = await apiRequest.delete(`/dashboards/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (deleteDashboardResponse.status === 204) {
            return new Response(JSON.stringify({ message: 'Dashboard deleted successfuly' }, null, 2), {
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