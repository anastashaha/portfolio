import { Link } from 'react-router-dom'
import { useRef, useEffect, useCallback } from 'react'

const links = [
  { to: '/selected work', label: 'selected work' },
  // { to: '/making', label: 'making' },
  { to: '/teaching', label: 'teaching' },
]

function drawWatercolorDrop(ctx, x, y) {
  // Dense ink core
  const coreG = ctx.createRadialGradient(x, y, 0, x, y, 14)
  coreG.addColorStop(0, 'rgba(4, 3, 2, 0.55)')
  coreG.addColorStop(0.3, 'rgba(4, 3, 2, 0.28)')
  coreG.addColorStop(0.7, 'rgba(4, 3, 2, 0.08)')
  coreG.addColorStop(1, 'rgba(4, 3, 2, 0)')
  ctx.beginPath()
  ctx.arc(x, y, 14, 0, Math.PI * 2)
  ctx.fillStyle = coreG
  ctx.fill()

  // Heavy pigment cluster around core
  for (let i = 0; i < 16; i++) {
    const angle = Math.random() * Math.PI * 2
    const dist = Math.random() * 18
    const bx = x + Math.cos(angle) * dist
    const by = y + Math.sin(angle) * dist
    const r = 7 + Math.random() * 16

    const g = ctx.createRadialGradient(bx, by, 0, bx, by, r)
    g.addColorStop(0, `rgba(4, 3, 2, ${0.18 + Math.random() * 0.16})`)
    g.addColorStop(0.4, `rgba(4, 3, 2, ${0.07 + Math.random() * 0.07})`)
    g.addColorStop(1, 'rgba(4, 3, 2, 0)')

    ctx.beginPath()
    ctx.arc(bx, by, r, 0, Math.PI * 2)
    ctx.fillStyle = g
    ctx.fill()
  }

  // Wide pigment bleed — ink spreading into wet paper
  for (let i = 0; i < 10; i++) {
    const angle = Math.random() * Math.PI * 2
    const dist = 22 + Math.random() * 38
    const bx = x + Math.cos(angle) * dist
    const by = y + Math.sin(angle) * dist
    const r = 5 + Math.random() * 14

    const g = ctx.createRadialGradient(bx, by, 0, bx, by, r)
    g.addColorStop(0, `rgba(4, 3, 2, ${0.06 + Math.random() * 0.07})`)
    g.addColorStop(0.5, `rgba(4, 3, 2, ${0.02 + Math.random() * 0.03})`)
    g.addColorStop(1, 'rgba(4, 3, 2, 0)')

    ctx.beginPath()
    ctx.arc(bx, by, r, 0, Math.PI * 2)
    ctx.fillStyle = g
    ctx.fill()
  }

  // Stray micro-droplets far out
  for (let i = 0; i < 5; i++) {
    const angle = Math.random() * Math.PI * 2
    const dist = 45 + Math.random() * 35
    const bx = x + Math.cos(angle) * dist
    const by = y + Math.sin(angle) * dist
    const r = 1.5 + Math.random() * 4

    ctx.beginPath()
    ctx.arc(bx, by, r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(4, 3, 2, ${0.02 + Math.random() * 0.03})`
    ctx.fill()
  }
}

export default function Home() {
  const canvasRef = useRef(null)
  const lastPosRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.putImageData(img, 0, 0)
    }
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    window.addEventListener('resize', resize)

    // Fade by erasing alpha so the washi bg shows through as ink dries
    const fade = () => {
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.016)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'source-over'
      rafRef.current = requestAnimationFrame(fade)
    }
    rafRef.current = requestAnimationFrame(fade)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const x = e.clientX
    const y = e.clientY
    const last = lastPosRef.current

    if (last) {
      const dist = Math.hypot(x - last.x, y - last.y)
      const steps = Math.max(1, Math.floor(dist / 5))
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        drawWatercolorDrop(ctx, last.x + (x - last.x) * t, last.y + (y - last.y) * t)
      }
    } else {
      drawWatercolorDrop(ctx, x, y)
    }

    lastPosRef.current = { x, y }
  }, [])

  const handleMouseLeave = useCallback(() => {
    lastPosRef.current = null
  }, [])

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        height: '100vh',
        width: '100vw',
        background: 'transparent',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '40px',
        cursor: 'crosshair',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      />

      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'calc(50% - 40px)',
        fontSize: '12px',
        lineHeight: '1.8',
        color: '#1a1a1a',
        zIndex: 1,
      }}>
        <p style={{ margin: '0 0 16px' }}>
          <strong>anastasha rachel gunawan</strong> (b.1999) is an inquirer. in some other words, an artist, technologist, and educator. born and raised in Indonesia and Myanmar, she explores and experiences technologies with a tropical inner world.
        </p>
        <p style={{ margin: '0 0 16px' }}>
          she is currently completing her Master's of Science in Design with a focus track in Emerging Technologies at Stanford, funded by Stanford School of Engineering's Course Assistantship award. this journey follows a three-year engineering role at <a href="https://codesignal.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>CodeSignal</a>, and her Bachelor's in Data Science at the University of California, Berkeley.
        </p>
        <p style={{ margin: '0 0 16px' }}>
          her practice of inquiry involves the creation of physical and embodied technological artifacts, currently rooted in Southeast Asian tropical material cultures, to experiment with expanding dominant technological imaginaries beyond the virtual and digital. she is a founding member of Stanford's Creative Computing Studio, partner and collaborator of Pixar's nascent Innovation Lab, and one twelfth of Dabble, a systems-oriented design studio.
        </p>
        <p style={{ margin: 0 }}>
          her work returns to the same questions: can we return to the human intuition of building beyond utility? how can we build a path between ancient wisdom and modern sociotechnical life? how do we protect and enact our agency in choosing the artifacts that shape daily life?
        </p>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative', zIndex: 1 }}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{ fontSize: '12px', color: '#1a1a1a' }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
