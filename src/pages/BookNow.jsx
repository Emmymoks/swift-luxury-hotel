import React, { Suspense, lazy } from 'react'
import Loading from '../components/Loading'

const BookingForm = lazy(()=> import('../components/BookingForm'))

export default function BookNow(){
  return (
    <section className="pt-8">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-heading text-3xl">Book Your Stay</h2>
        <p className="text-gray-600 mt-2">Fill out the booking request and our reservations team will get back to you shortly.</p>
        <div className="mt-6">
          <Suspense fallback={<Loading/>}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
