import { useState, useEffect, lazy, Suspense, Component, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLipSync } from './useLipSync'
import { PERSON } from '../../lib/data'

const AvatarScene = lazy(() =>
  import('./AvatarScene').then((m) => ({ default: m.AvatarScene }))
)

// Error boundary to catch WebGL / Three.js failures gracefully
class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

function AvatarFallback({ speaking }: { speaking: boolean }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 72,
          boxShadow: speaking
            ? '0 0 60px rgba(0,212,255,0.8), 0 0 120px rgba(124,58,237,0.5)'
            : '0 0 30px rgba(0,212,255,0.3)',
          transition: 'box-shadow 0.3s',
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        👨‍💻
      </div>
    </div>
  )
}

interface AvatarIntroProps {
  onDone: () => void
  avatarUrl?: string
}

type Phase = 'loading' | 'idle' | 'speaking' | 'transitioning' | 'done'

export function AvatarIntro({ onDone, avatarUrl }: AvatarIntroProps) {
  const [phase, setPhase] = useState<Phase>('loading')
  const [glbAvailable, setGlbAvailable] = useState(false)
  const { morphValues, speak, stop } = useLipSync()

  // Check GLB availability — verify content-type is binary, not HTML (Vite serves index.html for 404s)
  useEffect(() => {
    if (!avatarUrl) return
    fetch(avatarUrl, { method: 'HEAD' })
      .then((r) => {
        const ct = r.headers.get('content-type') ?? ''
        if (r.ok && !ct.includes('text/html')) setGlbAvailable(true)
      })
      .catch(() => {})
  }, [avatarUrl])

  // Start idle after mount
  useEffect(() => {
    const t = setTimeout(() => setPhase('idle'), 600)
    return () => clearTimeout(t)
  }, [])

  // Start speaking once idle
  useEffect(() => {
    if (phase !== 'idle') return
    const t = setTimeout(() => {
      setPhase('speaking')
      speak(PERSON.introScript, () => {
        setTimeout(() => setPhase('transitioning'), 300)
      })
    }, 500)
    return () => clearTimeout(t)
  }, [phase, speak])

  // Max duration safety net — always complete after 20s
  useEffect(() => {
    const t = setTimeout(() => {
      if (phase !== 'done') setPhase('transitioning')
    }, 20000)
    return () => clearTimeout(t)
  }, [phase])

  // Handle transitioning → done
  useEffect(() => {
    if (phase !== 'transitioning') return
    const t = setTimeout(() => {
      setPhase('done')
      onDone()
    }, 800)
    return () => clearTimeout(t)
  }, [phase, onDone])

  const handleSkip = () => {
    stop()
    setPhase('transitioning')
  }

  if (phase === 'done') return null

  const isTransitioning = phase === 'transitioning'
  const speaking = phase === 'speaking'

  const fallback = <AvatarFallback speaking={speaking} />

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        initial={{ opacity: 0 }}
        animate={
          isTransitioning
            ? { opacity: 0, scale: 0.15, x: '42vw', y: '-38vh' }
            : { opacity: 1, scale: 1, x: 0, y: 0 }
        }
        transition={{ duration: isTransitioning ? 0.8 : 0.4, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          background: 'rgba(5,11,24,0.93)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: isTransitioning ? 'none' : 'auto',
        }}
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 120 }}
          style={{ width: 320, height: 360, position: 'relative' }}
        >
          {/* Glow halo */}
          <div style={{
            position: 'absolute',
            inset: -24,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          }} />

          {glbAvailable && avatarUrl ? (
            <WebGLErrorBoundary fallback={fallback}>
              <Suspense fallback={fallback}>
                <AvatarScene morphValues={morphValues} avatarUrl={avatarUrl} />
              </Suspense>
            </WebGLErrorBoundary>
          ) : fallback}
        </motion.div>

        {/* Speech bubble */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            maxWidth: 520,
            background: 'rgba(0,212,255,0.07)',
            border: '1px solid rgba(0,212,255,0.22)',
            borderRadius: 16,
            padding: '16px 24px',
            marginTop: 12,
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#e2e8f0', fontSize: 15, lineHeight: 1.65 }}>
            {phase === 'loading' ? 'Initializing...' : PERSON.introScript}
          </p>
          {speaking && (
            <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  style={{ width: 4, height: 4, borderRadius: '50%', background: '#00D4FF' }}
                  animate={{ scaleY: [1, 2.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Skip */}
        {(phase === 'speaking' || phase === 'idle') && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={handleSkip}
            style={{
              marginTop: 20,
              padding: '8px 24px',
              background: 'rgba(124,58,237,0.18)',
              border: '1px solid rgba(124,58,237,0.4)',
              borderRadius: 24,
              color: '#c4b5fd',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Skip Intro →
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
