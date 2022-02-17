import React from 'react'
import { Link } from 'react-router-dom'
import useSearch from '../hooks/useSearch'

const SearchBar = () => {
  const [searchData, inputValue, handleInputChange, reset] = useSearch()

  return (
    <>
      <div className="relative z-20 flex items-center col-span-4 px-2 bg-red-700 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 feather feather-search text-gray-50"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Search movies"
          className="w-full h-full p-2 ml-2 placeholder-gray-100 bg-transparent text-gray-50 focus:outline-none"
          type="text"
        />
        <div className={`${inputValue !== '' ? 'block' : 'hidden'} absolute inset-x-0 z-10 overflow-y-auto bg-white divide-y divide-gray-100 rounded shadow-2xl max-h-72 shadow-gray-900/90 top-12`}>
          {searchData?.map((item, index) => (
            <Link className="flex px-3 py-2" onClick={() => reset()} key={index} to={`/shows/${item.show.id}`}>
              <img className="w-16 rounded-sm" src={item.show.image?.medium} alt={item.show.name} />
              <div className="ml-3">
                <p className="text-gray-900/90">{item.show.name}</p>
                <p className="text-xs text-gray-900/75">Rating: {item.show.rating.average ? item.show.rating.average : "none"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default SearchBar
