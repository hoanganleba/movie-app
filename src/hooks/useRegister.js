import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    axios
      .post('/api/register', {
        email,
        password,
      })
      .then(function (response) {
        console.log(response)
        navigate('/login', { replace: true })
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

  return [handleEmailInputChange, handlePasswordInputChange, handleSubmitRegister]
}

export default useRegister
