"use client"
import { useRouter } from "next/navigation"
import axios from "axios"
import React from "react"

export default function SignupPage() {
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        username:""
    })
    const onSignup = async ()=>{

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SingupPage</h1>
        </div>
    )
}