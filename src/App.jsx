import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutPage from './components/MainAbout'
import RoomsPage from './pages/RoomsPage'
// import BlogPage from './components/BlogPage'
import ContactPage from './components/MainContact'
import RoomCard from './components/RoomCard'
import BookingModal from './components/BookingModal'
import ExploreCafe from './components/ExploreCafe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-full bg-gray-100 overflow-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/roomcard' element={<RoomCard/>} />
        <Route path="/" element={<BookingModal />} />
        <Route path='/explorecafe' element={<ExploreCafe/>} />
      </Routes>
    </div>
  );
}

export default App