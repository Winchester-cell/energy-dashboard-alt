import userModel from "@/models/user"
import { hashPassword } from "@/utils/auth/password"
import { generateToken } from "@/utils/auth/token"
import dbConnect from "@/utils/database/dbConnect"
import { serialize } from "cookie"

export async function POST(req) {

    // connect to database

    await dbConnect()

    const { name, username, password, organization, role } = await req.json()

    // checks if fields are empty and send reasonable response

    if (!name.trim() || !username.trim() || !password.trim() || !organization.trim() || !role.trim()) {
        return new Response(JSON.stringify({ error: 'invalid info' }), {
            status: 422,
        })
    }

    // check if email is alreay exist and its response

    const isUserExist = await userModel.findOne({ username })

    if (isUserExist) {
        return new Response(JSON.stringify({ error: 'user already exist' }), {
            status: 422,
        })
    }

    // mark first user as SUPERADMIN

    // const users = await userModel.find({})
    // const userRole = users.length === 0 ? 'SUPERADMIN' : 'USER'

    // finaly if everything is fine we can continue


    const hashedPassword = await hashPassword(password)

    await userModel.create({ name, username, password: hashedPassword, role, organization })

    const token = generateToken({ username })

    const serializedCookie = serialize("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
        secure: true,
        sameSite: "lax",
    });

    return new Response(JSON.stringify({ message: 'user created' }), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": serializedCookie,
        }
    })

}