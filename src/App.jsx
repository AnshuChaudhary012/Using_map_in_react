import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Report from './pages/Report.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
