import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiSend } from 'react-icons/fi'

export default function Contact() {
  const form = useRef(null)
  const [status, setStatus] = useState('')

  const sendEmail = (event) => {
    event.preventDefault()
    setStatus('Sending...')
    emailjs
      .sendForm('service_id', 'template_id', form.current, 'public_key')
      .then(() => {
        setStatus('Message sent. Thanks for reaching out!')
        form.current.reset()
      })
      .catch(() => {
        setStatus('Unable to send right now. Please email me directly.')
      })
  }

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build something useful together.</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-10">
          <form ref={form} onSubmit={sendEmail} className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input name="user_name" required placeholder="Your name" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0" />
              <input name="user_email" required type="email" placeholder="Your email" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0" />
            </div>
            <textarea name="message" required rows="6" placeholder="Tell me about your idea..." className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0" />
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 font-medium text-slate-950 transition hover:-translate-y-1">
                Send Message <FiSend />
              </button>
              {status ? <p className="text-sm text-slate-300">{status}</p> : null}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
