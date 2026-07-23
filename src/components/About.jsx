import { motion } from 'framer-motion'

export default function About({ theme }) {
  const isDark = theme === 'dark'

  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">About</p>
          <h2 className={`text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>I build thoughtful software at the intersection of AI, automation, and cloud.</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className={`rounded-[2rem] border p-8 text-lg leading-8 backdrop-blur-xl ${isDark ? 'border-white/10 bg-white/5 text-slate-300' : 'border-slate-200 bg-white/80 text-slate-700'}`}>
          <p>
            I&apos;m a Computer Science student focused on AI, Automation, Cloud, and DevOps. I enjoy solving practical problems, building useful products, and learning in public.
          </p>
          <p className="mt-4">
            Currently exploring <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>AI</span>, <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>DevOps</span>, <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Automation</span>, and <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Entrepreneurship</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
