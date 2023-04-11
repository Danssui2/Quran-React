import React from 'react'
import { Link } from 'react-router-dom'
import numberFrame from '../assets/numberFrame.svg'

function SurahsCard({name, number, ayahs, revelation, translation}) {
  return (
    <Link className='flex items-center border border-2 w-full rounded-lg border-green-500 gap-4 p-4' to={`/surah/${number}`}>
      <div className='flex justify-center items-center'>
        <p className='absolute text-sm font-semibold'>{number}</p>
        <img src={numberFrame} alt="" />
      </div>
      <div>
        <p className='overflow-hidden text-clip'><span className='font-semibold'>{name}</span> ({translation})</p>
        <p className='text-sm'>{revelation} | {ayahs}</p>
      </div>
    </Link>
  )
}

export default SurahsCard