import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Component/Navbar';
import { useLocation } from "react-router-dom"

let img = 'https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-735.jpg?w=740&t=st=1654924325~exp=1654924925~hmac=08aaa31b113164530cd4c57231c794d79971ea8b1530c63660ef418245e308d3'

export default function Detail() {
    let params = useParams()
    let data = JSON.parse(`${params.details}`)
    const location = useLocation()
    console.log(data);
    return (
        <div className='w-full h-screen bg-no-repeat bg-cover  bg-blend-multiply bg-black bg-opacity-50 ' style={{ backgroundImage: `url(${img})` }}>
            {/* Navbar */}
            <div className=' w-full bg-gradient-to-b from-black '>
                <Navbar path={location.pathname} />
            </div>

            {/* Detail Page Container */}
            <div className=' max-w-5xl container mx-auto mt-10'>
                {/* Title */}
                <h1 className=' text-4xl font-semibold text-white tracking-widest'>Details</h1>
                {/* Table */}
                <div className=' flex flex-col items-center justify-center w-full gap-10 bg-white bg-opacity-30 rounded-lg h-96 mx-auto mt-10 backdrop-blur-sm shadow-lg  '>
                    <h2 className=' text-3xl font-bold text-white'>{data.name}</h2>
                    <div className=' flex w-full items-center justify-center '>

                        {/* Left side */}
                        <div className=' pr-20 border-r-2 flex flex-col items-start'>
                            <p className=' text-md text-white'>Model</p>
                            <h4 className=' text-2xl text-white font-semibold'>{data.model}</h4>
                            <p className=' text-md text-white'>Passengers</p>
                            <h4 className=' text-2xl text-white font-semibold'>{data.passengers}</h4>
                            <p className=' text-md text-white'>Crew</p>
                            <h4 className=' text-2xl text-white font-semibold'>{data.crew}</h4>
                        </div>
                        {/* righ side */}
                        <div className='pl-20 flex flex-col items-end'>
                            <p className=' text-md text-white'>Model</p>
                            <h4 className=' text-2xl text-white font-semibold'>{data.model}</h4>
                            <p className=' text-md text-white'>Passengers</p>
                            <h4 className=' text-2xl text-white font-semibold'>{data.passengers}</h4>
                            <p className=' text-md text-white'>Crew</p>
                            <h4 className=' text-2xl text-white font-semibold'>{data.crew}</h4>
                        </div>


                    </div>


                </div>
            </div>


        </div>
    )
}
