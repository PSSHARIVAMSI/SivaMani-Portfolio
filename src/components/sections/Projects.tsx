import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../../lib/data'

export function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="work" ref={ref} style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, flexWrap: 'wrap', gap: 20 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label" style={{ marginBottom: 12 }}>Selected Work</p>
              <h2 className="section-title">Projects</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{ color: 'var(--muted)', fontSize: 14, maxWidth: 280, textAlign: 'right' }}
            >
              {PROJECTS.length} projects across data engineering, cloud migration, and real-time analytics
            </motion.p>
          </div>

          {/* Project list — typography-first, bikiron-style */}
          <div>
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="project-item"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: '36px 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: 40,
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                {/* Left side */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                    <span style={{ fontFamily: 'var(--mono-font)', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.1em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--muted-light)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      {project.company}
                    </span>
                  </div>
                  <h3
                    className="project-title"
                    style={{
                      fontSize: 'clamp(20px, 2.5vw, 32px)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: hovered === i ? 'var(--accent)' : 'var(--text)',
                      transition: 'color 0.2s',
                      marginBottom: 12,
                    }}
                  >
                    {project.title}
                  </h3>

                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ color: 'var(--muted-light)', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
                          {project.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {project.tech.map((t) => (
                            <span key={t} className="skill-tag" style={{ fontSize: 11, padding: '4px 10px' }}>{t}</span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {hovered !== i && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} style={{
                          fontSize: 12,
                          color: 'var(--muted)',
                          fontFamily: 'var(--mono-font)',
                        }}>{t}{project.tech.indexOf(t) < Math.min(2, project.tech.length - 1) ? ' ·' : ''}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono-font)' }}>
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Right side */}
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div
                    className="project-emoji"
                    style={{
                      fontSize: 40,
                      marginBottom: 8,
                      display: 'block',
                      transition: 'transform 0.3s',
                      transform: hovered === i ? 'scale(1.3) rotate(12deg)' : 'scale(1)',
                    }}
                  >
                    {project.emoji}
                  </div>
                  <p style={{
                    fontSize: 12,
                    color: 'var(--accent)',
                    fontFamily: 'var(--mono-font)',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}>
                    {project.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
