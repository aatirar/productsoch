import { Play, Clock } from 'lucide-react'

const videos = [
  {
    speaker: 'Marty Cagan',
    title: 'Product Discovery vs. Delivery',
    description: 'The SVPG founder on what separates great product teams from feature factories. Required watching.',
    duration: '42 min',
    topics: ['Discovery', 'Strategy'],
    featured: true,
  },
  {
    speaker: 'Ravi Mehta',
    title: 'Building Product Sense',
    description: 'Former Tripadvisor CPO on how to develop product intuition that compounds over time.',
    duration: '38 min',
    topics: ['Career', 'Strategy'],
    featured: true,
  },
  {
    speaker: 'Said Khan',
    title: 'PM in Emerging Markets',
    description: 'On the unique challenges and advantages of building products in markets like Pakistan.',
    duration: '35 min',
    topics: ['Strategy', 'Career'],
    featured: true,
  },
]

const topics = ['All', 'Strategy', 'Discovery', 'Career']

interface Video {
  speaker: string
  title: string
  description: string
  duration: string
  topics: string[]
  featured: boolean
}

function VideoCard({ video }: { video: Video }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="bg-gradient-to-br from-primary to-primary-dark aspect-video flex items-center justify-center relative">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <Play size={20} className="text-white ml-1" />
        </div>
        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <Clock size={10} /> {video.duration}
        </span>
      </div>
      <div className="p-5">
        <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{video.speaker}</p>
        <h3 className="font-bold text-dark mb-2 text-sm leading-tight">{video.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">{video.description}</p>
        <div className="flex gap-2 mt-3">
          {video.topics.map(t => (
            <span key={t} className="text-xs bg-warm text-gray-600 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Library() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">YouTube Library</h1>
          <p className="text-xl text-gray-300">
            Conversations worth bookmarking. All free. No sign-up required.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter pills */}
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            {topics.map((topic) => (
              <button
                key={topic}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  topic === 'All'
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Featured row */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.filter(v => v.featured).map((video) => (
                <VideoCard key={video.speaker + video.title} video={video} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
