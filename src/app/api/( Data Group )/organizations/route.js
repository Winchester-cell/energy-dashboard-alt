import apiRequest from "@/axios/instacne/mainApi";
import { cookies } from "next/headers";


export async function GET() {

    try {

        const cookieStore = cookies();
        const token = cookieStore.get('token')?.value;

        const organizationResponse = await apiRequest.get('/accounts/organizations/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return new Response(JSON.stringify(organizationResponse.data, null, 2), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        })

    }
    catch (err) {
        console.log('error => ', err);

        return new Response(JSON.stringify({ message: 'failed' }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        })
    }





}