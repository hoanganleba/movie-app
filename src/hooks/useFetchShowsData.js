import { useEffect, useState } from 'react'
import showsServices from '../services/showsServices'

const useFetchShowsData = () => {
  const [showsData, setShowsData] = useState([])

  const fetchShowsData = async () => {
    const { data } = await showsServices.getAllShows()
    setShowsData(data)
  }

  useEffect(() => {
    fetchShowsData()
  }, [])

  return showsData
}

export default useFetchShowsData
