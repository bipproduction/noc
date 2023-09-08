'use client'
import { Button, Group, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { funLogin } from "../fun/login";
import toasts from 'react-simple-toasts'
import { useRouter } from "next/navigation";

export default function ViewLogin() {
    const router = useRouter()
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    async function onLogin() {
        const l = await funLogin(loginData)
        if (!l.success) return toasts("salah email atau password")
        router.replace('/noc')
    }

    return <>
        <Group position="center">
            <Stack w={300} p={"lg"} bg={"gray.8"} >
                <Title>Login</Title>
                <TextInput placeholder="emial" onChange={(v) => setLoginData({
                    ...loginData,
                    email: v.target.value
                })} />
                <PasswordInput placeholder="password" onChange={(v) => setLoginData({
                    ...loginData,
                    password: v.target.value
                })} />
                <Button onClick={onLogin}>LOGIN</Button>
            </Stack>
        </Group>
    </>
}