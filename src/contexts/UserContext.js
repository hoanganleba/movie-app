import { createContext } from 'react'

const UserContext = createContext({
  userId: '',
  setUserId: (userId) => {},
})

export default UserContext
