import React from 'react'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import useRegister from '../hooks/useRegister'

const Register = () => {
  const {
    handleEmailInputChange,
    handlePasswordInputChange,
    handleSubmitRegister,
    alert,
    loading,
  } = useRegister()

  return (
    <div className="max-w-2xl mx-auto">
      {alert.message ? <Alert type={alert.type} message={alert.message} /> : ''}
      <form onSubmit={handleSubmitRegister}>
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
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
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
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
            required=""
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {loading ? <Loading size="w-5 h-5" /> : "Register"}
        </button>
      </form>
    </div>
  )
}

export default Register
