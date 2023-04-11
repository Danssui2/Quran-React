import axios from "axios"

const API1 = axios.create({baseURL: 'https://quran-api-id.vercel.app/'})
const API2 = axios.create({baseURL: 'https://quran-6g54mk0s9-gadingnst.vercel.app/'})

export const getSurah = async (surahIndex) => {
  console.log(surahIndex)
  const result = await API1.get(`/surahs/${surahIndex}/ayahs`)
  .then(res => {
    return res.data
  })
  .catch(res => {
    console.log(res)
  })
  return result
}

export const getJuz = async (juzIndex) => {
  console.log(juzIndex)
  const result = await API2.get(`/juz/${juzIndex}`)
  .then(res => {
    return res.data.data
  })
  .catch(res => {
    console.log(res)
  })
  return result
}


