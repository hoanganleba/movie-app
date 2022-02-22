import React from 'react'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const {
    handleEmailInputChange,
    handlePasswordInputChange,
    handleSubmitLogin,
    alert,
    loading
  } = useLogin()

  return (
    <div className="max-w-2xl mx-auto">
      {alert.message ? <Alert type={alert.type} message={alert.message} /> : ''}
      <form onSubmit={handleSubmitLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            onChange={handleEmailInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="name@movie.com"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required=""
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {loading ? <Loading size="w-5 h-5" /> : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default Login
