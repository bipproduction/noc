'use server'
import { cookies } from 'next/headers'
export async function funLogout() {
    cookies().delete({
        name: "noc_tkn",
        value: ""
    })

    return true
}