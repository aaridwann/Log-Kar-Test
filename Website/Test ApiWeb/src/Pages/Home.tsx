import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { Fetching } from '../Helper/FetchData'
import Head from './Head'
import Second from './Second'
import Third from './Third'
import { useLocation } from "react-router-dom"
import Credit from '../Component/Credit'

export default function Home() {

    const location = useLocation()
    const [data, setData] = useState<any>([])
    async function fetch() {
        await Fetching(data, setData, 'people', 0, 3)
    }
    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className=' min-screen h-fit pb-96 mx-auto' >
            <Head props={{ path: location }} />
            <Second />
            <Third props={{ data: data }} />
            <h1 className=' absolute w-full bg-green-800 text-center text-2xl font-semibold text-white font-sans '>
               Build by Ridwan Firmansyah
            </h1>
        </div>
    )
}
