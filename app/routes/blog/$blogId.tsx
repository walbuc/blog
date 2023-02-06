import * as React from 'react'
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";


export function loader({request, params} :LoaderArgs) {

}

export default function BlogMdx() {
    const data = useLoaderData<typeof loader>()

}