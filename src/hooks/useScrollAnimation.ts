import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

// For staggered children — returns array of isVisible booleans triggered by parent visibility
export function useStaggerAnimation(count: number, staggerMs = 100, threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
          // Reveal items one by one
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleCount(i + 1)
            }, i * staggerMs)
          }
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [count, staggerMs, threshold])

  return { ref, visibleCount }
}
