import React, { Suspense, lazy } from 'react'
import Loading from '../components/Loading'

const Rooms = lazy(()=> import('../components/Rooms'))

export default function RoomsPage(){
  return (
    <section className="pt-8">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="font-heading text-4xl">Rooms & Suites</h2>
        <p className="text-gray-600 mt-2">Choose from our selection of luxurious rooms and suites. Click "Book" to start your reservation.</p>
      </div>
      <Suspense fallback={<Loading/>}>
        <Rooms />
      </Suspense>
    </section>
  )
}
