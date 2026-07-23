import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMoon, FiSun } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full"
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl ${isDark ? 'border-white/10 bg-slate-950/70' : 'border-slate-200 bg-white/80 shadow-sm'}`}>
        <a href="#hero" className={`text-sm font-semibold uppercase tracking-[0.35em] ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
          ADARSH
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={`text-sm transition ${isDark ? 'text-slate-300 hover:text-cyan-300' : 'text-slate-700 hover:text-cyan-600'}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className={`rounded-full border p-2 transition hover:-translate-y-0.5 ${isDark ? 'border-white/10 text-slate-200 hover:text-cyan-300' : 'border-slate-200 text-slate-700 hover:text-cyan-600'}`}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <a href="https://github.com/adarshmore19" target="_blank" rel="noreferrer" aria-label="GitHub" className={`rounded-full border p-2 transition hover:-translate-y-0.5 ${isDark ? 'border-white/10 text-slate-200 hover:text-cyan-300' : 'border-slate-200 text-slate-700 hover:text-cyan-600'}`}>
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/adarsh-more-b62361329" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`rounded-full border p-2 transition hover:-translate-y-0.5 ${isDark ? 'border-white/10 text-slate-200 hover:text-cyan-300' : 'border-slate-200 text-slate-700 hover:text-cyan-600'}`}>
            <FiLinkedin />
          </a>
          <a href="mailto:adarshmore20@gmail.com" aria-label="Email" className={`rounded-full border p-2 transition hover:-translate-y-0.5 ${isDark ? 'border-white/10 text-slate-200 hover:text-cyan-300' : 'border-slate-200 text-slate-700 hover:text-cyan-600'}`}>
            <FiMail />
          </a>
        </div>
      </div>
    </motion.header>
  )
}
