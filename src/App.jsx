import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const isDark = theme === 'dark'

  return (
    <div className={isDark ? 'min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_30%),linear-gradient(135deg,_#050816_0%,_#0f172a_100%)] text-slate-100' : 'min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] text-slate-900'}>
      <motion.div className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500" style={{ scaleX }} />
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <Navbar theme={theme} onToggleTheme={() => setTheme(isDark ? 'light' : 'dark')} />
        <main>
          <Hero theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <Experience theme={theme} />
          <Projects theme={theme} />
        </main>
        <Footer theme={theme} />
      </div>
    </div>
  )
}

export default App
