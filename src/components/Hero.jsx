import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] top-[-100px] left-[-150px]"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] bottom-[-100px] right-[-100px]"
        style={{ background: 'radial-gradient(circle, rgba(110,158,201,0.1) 0%, transparent 70%)' }} />
      <div className="orb w-[300px] h-[300px] top-[40%] right-[20%]"
        style={{ background: 'radial-gradient(circle, rgba(138,171,138,0.08) 0%, transparent 70%)' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs font-mono tracking-widest uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-display font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 8rem)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text italic">Manish</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-white/50 font-mono text-sm md:text-base tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Full Stack Developer &nbsp;·&nbsp; Problem Solver &nbsp;·&nbsp; Creative Thinker
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          I build thoughtful digital products — from scalable web applications to compelling visual experiences. 
          Passionate about clean code, great design, and turning complex ideas into elegant solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            onClick={() => scrollToSection('#projects')}
            className="group relative overflow-hidden px-8 py-4 rounded-xl bg-amber-400 text-[#0d1117] font-semibold text-sm tracking-wide"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-amber-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 rounded-xl border border-white/10 text-white/70 font-semibold text-sm tracking-wide hover:border-white/30 hover:text-white transition-all duration-200 hover:bg-white/5"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-white/25 text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-amber-400/60 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-24 right-10 md:right-24 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" stroke="#c9a96e" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 md:left-24 opacity-15"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="5" y="5" width="30" height="30" stroke="#6e9ec9" strokeWidth="1" fill="none" transform="rotate(20 20 20)" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
