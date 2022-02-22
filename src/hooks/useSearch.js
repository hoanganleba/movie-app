import { useState } from 'react'
import { debounce } from 'lodash'
import showsServices from '../services/showsServices'

const useSearch = () => {
  const [searchData, setSearchData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchSearchData = async (query) => {
    setLoading(true)
    const { data } = await showsServices.searchShows(query)
    setSearchData(data)
    setLoading(false)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    debounce(() => fetchSearchData(inputValue), 500)()
  }

  const reset = () => {
    setInputValue('')
    setSearchData([])
  }

  return { searchData, inputValue, handleInputChange, reset, loading }
}

export default useSearch
