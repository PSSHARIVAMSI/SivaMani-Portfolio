import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CERTIFICATIONS } from '../../lib/data'
import { getCertLogo } from '../ui/CertLogos'

export function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" ref={ref} style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 60 }}
          >
            <p className="section-label" style={{ marginBottom: 12 }}>Credentials</p>
            <h2 className="section-title">Certifications</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20 }}>
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="cert-badge"
                style={{ borderColor: `${cert.color}25` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${cert.color}60`
                  e.currentTarget.style.background = `${cert.color}08`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${cert.color}25`
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 56 }}>
                  {getCertLogo(cert.logo, 44)}
                </div>
                <div>
                  <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: 13, lineHeight: 1.4, marginBottom: 6 }}>
                    {cert.name}
                  </p>
                  <p style={{ color: cert.color, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total count banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            style={{
              marginTop: 48,
              padding: '24px 32px',
              border: '1px solid var(--border)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(0,255,135,0.02)',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 40, fontWeight: 900, color: 'var(--accent)', fontFamily: 'var(--mono-font)' }}>
                {CERTIFICATIONS.length}
              </span>
              <div>
                <p style={{ color: 'var(--text)', fontWeight: 600 }}>Active Certifications</p>
                <p style={{ color: 'var(--muted)', fontSize: 13 }}>Across Snowflake, AWS, Fivetran, Cisco, Microsoft & Juniper</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['#29B5E8', '#FF9900', '#0073E6', '#1BA0D7', '#00BCF2', '#84BD00', '#6366F1'].map((c) => (
                <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
