import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LINKS = ['Work', 'Experience', 'Skills', 'Certifications', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,8,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <a
        href="#"
        style={{ fontWeight: 800, fontSize: 16, color: '#F0F0F0', textDecoration: 'none', letterSpacing: '-0.02em' }}
      >
        SMP<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {LINKS.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {l}
          </a>
        ))}
        <a
          href={`mailto:spullipu@gmail.com`}
          style={{
            padding: '8px 20px',
            border: '1px solid rgba(0,255,135,0.4)',
            borderRadius: 100,
            color: 'var(--accent)',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 500,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = 'var(--accent)'
            el.style.color = '#080808'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = 'transparent'
            el.style.color = 'var(--accent)'
          }}
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  )
}
