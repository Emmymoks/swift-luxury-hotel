import React, { Suspense, lazy } from 'react'
import Loading from '../components/Loading'

const Gallery = lazy(()=> import('../components/Gallery'))

export default function GalleryPage(){
  return (
    <section className="pt-8">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="font-heading text-4xl">Gallery</h2>
        <p className="text-gray-600 mt-2">A curated selection of our spaces and amenities.</p>
      </div>
      <Suspense fallback={<Loading/>}>
        <Gallery />
      </Suspense>
    </section>
  )
}
