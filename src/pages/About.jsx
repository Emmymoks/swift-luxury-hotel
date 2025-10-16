import React from 'react'
import images from '../data/gallery'

export default function About(){
  return (
    <section className="pt-8">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-heading text-4xl">About Swift Luxury Hotel</h2>
        <p className="text-gray-600 mt-4">Established in 2010, Swift Luxury Hotel blends contemporary design with timeless hospitality. Our mission is to create memorable stays through attention to detail and exceptional service.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="font-semibold">Our Philosophy</h3>
            <p className="text-gray-600 mt-2">Personalised experiences, sustainable practices, and uncompromising comfort.</p>

            <h3 className="font-semibold mt-6">Amenities</h3>
            <ul className="text-gray-600 list-disc list-inside mt-2">
              <li>Spa & wellness</li>
              <li>Rooftop pool</li>
              <li>Private dining & events</li>
              <li>24/7 Concierge</li>
            </ul>
          </div>

          {/* Responsive image: sits in second column on md+, stacks on small screens */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={images[0]} alt="hotel interior" loading="lazy" decoding="async" className="w-full h-80 object-cover md:h-full md:min-h-[320px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
