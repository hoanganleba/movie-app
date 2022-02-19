import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ShowDetail from './pages/ShowDetail'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="max-w-[90%] mx-auto my-12">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shows/:id" element={<ShowDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
