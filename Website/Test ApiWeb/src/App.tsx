import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Vehicles from './Pages/Vehicles'
import Credit from './Component/Credit'
import Detail from './Pages/Detail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/' || '/home'} element={<Home />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/details/:details' element={<Detail />} />
        <Route path='*' element={<Home />} />
      </Routes>

    </BrowserRouter>



  )
}

export default App
