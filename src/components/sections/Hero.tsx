import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { PERSON, METRICS } from '../../lib/data'

// Scramble text effect
function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&'
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let iteration = 0
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(
          text.split('').map((ch, i) => {
            if (ch === ' ') return ' '
            if (i < iteration) return text[i]
            return chars[Math.floor(Math.random() * chars.length)]
          }).join('')
        )
        if (iteration >= text.length) clearInterval(interval)
        iteration += 0.5
      }, 30)
      ref.current = interval as unknown as ReturnType<typeof setTimeout>
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      if (ref.current) clearInterval(ref.current)
    }
  }, [text, delay])

  return <>{displayed || text.replace(/./g, '█')}</>
}

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 40px 80px',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="section-label"
        style={{ marginBottom: 24 }}
      >
        ● Open to work — Fairfax, VA · Remote / Hybrid
      </motion.p>

      {/* Main Name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h1 className="display-name" style={{ marginBottom: 16 }}>
          <ScrambleText text="SIVA MANI" delay={200} />
          <br />
          <span className="gradient-text">
            <ScrambleText text="PULLIPUDI" delay={600} />
          </span>
        </h1>
      </motion.div>

      {/* Role line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 60, flexWrap: 'wrap' }}
      >
        <p className="display-role">Data Engineer</p>
        <span style={{ color: 'var(--accent)', fontSize: 24 }}>·</span>
        <p style={{ color: 'var(--muted-light)', fontSize: 18, fontFamily: 'var(--mono-font)' }}>
          5 years @ Snowflake · AWS · Databricks
        </p>
      </motion.div>

      {/* Metrics row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: 0,
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '32px 0',
          marginBottom: 48,
        }}
      >
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className="metric"
            style={{ paddingLeft: i > 0 ? 32 : 0 }}
          >
            <div className="metric-value">
              {m.value}<span style={{ fontSize: '0.5em', color: 'var(--muted-light)' }}>{m.suffix}</span>
            </div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}
      >
        <button
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            padding: '14px 36px',
            background: 'var(--accent)',
            border: 'none',
            borderRadius: 100,
            color: '#080808',
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer',
            letterSpacing: '-0.01em',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
        >
          View My Work ↓
        </button>
        <a
          href={PERSON.linkedin}
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '14px 36px',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: 100,
            color: 'var(--muted-light)',
            fontSize: 15,
            fontWeight: 500,
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
            e.currentTarget.style.color = '#F0F0F0'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--muted-light)'
          }}
        >
          LinkedIn ↗
        </a>
        <a
          href={PERSON.github}
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '14px 36px',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: 100,
            color: 'var(--muted-light)',
            fontSize: 15,
            fontWeight: 500,
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
            e.currentTarget.style.color = '#F0F0F0'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--muted-light)'
          }}
        >
          GitHub ↗
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ position: 'absolute', bottom: 40, right: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
        <span style={{ color: 'var(--muted)', fontSize: 11, letterSpacing: '0.15em', writingMode: 'vertical-rl', textTransform: 'uppercase' }}>
          scroll
        </span>
      </motion.div>
    </section>
  )
}
