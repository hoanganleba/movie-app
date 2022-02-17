import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ShowDetail from './pages/ShowDetail'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto mt-12">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shows/:id" element={<ShowDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
