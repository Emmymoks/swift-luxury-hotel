import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import rooms from '../data/rooms'

export default function RoomDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const room = rooms.find(r=> r.id === id) || rooms[0]
  return (
    <section className="pt-8">
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <img src={room.img} alt={room.name} loading="lazy" decoding="async" className="w-full h-96 object-cover rounded-lg shadow"/>
        </div>
        <div>
          <h2 className="font-heading text-3xl">{room.name}</h2>
          <p className="text-gray-600 mt-3">{room.desc}</p>
          <div className="mt-4 text-gray-600">{room.beds} • {room.size}</div>
          <div className="mt-4 text-2xl font-bold">${room.price} <span className="text-sm font-medium text-gray-500">/night</span></div>
          <div className="mt-6 flex gap-3">
            <button onClick={()=>navigate('/book')} className="btn-modern">Book now</button>
            <button onClick={()=>navigate('/rooms')} className="px-4 py-2 border rounded">Back to rooms</button>
          </div>
        </div>
      </div>
    </section>
  )
}
