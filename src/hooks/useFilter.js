import { useState } from 'react'

const useFilter = () => {
  const [filterGenres, setFilterGenres] = useState([])
  const [filterTypes, setFilterTypes] = useState([])
  const [filterStatus, setFilterStatus] = useState([])

  const setGenresFilter = (value) => {
    if (filterGenres.includes(value)) {
      setFilterGenres((prevFilterGenres) => {
        return prevFilterGenres.filter((item) => item !== value)
      })
    } else {
      setFilterGenres((prevFilterGenres) => [...prevFilterGenres, value])
    }
  }

  const setTypesFilter = (value) => {
    if (filterTypes.includes(value)) {
      setFilterTypes((prevFilterTypes) => {
        return prevFilterTypes.filter((item) => item !== value)
      })
    } else {
      setFilterTypes((prevFilterTypes) => [...prevFilterTypes, value])
    }
  }

  const setStatusFilter = (value) => {
    if (filterStatus.includes(value)) {
      setFilterStatus((prevFilterStatus) => {
        return prevFilterStatus.filter((item) => item !== value)
      })
    } else {
      setFilterStatus((prevFilterStatus) => [...prevFilterStatus, value])
    }
  }

  return { filterGenres, setGenresFilter, filterTypes, setTypesFilter, filterStatus, setStatusFilter}
}

export default useFilter
