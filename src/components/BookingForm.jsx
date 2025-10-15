import React, {useState} from 'react'
export default function BookingForm(){
  const [form, setForm] = useState({name:'',email:'',room:'Deluxe Room',checkin:'',checkout:'',guests:1})
  function submit(e){ e.preventDefault(); alert('Thanks, '+form.name+' — booking request received. This is a demo form.'); }
  return (
    <form onSubmit={submit} className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h4 className="font-semibold mb-4">Request a booking</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" className="p-3 border rounded"/>
        <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="p-3 border rounded"/>
        <select value={form.room} onChange={e=>setForm({...form,room:e.target.value})} className="p-3 border rounded">
          <option>Royal Suite</option>
          <option>Deluxe Room</option>
          <option>Premium Room</option>
          <option>Studio</option>
        </select>
        <input required type="date" value={form.checkin} onChange={e=>setForm({...form,checkin:e.target.value})} className="p-3 border rounded"/>
        <input required type="date" value={form.checkout} onChange={e=>setForm({...form,checkout:e.target.value})} className="p-3 border rounded"/>
        <input type="number" min="1" value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})} className="p-3 border rounded"/>
      </div>
      <div className="mt-4 text-right">
        <button className="btn-modern">Send request</button>
      </div>
    </form>
  )
}
