import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected work that blends product thinking with technical depth.</h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} whileHover={{ y: -6, scale: 1.01 }} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-[0_0_80px_rgba(99,102,241,0.1)]">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70 transition duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-200">{project.tagline}</span>
                </div>
                <div className="mb-5 overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/60">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <p className="mb-5 max-w-xl text-slate-300">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={project.links.github} className="rounded-full border border-white/15 px-4 py-2 font-medium text-slate-100 transition hover:translate-x-1">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
