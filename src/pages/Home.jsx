import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/Movie/MovieCard'
import useFetchShowsData from '../hooks/useFetchShowsData'

const Home = () => {
  const showsData = useFetchShowsData()
  return (
    <>
      <h1 className="mb-3 text-xl font-medium text-gray-900">All Shows</h1>
      <div className="grid grid-cols-6 gap-y-20 gap-x-12">
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
