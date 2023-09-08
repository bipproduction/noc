import { Noc3 } from '@/module/n3'
import { Box } from '@mantine/core'
import fs from 'fs'



export default async function Noc1Page() {
    const list = fs.readdirSync('./src/assets/hasil')
    const listSumber = fs.readdirSync('./src/assets/sumber')

    return (<>
        <div >

            <Noc3 data={list} listSumber={listSumber} />
        </div>
    </>)
}