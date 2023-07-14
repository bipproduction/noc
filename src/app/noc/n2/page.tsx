'use client'
import { useInterval, useShallowEffect } from "@mantine/hooks"
import EChartsReact from "echarts-for-react"
import { useId, useState } from "react"
import * as echarts from 'echarts'
import { EChartOption } from 'echarts'
import _ from "lodash"
import { Box } from "@mantine/core"

export default function Noc1Page() {

    const [listData, setListData] = useState<any[]>([])
    const [keynya, setKeynya] = useState("123")
    const chartId = useId()
    const [option, setOption] = useState({})

    const interval = useInterval(async () => {
        const data = listData.map((v: any) => ({
            name: v.name,
            value: _.random(800, 50000)
        }))

        // setListData(data)
        setKeynya(Math.random().toString())
        await loadData()

    }, 1000);

    useShallowEffect(() => {
        interval.start()
        return interval.stop

    }, [])

    useShallowEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        const data = await fetch('/api/map-json').then(v => v.json())
        echarts.registerMap('HK', data)

        const listName = data.features.map((v: any) => ({
            name: v.properties.name,
            value: _.random(800, 50000)
        }))

        setListData(listName)

        const options: EChartOption | {} = {
            visualMap: {
                min: 800,
                max: 50000,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [
                {
                    name: '香港18区人口密度',
                    type: 'map',
                    map: 'HK',
                    label: {
                        show: true,
                        color: "black",
                        textBorderColor: "white",
                        textBorderWidth: "2"
                    },
                    roam: true,
                    data: listName,
                }
            ]
        }

        setOption(options)

    }


    return (<Box >
        {keynya}
        <EChartsReact option={option} style={{
            height: "100vh"
        }} />
    </Box>)
}