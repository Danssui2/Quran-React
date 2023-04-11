import React, { useEffect, useState } from 'react'
import SurahsJuzTab from '../components/SurahsJuzTab'

function Home() {
  
  const Hero = () => {
    return (
      <div className='w-full h-[80vh] flex justify-center flex-col heroimg mb-10'>
        <div className='ml-[10%] w-[20rem] xl:w-[26rem]'>
          <h1 className='text-7xl xl:text-8xl text-gray-200'>Al Quran <br /> Digital.</h1>
          <p className='text-gray-300 mt-2 md:text-lg'>Baca kitab suci Al-Quran dimana pun dan kapan pun cukup dari sentuhan jari.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='flex w-screen relative flex-col items-center bg-gray-100'>
        <Hero/>
      <div className='px-[8%]'>
        <SurahsJuzTab/>
      </div>
      <p className='pb-6'>M Ardan IX-B | @ui.dans</p>
    </div>
  )
}

export default Home