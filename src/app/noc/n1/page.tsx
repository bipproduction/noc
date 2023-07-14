'use client'
import { val_particle } from '@/val/val_particle';
import { useHookstate } from '@hookstate/core';
import { Box, Text } from '@mantine/core';
import { useInterval, useShallowEffect } from '@mantine/hooks'
import _ from 'lodash';
import ReactECharts from 'echarts-for-react';
import EChartsReact from 'echarts-for-react';
import { useState } from 'react';
import { EChartOption } from 'echarts';

export default function Noc1Page() {
    // const particle = useHookstate(val_particle)
    const [keyNya, setKeynya] = useState("123")
    const [options, setOption] = useState({})
    const interval = useInterval(() => {
        loadData()
        setKeynya(Math.random().toString())
    }, 5000)


    useShallowEffect(() => {
        interval.start()

        return interval.stop
    }, [])

    useShallowEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        const data = await fetch('/api/particle').then(r => r.json());
        for (let d in data.nodes) {
            // data.nodes[d].value = _.random(1, 10)
            // data.nodes[d].category = _.random(0, 4)
        }

        // for (let d in data.links) {
        //     data.links[d].target = _.random(1, 500)
        //     data.links[d].source = _.random(1, 500)
        // }

        const option: EChartOption = {
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    animation: false,
                    label: {
                        position: 'right',
                        formatter: '{b}'
                    },
                    draggable: true,
                    data: data.nodes.map(function (node: any, idx: number) {
                        node.id = idx;
                        return node;
                    }),
                    categories: data.categories,
                    force: {
                        // friction: 0.10,
                        edgeLength: 10,
                        repulsion: _.random(30, 60),
                        gravity: _.random(0.1, 0.3)
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
            height: "100vh"
        }} />
    </Box>)
}