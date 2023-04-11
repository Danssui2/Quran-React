import React, { useEffect, useState } from 'react'
import SurahsCard from './SurahsCard'
import JuzCard from './JuzCard'

import juzlist from '../assets/juzlist.json'
import surahlist from '../assets/surahlist.json'

function Surahs() {
  const [allSurah, setAllSurah] = useState()
  const [allJuz, setAllJuz] = useState()
  const [tab, setTab] = useState('tab1')

  useEffect(() => {
    setAllSurah(surahlist)
    setAllJuz(juzlist)
  }, [])

  useEffect(() => {
    if (tab == 'tab1') {
      document.querySelector('.tab1').classList.add('active')
      document.querySelector('.tab2').classList.remove('active')
    } else if (tab == 'tab2') {
      document.querySelector('.tab1').classList.remove('active')
      document.querySelector('.tab2').classList.add('active')
    }
  }, [tab])
 
  return (
    <div className='grid w-full xl:grid-cols-3 md:grid-cols-2 place-items-center gap-4 pb-12'>  

      <div className='w-full flex justify-center gap-20 md:col-span-2 xl:col-span-3 mb-6'>
        <button onClick={() => setTab('tab1')} className='tab1 active'>Surah</button>
        <button onClick={() => setTab('tab2')} className='tab2'>Juz</button>
      </div>

      { 
        tab == 'tab1' ?
          allSurah?
            allSurah.map((allSurah, i) => {
              return <SurahsCard name={allSurah.name} number={allSurah.number} ayahs={allSurah.numberOfAyahs} translation={allSurah.translation} revelation={allSurah.revelation} key={i} />
            })

          : "Loading..."
        :
          allJuz?
            allJuz.map((allJuz, i) => {
              return <JuzCard start={allJuz.start.name + ' ' + allJuz.start.verse} end={allJuz.end.name + ' ' + allJuz.end.verse} number={i+=1} key={i} />
            })

          : "Loading..."
      }
    </div>
  )
}

export default Surahs