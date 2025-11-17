import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-emerald-500 text-white grid place-items-center font-bold">S</div>
            <span className="font-semibold text-gray-900">Sparkle & Shine</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-emerald-600">Services</a>
            <a href="#why-us" className="hover:text-emerald-600">Why Us</a>
            <a href="#pricing" className="hover:text-emerald-600">Pricing</a>
            <a href="#quote" className="px-3 py-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Get a quote</a>
          </nav>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
