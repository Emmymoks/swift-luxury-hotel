import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sampleReviews = [
  { id:1, name:'Olivia', text:'Exceptional stay — staff went above and beyond!' },
  { id:2, name:'Liam', text:'Impeccable rooms and amazing breakfast.' },
  { id:3, name:'Emma', text:'Beautiful hotel, great location and service.' },
  { id:4, name:'Noah', text:'A memorable stay. Will return next year!' },
  { id:5, name:'Ava', text:'Rooms were spotless and very comfortable.' },
  { id:6, name:'Sophia', text:'Loved the rooftop pool and the view.' },
  { id:7, name:'Mason', text:'Staff were attentive and friendly throughout.' },
  { id:8, name:'Isabella', text:'Perfect for a weekend getaway — highly recommend.' },
  { id:9, name:'Lucas', text:'Fantastic service and beautiful decor.' },
  { id:10, name:'Mia', text:'Well located and very clean. Great value!' }
]

function Stars({count=5}){
  return (
    <div className="flex text-yellow-400">
      {Array.from({length:count}).map((_,i)=> (
        <svg key={i} className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.389 2.46c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.605 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const touch = useRef({startX:0, startY:0, moved:false})

  useEffect(()=>{
    if(paused) return
    timerRef.current = setInterval(()=> setIndex(i=> (i+1) % sampleReviews.length), 4000)
    return ()=> clearInterval(timerRef.current)
  },[paused])

  function go(i){
    setIndex(i % sampleReviews.length)
  }

  function prev(){
    setIndex(i=> (i - 1 + sampleReviews.length) % sampleReviews.length)
  }

  function next(){
    setIndex(i=> (i + 1) % sampleReviews.length)
  }

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
    if(Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)){
      if(dx > 0) prev()
      else next()
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl">Guest Reviews</h2>
        <p className="text-gray-600 mt-2">What our guests are saying</p>
      </div>

      <div className="relative mx-auto max-w-2xl">
        {/* fixed height container to avoid layout shift */}
        <div className="relative h-40"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={sampleReviews[index].id}
              initial={{opacity:0, y:10}}
              animate={{opacity:1, y:0}}
              exit={{opacity:0, y:-10}}
              transition={{duration:0.6}}
              className="absolute inset-0 bg-white shadow rounded-lg p-6 flex flex-col justify-center motion-accelerate"
              onMouseEnter={()=>setPaused(true)}
              onMouseLeave={()=>setPaused(false)}
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold">{sampleReviews[index].name}</div>
                <Stars />
              </div>
              <p className="text-gray-600 mt-3">"{sampleReviews[index].text}"</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* controls: dot indicators centered */}
        <div className="flex items-center justify-center mt-4">
          <div className="flex gap-2">
            {sampleReviews.map((r,i)=> (
              <button key={r.id} onClick={()=>go(i)} aria-label={`show review ${i+1}`} className={`w-3 h-3 rounded-full ${i===index? 'bg-black':'bg-gray-300'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
