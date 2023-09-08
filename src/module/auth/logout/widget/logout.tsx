'use client'

import { Button } from "@mantine/core"
import { funLogout } from "../../login/fun/logout"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"

export default function WidgetLogoutButton() {
    const router = useRouter()

    async function onLogout() {
        const apa = await funLogout()
        if (!apa) return toast("error")
        router.replace('/noc')
    }

    return <Button compact onClick={onLogout}>LOGOUT</Button>
}