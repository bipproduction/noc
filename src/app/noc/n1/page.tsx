'use client'
import { Box } from '@mantine/core';
import { useInterval, useShallowEffect } from '@mantine/hooks';
import { EChartOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import { useState } from 'react';
import neural from './../../../assets/json/neural.json';

const listColor = [
    {
        cat: 0,
        color: 'red'
    },
    {
        cat: 1,
        color: 'blue'
    },
    {
        cat: 2,
        color: 'green'
    },
    {
        cat: 3,
        color: 'yellow'
    },
    {
        cat: 4,
        color: 'orange'
    }
]

export default function Noc1Page() {
    // const particle = useHookstate(val_particle)
    const [keyNya, setKeynya] = useState("123")
    const [options, setOption] = useState({})
    const interval = useInterval(() => {
        loadData()
        setKeynya(Math.random().toString())
    }, 8000)


    useShallowEffect(() => {
        interval.start()

        return interval.stop
    }, [])

    useShallowEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        // const data = neural
        const data = await fetch('/api/particle').then(r => r.json());
        data.nodes = neural
        for (let d in data.nodes) {
            data.nodes[d].value = _.random(1, 10)
            // data.nodes[d].category = _.random(0, 4)
        }

        // for (let d in data.links) {
        //     data.links[d].target = _.random(1, 500)
        //     data.links[d].source = _.random(1, 500)
        // }

        const option: EChartOption = {
            series: [
                {
                    roam: true,
                    type: 'graph',
                    layout: 'force',
                    animation: false,
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                        // formatter: (a: any, b: any) => {
                        //     // console.log(JSON.stringify(a, null, 2))
                        //     return `
                        //         <div>
                        //             ${a.data.name}
                        //         </div>
                        //     `
                        // },
                        color: "white",
                        textBorderWidth: 4,
                        textBorderColor: "black"
                    },
                    draggable: true,
                    data: data.nodes.map((a: any, i: any) => ({
                        ...a,
                        id: i,
                        // label: {
                        //     show: true,
                        //     position: 'right',
                        //     formatter: '{b}',
                        //     color: "white",
                        //     textBorderWidth: 4,
                        //     textBorderColor: "black"
                        // },
                        // value: a.value,
                        // category: a.category,
                        symbolSize: a.value * 2,
                        itemStyle: {
                            color: listColor[a.category].color,
                        }

                    })),
                    categories: data.categories,
                    force: {
                        friction: 0.1,
                        edgeLength: _.random(10, 50),
                        repulsion: _.random(50, 100),
                        gravity: _.random(0.1, 0.2),
                        layoutAnimation: true,
                    },
                    edges: data.links
                }
            ]
        };

        setOption(option)
    }




    return (<Box >
        {keyNya}
        <EChartsReact key={keyNya} option={options} style={{
            height: "100vh",
            width: "100%"
        }} />
    </Box>)
}