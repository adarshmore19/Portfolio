import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi'

export default function Footer({ theme }) {
  const isDark = theme === 'dark'

  return (
    <footer className={`border-t px-6 py-8 sm:px-8 lg:px-10 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
      <div className={`mx-auto flex max-w-6xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        <p>© 2026 Adarsh More. Crafted with React, Framer Motion, and a little bit of magic.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/adarshmore19" target="_blank" rel="noreferrer" className={`flex items-center gap-2 transition ${isDark ? 'hover:text-cyan-300' : 'hover:text-cyan-600'}`}>
            <FiGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/adarsh-more-b62361329" target="_blank" rel="noreferrer" className={`flex items-center gap-2 transition ${isDark ? 'hover:text-cyan-300' : 'hover:text-cyan-600'}`}>
            <FiLinkedin /> LinkedIn
          </a>
          <a href="mailto:adarshmore20@gmail.com" className={`flex items-center gap-2 transition ${isDark ? 'hover:text-cyan-300' : 'hover:text-cyan-600'}`}>
            <FiMail /> Email
          </a>
          <a href="/resume.pdf" className={`flex items-center gap-2 transition ${isDark ? 'hover:text-cyan-300' : 'hover:text-cyan-600'}`}>
            <FiFileText /> Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
