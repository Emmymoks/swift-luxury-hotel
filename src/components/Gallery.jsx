import React from 'react'
import images from '../data/gallery'

export default function Gallery(){
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="font-heading text-3xl mb-6">Gallery</h3>
      <div className="grid md:grid-cols-4 gap-4">
        {images.map((src,i)=>(
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <img src={src} alt={'gallery-'+i} className="w-full h-48 object-cover"/>
          </div>
        ))}
      </div>
    </section>
  )
}
