import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Organizer {
  name: string
  role: string
  linkedin: string
}

interface ChapterPageProps {
  name: string
  emoji: string
  country: string
  headline: string
  description: string[]
  activities: string[]
  organizers: Organizer[]
  photos: string[]          // real chapter photos
  joinCTA: {
    label: string
    href: string
    note?: string
  }
  isCanada?: boolean
}

export default function ChapterPageTemplate({
  name, emoji, country, headline, description, activities,
  organizers, photos, joinCTA, isCanada = false,
}: ChapterPageProps) {
  const { ref: actRef, isVisible: actVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  return (
    <div className="pt-16">

      {/* Hero — full bleed photo */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        {photos[0] && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${photos[0]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </>
        )}
        {!photos[0] && (
          <div className={`absolute inset-0 ${isCanada ? 'bg-gradient-to-br from-[#0D1B2A] to-[#1A3A5C]' : 'bg-dark'}`} />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full animate-fade-up">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
            <Link to="/chapters" className="hover:text-white transition-colors">All chapters</Link>
            <span className="text-white/30">›</span>
            <span className="text-white">{name}</span>
          </div>
          <div className="flex items-center gap-3 text-white/60 text-sm mb-4">
            <span className="text-3xl">{emoji}</span>
            <MapPin size={14} />
            <span>{country}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">{headline}</h1>
          {description.map((para, i) => (
            <p key={i} className="text-lg text-white/75 leading-relaxed mb-3 max-w-2xl">{para}</p>
          ))}
        </div>
      </section>

      {/* Photo strip (remaining photos if any) */}
      {photos.length > 1 && (
        <section className="py-8 bg-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {photos.slice(1).map((photo, i) => (
                <div key={i} className="flex-shrink-0 w-64 aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={photo}
                    alt={`${name} community`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-400"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Activities */}
      <section className="py-20 bg-warm">
        <div
          ref={actRef as React.RefObject<HTMLDivElement>}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2
            className={`text-3xl font-extrabold text-dark mb-8 transition-all duration-700 ${actVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            What happens here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activities.map((activity, i) => (
              <div
                key={activity}
                className={`flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/30 transition-all duration-500 ${
                  actVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-primary mt-0.5 font-bold text-lg leading-none">→</span>
                <span className="text-gray-700 text-sm">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers */}
      {organizers.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-dark mb-8">Chapter organizers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {organizers.map((org) => (
                <div key={org.name} className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:border-primary/20 hover:shadow-sm transition-all">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-2xl">
                    👤
                  </div>
                  <div>
                    <div className="font-bold text-dark">{org.name}</div>
                    <div className="text-gray-500 text-sm">{org.role}</div>
                    <a href={org.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-primary text-sm font-bold hover:text-primary-dark transition-colors mt-1 inline-block">
                      LinkedIn →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join CTA */}
      <section className={`py-20 ${isCanada ? 'bg-[#0D1B2A]' : 'bg-dark'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl font-extrabold mb-4">Ready to join {name}?</h2>
          <p className="text-gray-400 mb-8">Free to join. Always has been.</p>
          <a
            href={joinCTA.href}
            target={joinCTA.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="btn-primary text-lg py-4 px-8 shadow-lg shadow-primary/20"
          >
            {joinCTA.label} <ArrowRight size={18} />
          </a>
          {joinCTA.note && (
            <p className="text-gray-500 text-sm mt-5">{joinCTA.note}</p>
          )}
        </div>
      </section>

    </div>
  )
}
