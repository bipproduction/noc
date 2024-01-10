
import React from "react"
import { cookies } from 'next/headers'
import _ from "lodash"
import { ViewLogin } from "@/module/auth"

export default async function NocLayout({
    children
}: {
    children: React.ReactNode
}) {

    // const c = cookies().get('noc_tkn')
    // if (!c || !c.value || _.isEmpty(c.value)) return <ViewLogin />

    return <>
        {children}
    </>
}