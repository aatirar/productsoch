import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { number: '1,000+', label: 'Members' },
  { number: '6', label: 'Chapters' },
  { number: '5 years', label: 'Of conversations' },
  { number: 'Free', label: 'To join' },
]

// 4 cols × 3 rows = 12 photos, no orphans. Each tagged with chapter + meetup type.
const columns: Array<Array<{ src: string; chapter: string; type: string }>> = [
  [
    { src: '/photos/karachi-session.jpg', chapter: 'Karachi', type: 'Soch Café' },
    { src: '/photos/pocket-meetup.jpg', chapter: 'Dubai', type: 'Pocket Meetup' },
    { src: '/photos/canada-session.jpg', chapter: 'Canada', type: 'Session' },
  ],
  [
    { src: '/photos/islamabad-product-of-tomorrow-2.jpeg', chapter: 'Islamabad', type: 'Soch Café' },
    { src: '/photos/lahore-session.jpg', chapter: 'Lahore', type: 'Soch Café' },
    { src: '/photos/karachi-discussion-3.jpg', chapter: 'Karachi', type: 'Pocket Meetup' },
  ],
  [
    { src: '/photos/canada-pocket-meetup-1.jpeg', chapter: 'Canada', type: 'Pocket Meetup' },
    { src: '/photos/dubai-session.jpg', chapter: 'Dubai', type: 'Soch Café' },
    { src: '/photos/karachi-discussion.jpg', chapter: 'Karachi', type: 'Pocket Meetup' },
  ],
  [
    { src: '/photos/karachi-session-5.jpg', chapter: 'Karachi', type: 'Soch Café' },
    { src: '/photos/lahore-session-3.jpeg', chapter: 'Lahore', type: 'Pocket Meetup' },
    { src: '/photos/canada-panel.jpg', chapter: 'Canada', type: 'Panel' },
  ],
]

export default function SocialProof() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()
  const { ref: mosaicRef, isVisible: mosaicVisible } = useScrollAnimation(0.05)

  return (
    <section className="py-20 bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats */}
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-600 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">{stat.number}</div>
              <div className="text-gray-500 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 4-column grid — 3 photos per column, with caption overlays */}
        <div
          ref={mosaicRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
        >
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2 md:gap-3">
              {col.map((photo, photoIdx) => (
                <div
                  key={photoIdx}
                  className={`group relative rounded-xl overflow-hidden transition-all duration-700 ${
                    mosaicVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${(colIdx * 3 + photoIdx) * 55}ms` }}
                >
                  <img
                    src={photo.src}
                    alt={`${photo.chapter} ${photo.type}`}
                    className="w-full h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Caption overlay — always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-3 py-3">
                    <p className="text-white text-xs font-semibold leading-tight">
                      {photo.chapter}
                      <span className="text-white/60 font-normal"> · {photo.type}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
