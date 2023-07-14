import { NextResponse } from "next/server";

export async function GET() {

    const data = await fetch('https://echarts.apache.org/examples/data/asset/data/webkit-dep.json').then(res => res.json());

    return NextResponse.json(data)
}