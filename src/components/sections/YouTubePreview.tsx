import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, ArrowRight, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import VideoModal from '../VideoModal'

const videos = [
  {
    id: 'j3u1RIhK6GM',
    speaker: 'Marty Cagan',
    role: 'Founder, SVPG',
    title: 'Fireside Chat with Marty Cagan',
    description: 'The author of Inspired on product discovery, empowered teams, and what separates great PMs from the rest.',
  },
  {
    id: 'KOW-B18K1t4',
    speaker: 'Ravi Mehta',
    role: 'Ex-CPO, Tripadvisor',
    title: 'Building Product Sense',
    description: 'How to develop product intuition that compounds over time.',
  },
  {
    id: 'Om7rNjNmfJc',
    speaker: 'Paweł Huryn',
    role: 'Product Leader & Author',
    title: 'Modern Product Discovery',
    description: 'A framework for continuous discovery in today\'s product teams.',
  },
  {
    id: 'lceaF5PhDaY',
    speaker: 'Büşra Coşkuner',
    role: 'Product Coach',
    title: 'Outcome-Driven Product Teams',
    description: 'How to shift from output thinking to outcome-driven ways of working.',
  },
  {
    id: 'BSzcbLtfeLc',
    speaker: 'John Cutler',
    role: 'Product Thinking Evangelist',
    title: 'Systems Thinking for PMs',
    description: 'A deep dive into complexity, constraints, and how real product work gets done.',
  },
]

function VideoCard({ video, large = false, onPlay }: {
  video: typeof videos[0]
  large?: boolean
  onPlay: (id: string) => void
}) {
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`

  return (
    <div
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      onClick={() => onPlay(video.id)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={thumb}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
            <Play size={20} className="text-dark ml-0.5" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
      <div className="p-4">
        <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-0.5">{video.speaker}</p>
        <p className="text-gray-400 text-[10px] mb-2">{video.role}</p>
        <h3 className={`font-bold text-dark mb-1 group-hover:text-primary transition-colors ${large ? 'text-base' : 'text-sm'}`}>
          {video.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed">{video.description}</p>
      </div>
    </div>
  )
}

export default function YouTubePreview() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

  const [marty, ravi, ...rest] = videos

  return (
    <section className="py-24 bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark">
              Conversations worth bookmarking.
            </h2>
            <p className="text-lg text-gray-500 mt-3">
              We've sat down with the people who wrote the playbooks.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@productsoch"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0 text-sm py-2 px-4 whitespace-nowrap"
          >
            YouTube Channel <ExternalLink size={14} />
          </a>
        </div>

        {/* Row 1: Marty (col-span-2) + Ravi side by side */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="lg:col-span-2">
            <VideoCard video={marty} large onPlay={setActiveVideoId} />
          </div>
          <div>
            <VideoCard video={ravi} onPlay={setActiveVideoId} />
          </div>
        </div>

        {/* Row 2: Pawel, Büşra, John */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 delay-200 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {rest.map(v => (
            <VideoCard key={v.id} video={v} onPlay={setActiveVideoId} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/library" className="btn-outline">
            Browse the full library <ArrowRight size={18} />
          </Link>
        </div>

      </div>

      {activeVideoId && (
        <VideoModal videoId={activeVideoId} onClose={() => setActiveVideoId(null)} />
      )}
    </section>
  )
}
