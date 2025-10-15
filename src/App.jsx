import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Loading from './components/Loading'

// Lazy-loaded pages
const Home = lazy(()=> import('./pages/Home'))
const RoomsPage = lazy(()=> import('./pages/RoomsPage'))
const GalleryPage = lazy(()=> import('./pages/GalleryPage'))
const About = lazy(()=> import('./pages/About'))
const BookNow = lazy(()=> import('./pages/BookNow'))
const RoomDetail = lazy(()=> import('./pages/RoomDetail'))

export default function App(){
  return (
    <div className="min-h-screen font-body">
      <Nav />
  <main className="pt-20">
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/rooms" element={<RoomsPage/>} />
            <Route path="/rooms/:id" element={<RoomDetail/>} />
            <Route path="/gallery" element={<GalleryPage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/book" element={<BookNow/>} />
            <Route path="*" element={<Home/>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
