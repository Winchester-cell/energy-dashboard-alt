import apiRequest from "@/axios/instacne/mainApi"
import { serialize } from "cookie";

export async function POST(req) {

    const user = await req.json()

    try {

        const authResponse = await apiRequest.post('/auth/token/', user)

        if (authResponse.status === 401) {
            return new Response(JSON.stringify({ message: 'Username or password is incorrect' }), {
                status: 401
            })
        }

        const serializedCookie = serialize("token", authResponse.data.access, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24,
            secure: true,
            sameSite: "lax",
        });

        return new Response(JSON.stringify({ message: 'Welcome' }), {
            status: 201,
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": serializedCookie
            }
        })

    } catch (err) {
        return new Response(JSON.stringify({ message: 'Server Error', error: err }), {
            status: 500
        })
    }


}