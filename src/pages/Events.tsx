import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

const upcomingEvents: Array<{ title: string; date: string; location: string; description: string; chapter: string; registerUrl: string }> = []

const pastEvents = [
  {
    title: 'Product of Tomorrow — Lahore 2024',
    date: 'November 2024',
    location: 'Lahore, Pakistan',
    description: 'Our flagship Lahore event. 100+ attendees, sharp talks, and conversations that continued long after.',
    photos: 3,
  },
  {
    title: 'Soch Café Karachi #12',
    date: 'September 2024',
    location: 'Karachi, Pakistan',
    description: 'The quarterly gathering that keeps Karachi chapter grounded. 120 people, one speaker, one room.',
    photos: 5,
  },
  {
    title: 'Resume Review Night — Toronto',
    date: 'August 2024',
    location: 'Toronto, Canada',
    description: 'Dedicated session for Pakistani PMs navigating the Canadian job market.',
    photos: 2,
  },
]

export default function Events() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Events</h1>
          <p className="text-xl text-gray-300">
            Real gatherings. Real conversations. No calendar fillers.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-dark mb-10">Coming Up</h2>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                        <span>·</span>
                        <MapPin size={14} />
                        <span>{event.location}</span>
                        <span>·</span>
                        <span className="text-primary font-medium">{event.chapter}</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                    </div>
                    <a href={event.registerUrl} className="btn-primary shrink-0 text-sm py-2 px-4">
                      Register <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-warm rounded-2xl">
              <p className="text-xl font-semibold text-dark mb-3">Nothing scheduled yet.</p>
              <p className="text-gray-600 mb-6">
                Join your chapter's WhatsApp to hear first.
              </p>
              <Link to="/apply" className="btn-primary">Join a Chapter →</Link>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-dark mb-10">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 aspect-video flex items-center justify-center">
                  <span className="text-primary/40 text-xs">{event.photos} photos</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <Calendar size={12} />
                    <span>{event.date}</span>
                    <span>·</span>
                    <MapPin size={12} />
                    <span>{event.location}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-2 text-sm">{event.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
