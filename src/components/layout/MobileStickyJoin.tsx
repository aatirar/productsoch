import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function MobileStickyJoin() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <Link to="/apply" className="btn-primary w-full justify-center text-base py-3 rounded-xl">
        Join Product Soch →
      </Link>
    </div>
  )
}
