import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { EXPERIENCE } from '../../lib/data'

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  // All expanded by default
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0, 1, 2]))

  const toggle = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section id="experience" ref={ref} style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 60 }}
          >
            <p className="section-label" style={{ marginBottom: 12 }}>Career</p>
            <h2 className="section-title">Experience</h2>
          </motion.div>

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 48,
                paddingTop: 40,
                paddingBottom: 40,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {/* Left: Period + company */}
              <div>
                <p style={{ fontFamily: 'var(--mono-font)', fontSize: 12, color: 'var(--muted)', marginBottom: 8, letterSpacing: '0.05em' }}>
                  {exp.period}
                </p>
                <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                  {exp.company}
                </p>
                <p style={{ color: 'var(--muted-light)', fontSize: 13 }}>{exp.location}</p>
              </div>

              {/* Right: Role + details */}
              <div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', marginBottom: 16 }}
                  onClick={() => toggle(i)}
                >
                  <h3 style={{
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    lineHeight: 1.2,
                    paddingRight: 16,
                  }}>
                    {exp.role}
                  </h3>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggle(i) }}
                    style={{
                      background: 'none',
                      border: '1px solid var(--border)',
                      borderRadius: '50%',
                      width: 32,
                      height: 32,
                      minWidth: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: expanded.has(i) ? 'var(--accent)' : 'var(--muted-light)',
                      cursor: 'pointer',
                      fontSize: 18,
                      transition: 'all 0.2s',
                      lineHeight: 1,
                    }}
                  >
                    {expanded.has(i) ? '−' : '+'}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {expanded.has(i) && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <ul style={{ paddingLeft: 18, marginBottom: 16 }}>
                        {exp.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            style={{
                              color: 'var(--muted-light)',
                              fontSize: 14,
                              lineHeight: 1.75,
                              marginBottom: 10,
                            }}
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {exp.tech.map((t) => (
                          <span key={t} className="skill-tag" style={{ fontSize: 11 }}>{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
