import React from 'react'
import Card from '../Component/Card'

export default function Third({ props }: any) {
    let { data } = props
    let key = ['Name', 'Gender', 'Height', 'Mass', 'Hair color', 'Skin color', 'Eye color']

    return (
        <div className='w-full h-fit bg-cyan-50 flex flex-col justify-center items-center py-28 gap-20'>
            <h2 className=' text-4xl font-semibold text-green-500'>Keuntungan Bersama LogKar</h2>
            <div className=' flex flex-wrap gap-8 mx-auto w-full  items-center justify-center'>
                {data[0] ? data.map((x: any,i:number) => (
                    <Card key={i} props={{ key: key, val: x }} />
                )) : <p>Loading ...</p>}
            </div>
        </div>
    )
}
