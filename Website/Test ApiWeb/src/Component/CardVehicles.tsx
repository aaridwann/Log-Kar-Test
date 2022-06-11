import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
let img = 'https://i.pinimg.com/564x/92/53/0d/92530d2052da60b8243fd0fd6c1636ff.jpg'


export default function CardVehicles({ props }: any) {
    let navigate = useNavigate()
    let { key } = props
    let { val } = props
    let [open, setOpen] = useState(false)
    let params = {
        name: val.name, model: val.model, passengers: val.passengers,
        crew: val.crew, length: val.length,
        manufacturer: val.manufacturer,
        'Cargo capacity': val.cargo_capacity
    }
    return (
        <div className={`hover:scale-105 duration-500 transition ${open ? `h-450` : `h-20` } w-96 bg-white rounded-xl overflow-hidden shadow-lg`}>
            <div onClick={() => setOpen(!open)} className=' h-40 overflow-hidden bg-center flex flex-col justify-center items-center' style={{ backgroundImage: `url(${img})` }}>
                <p className='bg-black w-full h-full bg-opacity-50 text-center flex items-center pl-4 font-semibold text-white text-4xl'>{val.name}</p>
                <p className='bg-black w-full h-full bg-opacity-50 text-center flex items-center pl-4 font-semibold text-white text-lg tracking-widest '>{val.model}</p>
            </div>

            <div className=' h-4 flex flex-col gap-2 mx-auto w-72 my-10 items-start '>
                {/* Height */}
                <div className=' flex gap-4'>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 '>{key[2]}</p>
                        <p className=' text-lg font-semibold'>{val.manufacturer}</p>
                    </div>
                </div>

                {/* mass */}
                <div className=' flex gap-4'>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 '>{key[3]}</p>
                        <p className=' text-lg font-semibold'>{val.vehicle_class}</p>
                    </div>
                </div>

                {/* height */}
                <div className=' flex gap-4 w-full'>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 '>{key[4]}</p>
                        <p className=' text-lg font-semibold'>{val.passengers}</p>
                    </div>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 '>{key[5]}</p>
                        <p className=' text-lg font-semibold'>{val.cargo_capacity}</p>
                    </div>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 text-clip '>{key[6]}</p>
                        <p className=' text-lg font-semibold'>{val.length}</p>
                    </div>
                </div>
                <div>
                    <button className=' btn bg-green-400 text-white px-2 rounded-md' onClick={() => navigate(`/details/${JSON.stringify(params)}`)}>Details</button>
                </div>


            </div>


        </div>
    )
}
