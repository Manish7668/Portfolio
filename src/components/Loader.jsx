import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: '#0d1117' }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-center">
        <motion.div
          className="relative mx-auto mb-8 w-16 h-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-400 border-r-amber-400/50" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-amber-300/60" />
        </motion.div>

        <motion.p
          className="font-mono text-sm tracking-[0.3em] text-amber-400/70 uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Loading Portfolio
        </motion.p>

        <motion.div
          className="mt-4 mx-auto h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: '160px' }}
          transition={{ delay: 0.5, duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}

export default Loader
