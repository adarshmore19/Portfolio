import { motion } from 'framer-motion'
import { skills } from '../data/projects'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Skills</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">A stack built for building fast and shipping confidently.</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-7 shadow-[0_0_80px_rgba(99,102,241,0.08)]">
              <h3 className="mb-4 text-xl font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
