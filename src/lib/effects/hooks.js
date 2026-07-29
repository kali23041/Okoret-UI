import { useCallback, useEffect, useRef, useState } from 'react'

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

export function useTilt(intensity = 12) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [style, setStyle] = useState({
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)',
  })

  const onMove = useCallback(
    (event) => {
      if (reduced || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      const rotateY = (x - 0.5) * intensity * 2
      const rotateX = (0.5 - y) * intensity * 2
      setStyle({
        transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
        transition: 'transform 60ms linear',
      })
    },
    [intensity, reduced],
  )

  const onLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      transition: 'transform 400ms var(--ok-ease)',
    })
  }, [])

  return { ref, style, onMove, onLeave }
}

export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [style, setStyle] = useState({ transform: 'translate(0px, 0px)' })

  const onMove = useCallback(
    (event) => {
      if (reduced || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = (event.clientX - rect.left - rect.width / 2) * strength
      const y = (event.clientY - rect.top - rect.height / 2) * strength
      setStyle({ transform: `translate(${x}px, ${y}px)`, transition: 'transform 80ms linear' })
    },
    [reduced, strength],
  )

  const onLeave = useCallback(() => {
    setStyle({
      transform: 'translate(0px, 0px)',
      transition: 'transform 400ms var(--ok-ease)',
    })
  }, [])

  return { ref, style, onMove, onLeave }
}
