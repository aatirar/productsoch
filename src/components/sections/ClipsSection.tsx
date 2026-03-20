import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useState, useEffect, useRef } from 'react'
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

function VideoClip({ clip, index, clipsVisible }: {
  clip: typeof clips[0]
  index: number
  clipsVisible: boolean
}) {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {/* autoplay blocked */})
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${clipsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ aspectRatio: '9/16', transitionDelay: `${index * 120}ms` }}
    >
      <video
        ref={videoRef}
        src={clip.src}
        muted={muted}
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 py-5">
        <p className="text-white font-bold text-sm leading-tight">{clip.label}</p>
        <p className="text-gray-300 text-xs mt-0.5">{clip.type}</p>
      </div>

      <button
        onClick={() => setMuted(m => !m)}
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/75 transition-colors"
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>
    </div>
  )
}

export default function ClipsSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation()
  const { ref: clipsRef, isVisible: clipsVisible } = useScrollAnimation(0.05)

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

        <div
          ref={clipsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-3 gap-4"
        >
          {clips.map((clip, i) => (
            <VideoClip key={clip.src} clip={clip} index={i} clipsVisible={clipsVisible} />
          ))}
        </div>

      </div>
    </section>
  )
}
