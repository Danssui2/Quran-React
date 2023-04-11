import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Surah from './pages/Surah'
import Juz from './pages/Juz'

function App() {
  return (
    <div className='w-full h-full flex'>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/surah/:id' element={<Surah/>}/>
        <Route path='/juz/:id' element={<Juz/>}/>
      </Routes>
    </div>
  )
}

export default App