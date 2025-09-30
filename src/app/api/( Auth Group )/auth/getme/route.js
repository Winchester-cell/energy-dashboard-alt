import apiRequest from "@/axios/instacne/mainApi"
import { cookies } from "next/headers";

export async function GET() {

    try {

        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        if (!token) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401,
            });
        }

        const meResponse = await apiRequest.get('/accounts/users/me/', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        // const userRole = meResponse.data.is_superuser ? 'SuperAdmin' : meResponse.data.memberships[0].role.name

        console.log('me =>' , meResponse.data);


        return new Response(JSON.stringify({ userData: meResponse.data}), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        })



    } catch (err) {

        console.log('error =>' , err) ;
        

        return new Response(JSON.stringify({ message: 'Server Error' }), {
            status: 500
        })
    }


}