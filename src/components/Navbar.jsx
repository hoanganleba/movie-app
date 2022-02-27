import { useContext, Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import UserContext from '../contexts/UserContext'
import Logo from './Logo'
import SearchBar from './SearchBar'

const Navbar = () => {
  const { userId, setUserId } = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <div className="sticky top-0 bg-red-600 shadow-lg">
      <div className="max-w-[90%] py-4 mx-auto">
        <div className="lg:grid lg:grid-cols-6 gap-x-12">
          <Link className="flex items-center" to={'/'}>
            <Logo />
          </Link>
          <SearchBar />
          {userId ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  as="div"
                  className="inline-flex justify-end w-full text-sm font-medium text-white"
                >
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    alt="Avatar"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-36 px-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg py-1.5 focus:outline-none">
                  <div className="p-1">
                    <Menu.Item>
                      <Link to="/profile">Profile</Link>
                    </Menu.Item>
                  </div>
                  <div className="p-1">
                    <Menu.Item>
                      <button
                        onClick={() => {
                          localStorage.removeItem('userId')
                          setUserId('')
                          navigate('/', { replace: true })
                        }}
                      >
                        Logout
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <div className="flex items-center lg:justify-end gap-x-6 text-gray-50">
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
