import { useState } from 'react'
import { CustomCursor } from './components/ui/CustomCursor'
import { ParticleBackground } from './components/ui/ParticleBackground'
import { Navbar } from './components/ui/Navbar'
import { AvatarIntro } from './components/avatar/AvatarIntro'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import './index.css'

const AVATAR_URL = './avatar/vamsi-avatar.glb'

function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#F0F0F0' }}>
      <CustomCursor />
      <ParticleBackground />

      <AvatarIntro onDone={() => setIntroDone(true)} avatarUrl={AVATAR_URL} />

      <div style={{
        opacity: introDone ? 1 : 0,
        transition: 'opacity 0.8s ease',
        pointerEvents: introDone ? 'auto' : 'none',
        position: 'relative',
        zIndex: 2,
      }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
