import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Quote } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Photo {
  src: string
  tag?: string
}

interface ChapterLead {
  name: string
  role: string
  quote: string
  photo?: string
}

interface ChapterPageProps {
  name: string
  emoji: string
  country: string
  headline: string
  description: string[]
  activities: string[]
  photos: Photo[]
  heroObjectPosition?: string
  chapterLead?: ChapterLead
  joinCTA: {
    label: string
    href: string
    note?: string
  }
  isCanada?: boolean
  metaTitle?: string
  metaDescription?: string
}

export default function ChapterPageTemplate({
  name, emoji, country, headline, description,
  activities, photos, heroObjectPosition = 'object-center',
  chapterLead, joinCTA, isCanada = false,
  metaTitle, metaDescription,
}: ChapterPageProps) {
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.05)
  const { ref: leadRef, isVisible: leadVisible } = useScrollAnimation()
  const { ref: actRef, isVisible: actVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  const heroPhoto = photos[0]
  const galleryPhotos = photos.slice(1)

  return (
    <div className="pt-16">
      {(metaTitle || metaDescription) && (
        <Helmet>
          {metaTitle && <title>{metaTitle}</title>}
          {metaDescription && <meta name="description" content={metaDescription} />}
          {metaTitle && <meta property="og:title" content={metaTitle} />}
          {metaDescription && <meta property="og:description" content={metaDescription} />}
          <meta property="og:type" content="website" />
        </Helmet>
      )}

      {/* Hero — full bleed photo */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        {heroPhoto && (
          <>
            <div
              className={`absolute inset-0 bg-cover ${heroObjectPosition}`}
              style={{ backgroundImage: `url(${heroPhoto.src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35" />
          </>
        )}
        {!heroPhoto && (
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

      {/* Chapter lead quote — above gallery */}
      {chapterLead && (
        <section className="py-16 bg-warm">
          <div
            ref={leadRef as React.RefObject<HTMLDivElement>}
            className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${leadVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl scale-95" />
              <div className="relative bg-white rounded-2xl border border-primary/10 p-8 shadow-lg shadow-primary/10">
                <Quote size={28} className="text-primary/40 mb-4" />
                <p className="text-xl text-dark font-medium leading-relaxed italic mb-6">
                  "{chapterLead.quote}"
                </p>
                <div className="flex items-center gap-4">
                  {chapterLead.photo ? (
                    <img
                      src={chapterLead.photo}
                      alt={chapterLead.name}
                      className="w-12 h-12 rounded-full object-cover object-top flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">{chapterLead.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-dark">{chapterLead.name}</p>
                    <p className="text-sm text-gray-500">{chapterLead.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Photo gallery — 2 columns */}
      {galleryPhotos.length > 0 && (
        <section className="py-12 bg-white">
          <div
            ref={galleryRef as React.RefObject<HTMLDivElement>}
            className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="grid grid-cols-2 gap-3">
              {galleryPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <img
                    src={photo.src}
                    alt={photo.tag ?? `${name} community`}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {photo.tag && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                      <span className="text-white text-xs font-semibold">{photo.tag}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Activities */}
      <section className={`py-20 ${chapterLead ? 'bg-white' : 'bg-warm'}`}>
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
                className={`flex items-start gap-3 ${chapterLead ? 'bg-warm' : 'bg-white'} rounded-xl p-4 border border-gray-100 hover:border-primary/30 transition-all duration-500 ${
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
