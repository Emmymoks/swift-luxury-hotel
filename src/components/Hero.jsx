import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
export default function Hero(){
  return (
  <section className="relative pt-12 luxury-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
  <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="motion-accelerate">
          <h1 className="font-heading text-5xl md:text-6xl leading-tight">Swift Luxury Hotel</h1>
          <p className="mt-4 text-lg text-gray-600">Where Luxury is defined.</p>
          <p className="mt-4 text-lg text-gray-600">Indulge in thoughtfully curated spaces, exceptional service and unforgettable experiences.</p>
          <div className="mt-8 flex gap-4">
            <Link to="/rooms" className="btn-modern">Explore Rooms</Link>
            <Link to="/about" className="btn-modern" style={{background: 'var(--accent-2)', color: 'white'}}>Contact Us</Link>
          </div>
          <div className="mt-6 text-sm text-gray-500">Located in the heart of the city... concierge available 24/7.</div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.15}} className="rounded-lg overflow-hidden shadow-2xl motion-accelerate">
          <Slideshow />
        </motion.div>
      </div>
    </section>
  )
}
