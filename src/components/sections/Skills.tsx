import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS_BY_CATEGORY } from '../../lib/data'

export function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 60 }}
          >
            <p className="section-label" style={{ marginBottom: 12 }}>Tech Stack</p>
            <h2 className="section-title">Skills</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
            {SKILLS_BY_CATEGORY.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: cat.color }} />
                  <p style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: cat.color }}>
                    {cat.category}
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="skill-tag"
                      style={{ borderColor: `${cat.color}30` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = cat.color
                        e.currentTarget.style.color = cat.color
                        e.currentTarget.style.background = `${cat.color}10`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${cat.color}30`
                        e.currentTarget.style.color = 'var(--muted-light)'
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
