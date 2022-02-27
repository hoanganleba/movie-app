import { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/Movie/MovieCard'
import useFetchShowsData from '../hooks/useFetchShowsData'
import useFilter from '../hooks/useFilter'

const Home = () => {
  const { showsData, genres, types, status, handleFilterData } =
    useFetchShowsData()
  const [showFilter, setShowFilter] = useState(false)
  const {
    filterGenres,
    setGenresFilter,
    filterTypes,
    setTypesFilter,
    filterStatus,
    setStatusFilter,
  } = useFilter()

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium text-gray-900">All Shows</h1>
        <button
          onClick={() => setShowFilter(!showFilter)}
          type="button"
          className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700"
        >
          Filter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showFilter ? (
        <div className="p-4 mt-6 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-3 mt-2 mb-3">
            <div>
              <h3 className="mb-2">Genres</h3>
              {genres.map((item, index) => (
                <div
                  className={`${
                    filterGenres.includes(item)
                      ? 'bg-red-600 text-white'
                      : 'bg-red-100 text-red-600'
                  } border border-red-600 cursor-pointer inline-block mb-1.5 mr-2 px-3 py-1.5 text-xs rounded-full`}
                  key={index}
                  onClick={() => setGenresFilter(item)}
                >
                  {item}
                </div>
              ))}
            </div>
            <div>
              <h3 className="mb-2">Types</h3>
              {types.map((item, index) => (
                <div
                  className={`${
                    filterTypes.includes(item)
                      ? 'bg-red-600 text-white'
                      : 'bg-red-100 text-red-600'
                  } border border-red-600 cursor-pointer inline-block mb-1.5 mr-2 px-3 py-1.5 text-xs rounded-full`}
                  key={index}
                  onClick={() => setTypesFilter(item)}
                >
                  {item}
                </div>
              ))}
            </div>
            <div>
              <h3 className="mb-2">Status</h3>
              {status.map((item, index) => (
                <div
                  className={`${
                    filterStatus.includes(item)
                      ? 'bg-red-600 text-white'
                      : 'bg-red-100 text-red-600'
                  } border border-red-600 cursor-pointer inline-block mb-1.5 mr-2 px-3 py-1.5 text-xs rounded-full`}
                  key={index}
                  onClick={() => setStatusFilter(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() =>
              handleFilterData(filterGenres, filterTypes, filterStatus)
            }
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Apply
          </button>
        </div>
      ) : (
        ''
      )}

      <div className="grid grid-cols-1 mt-6 md:grid-cols-4 lg:grid-cols-6 gap-y-10 lg:gap-y-20 gap-x-12">
        {showsData?.map((item, index) => (
          <Link key={index} to={`/shows/${item.id}`}>
            <MovieCard
              name={item.name}
              genres={item.genres}
              imgSrc={item.image?.medium}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Home
