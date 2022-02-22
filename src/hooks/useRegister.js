import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userServices from '../services/userServices'

const useRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert({type: '', message: ''})
    userServices
      .register({ email, password })
      .then(function (response) {
        setLoading(false)
        setAlert({type: 'success', message: response.data.message})
        setTimeout(() => {
          navigate('/login', { replace: true })
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
    handleSubmitRegister,
    alert,
    loading,
  }
}

export default useRegister
