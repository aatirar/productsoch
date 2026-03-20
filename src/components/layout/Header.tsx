import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const established = [
  { name: 'Karachi', path: '/chapters/karachi' },
  { name: 'Islamabad', path: '/chapters/islamabad' },
  { name: 'Lahore', path: '/chapters/lahore' },
  { name: 'Canada', path: '/chapters/canada' },
  { name: 'Dubai', path: '/chapters/dubai' },
]

const emergingChapters = [
  { name: 'UK', path: '/chapters/uk' },
  { name: 'Saudi Arabia', path: '/chapters/saudi-arabia' },
  { name: 'USA', path: '/chapters/usa' },
]

const chapters = [...established, ...emergingChapters]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [chaptersOpen, setChaptersOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — PNG image */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img
              src="/logos/Primary.png"
              alt="Product Soch"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Chapters dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setChaptersOpen(true)}
              onMouseLeave={() => setChaptersOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors py-2">
                Chapters <ChevronDown size={15} className={`transition-transform duration-200 ${chaptersOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute top-full left-0 mt-0 w-52 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 transition-all duration-200 origin-top ${
                  chaptersOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <p className="px-4 pt-1 pb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pakistan</p>
                {established.filter(c => ['Karachi','Islamabad','Lahore'].includes(c.name)).map((c) => (
                  <Link key={c.path} to={c.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-warm hover:text-primary transition-colors">
                    {c.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <p className="px-4 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">International</p>
                  {established.filter(c => ['Canada','Dubai'].includes(c.name)).map((c) => (
                    <Link key={c.path} to={c.path} className={`block px-4 py-2 text-sm transition-colors ${c.name === 'Canada' ? 'text-primary font-semibold hover:bg-warm' : 'text-gray-700 hover:bg-warm hover:text-primary'}`}>
                      {c.name === 'Canada' ? '🍁 Canada' : c.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <p className="px-4 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Emerging</p>
                  {emergingChapters.map((c) => (
                    <Link key={c.path} to={c.path} className="block px-4 py-1.5 text-sm text-gray-500 hover:bg-warm hover:text-primary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full flex-shrink-0" />
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/events" className={`font-medium transition-colors ${isActive('/events') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
              Events
            </Link>
            <Link to="/library" className={`font-medium transition-colors ${isActive('/library') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
              Library
            </Link>
            <Link to="/about" className={`font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
              About
            </Link>
            <Link to="/apply" className="btn-primary text-sm py-2 px-5">
              Join Product Soch →
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 pt-1 pb-1">Pakistan</p>
          {established.filter(c => ['Karachi','Islamabad','Lahore'].includes(c.name)).map((c) => (
            <Link key={c.path} to={c.path} className="block px-2 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-warm transition-colors">
              {c.name}
            </Link>
          ))}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 pt-2 pb-1">International</p>
          {established.filter(c => ['Canada','Dubai'].includes(c.name)).map((c) => (
            <Link key={c.path} to={c.path} className={`block px-2 py-2 text-sm font-medium rounded-lg transition-colors ${c.name === 'Canada' ? 'text-primary hover:bg-warm' : 'text-gray-700 hover:text-primary hover:bg-warm'}`}>
              {c.name === 'Canada' ? '🍁 Canada' : c.name}
            </Link>
          ))}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 pt-2 pb-1">Emerging</p>
          {emergingChapters.map((c) => (
            <Link key={c.path} to={c.path} className="block px-2 py-2 text-sm font-medium text-gray-500 hover:text-primary rounded-lg hover:bg-warm transition-colors">
              {c.name}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-2 space-y-2">
            <Link to="/events" className="block px-2 py-2 font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-warm transition-colors">Events</Link>
            <Link to="/library" className="block px-2 py-2 font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-warm transition-colors">Library</Link>
            <Link to="/about" className="block px-2 py-2 font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-warm transition-colors">About</Link>
          </div>
          <div className="pt-2">
            <Link to="/apply" className="btn-primary w-full justify-center">Join Product Soch →</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
