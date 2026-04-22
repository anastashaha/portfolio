import { useRef, useEffect } from 'react'

function drawWashiTexture(canvas) {
  const ctx = canvas.getContext('2d')
  const w = canvas.width
  const h = canvas.height

  ctx.fillStyle = '#f0ede8'
  ctx.fillRect(0, 0, w, h)

  // Long, slightly curved fibers
  const numFibers = Math.floor((w * h) / 550)
  for (let i = 0; i < numFibers; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    const len = 35 + Math.random() * 220
    const angle = (Math.random() - 0.5) * 0.18

    const darker = Math.random() > 0.45
    const alpha = 0.018 + Math.random() * 0.045
    const color = darker
      ? `rgba(170, 155, 135, ${alpha})`
      : `rgba(255, 253, 249, ${alpha})`

    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(angle)
    ctx.beginPath()
    ctx.moveTo(-len / 2, 0)
    ctx.bezierCurveTo(
      -len / 4 + (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5,
       len / 4 + (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5,
       len / 2, 0
    )
    ctx.strokeStyle = color
    ctx.lineWidth = 0.25 + Math.random() * 0.75
    ctx.stroke()
    ctx.restore()
  }

  // Subtle tonal patches
  for (let i = 0; i < 28; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    const r = 60 + Math.random() * 240
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    const light = Math.random() > 0.5
    g.addColorStop(0, light ? 'rgba(255,252,247,0.04)' : 'rgba(200,188,170,0.035)')
    g.addColorStop(1, 'rgba(240,237,232,0)')
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = g
    ctx.fill()
  }

  // Tiny flecks
  const numFlecks = Math.floor((w * h) / 18000)
  for (let i = 0; i < numFlecks; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    const r = 0.5 + Math.random() * 1.8
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(150, 130, 105, ${0.04 + Math.random() * 0.07})`
    ctx.fill()
  }
}

export default function WashiBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    const draw = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawWashiTexture(canvas)
    }

    draw()
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
