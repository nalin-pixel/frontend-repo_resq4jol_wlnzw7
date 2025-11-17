export default function WhyUs() {
  const points = [
    { title: 'Vetted professionals', desc: 'Background-checked cleaners with consistent 5-star ratings.' },
    { title: 'Eco-friendly products', desc: 'Non-toxic, hypoallergenic supplies safe for homes and offices.' },
    { title: 'Flexible scheduling', desc: 'One-time, weekly, bi-weekly, and monthly options.' },
    { title: 'Satisfaction guarantee', desc: 'If you’re not happy, we’ll make it right—no questions asked.' },
  ]

  return (
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Why customers choose us</h2>
          <p className="mt-3 text-gray-600">We combine trusted people, reliable processes, and premium supplies to deliver a spotless result—every time.</p>
          <div className="mt-6 space-y-4">
            {points.map(p => (
              <div key={p.title} className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></div>
                <div>
                  <div className="font-semibold text-gray-900">{p.title}</div>
                  <div className="text-gray-600 text-sm">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <img src="https://images.unsplash.com/photo-1626379481874-3dc5678fa8ca?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGVhbmluZyUyMHN1cHBsaWVzfGVufDB8MHx8fDE3NjMzNTY0NjN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Cleaning supplies" className="rounded-lg w-full h-72 object-cover" />
          <div className="mt-4 text-sm text-gray-600">We only use EPA Safer Choice certified products.</div>
        </div>
      </div>
    </section>
  )
}
