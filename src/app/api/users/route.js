import apiRequest from "@/axios/instacne/mainApi";

export async function GET(req) {

    const response = await apiRequest.post('/auth/token/')

    console.log(response);

    return new Response(JSON.stringify({ss:'sss'}), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    })



}