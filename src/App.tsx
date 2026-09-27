import { MotionConfig } from 'framer-motion'
import { SHOW_PROJECTS } from './data/siteConfig'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Benefits } from './components/sections/Benefits'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { Hero } from './components/sections/Hero'
import { Intro } from './components/sections/Intro'
import { Process } from './components/sections/Process'
import { Projects } from './components/sections/Projects'
import { Services } from './components/sections/Services'
import { SocialProof } from './components/sections/SocialProof'
import { Statement } from './components/sections/Statement'
import { Technologies } from './components/sections/Technologies'
import { Testimonials } from './components/sections/Testimonials'

export default function App() {
  return (
    // reducedMotion="user": respeta la preferencia del sistema "reducir movimiento".
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="contenido">
        <Hero />
        <SocialProof />
        <Intro />
        <Services />
        {SHOW_PROJECTS && <Projects />}
        <Benefits />
        <Process />
        <Statement />
        <Testimonials />
        <About />
        <Technologies />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </MotionConfig>
  )
}
