import React, { useState } from 'react'

export default function Footer(){
  const [email, setEmail] = useState('')
  function subscribe(e){
    e.preventDefault()
    if(!email) return alert('Please enter an email to subscribe (demo).')
    alert('Thanks! ' + email + ' has been subscribed (demo).')
    setEmail('')
  }
  return (
    <footer id="contact" className="bg-gray-50 mt-12 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-heading text-xl">Swift Luxury Hotel</div>
          <p className="text-sm text-gray-600 mt-2">Where Luxury is defined.</p>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm text-gray-600 mt-2">123 Luxury Ave, City — +1 (555) 123 4567</p>
        </div>
        <div>
          <h5 className="font-semibold">Newsletter</h5>
          <form onSubmit={subscribe} className="mt-2 flex">
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" className="p-2 border rounded-l flex-1"/>
            <button className="btn-modern">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 text-sm text-gray-500">© {new Date().getFullYear()} Swift Luxury Hotel. All rights reserved.</div>
    </footer>
  )
}
