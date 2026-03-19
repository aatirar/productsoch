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
  const [muted, setMuted] = useState(true)

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
            Real people, real conversations, real energy — no rehearsed panels.
          </p>
        </div>

        {/* Three vertical phone frames in one row */}
        <div
          ref={clipsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-3 gap-5 justify-items-center"
        >
          {clips.map((clip, i) => (
            <div
              key={clip.src}
              className={`transition-all duration-700 w-full max-w-[220px] ${clipsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Phone shell */}
              <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#333] rounded-full z-10" />
                <video
                  src={clip.src}
                  muted={muted}
                  loop
                  playsInline
                  autoPlay
                  className="w-full rounded-[2rem] block"
                  style={{ aspectRatio: '9/16', objectFit: 'cover' }}
                />
              </div>
              {/* Ambient glow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-primary/20 blur-xl rounded-full pointer-events-none" />
              {/* Caption */}
              <div className="text-center mt-4">
                <p className="text-white font-semibold text-sm">{clip.label}</p>
                <p className="text-gray-500 text-xs">{clip.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mute toggle */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setMuted(m => !m)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-full px-4 py-2"
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            {muted ? 'Unmute' : 'Mute'}
          </button>
        </div>

      </div>
    </section>
  )
}
