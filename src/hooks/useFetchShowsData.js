import { useEffect, useState } from 'react'
import showsServices from '../services/showsServices'

const useFetchShowsData = () => {
  const [initialShowsData, setInitialShowsData] = useState([])
  const [showsData, setShowsData] = useState([])
  const [genres, setGenres] = useState([])
  const [types, setTypes] = useState([])
  const [status, setStatus] = useState([])

  const fetchShowsData = async () => {
    const { data } = await showsServices.getAllShows()
    setInitialShowsData(data)
    setShowsData(data)
    let genres = []
    let types = []
    let status = []

    data.forEach((element) => {
      genres.push(element.genres)
    })

    data.forEach((element) => {
      types.push(element.type)
    })

    data.forEach((element) => {
      status.push(element.status)
    })

    setTypes([...new Set(types)])
    setStatus([...new Set(status)])
    setGenres([...new Set(genres.flat())])
  }

  const filterGenres = (genres) => {
    return initialShowsData
      .map((item) => {
        if (item.genres.filter((item) => genres.includes(item)).length !== 0) {
          return item
        }
      })
      .filter((item) => item !== undefined)
  }

  const filterTypes = (types) => {
    return initialShowsData.filter((item) => types.includes(item.type))
  }

  const filterStatus = (status) => {
    return initialShowsData.filter((item) => status.includes(item.status))
  }

  const handleFilterData = (genres, types, status) => {
    if (genres.length !== 0 && types.length !== 0 && status.length !== 0) {
      setShowsData(
        filterGenres(genres)
          .filter((item) => filterTypes(types).includes(item))
          .filter((item) => filterStatus(status).includes(item))
      )
    } else if (genres.length !== 0 && types.length !== 0) {
      setShowsData(
        filterGenres(genres).filter((item) => filterTypes(types).includes(item))
      )
    } else if (types.length !== 0 && status.length !== 0) {
      setShowsData(
        filterTypes(types).filter((item) => filterStatus(status).includes(item))
      )
    } else if (genres.length !== 0 && status.length !== 0) {
      setShowsData(
        filterGenres(genres).filter((item) =>
          filterStatus(status).includes(item)
        )
      )
    } else if (types.length !== 0) {
      setShowsData(filterTypes(types))
    } else if (genres.length !== 0) {
      setShowsData(filterGenres(genres))
    } else if (status.length !== 0) {
      setShowsData(filterStatus(status))
    } else {
      setShowsData(initialShowsData)
    }
  }

  useEffect(() => {
    fetchShowsData()
  }, [])

  return { showsData, genres, types, status, handleFilterData }
}

export default useFetchShowsData
