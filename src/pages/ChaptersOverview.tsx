import { Link } from 'react-router-dom'
import { ArrowRight, Sprout } from 'lucide-react'

const established = [
  { name: 'Karachi', emoji: '🌊', path: '/chapters/karachi', photo: '/photos/karachi-session-5.jpg', description: 'The original Soch Café energy. Fast conversations, strong chai, and a city that runs on hustle.', region: 'Pakistan' },
  { name: 'Lahore', emoji: '🌸', path: '/chapters/lahore', photo: '/photos/lahore-session.jpg', description: 'Garden City meetups and a community that moves like a startup.', region: 'Pakistan' },
  { name: 'Islamabad', emoji: '🏔️', path: '/chapters/islamabad', photo: '/photos/islamabad-product-of-tomorrow-1.jpeg', description: 'A tight-knit crowd with a government-tech edge.', region: 'Pakistan' },
  { name: 'Canada', emoji: '🍁', path: '/chapters/canada', photo: '/photos/canada-session.jpg', description: 'A different timezone, the same mindset. Resume clinics, career nights, and a diaspora-strong network.', region: 'Canada', highlight: true },
  { name: 'Dubai', emoji: '🏙️', path: '/chapters/dubai', photo: '/photos/dubai-session.jpg', description: 'Where Pakistani PMs land on their way up. Built around ambition and the Gulf PM scene.', region: 'UAE' },
]

const emerging = [
  { name: 'UK', emoji: '🇬🇧', path: '/chapters/uk', description: 'For Pakistani PMs navigating one of the world\'s most competitive markets.' },
  { name: 'Saudi Arabia', emoji: '🇸🇦', path: '/chapters/saudi-arabia', description: 'Pakistani product talent is everywhere in the Kingdom. The community is taking shape.' },
  { name: 'USA', emoji: '🇺🇸', path: '/chapters/usa', description: 'The world\'s biggest product market. We\'re building our presence in it.' },
]

export default function ChaptersOverview() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our chapters</h1>
          <p className="text-xl text-gray-300">Pakistan is home. Everywhere else is family.</p>
        </div>
      </section>

      {/* Established */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {established.map((chapter) => (
              <Link
                key={chapter.name}
                to={chapter.path}
                className={`group block rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1 ${
                  chapter.highlight ? 'border-primary/40 shadow-md' : 'border-gray-100 hover:border-primary/20'
                }`}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={chapter.photo} alt={chapter.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 flex items-center gap-2">
                    <span className="text-2xl">{chapter.emoji}</span>
                    <span className="text-white font-extrabold text-xl">{chapter.name}</span>
                    <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-sm ml-1">{chapter.region}</span>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{chapter.description}</p>
                  <div className="flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging */}
      <section className="py-16 bg-warm border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Sprout size={20} className="text-primary" />
            <h2 className="text-2xl font-extrabold text-dark">Emerging chapters</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <p className="text-gray-500 text-sm mb-8 max-w-xl">
            These chapters are in the early stages. Community exists, events are forming — join now and be part of building them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emerging.map((chapter) => (
              <Link
                key={chapter.name}
                to={chapter.path}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-4xl">{chapter.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-dark">{chapter.name}</span>
                    <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-bold">Growing</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{chapter.description}</p>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-primary flex-shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
