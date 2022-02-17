import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    axios
      .post('/api/login', {
        email,
        password,
      })
      .then(function (response) {
        console.log(response)
        navigate("/", { replace: true });
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
