import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PERSON } from '../../lib/data'

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${PERSON.email}?subject=${subject}&body=${body}`
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '100px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>

          {/* Big CTA header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 80 }}
          >
            <p className="section-label" style={{ marginBottom: 24 }}>Let's work together</p>
            <h2
              style={{
                fontSize: 'clamp(40px, 7vw, 96px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: 'var(--text)',
              }}
            >
              GOT A DATA<br />
              <span style={{ color: 'var(--accent)' }}>CHALLENGE?</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            {/* Left: info + socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <p style={{ color: 'var(--muted-light)', lineHeight: 1.8, fontSize: 16, marginBottom: 48 }}>
                Open to Data Engineering roles, consulting engagements, and research collaborations. Currently based in Fairfax, VA — available for remote and hybrid opportunities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { label: 'Email', value: PERSON.email, href: `mailto:${PERSON.email}` },
                  { label: 'LinkedIn', value: 'linkedin.com/in/sivapullipudi', href: PERSON.linkedin },
                  { label: 'GitHub', value: 'github.com/PSSHARIVAMSI', href: PERSON.github },
                ].map((link) => (
                  <div key={link.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{link.label}</span>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--text)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text)' }}
                    >
                      {link.value} ↗
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
            >
              {[
                { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Jane Smith' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'jane@company.com' },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: 8 }}>
                    {field.label}
                  </label>
                  <input
                    required
                    type={field.type}
                    placeholder={field.placeholder}
                    value={(form as Record<string, string>)[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderBottomColor = 'var(--accent)' }}
                    onBlur={(e) => { e.target.style.borderBottomColor = 'var(--border)' }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your data challenge..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => { e.target.style.borderBottomColor = 'var(--accent)' }}
                  onBlur={(e) => { e.target.style.borderBottomColor = 'var(--border)' }}
                />
              </div>
              <button
                type="submit"
                style={{
                  alignSelf: 'flex-start',
                  padding: '14px 40px',
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
                Send Message →
              </button>
            </motion.form>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: 80,
            paddingTop: 32,
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}>
            <p style={{ color: 'var(--muted)', fontSize: 13 }}>
              © 2026 Siva Mani Pullipudi
            </p>
            <p style={{ color: 'var(--muted)', fontSize: 12, fontFamily: 'var(--mono-font)' }}>
              Built with React · Three.js · Framer Motion
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
