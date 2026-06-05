import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PERSON, EDUCATION } from '../../lib/data'

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '80px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            {/* Left: Big statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label" style={{ marginBottom: 24 }}>About</p>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                  marginBottom: 32,
                }}
              >
                I turn raw data into{' '}
                <span style={{ color: 'var(--accent)' }}>business decisions</span>
                {' '}at scale.
              </h2>
              <p style={{ color: 'var(--muted-light)', lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                {PERSON.summary}
              </p>
              <p style={{ color: 'var(--muted-light)', lineHeight: 1.8, fontSize: 16 }}>
                Currently pursuing my MS in Data Analytics Engineering at George Mason University while channeling real-world Snowflake and AWS expertise into the next generation of data engineers.
              </p>
            </motion.div>

            {/* Right: Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Education */}
              <div style={{ marginBottom: 48 }}>
                <p className="section-label" style={{ marginBottom: 20 }}>Education</p>
                {EDUCATION.map((e) => (
                  <div key={e.school} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--border)' }}>
                    <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{e.degree}</p>
                    <p style={{ color: 'var(--accent)', fontSize: 14, marginBottom: 4 }}>{e.school}</p>
                    <p style={{ color: 'var(--muted)', fontSize: 13, fontFamily: 'var(--mono-font)' }}>
                      {e.period} · {e.location}
                    </p>
                  </div>
                ))}
              </div>

              {/* Currently */}
              <div>
                <p className="section-label" style={{ marginBottom: 20 }}>Status</p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '16px 20px',
                    border: '1px solid rgba(0,255,135,0.25)',
                    borderRadius: 12,
                    background: 'rgba(0,255,135,0.05)',
                    marginBottom: 12,
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)', flexShrink: 0, animation: 'pulse 2s infinite' }} />
                  <div>
                    <p style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 700 }}>Actively seeking opportunities</p>
                    <p style={{ color: 'var(--muted-light)', fontSize: 13 }}>Data Engineer · Data Analyst · Remote / Hybrid · US-based</p>
                  </div>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 12, fontFamily: 'var(--mono-font)' }}>
                  Open to full-time roles, contracts & consulting
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
