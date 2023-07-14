import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
export  async function GET() {
    const data = await fetch('https://code.highcharts.com/mapdata/countries/id/id-all.geo.json').then(r => r.json())
    return NextResponse.json(data)
}