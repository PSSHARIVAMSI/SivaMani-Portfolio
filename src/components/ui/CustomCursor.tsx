import { useEffect } from 'react'

export function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let rx = 0, ry = 0, x = 0, y = 0

    const move = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      dot.style.left = x + 'px'
      dot.style.top = y + 'px'
    }

    const lerp = () => {
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(lerp)
    }

    window.addEventListener('mousemove', move)
    const raf = requestAnimationFrame(lerp)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  )
}
