import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero({ theme }) {
  const isDark = theme === 'dark'

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-8 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
          <div className={`inline-flex items-center rounded-full border px-4 py-2 text-sm ${isDark ? 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200' : 'border-cyan-500/20 bg-cyan-500/10 text-cyan-700'}`}>
            Building AI, Automation & DevOps Solutions
          </div>
          <div className="space-y-4">
            <h1 className={`max-w-4xl text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">Adarsh More</span>
            </h1>
            <p className={`max-w-2xl text-lg leading-8 sm:text-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              I create practical AI products, automation workflows, and cloud-ready systems that turn ideas into dependable software.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 font-medium text-slate-950 transition hover:-translate-y-1">
              Explore Projects
            </a>
          </div>
          <div className={`flex flex-wrap gap-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <a href="https://github.com/adarshmore19" target="_blank" rel="noreferrer" className={`flex items-center gap-2 rounded-full border px-4 py-2 transition ${isDark ? 'border-white/10 hover:text-cyan-300' : 'border-slate-200 hover:text-cyan-600'}`}>
              <FiGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/adarsh-more-b62361329" target="_blank" rel="noreferrer" className={`flex items-center gap-2 rounded-full border px-4 py-2 transition ${isDark ? 'border-white/10 hover:text-cyan-300' : 'border-slate-200 hover:text-cyan-600'}`}>
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div className={`absolute inset-0 rounded-[2rem] border shadow-[0_0_120px_rgba(99,102,241,0.25)] backdrop-blur-xl ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white/70'}`} />
          <div className={`relative h-[420px] w-full rounded-[2rem] border p-8 ${isDark ? 'border-cyan-400/20 bg-slate-900/70' : 'border-cyan-500/20 bg-white/80'}`}>
            <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
            <div className="space-y-6">
              <div className={`rounded-2xl border p-5 ${isDark ? 'border-white/10 bg-slate-950/80' : 'border-slate-200 bg-slate-50'}`}>
                <p className={`text-sm uppercase tracking-[0.3em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Current Focus</p>
                <p className={`mt-2 text-xl font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>AI • DevOps • Automation</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-5">
                <p className={`text-sm uppercase tracking-[0.3em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>What I enjoy</p>
                <ul className={`mt-3 space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li>• Building practical products</li>
                  <li>• Solving real problems with code</li>
                  <li>• Learning in public and shipping fast</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className={`absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        <span>Scroll</span>
        <FiArrowDown className="mt-2 animate-bounce" />
      </motion.a>
    </section>
  )
}
