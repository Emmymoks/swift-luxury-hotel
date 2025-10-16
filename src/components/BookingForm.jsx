import React, { useState } from 'react'

export default function BookingForm() {
  const today = new Date().toISOString().slice(0, 10)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    room: 'Deluxe Room',
    checkin: '',
    checkout: '',
    guests: 1,
    arrivalTime: '',
    promo: '',
    requests: '',
    contactBy: 'email',
    agree: false,
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(null)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function validate(values) {
    const errs = {}
    if (!values.name.trim()) errs.name = 'Full name is required'
    if (!values.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Enter a valid email'
    if (!values.phone.trim()) errs.phone = 'Phone number is required'
    if (!values.checkin) errs.checkin = 'Check-in date is required'
    if (!values.checkout) errs.checkout = 'Check-out date is required'
    if (values.checkin && values.checkout && values.checkout <= values.checkin) errs.checkout = 'Check-out must be after check-in'
    if (!values.guests || Number(values.guests) < 1) errs.guests = 'At least 1 guest required'
    if (!values.agree) errs.agree = 'You must agree to our terms to continue'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErrors({})
    const validation = validate(form)
    if (Object.keys(validation).length) {
      setErrors(validation)
      // scroll to first error for better UX
      const first = Object.keys(validation)[0]
      const el = document.getElementById(`field-${first}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setSubmitting(true)
    setSuccess(null)
    // Simulate async submission (replace with real API call)
    await new Promise(r => setTimeout(r, 1100))
    setSubmitting(false)
    setSuccess({ message: `Thanks, ${form.name}! Your booking request was submitted.` })
    console.log('Booking request (demo):', form)
    // Optionally reset form after success
    setForm(prev => ({ ...prev, phone: '', promo: '', requests: '' }))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <h4 className="font-semibold text-xl mb-3">Request a booking</h4>
      <p className="text-sm text-gray-600 mb-6">Provide your details and preferred dates — we will confirm availability and follow up within 24 hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="field-name" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input id="field-name" name="name" value={form.name} onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Jane Doe" />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="field-email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
          <input id="field-email" name="email" type="email" value={form.email} onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="field-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
          <input id="field-phone" name="phone" value={form.phone} onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="+1 555 555 5555" />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="field-room" className="block text-sm font-medium text-gray-700 mb-1">Room type</label>
          <select id="field-room" name="room" value={form.room} onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300">
            <option>Royal Suite</option>
            <option>Deluxe Room</option>
            <option>Premium Room</option>
            <option>Studio</option>
          </select>
        </div>

        <div>
          <label htmlFor="field-checkin" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <input id="field-checkin" name="checkin" type="date" value={form.checkin} onChange={handleChange} min={today}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300" />
          {errors.checkin && <p className="mt-1 text-sm text-red-600">{errors.checkin}</p>}
        </div>

        <div>
          <label htmlFor="field-checkout" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <input id="field-checkout" name="checkout" type="date" value={form.checkout} onChange={handleChange} min={form.checkin || today}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300" />
          {errors.checkout && <p className="mt-1 text-sm text-red-600">{errors.checkout}</p>}
        </div>

        <div>
          <label htmlFor="field-guests" className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
          <input id="field-guests" name="guests" type="number" min="1" value={form.guests} onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300" />
          {errors.guests && <p className="mt-1 text-sm text-red-600">{errors.guests}</p>}
        </div>

        <div>
          <label htmlFor="field-arrivalTime" className="block text-sm font-medium text-gray-700 mb-1">Estimated arrival</label>
          <input id="field-arrivalTime" name="arrivalTime" type="time" value={form.arrivalTime} onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300" />
        </div>

        <div>
          <label htmlFor="field-promo" className="block text-sm font-medium text-gray-700 mb-1">Promo code (optional)</label>
          <input id="field-promo" name="promo" value={form.promo} onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="PROMO2025" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="field-requests" className="block text-sm font-medium text-gray-700 mb-1">Special requests</label>
        <textarea id="field-requests" name="requests" rows="4" value={form.requests} onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Any special requests or accessibility needs"></textarea>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">Preferred contact</span>
          <div className="flex gap-3 items-center">
            <label className="inline-flex items-center text-sm">
              <input type="radio" name="contactBy" value="email" checked={form.contactBy === 'email'} onChange={handleChange} className="mr-2" />
              Email
            </label>
            <label className="inline-flex items-center text-sm">
              <input type="radio" name="contactBy" value="phone" checked={form.contactBy === 'phone'} onChange={handleChange} className="mr-2" />
              Phone
            </label>
          </div>
        </div>

        <div className="text-sm">
          <label className="inline-flex items-start">
            <input id="field-agree" name="agree" type="checkbox" checked={form.agree} onChange={handleChange} className="mt-1 mr-3" />
            <span>I agree to the <a href="#" className="text-amber-600 underline">terms and privacy policy</a>.</span>
          </label>
          {errors.agree && <p className="mt-1 text-sm text-red-600">{errors.agree}</p>}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-600">We will never share your details. Response within 24 hours.</div>
        <div>
          <button type="submit" disabled={submitting} className="btn-accent">
            {submitting ? 'Sending...' : 'Send request'}
          </button>
        </div>
      </div>

      {success && (
        <div className="mt-4 p-4 rounded-md bg-green-50 border border-green-100 text-green-800">
          {success.message}
        </div>
      )}
    </form>
  )
}
