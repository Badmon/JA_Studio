import { MotionConfig } from 'framer-motion'
import { SHOW_PROJECT_GALLERY } from './data/siteConfig'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Benefits } from './components/sections/Benefits'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { ProjectMarquee } from './components/sections/ProjectMarquee'
import { Technologies } from './components/sections/Technologies'
import { Testimonials } from './components/sections/Testimonials'

export default function App() {
  return (
    // reducedMotion="user": respeta la preferencia del sistema "reducir movimiento".
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="contenido">
        <Hero />
        {SHOW_PROJECT_GALLERY && <ProjectMarquee />}
        <Benefits />
        <Process />
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
