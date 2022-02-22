import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import userServices from '../services/userServices'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setUserId } = useContext(UserContext)

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert({ type: '', message: '' })
    if (email === '' || password === '') {
      setAlert({
        type: 'danger',
        message: 'Email or password must not left empty',
      })
      setLoading(false)
      return
    }
    userServices
      .login({ email, password })
      .then((response) => {
        setUserId(response.data.userId)
        localStorage.setItem('userId', response.data.userId)
        setAlert({ type: 'success', message: response.data.message })
        setTimeout(() => {
          navigate('/', { replace: true })
        }, 500)
      })
      .catch(function (error) {
        setAlert({ type: 'danger', message: error.response.data.message })
        setLoading(false)
      })
  }

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value)
  }

  return {
    handleEmailInputChange,
    handlePasswordInputChange,
    handleSubmitLogin,
    alert,
    loading,
  }
}

export default useLogin
