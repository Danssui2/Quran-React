import React, { useState } from 'react'
import Murottal from './Murottal'
import tafsir from '../assets/tafsir.svg'
import numberFrame from '../assets/numberFrame.svg'

function Ayah({arab, translation, ayah, tafsirAyah, audio}) {

const [open, setOpen] = useState(false)

  return (
    <>
      <div className='flex flex-col py-6 gap-4'>
        <div className='flex gap-4 justify-end'>
          <div className='flex justify-center items-center'>
            <p className='absolute text-sm font-semibold'>{ayah}</p>
            <img className='w-8 h-8' src={numberFrame} alt="" />
          </div>
          <p className='arab text-2xl leading-10 text-right'>{arab}</p>
        </div>
        <p>{ayah}. <span>{translation}</span></p>
        <div className='flex gap-2'>
          <button onClick={() => setOpen(!open)} className='p-2 bg-gray-200/70 flex justify-center items-center rounded-lg w-10 h-10'><img className='w-5 h-5' src={tafsir} alt=""/></button>
          <Murottal source={audio}/>
        </div>
      </div>

      {open ? 
        <div className='flex flex-col py-4 gap-2 bg-gray-50/20'>
          <p className='text-xl'>Tafsir :</p>
          <p>{tafsirAyah}</p>
        </div>
        : null
      }
    </>
  )
}

export default Ayah