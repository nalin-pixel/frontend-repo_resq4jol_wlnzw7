import { useState } from 'react'

const serviceTypes = [
  'Standard Cleaning',
  'Deep Cleaning',
  'Move-In/Out',
  'Office Cleaning',
]

export default function QuoteForm() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      service_type: form.get('service_type'),
      address: form.get('address') || undefined,
      bedrooms: form.get('bedrooms') ? Number(form.get('bedrooms')) : undefined,
      bathrooms: form.get('bathrooms') ? Number(form.get('bathrooms')) : undefined,
      message: form.get('message') || undefined,
      preferred_date: form.get('preferred_date') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="quote" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Get your free quote</h2>
          <p className="mt-3 text-gray-600">Tell us about your space and preferred date. We’ll respond quickly with a personalized estimate.</p>
          {status === 'success' && (
            <div className="mt-4 rounded-md bg-emerald-50 text-emerald-800 px-4 py-3 border border-emerald-200">Thanks! We’ll be in touch shortly.</div>
          )}
          {status === 'error' && (
            <div className="mt-4 rounded-md bg-red-50 text-red-800 px-4 py-3 border border-red-200">Something went wrong. Please try again.</div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <select name="service_type" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500">
                {serviceTypes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input name="address" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
              <input type="number" min="0" name="bedrooms" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
              <input type="number" min="0" name="bathrooms" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred date</label>
              <input type="date" name="preferred_date" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <input name="message" placeholder="Any specifics?" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div>
          <button type="submit" className="w-full rounded-md bg-emerald-600 text-white py-2.5 font-medium hover:bg-emerald-700">
            {status === 'sending' ? 'Sending…' : 'Request quote'}
          </button>
          <p className="text-xs text-gray-500 text-center">By submitting, you agree to be contacted about your request.</p>
        </form>
      </div>
    </section>
  )
}
