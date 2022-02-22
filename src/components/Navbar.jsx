import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import Logo from './Logo'
import SearchBar from './SearchBar'

const Navbar = () => {
  const { userId } = useContext(UserContext)
  return (
    <div className="sticky top-0 bg-red-600 shadow-lg">
      <div className="max-w-[90%] py-4 mx-auto">
        <div className="grid grid-cols-6 gap-x-12">
          <Link className="flex items-center" to={'/'}>
            <Logo />
          </Link>
          <SearchBar />
          {userId ? (
            <Link to={`/profile`} className="flex items-center justify-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://www.w3schools.com/w3images/avatar2.png"
                alt="Avatar"
              />
            </Link>
          ) : (
            <div className="flex items-center justify-end gap-x-6 text-gray-50">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
