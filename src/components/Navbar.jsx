import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 backdrop-blur-xl">
        <a href="#hero" className="text-sm font-semibold tracking-[0.35em] text-slate-100 uppercase">
          ADARSH
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/adarshmore19" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:-translate-y-0.5 hover:text-cyan-300">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/adarsh-more-b62361329" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:-translate-y-0.5 hover:text-cyan-300">
            <FiLinkedin />
          </a>
          <a href="mailto:adarshmore20@gmail.com" aria-label="Email" className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:-translate-y-0.5 hover:text-cyan-300">
            <FiMail />
          </a>
        </div>
      </div>
    </motion.header>
  )
}
