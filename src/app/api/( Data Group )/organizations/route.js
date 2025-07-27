import apiRequest from "@/axios/instacne/mainApi";


export async function GET() {

    try {

        const authResponse = await apiRequest.post('/auth/token/', { username: 'cetec', password: 'Peopless123@#' })

        const organizationResponse = await apiRequest.get('/accounts/organizations/', {
            headers: {
                'Authorization': `Bearer ${authResponse.data.access}`
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