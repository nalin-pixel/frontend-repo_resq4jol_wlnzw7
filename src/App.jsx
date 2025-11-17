import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import QuoteForm from './components/QuoteForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <QuoteForm />
        <footer className="py-10 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <div>© {new Date().getFullYear()} Sparkle & Shine Cleaning</div>
            <div className="flex gap-6">
              <a href="#services" className="hover:text-emerald-600">Services</a>
              <a href="#why-us" className="hover:text-emerald-600">Why us</a>
              <a href="#quote" className="hover:text-emerald-600">Get a quote</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
