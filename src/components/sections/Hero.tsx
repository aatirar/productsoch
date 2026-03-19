import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const roles = ['Product Managers', 'Product Designers', 'Product Marketers', 'Analysts']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Real photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/photos/karachi-session.jpg)' }}
      />
      {/* Dark overlay — strong enough for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />

      {/* Subtle amber glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Urdu سوچ — corner mark */}
      <div
        className="absolute top-24 right-6 md:top-32 md:right-14 text-white/15 text-6xl md:text-8xl font-light select-none pointer-events-none"
        style={{ fontFamily: 'serif', direction: 'rtl' }}
      >
        سوچ
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-[3.75rem] lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight animate-fade-up"
          style={{ animationDelay: '150ms' }}
        >
          Join the largest global community for{' '}
          <span className="text-primary">Pakistani product professionals.</span>
        </h1>

        {/* Subhead */}
        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          Product Soch helps connect, inspire, and upskill Pakistani product professionals to build globally admired products.
        </p>

        {/* Roles pill row */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-up"
          style={{ animationDelay: '420ms' }}
        >
          <span className="text-white/50 text-sm">For</span>
          {roles.map((role, i) => (
            <span
              key={role}
              className="text-sm bg-white/10 border border-white/15 rounded-full px-3 py-1 text-white/80"
              style={{ animationDelay: `${420 + i * 80}ms` }}
            >
              {role}
            </span>
          ))}
          <span className="text-white/50 text-sm">and more</span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up"
          style={{ animationDelay: '500ms' }}
        >
          <Link to="/join" className="btn-primary text-base md:text-lg py-4 px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50">
            Join Product Soch <ArrowRight size={20} />
          </Link>
          <Link to="/chapters" className="btn-ghost text-base md:text-lg py-4 px-8">
            Explore Chapters
          </Link>
        </div>

      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
