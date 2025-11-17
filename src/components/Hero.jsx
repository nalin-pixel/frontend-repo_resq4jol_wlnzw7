export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            A spotless space, without the stress
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Trusted home and office cleaning. Eco-friendly products, vetted pros, and flexible scheduling. Sit back—we'll handle the shine.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#quote" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700">Get a free quote</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50">Explore services</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <div className="font-semibold text-gray-900">4.9/5 rating</div>
              <div>Based on 500+ reviews</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Next-day availability</div>
              <div>Book in minutes</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470&auto=format&fit=crop" alt="Cleaning team at work" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-lg p-4 border border-gray-100">
            <div className="text-sm">
              <div className="font-semibold text-gray-900">Eco-friendly supplies</div>
              <div className="text-gray-600">Safe for kids & pets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
