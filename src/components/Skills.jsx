import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    color: '#c9a96e',
    skills: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'JavaScript', level: 88, icon: '🟨' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'HTML / CSS', level: 95, icon: '🌐' },
    ]
  },
  {
    category: 'Backend',
    color: '#6e9ec9',
    skills: [
      { name: 'Node.js', level: 82, icon: '🟢' },
      { name: 'Express.js', level: 80, icon: '🚀' },
      { name: 'REST APIs', level: 85, icon: '🔌' },
    ]
  },
  {
    category: 'Database & Tools',
    color: '#8aab8a',
    skills: [
      { name: 'MongoDB', level: 78, icon: '🍃' },
      { name: 'Firebase', level: 74, icon: '🔥' },
      { name: 'Git / GitHub', level: 90, icon: '🐙' },
      { name: 'After Effects', level: 85, icon: '🎬' },
    ]
  },
]

const SkillBar = ({ name, level, icon, color, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-400/60 font-mono text-xs tracking-[0.25em] uppercase mb-4">What I Work With</p>
          <h2 className="section-title text-white">
            Skills &amp; <span className="gradient-text italic">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${group.color}60, transparent)` }} />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <h3 className="text-white/80 font-semibold text-sm tracking-wide uppercase">{group.category}</h3>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={group.color}
                    delay={gi * 0.15 + si * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tech tags */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {['VS Code', 'Postman', 'Figma', 'Adobe Premiere', 'Vercel', 'npm'].map((tool, i) => (
            <motion.span
              key={tool}
              className="px-4 py-2 rounded-lg text-xs font-mono text-white/30 border border-white/[0.06] hover:border-white/20 hover:text-white/50 transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
