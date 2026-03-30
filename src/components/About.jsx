import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  { label: 'Projects', value: '10+' },
  { label: 'Clients', value: '5+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Cups of Coffee', value: '∞' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="orb w-[400px] h-[400px] top-0 right-[-100px]"
        style={{ background: 'radial-gradient(circle, rgba(110,158,201,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Left — visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Card frame */}
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400/60 via-amber-300 to-transparent" />
                
                {/* Initials block */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-400/20 flex items-center justify-center mb-6">
                  <span className="font-display text-4xl font-bold gradient-text">M</span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-white mb-1">Manish</h3>
                <p className="text-amber-400/70 text-sm font-mono mb-4">Full Stack Developer</p>
                
                <div className="space-y-2 text-sm text-white/40">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Open to Work
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    India
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🎓</span>
                    Computer Science
                  </div>
                </div>

                {/* Decorative lines */}
                <div className="absolute bottom-6 right-6 opacity-10">
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="glass-card p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="font-display text-2xl font-bold gradient-text">{item.value}</div>
                    <div className="text-xs text-white/40 mt-1">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-amber-400/60 font-mono text-xs tracking-[0.25em] uppercase mb-4">About Me</p>
            <h2 className="section-title text-white mb-6">
              Crafting digital experiences
              <span className="gradient-text italic"> with purpose.</span>
            </h2>

            <div className="space-y-4 text-white/50 leading-relaxed text-base">
              <p>
                I'm a passionate full stack developer with a love for building products that merge 
                technical rigor with thoughtful design. Whether it's architecting backend systems or 
                crafting pixel-perfect interfaces, I approach every project with the same commitment 
                to quality.
              </p>
              <p>
                Beyond coding, I've built a freelance career in video editing and content creation, 
                working with international clients and managing digital presence for college events. 
                This creative background gives me a unique edge — I understand both the technical 
                and human sides of great digital products.
              </p>
              <p>
                I'm always learning, always building, and always looking for the next challenge that 
                pushes me to grow as a developer and creator.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Problem Solver', 'Clean Code Advocate', 'Creative Thinker', 'Fast Learner'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-medium border border-white/10 text-white/50 hover:border-amber-400/40 hover:text-amber-400/70 transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
