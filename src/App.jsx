import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ShowDetail from './pages/ShowDetail'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UserContextProvider from './providers/UserContextProvider'
import Profile from './pages/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <div className="max-w-[90%] mx-auto py-12">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/shows/:id" element={<ShowDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
