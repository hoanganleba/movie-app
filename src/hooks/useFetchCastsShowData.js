import { useEffect, useState } from 'react'
import showsServices from '../services/showsServices'

const useFetchCastsShowData = (showId) => {
  const [casts, setCasts] = useState([])
  const fetchCastsShowData = async (showId) => {
    const { data } = await showsServices.getAllCastsShow(showId)
    setCasts(data)
  }

  useEffect(() => {
    fetchCastsShowData(showId)
  }, [showId])

  return casts
}

export default useFetchCastsShowData
