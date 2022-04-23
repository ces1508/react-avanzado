import { useState, useRef, useEffect, useCallback } from 'react'

export function useNearScreen () {
  const [visible, setVisible] = useState(false)
  const elementRef = useRef(null)

  const handleObserver = useCallback(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    })
    observer.observe(elementRef.current)
  }, [visible])

  useEffect(() => {
    (async () => {
      if (window.isIntersecting) {
        handleObserver()
      } else {
        await import('intersection-observer')
        handleObserver()
      }
    })()
  }, [visible, handleObserver])

  return { elementRef, visible }
}
