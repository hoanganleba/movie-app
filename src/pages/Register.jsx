import React from 'react'
import useRegister from '../hooks/useRegister'

const Register = () => {
  const [
    handleEmailInputChange,
    handlePasswordInputChange,
    handleSubmitRegister,
  ] = useRegister()

  return (
    <form onSubmit={handleSubmitRegister} className="max-w-2xl mx-auto">
      <div className="mb-6">
        <label
          for="email"
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
          for="password"
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
          for="repeat-password"
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
        Register
      </button>
    </form>
  )
}

export default Register
