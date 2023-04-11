import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getSurah } from '../api'
import surahlist from '../assets/surahlist.json'
import homeIcon from '../assets/home.svg'
import Ayah from '../components/Ayah'
import { Link } from 'react-router-dom'

function Surah() {
  const index = useParams()

  const [surah, setSurah] = useState()
  const [surahDesc, setSurahDesc] = useState()

  const fetchSurah = async (index) => {
    const surahs = await getSurah(index?.id)
    setSurah(surahs)
  }

  useEffect(() => {
    fetchSurah(index)
    let surahinfo = surahlist.find(i => i.number == index.id)
    setSurahDesc(surahinfo)
    console.log(surahinfo)
  }, [])

  return (
    <div className='flex w-screen relative justify-center pb-20'>
      <Link to={'/'} className='fixed w-14 h-14 bg-gray-200 flex justify-center items-center rounded-lg bottom-5 right-5 p-4'><img src={homeIcon} alt="" /></Link>
      <div className='flex justify-center w-3/4 max-w-3xl flex-col divide-y'>
      <div className='py-10'>
        <p className='text-lg font-semibold'>{surahDesc?.name} <span className='text-md font-normal'>( {surahDesc?.revelation} )</span></p>
        <p><span className='font-semibold'>{surahDesc?.numberOfAyahs}</span> ayat | Surah ke-<span className='font-semibold'>{surahDesc?.number}</span> dalam Al-Quran</p>
        <p>{surahDesc?.description}</p>
      </div>
        { surah?
          surah.map((surah, i) => {
            return (
              <Ayah key={i} arab={surah?.arab} translation={surah?.translation} audio={surah?.audio[Object.keys(surah.audio)[0]]} ayah={surah?.number?.inSurah} tafsirAyah={surah?.tafsir?.kemenag?.long}/>
            )
          })

          : "Loading..."
        }
      </div>
    </div>
  )
}

export default Surah