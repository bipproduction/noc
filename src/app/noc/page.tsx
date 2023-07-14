'use client'
import { Button, Flex, Stack, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";

export default function Page() {
    return <>
        <Flex p={"md"} gap={"lg"}>
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
    </>
}