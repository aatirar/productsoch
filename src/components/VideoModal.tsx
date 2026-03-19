import { useEffect } from 'react'
import { X } from 'lucide-react'

interface VideoModalProps {
  videoId: string
  onClose: () => void
}

export default function VideoModal({ videoId, onClose }: VideoModalProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      {/* Modal container — stop clicks propagating through */}
      <div
        className="w-full max-w-5xl animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Product Soch video"
          />
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Close video"
      >
        <X size={20} />
      </button>
    </div>
  )
}
