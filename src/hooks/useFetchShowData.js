import { useEffect, useState } from 'react'
import showsServices from '../services/showsServices'

const useFetchShowData = (id) => {
  const [showData, setShowData] = useState({})

  const fetchShowData = async (id) => {
    const { data } = await showsServices.getShow(id)
    setShowData(data)
  }

  useEffect(() => {
    fetchShowData(id)
  }, [id])

  return showData
}

export default useFetchShowData
