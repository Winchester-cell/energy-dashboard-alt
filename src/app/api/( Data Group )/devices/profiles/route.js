import apiRequest from "@/axios/instacne/mainApi";
import { cookies } from "next/headers";

export async function GET() {

    try {

        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const profilesResponse = await apiRequest.get('/devices/profiles/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (profilesResponse.status === 200) {
            return new Response(JSON.stringify(profilesResponse.data, null, 2), {
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

        const profile = await req.json()

        const profilesResponse = await apiRequest.post('/devices/profiles/', profile, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (profilesResponse.status === 201) {
            return new Response(JSON.stringify({ message: 'Profile added successfuly' }, null, 2), {
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

export async function DELETE(req) {

    try {

        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        const {id} = await req.json()

        const profilesResponse = await apiRequest.delete(`/devices/profiles/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (profilesResponse.status === 204) {
            return new Response(JSON.stringify({ message: 'Profile deleted successfuly' }, null, 2), {
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