import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Netflix Clone',
    category: 'Web Application',
    description:
      'A Netflix-inspired streaming platform with movies, trailers, and authentication.',
    features: ['Auth System', 'Movie API', 'Responsive UI', 'Trailer Playback'],
    tech: ['React', 'Firebase', 'TMDB API'],
   image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4',
    color: '#E50914',
    emoji: '🎬',
    links: { live: '#', github: '#' },
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce Website',
    category: 'Full Stack',
    description:
      'Modern e-commerce app with cart, product filtering, and secure checkout.',
    features: ['Product Catalog', 'Cart System', 'User Login', 'Payments'],
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da',
    color: '#4CAF50',
    emoji: '🛒',
    links: { live: '#', github: '#' },
    featured: true,
  },
  {
    id: 3,
    title: 'Recommendation System',
    category: 'Machine Learning',
    description:
      'AI-based recommendation engine suggesting content based on user behavior.',
    features: ['ML Model', 'User Analysis', 'Data Processing', 'Personalization'],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask'],
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    color: '#9C27B0',
    emoji: '🤖',
    links: { live: '#', github: '#' },
    featured: false,
  },
]

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="glass-card relative overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)`,
        }}
      />

      {/* Glow */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 70%)`,
        }}
      />

      <div className="p-7">
        {/* 🖼️ IMAGE */}
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
              style={{
                background: `${project.color}12`,
                border: `1px solid ${project.color}25`,
              }}
            >
              {project.emoji}
            </div>
            <div>
              <h3 className="text-white font-display font-semibold text-lg">
                {project.title}
              </h3>
              <p
                className="text-xs font-mono mt-0.5"
                style={{ color: `${project.color}90` }}
              >
                {project.category}
              </p>
            </div>
          </div>

          {project.featured && (
            <span
              className="text-[10px] font-mono px-2 py-1 rounded-full border"
              style={{
                color: project.color,
                borderColor: `${project.color}30`,
                background: `${project.color}08`,
              }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.features.map((f) => (
            <span
              key={f}
              className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-white/35 border border-white/[0.06]"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.06] mb-5" />

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-lg"
              style={{
                color: project.color,
                background: `${project.color}10`,
                border: `1px solid ${project.color}20`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.links.live}
            className="flex-1 py-2.5 rounded-lg text-center text-sm font-medium text-[#0d1117]"
            style={{ background: project.color }}
            whileHover={{ scale: 1.03 }}
          >
            Live Demo ↗
          </motion.a>

          {project.links.github && (
            <motion.a
              href={project.links.github}
              className="flex-1 py-2.5 rounded-lg text-center text-sm font-medium border text-white/50 hover:text-white"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              whileHover={{ scale: 1.03 }}
            >
              GitHub →
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div
        className="orb w-[450px] h-[450px] bottom-0 left-[-100px]"
        style={{
          background:
            'radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-amber-400/60 font-mono text-xs tracking-[0.25em] uppercase mb-4">
            My Work
          </p>
          <h2 className="section-title text-white">
            Selected <span className="gradient-text italic">Projects</span>
          </h2>
          <p className="text-white/35 mt-4 max-w-xl mx-auto text-sm">
            Projects showcasing web development, full-stack systems, and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects