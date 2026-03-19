import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

// Set to null to show empty state, or populate for a live event
const upcomingEvent = null as null | {
  title: string
  location: string
  description: string
  date: string
  registerUrl: string
  photo: string
}

// Example (uncomment to activate):
// const upcomingEvent = {
//   title: 'Product of Tomorrow — Lahore',
//   location: 'Lahore, Pakistan',
//   description: 'Our flagship Lahore event returns. An evening of sharp talks, honest Q&As, and the kind of networking that doesn\'t feel like networking.',
//   date: 'Coming soon',
//   registerUrl: '/events',
//   photo: '/photos/lahore-discssion.jpg',
// }

export default function EventsSpotlight() {
  const { ref, isVisible } = useScrollAnimation()

  if (!upcomingEvent) return null

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark">On the horizon.</h2>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            {/* Event photo */}
            <div className="aspect-[21/9] overflow-hidden relative">
              <img
                src={upcomingEvent.photo}
                alt={upcomingEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 flex items-end p-8">
                <div>
                  <div className="flex items-center gap-3 mb-3 text-primary text-sm font-semibold">
                    <Calendar size={15} />
                    <span>{upcomingEvent.date}</span>
                    <span className="text-gray-400">·</span>
                    <MapPin size={15} />
                    <span>{upcomingEvent.location}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{upcomingEvent.title}</h3>
                  <p className="text-white/70 mb-6 max-w-lg">{upcomingEvent.description}</p>
                  <a href={upcomingEvent.registerUrl} className="btn-primary">
                    Register Now <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
