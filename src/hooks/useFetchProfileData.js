import { useEffect, useState } from 'react'
import userServices from '../services/userServices'

const useFetchProfileData = (id) => {
  const [user, setUser] = useState({})

  const fetchUserData = async (id) => {
    const { data } = await userServices.getProfile(id)
    setUser(data)
  }

  useEffect(() => {
    fetchUserData(id)
  }, [id])

  return user
}

export default useFetchProfileData
