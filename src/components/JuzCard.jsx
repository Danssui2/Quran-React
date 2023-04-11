import React from 'react'
import { Link } from 'react-router-dom'
import numberFrame from '../assets/numberFrame.svg'

function JuzCard({start, end, number}) {
  return (
    <Link className='flex items-center border border-2 w-full rounded-lg border-green-500 gap-4 p-4' to={`/juz/${number}`}>
      <div className='flex justify-center items-center'>
        <p className='absolute text-sm font-semibold'>{number}</p>
        <img src={numberFrame} alt="" />
      </div>
      <div>
        <p className='text-lg font-semibold'>{'Juz ' + number}</p>
        <p className='text-sm'>{start + ' ~ ' + end}</p>
      </div>
    </Link>
  )
}

export default JuzCard