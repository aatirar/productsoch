import { Link } from 'react-router-dom'
import { ArrowRight, Sprout } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const established = [
  {
    name: 'Karachi', emoji: '🌊', path: '/chapters/karachi',
    description: 'Fast conversations, strong chai, and a city that runs on hustle.',
    photo: '/photos/karachi-session-5.jpg',
  },
  {
    name: 'Lahore', emoji: '🌸', path: '/chapters/lahore',
    description: 'The intensity of the food is matched by the intensity of the conversation.',
    photo: '/photos/lahore-session.jpg',
  },
  {
    name: 'Islamabad', emoji: '🏔️', path: '/chapters/islamabad',
    description: 'A thoughtful, tight-knit crowd where policy, tech, and product thinking collide.',
    photo: '/photos/islamabad-product-of-tomorrow-1.jpeg',
  },
  {
    name: 'Canada', emoji: '🍁', path: '/chapters/canada',
    description: 'PMs and PMMs unpacking how products are built: strategy, discovery, and career growth in a diaspora-strong network.',
    photo: '/photos/canada-session.jpg',
    highlight: true,
  },
  {
    name: 'Dubai', emoji: '🏙️', path: '/chapters/dubai',
    description: 'Where Pakistani PMs land on their way up. Built around ambition and the Gulf PM scene.',
    photo: '/photos/dubai-session.jpg',
  },
  {
    name: 'Saudi Arabia', emoji: '🇸🇦', path: '/chapters/saudi-arabia',
    description: 'A growing presence in the Kingdom\'s product scene, with sessions shaped around the region\'s unique market.',
    photo: '/photos/ksa-pocket-meetup.jpeg',
    emerging: true,
  },
]

const emergingChapters = [
  {
    name: 'UK', emoji: '🇬🇧', flagImg: 'gb', path: '/chapters/uk',
    description: 'For Pakistani PMs navigating one of the world\'s most competitive markets.',
  },
  {
    name: 'USA', emoji: '🇺🇸', flagImg: 'us', path: '/chapters/usa',
    description: 'The world\'s biggest product market. We\'re building the Pakistani PM community in it.',
  },
]

export default function ChapterCards() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05)
  const { ref: emergRef, isVisible: emergVisible } = useScrollAnimation(0.05)

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark">Find your chapter.</h2>
          <p className="text-xl text-gray-500 mt-4">Every city has its own vibe. All of them are home.</p>
        </div>

        {/* Established chapters */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5"
        >
          {established.map((chapter, i) => (
            <Link
              key={chapter.name}
              to={chapter.path}
              className={`group block rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                chapter.highlight ? 'border-primary/40 shadow-md shadow-primary/10' : 'border-gray-100 hover:border-primary/20'
              } ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms`, transition: `opacity 0.6s ${i * 80}ms, transform 0.6s ${i * 80}ms, box-shadow 0.3s, border-color 0.3s` }}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={chapter.photo}
                  alt={`${chapter.name} chapter`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 flex items-center gap-2">
                  <span className="text-2xl">{chapter.emoji}</span>
                  <span className="text-white font-extrabold text-xl">{chapter.name}</span>
                  {chapter.highlight && (
                    <span className="text-xs bg-primary text-dark font-bold px-2 py-0.5 rounded-full ml-1">Canada</span>
                  )}
                  {chapter.emerging && (
                    <span className="text-xs bg-white/20 text-white font-bold px-2 py-0.5 rounded-full ml-1 backdrop-blur-sm">Emerging</span>
                  )}
                </div>
              </div>
              <div className="p-5 bg-white">
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{chapter.description}</p>
                <div className="flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all duration-200">
                  Explore chapter <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Emerging chapters */}
        <div
          ref={emergRef as React.RefObject<HTMLDivElement>}
          className={`mt-10 transition-all duration-700 ${emergVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex items-center gap-3 mb-5">
            <Sprout size={18} className="text-primary" />
            <h3 className="text-lg font-bold text-dark">Emerging chapters</h3>
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">Growing · Be part of building them</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergingChapters.map((chapter, i) => (
              <Link
                key={chapter.name}
                to={chapter.path}
                className={`group flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-warm hover:border-primary/30 hover:shadow-sm transition-all duration-300 ${
                  emergVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {'flagImg' in chapter && chapter.flagImg ? (
                  <img src={`https://flagcdn.com/w40/${chapter.flagImg}.png`} className="w-9 h-6 object-cover rounded-sm flex-shrink-0" alt={`${chapter.name} flag`} />
                ) : (
                  <span className="text-3xl leading-none">{chapter.emoji}</span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-dark text-sm">{chapter.name}</span>
                    <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-medium">Growing</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{chapter.description}</p>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-primary flex-shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/chapters" className="btn-outline">
            View all chapters →
          </Link>
        </div>
      </div>
    </section>
  )
}
