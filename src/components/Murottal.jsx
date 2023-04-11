import React from 'react'

function Murottal({source}) {

  return (
    <div>
      <audio className='h-10 max-sm:w-[11rem] text-sm' src={source} preload='none' controls></audio>
    </div>
  )
}

export default Murottal