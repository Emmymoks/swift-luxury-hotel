import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white/60 backdrop-blur-sm fixed top-0 z-50">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold">S</div>
        <div>
          <div className="font-heading text-lg">Swift Luxury Hotel</div>
          <div className="text-xs text-gray-500">Where Luxury is defined</div>
        </div>
      </Link>

  <div className="hidden md:flex gap-6 items-center">
    <Link to="/rooms" className="nav-link">Rooms</Link>
    <Link to="/gallery" className="nav-link">Gallery</Link>
    <Link to="/about" className="nav-link">About</Link>
  <Link to="/book" className="btn-modern">Book Now</Link>
  </div>

      <div className="md:hidden">
        <button aria-label="menu" onClick={()=>setOpen(s=>!s)} className="p-2 rounded-md border">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute right-4 top-16 bg-white shadow-lg rounded-md w-56 p-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link onClick={()=>setOpen(false)} to="/" className="nav-link">Home</Link>
            <Link onClick={()=>setOpen(false)} to="/rooms" className="nav-link">Rooms</Link>
            <Link onClick={()=>setOpen(false)} to="/gallery" className="nav-link">Gallery</Link>
            <Link onClick={()=>setOpen(false)} to="/about" className="nav-link">About</Link>
            <Link onClick={()=>setOpen(false)} to="/book" className="btn-modern">Book Now</Link>
          </nav>
        </div>
      )}
    </nav>
  )
}
