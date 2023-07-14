'use client'
import { Box, Center, Flex, Image, SimpleGrid, Stack, Text, Title, } from "@mantine/core";
import { useInterval, useShallowEffect } from "@mantine/hooks";
import { useState } from "react";


export default function ViewNoc3({ data, listSumber }: { data: string[], listSumber: string[] }) {
    let pointer = 0
    const [gambar, setGambar] = useState("anaya.jpg")
    const interval = useInterval(() => {
        if (pointer == data.length) {
            pointer = 0
        }
        setGambar(data[pointer])
        pointer++
    }, 3000)

    useShallowEffect(() => {
        interval.start()
        return interval.stop
    }, [])

    return <div suppressHydrationWarning>

        <Box p={"md"} >
            <Title>Face Recognition</Title>
            {/* <Text>{gambar}</Text> */}
            <Flex w={"100%"} align={"stretch"}>
                <SimpleGrid w={300} cols={2}>
                    {listSumber.map((v, i) => <Image style={{
                        border: gambar === v?"4px solid yellow": "",
                    }} key={i} src={'/api/gambar/' +v} alt="" />)}
                </SimpleGrid>
                <Box w={"50%"} px={"md"}>
                    <Image src={'/api/gambar/' + gambar} alt="" />
                </Box>
            </Flex>

        </Box>
    </div>
}