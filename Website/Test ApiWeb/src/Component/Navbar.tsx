import { useState } from "react";
import { useNavigate } from "react-router-dom"
export default function Navbar({ path }: any) {
    let image = 'https://www.logkar.com/static/media/logo-logkar-white.0c4df48a.svg'
    let navigate = useNavigate()
    let pth = path.path;
    let [menu, setMenu] = useState(false)
    return (
        <div className='top-0 w-full max-w-7xl h-28 mx-auto flex items-center justify-between px-4 font-medium '>
            <div className='flex gap-4'>
                <img className='pr-8 border-r-2' src={image} alt='img' />
                <button onClick={() => setMenu(!menu)} className="lg:hidden ml-4 btn bg-transparent border-2 backdrop-blur-sm hover:bg-white hover:text-slate-500 duration-300 text-white px-4 rounded-lg">Menu</button>
                <div className={`absolute ${menu ? `right-10 mt-16 gap-8 ` : ` -right-60  mt-16 `} duration-300 bg-white bg-opacity-50 backdrop-blur-sm p-8 lg:backdrop-blur-0 rounded-lg lg:p-0 lg:bg-transparent lg:-right-0 lg:relative mt-80 lg:mt-0 flex flex-col lg:flex-row gap-10`}>
                    <button onClick={() => navigate('/home')} className={`${(path == '/home' || '') && `border-b-2 text-white`}  transition duration-200 hover:text-white text-white lg:text-slate-300 hover:border-b-2`}>Beranda</button>
                    <button onClick={() => navigate('/vehicles')} className={`${path == '/vehicles' && `border-b-2 text-white`} transition duration-200 hover:text-white text-white lg:text-slate-300 hover:border-b-2`}>Vehicles</button>
                    <button onClick={() => navigate('vehicles')} className={`${path == '/kask' && `border-b-2 text-white`} transition duration-200 hover:text-white text-white lg:text-slate-300 hover:border-b-2`}>Transporter</button>
                    <button onClick={() => navigate('vehicles')} className={`${path == '/apa' && `border-b-2 text-white`} transition duration-200 hover:text-white text-white lg:text-slate-300 hover:border-b-2`}>Bantuan</button>
                    <button onClick={() => navigate('vehicles')} className={`${path == '/apa' && `border-b-2 text-white`} transition duration-200 hover:text-white text-white lg:text-slate-300 hover:border-b-2`}>Hubungi</button>

                    <div className='flex lg:hidden gap-4 text-white'>
                        <button className="border-2 px-4 py-1 rounded-lg hover:bg-black hover:text-white hover:border-0 duration-100">Daftar</button>
                        <button>Masuk</button>
                    </div>


                </div>
            </div>
            <div className=' hidden lg:flex gap-4 text-white'>
                <button className="border-2 px-7 py-1 rounded-lg hover:bg-black hover:text-white hover:border-0 duration-100">Daftar</button>
                <button>Masuk</button>
            </div>
        </div>
    )
}
