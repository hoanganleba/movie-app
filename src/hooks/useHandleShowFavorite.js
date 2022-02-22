import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import userServices from '../services/userServices'

const useHandleShowsFavorite = () => {
  const { userId } = useContext(UserContext)

  const handleAddShowToFavorite = async (showId) => {
    try {
      const response = await userServices.addShowToFavorite(userId, showId)
      console.log(response.data.message)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  return { handleAddShowToFavorite }
}

export default useHandleShowsFavorite
