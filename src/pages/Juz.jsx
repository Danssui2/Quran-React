import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getJuz } from '../api'
import Ayah from '../components/Ayah'
import homeIcon from '../assets/home.svg'
import { Link } from 'react-router-dom'

function Juz() {
  const index = useParams()

  const [juz, setJuz] = useState()

  const fetchjuz = async (index) => {
    const juz = await getJuz(index?.id)
    setJuz(juz?.verses)
  }

  useEffect(() => {
    fetchjuz(index)
  }, [])


  return (
    <div className='flex w-screen relative justify-center pt-10 pb-20'>
      <Link to={'/'} className='fixed w-14 h-14 bg-gray-200 flex justify-center items-center rounded-lg bottom-5 right-5 p-4'><img src={homeIcon} alt="" /></Link>
      <div className='flex justify-center w-3/4 max-w-3xl flex-col divide-y'>
        { juz?
          juz.map((juz, i) => {
            return ( 
              <Ayah key={i} arab={juz?.text?.arab} translation={juz?.translation?.id} audio={juz?.audio?.primary} tafsirAyah={juz?.tafsir?.id?.long} ayah={juz?.number?.inSurah}/>
            )
          })

          : "Loading..."
        }
      </div>
    </div>
  )
}

export default Juz