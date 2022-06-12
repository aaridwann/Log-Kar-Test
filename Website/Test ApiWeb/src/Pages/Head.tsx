import React, { useState } from 'react'
import Navbar from '../Component/Navbar'

export default function Head({ props }: any) {
    let img = '	https://www.logkar.com/static/media/image-banner-desktop.d46273da.jpg'
    let img2 = 'https://i.pinimg.com/originals/9d/27/b4/9d27b4d3ddc247af3c7b1d6423d1790f.jpg'
    let img3 = 'https://i.pinimg.com/originals/2c/36/ee/2c36ee0e22a29669ffb64b74efcd5570.jpg'
    let img4 = 'https://i.pinimg.com/originals/b7/db/11/b7db11b4a3317af2584c8fe6036e8796.jpg'
    let dataimg = [img, img2, img3, img4]
    let [image, setImage] = useState(0)
    return (
        <div className=' max-screen h-screen mx-auto bg-no-repeat bg-cover bg' style={{ backgroundImage: `url(${dataimg[image]})` }}>
            <Navbar path={props.path.pathname} />
            <div className='flex flex-col gap-8 text-white mx-auto max-w-6xl mt-20'>
                <h1 className=' text-5xl font-bold'>Satu Website,<br />Menghubungkan Semua</h1>
                <p className=' text-2xl'>Jadilah bagian dari era logistik terbaru,<br />terlengkap sesuai dengan kebutuhan anda!</p>
                <button className=' bg-green-800 hover:bg-green-500 duration-200 font-bold w-60 py-6 rounded-xl text-2xl'>Daftar Sekarang</button>
            </div>

        </div>
    )
}
