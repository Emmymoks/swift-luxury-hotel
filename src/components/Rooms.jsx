import React from 'react'
import rooms from '../data/rooms'
import RoomCard from './RoomCard'
export default function Rooms(){
  return (
    <section id="rooms" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl">Rooms & Suites</h2>
        <p className="text-gray-600 mt-2">Handpicked spaces to match your taste of luxury.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {rooms.map(r=> <RoomCard key={r.id} room={r} />)}
      </div>
    </section>
  )
}
