import React from 'react'
let img = 'https://i.pinimg.com/564x/92/53/0d/92530d2052da60b8243fd0fd6c1636ff.jpg'
export default function Card({props}:any) {
    let {key} = props
    let {val} = props
    console.log(val);
    return (
        <div className=' hover:scale-105 duration-500 w-96 h-450 bg-white rounded-xl overflow-hidden shadow-lg'>
            <div className=' h-40 overflow-hidden bg-center flex flex-col justify-center items-center' style={{ backgroundImage: `url(${img})` }}>
                <p className='bg-black w-full h-full bg-opacity-50 text-center flex items-center pl-4 font-semibold text-white text-4xl'>{val.name}</p>
                <p className='bg-black w-full h-full bg-opacity-50 text-center flex items-center pl-4 font-semibold text-white text-lg tracking-widest '>{val.gender}</p>
            </div>

            <div className=' flex flex-col gap-2 mx-auto w-72 my-10'>
                {/* Height */}
                <div className=' flex gap-4'>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 '>{key[2]}</p>
                        <p className=' text-lg font-semibold'>{val.height}</p>
                    </div>
                </div>

                {/* mass */}
                <div className=' flex gap-4'>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 '>{key[3]}</p>
                        <p className=' text-lg font-semibold'>{val.mass}</p>
                    </div>
                </div>

                {/* height */}
                <div className=' flex gap-4 w-full'>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 '>{key[4]}</p>
                        <p className=' text-lg font-semibold'>{val.hair_color}</p>
                    </div>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 '>{key[5]}</p>
                        <p className=' text-lg font-semibold'>{val.skin_color}</p>
                    </div>
                    <img src='https://www.logkar.com/static/media/icon-check.27c2e0ba.svg' />
                    <div className='flex flex-col gap-0 text-slate-500'>
                        <p className=' text-xs font-semibold italic text-slate-400 text-clip '>{key[6]}</p>
                        <p className=' text-lg font-semibold'>{val.eye_color}</p>
                    </div>
                </div>


            </div>


        </div>
    )
}
