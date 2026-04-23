import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-dark overflow-hidden relative">
      {/* Ambient amber glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Background photo at low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: 'url(/photos/lahore-session-3.jpeg)' }}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div
          className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Ready to connect with{' '}
            <span className="text-primary">your tribe?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Product Soch is free, forever. Pick your chapter and apply in 2 minutes.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <Link
            to="/apply"
            className="btn-primary text-lg py-4 px-10 shadow-xl shadow-primary/25 hover:shadow-primary/40"
          >
            Apply to Join <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </section>
  )
}
