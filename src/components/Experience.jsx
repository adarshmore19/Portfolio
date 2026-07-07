import { motion } from 'framer-motion'
import { experience } from '../data/projects'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Experience</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">A timeline of learning, building, and shipping.</h2>
        </motion.div>
        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="flex flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.details}</p>
              </div>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
