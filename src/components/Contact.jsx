import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const inputClass = (field) => `
    w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-white/80 text-sm placeholder-white/20
    outline-none transition-all duration-200 font-body
    ${focused === field ? 'border-amber-400/40 bg-white/[0.05]' : 'border-white/[0.08] hover:border-white/20'}
  `

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bottom-0 left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 60%)' }} />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-400/60 font-mono text-xs tracking-[0.25em] uppercase mb-4">Get In Touch</p>
          <h2 className="section-title text-white">
            Let's build something
            <span className="gradient-text italic"> together.</span>
          </h2>
          <p className="text-white/35 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left — info */}
          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-white/70 font-semibold text-sm uppercase tracking-wide mb-5">Contact Info</h3>
              
              <div className="space-y-4">
                <a href="mailto:manishkhanggar@gmail.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-sm group-hover:bg-amber-400/20 transition-all">
                    ✉️
                  </div>
                  <div>
                    <p className="text-white/30 text-xs">Email</p>
                    <p className="text-white/70 text-sm group-hover:text-amber-400 transition-colors">manishkhanggar@gmail.com</p>
                  </div>
                </a>

                <a href="https://github.com/Manish7668" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-sm group-hover:border-white/20 transition-all">
                    🐙
                  </div>
                  <div>
                    <p className="text-white/30 text-xs">GitHub</p>
                    <p className="text-white/70 text-sm group-hover:text-white transition-colors">github.com/manish7668</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/manish7668/" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-sm group-hover:bg-blue-400/20 transition-all">
                    💼
                  </div>
                  <div>
                    <p className="text-white/30 text-xs">LinkedIn</p>
                    <p className="text-white/70 text-sm group-hover:text-blue-400 transition-colors">linkedin.com/in/manish7668</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/50 text-sm">Available for freelance & internships</span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                Response time: usually within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-white font-display text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-white/40 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs mb-2 font-mono">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className={inputClass('name')}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-2 font-mono">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className={inputClass('email')}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs mb-2 font-mono">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Hi Manish, I'd love to work with you on..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className={`${inputClass('message')} resize-none`}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-400 text-[#0d1117] font-semibold text-sm tracking-wide relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-amber-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Send Message →</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
