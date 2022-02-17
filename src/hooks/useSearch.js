import { useState } from 'react'
import { debounce } from 'lodash'
import showsServices from '../services/showsServices'

const useSearch = () => {
  const [searchData, setSearchData] = useState([])
  const [inputValue, setInputValue] = useState('')

  const fetchSearchData = async (query) => {
    const { data } = await showsServices.searchShows(query)
    setSearchData(data)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    debounce(() => fetchSearchData(inputValue), 500)()
  }

  const reset = () => {
    setInputValue('')
    setSearchData([])
  }

  return [searchData, inputValue, handleInputChange, reset]
}

export default useSearch
