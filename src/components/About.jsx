import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">I build thoughtful software at the intersection of AI, automation, and cloud.</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-lg leading-8 text-slate-300 backdrop-blur-xl">
          <p>
            I&apos;m a Computer Science student focused on AI, Automation, Cloud, and DevOps. I enjoy solving practical problems, building useful products, and learning in public.
          </p>
          <p className="mt-4">
            Currently exploring <span className="font-semibold text-white">AI</span>, <span className="font-semibold text-white">DevOps</span>, <span className="font-semibold text-white">Automation</span>, and <span className="font-semibold text-white">Entrepreneurship</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
