import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

connect()

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()
        const { email, password } = reqBody

        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: "User does not exists" }, { status: 400 })
        }

        const validedPassword = await bcrypt.compare(password, user.password)

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, { expiresIn: "1h" })

        const response = NextResponse.json({ message: "Login successful", success: true },)

        response.cookies.set("token", token, { httpOnly: true })

        return response;

    } catch (error: any) {
        console.log("error found while login")
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}