import React, { useState, useRef } from 'react'
import images from '../data/gallery'

export default function Gallery(){
  const [index, setIndex] = useState(0)
  const touch = useRef({startX:0, startY:0, moved:false})

  function prev(){ setIndex(i=> (i - 1 + images.length) % images.length) }
  function next(){ setIndex(i=> (i + 1) % images.length) }

  function onTouchStart(e){
    const t = e.touches[0]
    touch.current.startX = t.clientX
    touch.current.startY = t.clientY
    touch.current.moved = false
  }

  function onTouchMove(e){
    touch.current.moved = true
  }

  function onTouchEnd(e){
    if(!touch.current.moved) return
    const t = (e.changedTouches && e.changedTouches[0]) || e.touches[0]
    if(!t) return
    const dx = t.clientX - touch.current.startX
    const dy = t.clientY - touch.current.startY
    // only consider mostly-horizontal swipes, threshold 50px
    if(Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)){
      if(dx > 0) prev()
      else next()
    }
  }

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="font-heading text-3xl mb-6">Gallery</h3>

      {/* Desktop / tablet grid */}
      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {images.map((src,i)=>(
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <img src={src} alt={`gallery-${i}`} loading="lazy" decoding="async" className="w-full h-48 object-cover"/>
          </div>
        ))}
      </div>

      {/* Mobile carousel with swipe support */}
      <div className="md:hidden">
        <div
          className="relative rounded-lg overflow-hidden shadow h-56"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img src={images[index]} alt={`gallery-${index}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />

          {/* left / right controls (small and subtle) */}
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-2"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-2"
          >
            ›
          </button>

        </div>

        {/* indicators */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_,i)=> (
            <button key={i} onClick={()=>setIndex(i)} aria-label={`go to image ${i+1}`} className={`w-2 h-2 rounded-full ${i===index? 'bg-amber-600':'bg-gray-300'}`}></button>
          ))}
        </div>
      </div>
    </section>
  )
}
