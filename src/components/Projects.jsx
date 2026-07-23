import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects({ theme }) {
  const isDark = theme === 'dark'

  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">Projects</p>
          <h2 className={`text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Selected work that blends product thinking with technical depth.</h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} whileHover={{ y: -6, scale: 1.01 }} className={`group relative overflow-hidden rounded-[2rem] border p-7 shadow-[0_0_80px_rgba(99,102,241,0.1)] ${isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white/80'}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70 transition duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                  <span className={`rounded-full border px-3 py-1 text-sm ${isDark ? 'border-white/15 bg-white/10 text-slate-200' : 'border-slate-200 bg-white/80 text-slate-700'}`}>{project.tagline}</span>
                </div>
                <div className={`mb-5 overflow-hidden rounded-[1.25rem] border ${isDark ? 'border-white/10 bg-slate-950/60' : 'border-slate-200 bg-slate-50'}`}>
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <p className={`mb-5 max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className={`rounded-full border px-3 py-1 text-sm ${isDark ? 'border-white/10 bg-slate-950/70 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
