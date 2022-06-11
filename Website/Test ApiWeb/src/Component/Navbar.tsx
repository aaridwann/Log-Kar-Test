import { useNavigate } from "react-router-dom"
export default function Navbar({path}: any) {
    let image = 'https://www.logkar.com/static/media/logo-logkar-white.0c4df48a.svg'
    let navigate = useNavigate()
    let pth = path.path;
    return (
        <div className='top-0 w-full max-w-7xl h-28 mx-auto flex items-center justify-between px-4 font-medium '>
            <div className='flex gap-4'>
                <img className=' pr-8 border-r-2 ' src={image} alt='img' />
                <button onClick={() => navigate('/home')} className={`${(path == '/home' || '') && `border-b-2 text-white`} transition duration-200 hover:text-white text-slate-300 hover:border-b-2`}>Beranda</button>
                <button onClick={() => navigate('/vehicles')} className={`${path == '/vehicles' && `border-b-2 text-white`} transition duration-200 hover:text-white text-slate-300 hover:border-b-2`}>Vehicles</button>
                <button onClick={() => navigate('vehicles')} className={`${path == '/kask' && `border-b-2 text-white`} transition duration-200 hover:text-white text-slate-300 hover:border-b-2`}>Transporter</button>
                <button onClick={() => navigate('vehicles')} className={`${path == '/apa' && `border-b-2 text-white`} transition duration-200 hover:text-white text-slate-300 hover:border-b-2`}>Bantuan</button>
                <button onClick={() => navigate('vehicles')} className={`${path == '/apa' && `border-b-2 text-white`} transition duration-200 hover:text-white text-slate-300 hover:border-b-2`}>Hubungi</button>
            </div>
            <div className='flex gap-4 text-white'>
                <button className="border-2 px-7 py-1 rounded-lg hover:bg-black hover:text-white hover:border-0 duration-100">Daftar</button>
                <button>Masuk</button>
            </div>
        </div>
    )
}
