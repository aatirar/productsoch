import { Link } from 'react-router-dom'

export default function MobileStickyJoin() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg">
      <Link to="/apply" className="btn-primary w-full justify-center text-base py-3 rounded-xl">
        Join Product Soch →
      </Link>
    </div>
  )
}
