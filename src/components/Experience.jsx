import { motion } from 'framer-motion'
import { experience } from '../data/projects'

export default function Experience({ theme }) {
  const isDark = theme === 'dark'

  return (
    <section id="experience" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">Experience</p>
          <h2 className={`text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>A timeline of learning, building, and shipping.</h2>
        </motion.div>
        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className={`flex flex-col gap-3 rounded-[1.5rem] border p-6 md:flex-row md:items-center md:justify-between ${isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white/80'}`}>
              <div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.details}</p>
              </div>
              <span className={`rounded-full border px-3 py-1 text-sm ${isDark ? 'border-cyan-400/20 bg-cyan-400/10 text-cyan-100' : 'border-cyan-500/20 bg-cyan-500/10 text-cyan-700'}`}>{item.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
