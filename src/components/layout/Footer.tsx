import { Link } from 'react-router-dom'
import { Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity mb-4">
              <img
                src="/logos/Secondary.png"
                alt="Product Soch"
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Built in Pakistan. Connected everywhere.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.linkedin.com/company/productsoch" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@productsoch" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Community links */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">Community</p>
            <div className="space-y-3">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">About</Link>
              <Link to="/chapters" className="block text-gray-400 hover:text-white transition-colors text-sm">Chapters</Link>
              <Link to="/events" className="block text-gray-400 hover:text-white transition-colors text-sm">Events</Link>
              <Link to="/library" className="block text-gray-400 hover:text-white transition-colors text-sm">YouTube Library</Link>
            </div>
          </div>

          {/* Join links */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">Join</p>
            <div className="space-y-3">
              <Link to="/apply" className="block text-gray-400 hover:text-white transition-colors text-sm">Join Product Soch</Link>
              <Link to="/chapters/canada" className="block text-primary hover:text-primary-light transition-colors text-sm font-medium">Canada Chapter</Link>
              <Link to="/chapters/karachi" className="block text-gray-400 hover:text-white transition-colors text-sm">Karachi</Link>
              <Link to="/chapters/lahore" className="block text-gray-400 hover:text-white transition-colors text-sm">Lahore</Link>
              <Link to="/chapters/islamabad" className="block text-gray-400 hover:text-white transition-colors text-sm">Islamabad</Link>
              <Link to="/chapters/dubai" className="block text-gray-400 hover:text-white transition-colors text-sm">Dubai</Link>
              <Link to="/chapters/saudi-arabia" className="block text-gray-400 hover:text-white transition-colors text-sm">Saudi Arabia</Link>
              <Link to="/chapters/uk" className="block text-gray-400 hover:text-white transition-colors text-sm">UK & Ireland</Link>
              <Link to="/chapters/usa" className="block text-gray-400 hover:text-white transition-colors text-sm">USA</Link>
              <a href="mailto:hello@productsoch.com" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 Product Soch. Free, forever.</p>
          <p className="text-gray-700 text-sm">Built in Pakistan. Connected everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
