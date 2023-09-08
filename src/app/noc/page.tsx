'use client'
import LogoutButton from "@/module/auth/logout/widget/logout";
import { Button, Flex, Stack, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";


export default function Page() {
    return <>
        <Flex p={"md"} gap={"lg"} justify={"space-between"}>
            <Flex>
                <Link href={'/noc/n1'} >
                    <UnstyledButton>Noc N1</UnstyledButton>
                </Link>
                <Link href={'/noc/n2'} >
                    <UnstyledButton>Noc N2</UnstyledButton>
                </Link>
                <Link href={'/noc/n3'} >
                    <UnstyledButton>Noc N3</UnstyledButton>
                </Link>
            </Flex>
            <LogoutButton />
        </Flex>
    </>
}