import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import images from '../data/gallery'

export default function Slideshow({className=''}){
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setIndex(i=> (i+1) % images.length), 4500)
    return ()=> clearInterval(t)
  },[])

  return (
    // keep a fixed-height container so content below doesn't shift
    <div className={className + ' relative h-96 rounded-lg overflow-hidden'} aria-live="polite">
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`slide-${index}`}
          // absolutely positioned so entering/exiting won't affect layout
          initial={{opacity:0, x:20}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:-20}}
          transition={{duration:0.6}}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute left-4 bottom-4 flex gap-2">
        {images.map((_,i)=> (
          <button key={i} onClick={()=>setIndex(i)} className={`w-3 h-3 rounded-full ${i===index? 'bg-white':'bg-white/40'}`} aria-label={`go to slide ${i+1}`} />
        ))}
      </div>
    </div>
  )
}
