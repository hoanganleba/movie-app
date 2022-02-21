import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import userServices from '../services/userServices'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { setUserId } = useContext(UserContext)

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    userServices
      .login({ email, password })
      .then((response) => {
        setUserId(response.data.userId)
        localStorage.setItem('userId', response.data.userId)
        navigate('/', { replace: true })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value)
  }

  return [handleEmailInputChange, handlePasswordInputChange, handleSubmitLogin]
}

export default useLogin
