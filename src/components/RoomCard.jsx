import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function RoomCard({room}) {
  const navigate = useNavigate()
  return (
  <motion.div whileHover={{scale:1.01}} className="card-modern overflow-hidden motion-accelerate">
  <img src={room.img} alt={room.name} loading="lazy" decoding="async" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold">{room.name}</h3>
        <p className="text-sm text-gray-500">{room.desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-600">{room.beds} • {room.size}</div>
          <div className="text-lg font-bold">${room.price}<span className="text-sm font-medium text-gray-500">/night</span></div>
        </div>
        <div className="mt-4 flex gap-2">
            <button onClick={()=>navigate(`/rooms/${room.id}`)} className="btn-accent">View</button>
            <button onClick={()=>navigate('/book')} className="btn-dark">Book</button>
        </div>
      </div>
    </motion.div>
  )
}
