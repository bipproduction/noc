'use server'
import { cookies } from 'next/headers'
import { sealData } from 'iron-session'
export async function funLogin(data: any) {
    console.log(data)
    if (data.email === "ronald@bip.com" && data.password === "Bip_123") {
        // const name = await sealData("ronald", { password: process.env.PWD as string })

        cookies().set({
            name: "noc_tkn",
            value: "ronald"
        })

        return {
            success: true,
            message: "success"
        }
    }

    return {
        success: false,
        message: "wrong email or password"
    }
}