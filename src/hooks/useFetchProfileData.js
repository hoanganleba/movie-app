import { useEffect, useState } from 'react'
import showsServices from '../services/showsServices'
import userServices from '../services/userServices'

const useFetchProfileData = (id) => {
  const [user, setUser] = useState({})
  const [userFavoriteShows, setUserFavoriteShows] = useState([])
  const [userFavoriteShowsId, setUserFavoriteShowsId] = useState([])

  const fetchUserData = async (id) => {
    const { data } = await userServices.getProfile(id)
    setUser(data)
    setUserFavoriteShowsId(data.favorites)
    data.favorites.map(async (item) => {
      const {data} = await showsServices.getShow(item)
      setUserFavoriteShows((prevUserFavoriteShows) => [
        ...prevUserFavoriteShows,
        data,
      ])
    })
  }

  useEffect(() => {
    fetchUserData(id)
  }, [id])

  return { user, userFavoriteShows, userFavoriteShowsId }
}

export default useFetchProfileData
