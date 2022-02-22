import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/Movie/MovieCard'
import UserContext from '../contexts/UserContext'
import useFetchProfileData from '../hooks/useFetchProfileData'

const Profile = () => {
  const { userId } = useContext(UserContext)
  const { user, userFavoriteShows } = useFetchProfileData(userId)

  return (
    <>
      <h1 className="mb-3 text-2xl font-medium text-gray-900">Profile</h1>
      <p>Email: {user.email}</p>
      <h3 className="mt-8 mb-3 font-medium text-gray-900">Favorite Shows</h3>
      <div className="grid grid-cols-6 mt-6 gap-x-12 gap-y-20">
        {userFavoriteShows?.map((item, index) => (
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

export default Profile
