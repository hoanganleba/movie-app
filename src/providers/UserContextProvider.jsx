import { useEffect, useState } from 'react'
import UserContext from '../contexts/UserContext'

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState('')

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      setUserId(localStorage.getItem('userId'))
    }
  }, [userId])
  
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
