import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-bold">
            <span className="gradient-text">M</span>
            <span className="text-white/60">anish</span>
            <span className="text-amber-400">.</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/30 text-xs hover:text-white/60 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          {[
            { icon: '🐙', href: 'https://github.com', label: 'GitHub' },
            { icon: '💼', href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: '✉️', href: 'mailto:manish@example.com', label: 'Email' },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-sm hover:border-amber-400/30 hover:bg-amber-400/5 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              aria-label={s.label}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/[0.04] text-center">
        <p className="text-white/20 text-xs font-mono">
          © {new Date().getFullYear()} Manish · Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
