
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='relative'>
    <Navbar />
    <div className="bg-[#f9f6ed] min-h-screen w-full text-gray-900 antialiased font-sans selection:bg-orange-200 selection:text-orange-900">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    <Footer />
    </div>
  )
}

export default App