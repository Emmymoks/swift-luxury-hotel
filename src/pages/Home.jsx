import React from 'react'
import { useNavigate } from 'react-router-dom'
import rooms from '../data/rooms'
import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'

export default function Home(){
  const navigate = useNavigate()
  // pick first occurrence of each room type to show as featured
  const types = ['royal','deluxe','premium','studio']
  const featured = types.map(t => rooms.find(r => r.id === t)).filter(Boolean)

  return (
    <div>
      {/* Hero remains imported directly to preserve animations - kept in components */}
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl">Rooms & Suites</h2>
          <p className="text-gray-600 mt-2">Selected rooms — click view to see full details.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(r=> (
            <div key={r.id + r.img} className="bg-white rounded-lg overflow-hidden shadow">
                <img src={r.img} alt={r.name} loading="lazy" decoding="async" className="w-full h-40 object-cover"/>
              <div className="p-3 flex items-center justify-center">
                <button onClick={()=>navigate(`/rooms/${r.id}`)} className="btn-modern">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  )
}
