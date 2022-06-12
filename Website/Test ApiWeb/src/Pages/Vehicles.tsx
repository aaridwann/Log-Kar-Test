import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { useLocation } from "react-router-dom"
import { Fetching } from '../Helper/FetchData'
import CardVehicles from '../Component/CardVehicles'
let img = 'https://images.unsplash.com/photo-1504383633899-a17806f7e9ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80'
let src = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"></path></svg>

export default function Vehicles() {

    const location = useLocation()
    let [data, setData] = useState([])
    let [page, setPage] = useState(2)
    let [search, setSearch] = useState('')
    let dataPage = data.slice(0, page)
    let key = ['name', 'model', 'manufacturer', 'vehicle class', 'passengers', 'cargo capacity', 'length']
    async function Fetch() {
        await Fetching(data, setData, 'vehicles', 0, 10)
    }

    // UseEffect fisrt fetch
    useEffect(() => {
        Fetch()
    }, [])

    // filter function
    useEffect(() => {
        filter()
    }, [search])

    // infinity Load

    function filter() {
        let reg = new RegExp(`${search}`, 'ig')
        let res = dataPage.filter((x: { name: string }) => x.name.match(reg))
        setData(res)
        console.log(res);
    }
   

    return (
        <div className='h-auto pb-20  bg-repeat-y bg-cover bg-slate-200 b ' style={{ backgroundImage: `url(${img})` }}>

            {/* Navbar */}
            <div className='bg-opacity-40 bg-gradient-to-b from-blue-600   '>
                <Navbar path={location.pathname} />
            </div>

            {/* table */}
            <div className=' max-w-5xl mx-auto mt-10 flex flex-col gap-4'>
                <h1 className=' text-2xl text-white font-semibold tracking-widest '>Vehicles</h1>


                {/* Content Collumt */}
                <div className='w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-12 pt-20 bg-white bg-opacity-20  overflow-x-auto rounded-lg'>
                    {/* Seacrh Collumnt */}
                    <div className=' flex flex-col w-40 mx-auto gap-2 items-center justify-center'>
                        <label className=' tracking-widest font-semibold text-slate-500 italic'>Seacrh Vehicles</label>

                        <div className=' flex bg-white px-2 py-1 rounded-xl bg-opacity-60 gap-2 '>
                            <button> {src}</button>
                            <input onChange={(e) => setSearch(e.target.value)} className=' text-center font-medium text-slate-500 focus:ring-0 focus:outline-none bg-transparent' type='text' />
                        </div>
                    </div>
                    <div className='flex flex-wrap w-full h-ful gap-8 items-center justify-center pb-20'>
                        {data ? dataPage.map((x, i) => (
                            <CardVehicles key={i} props={{ key: key, val: x }} />
                        ))
                            : <p>Loading</p>}
                    </div>
                    {
                        page <= 10 ?
                            <button onClick={() => setPage(page + 2)} className='btn mb-20 bg-white px-5 py-1 rounded-xl text-md font-semibold text-slate-500'>Load more</button>
                            : ''
                    }


                </div>


            </div>



        </div>
    )
}
