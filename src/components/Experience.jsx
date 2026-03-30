import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: 'Full Stack Developer',
    org: 'Personal Projects',
    period: '2023 – Present',
    type: 'Development',
    color: '#c9a96e',
    icon: '💻',
    points: [
      'Built scalable full-stack applications using MERN stack',
      'Developed REST APIs and implemented JWT authentication',
      'Worked on responsive UI with React and modern CSS frameworks',
      'Deployed apps using Vercel, Railway, and cloud services',
    ],
  },
  {
    title: 'Frontend Developer',
    org: 'Self Learning & Practice',
    period: '2022 – Present',
    type: 'Frontend',
    color: '#6e9ec9',
    icon: '⚛️',
    points: [
      'Created modern UI/UX interfaces using React and Tailwind CSS',
      'Implemented animations using Framer Motion and GSAP',
      'Optimized performance and responsiveness across devices',
      'Focused on clean code and reusable components',
    ],
  },
  {
    title: 'Backend & ML Enthusiast',
    org: 'Projects & Learning',
    period: '2023 – Present',
    type: 'Backend / AI',
    color: '#9C27B0',
    icon: '🧠',
    points: [
      'Built backend systems with Node.js and MongoDB',
      'Explored machine learning concepts and recommendation systems',
      'Worked with Python libraries like Pandas and Scikit-learn',
      'Integrated APIs and handled data processing pipelines',
    ],
  },
]

const achievements = [
  { icon: '🚀', label: 'Projects Built', sub: 'Full Stack & AI Apps' },
  { icon: '💻', label: 'Tech Stack', sub: 'MERN + Python' },
  { icon: '⚡', label: 'Focus', sub: 'Scalable Systems' },
  { icon: '📈', label: 'Learning', sub: 'DSA & System Design' },
]
const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      <div className="orb w-[400px] h-[400px] top-0 right-0"
        style={{ background: 'radial-gradient(circle, rgba(138,171,138,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-400/60 font-mono text-xs tracking-[0.25em] uppercase mb-4">My Journey</p>
          <h2 className="section-title text-white">
            Experience &amp; <span className="gradient-text italic">Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 ${i % 2 === 0 ? '' : 'md:direction-rtl'}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Card */}
                <div className={`glass-card p-6 relative overflow-hidden ${i % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <div className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${exp.color}60, transparent)` }} />
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${exp.color}12`, border: `1px solid ${exp.color}25` }}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium" style={{ color: exp.color }}>{exp.org}</span>
                        <span className="text-white/20 text-xs">·</span>
                        <span className="text-white/35 text-xs font-mono">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-white/40 text-sm">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-4 inline-block text-xs px-2.5 py-1 rounded-full border"
                    style={{ color: exp.color, borderColor: `${exp.color}25`, background: `${exp.color}08` }}>
                    {exp.type}
                  </span>
                </div>

                {/* Timeline dot — hidden on mobile */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 items-center justify-center"
                  style={{ borderColor: exp.color, background: '#0d1117' }}>
                  <div className="w-1 h-1 rounded-full" style={{ background: exp.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              className="glass-card p-5 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl mb-2">{a.icon}</div>
              <div className="text-white/80 text-sm font-medium">{a.label}</div>
              <div className="text-white/35 text-xs mt-1">{a.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
