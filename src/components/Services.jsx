export default function Services() {
  const services = [
    { title: 'Standard Cleaning', desc: 'Regular maintenance for a consistently clean home.', icon: '🧹' },
    { title: 'Deep Cleaning', desc: 'From baseboards to behind appliances—perfect for resets.', icon: '🧽' },
    { title: 'Move-In/Out', desc: 'Thorough top-to-bottom clean for relocating.', icon: '📦' },
    { title: 'Office Cleaning', desc: 'Reliable, discreet, and flexible schedules for workplaces.', icon: '🏢' },
  ]

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Popular services</h2>
          <p className="mt-2 text-gray-600">Transparent pricing, tailored to your space.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl">{s.icon}</div>
              <div className="mt-3 font-semibold text-gray-900">{s.title}</div>
              <div className="mt-1 text-sm text-gray-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
