import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import VideoModal from '../VideoModal'

const videos = [
  {
    id: 'j3u1RIhK6GM',
    url: 'https://www.youtube.com/watch?v=j3u1RIhK6GM',
    speaker: 'Marty Cagan',
    role: 'Founder, SVPG',
    title: 'Product Management in Emerging Markets',
    description: 'A fireside on what it truly means to build empowered product teams, and how those principles apply in emerging markets.',
    photo: '/photos/marty-cagan.png',
  },
  {
    id: 'ldUW-5pK8Hw',
    url: 'https://www.youtube.com/watch?v=ldUW-5pK8Hw',
    speaker: 'Susan Stavitzki',
    role: 'Product Leader & Coach',
    title: 'Questions PMs Should Ask Before Building Anything',
    description: 'The validation questions every product manager should be asking before a single line of code gets written.',
    photo: '/photos/susan-stavitzki.png',
  },
  {
    id: 'v6k8GaRtFz0',
    url: 'https://www.youtube.com/watch?v=v6k8GaRtFz0',
    speaker: 'Shyvee Shi',
    role: 'Product Manager, LinkedIn Learning',
    title: 'Finding Product Market Fit',
    description: 'A practical framework for identifying, testing, and validating product-market fit before you over-invest.',
    photo: '/photos/shyvee-shi.png',
  },
  {
    id: 'OTpijFicNFs',
    url: 'https://www.youtube.com/watch?v=OTpijFicNFs',
    speaker: 'Janna Bastow',
    role: 'Co-founder, ProdPad',
    title: 'Outcome-Led Roadmapping',
    description: 'How to break free from feature-factory roadmaps and build around outcomes your business actually cares about.',
    photo: '/photos/janna-bastow.png',
  },
  {
    id: 'Om7rNjNmfJc',
    url: 'https://www.youtube.com/watch?v=Om7rNjNmfJc',
    speaker: 'Paweł Huryn',
    role: 'Author, The Product Compass',
    title: 'Continuous Product Discovery',
    description: 'A deep dive into building discovery habits that keep your team constantly connected to real customer problems.',
    photo: '/photos/pawel-huryn.png',
  },
  {
    id: 'BSzcbLtfeLc',
    url: 'https://www.youtube.com/watch?v=BSzcbLtfeLc',
    speaker: 'John Cutler',
    role: 'Sr. Director of Product Enablement, Toast',
    title: 'Product Strategy, Goal Setting & Prod/Eng Collaboration',
    description: 'How high-performing teams align on strategy, set meaningful goals, and make product-engineering collaboration actually work.',
    photo: '/photos/john-cutler.png',
  },
]

function VideoCard({ video, onPlay }: { video: typeof videos[0]; onPlay: (id: string) => void }) {
  return (
    <div
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      onClick={() => onPlay(video.id)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={video.photo}
          alt={video.speaker}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
        <h3 className="font-bold text-dark text-sm mb-1 group-hover:text-primary transition-colors leading-snug">
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

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {videos.map((video, i) => (
            <div
              key={video.id}
              style={{ transitionDelay: `${i * 80}ms`, transition: `opacity 0.6s ${i * 80}ms, transform 0.6s ${i * 80}ms` }}
            >
              <VideoCard video={video} onPlay={setActiveVideoId} />
            </div>
          ))}
        </div>

      </div>

      {activeVideoId && (
        <VideoModal videoId={activeVideoId} onClose={() => setActiveVideoId(null)} />
      )}
    </section>
  )
}
