import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const clips = [
  {
    src: '/photos/islamabad-product-of-tomorrow-short-video.mp4',
    label: 'Islamabad',
    type: 'Product of Tomorrow',
  },
  {
    src: '/photos/canada-session-video.mp4',
    label: 'Canada',
    type: 'Session',
  },
  {
    src: '/photos/karachi-panel-video.mp4',
    label: 'Karachi',
    type: 'Panel',
  },
]

export default function ClipsSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation()
  const { ref: clipsRef, isVisible: clipsVisible } = useScrollAnimation(0.05)
  const [mutedStates, setMutedStates] = useState([true, true, true])

  const toggleMute = (index: number) => {
    setMutedStates(prev => prev.map((m, i) => i === index ? !m : m))
  }

  return (
    <section className="py-24 bg-[#111] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Community in motion</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            A peek inside Product Soch.
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
            Real people. Real conversations.
          </p>
        </div>

        {/* Three full-width vertical video cards */}
        <div
          ref={clipsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-3 gap-4"
        >
          {clips.map((clip, i) => (
            <div
              key={clip.src}
              className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${clipsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ aspectRatio: '9/16', transitionDelay: `${i * 120}ms` }}
            >
              <video
                src={clip.src}
                muted={mutedStates[i]}
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover"
              />

              {/* Bottom gradient + label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 py-5">
                <p className="text-white font-bold text-sm leading-tight">{clip.label}</p>
                <p className="text-gray-300 text-xs mt-0.5">{clip.type}</p>
              </div>

              {/* Per-video mute button */}
              <button
                onClick={() => toggleMute(i)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/75 transition-colors"
                aria-label={mutedStates[i] ? 'Unmute' : 'Mute'}
              >
                {mutedStates[i] ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
