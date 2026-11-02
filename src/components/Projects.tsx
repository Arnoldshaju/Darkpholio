import { motion } from 'framer-motion'

const projects = [
  {
    number: '(01)',
    category: 'AI · Backend',
    period: 'Jul 2025 — Present',
    title: 'Smart Grocery Assistant',
    description:
      'OCR-powered grocery assistant on Django — AI-driven recommendations, expiry and refill alerts, and in-store navigation with route optimization.',
    tags: ['OCR', 'AI', 'Django', 'Python', 'SQLite'],
    image: '/work-grocery.jpg',
    type: 'Backend App',
    github: 'https://github.com/Arnoldshaju',
    live: null,
  },
  {
    number: '(02)',
    category: 'Full-Stack',
    period: '2025 — Present',
    title: 'Zeal',
    description:
      'Full-stack collaborative document editor with authentication, role-based sharing, real-time WebSocket updates and live presence — built with Next.js and Django REST Framework.',
    tags: ['Next.js', 'Django REST', 'WebSockets', 'Redis', 'JWT'],
    image: '/work-zeal.jpg',
    type: 'Full-Stack App',
    github: 'https://github.com/Arnoldshaju',
    live: 'https://zeal-sepia.vercel.app',
  },
  {
    number: '(03)',
    category: 'Web · Frontend',
    period: '2025',
    title: 'Terra Mindspace',
    description:
      'A modern restaurant website with an elegant, immersive dining experience — built with TanStack Start, React, TypeScript and Tailwind CSS.',
    tags: ['TanStack Start', 'React', 'TypeScript', 'Tailwind CSS', 'Nitro'],
    image: '/work-terra.jpg',
    type: 'Web Platform',
    github: 'https://github.com/Arnoldshaju',
    live: 'https://terra-mindspace.vercel.app',
  },
  {
    number: '(04)',
    category: 'Full-Stack · DevOps',
    period: '2026',
    title: 'Curl',
    description:
      'High-performance URL shortener & telemetry platform featuring collision-safe Base62 routing, sub-millisecond Redis caching, anti-SSRF defenses, and asynchronous Celery click analytics.',
    tags: ['Next.js', 'Django REST', 'Redis', 'PostgreSQL', 'Celery', 'Docker'],
    image: '/work-curl.jpg',
    type: 'Full-Stack App',
    github: 'https://github.com/Arnoldshaju/curl',
    live: null,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-16 lg:mb-24">
          <h2 className="font-display text-[10vw] lg:text-section leading-none tracking-tight">
            SELECTED<br />PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: (index % 2) * 0.15 }}
              className="flex flex-col justify-between border border-gray-800 bg-black/40 p-6 group hover:border-gray-600 transition-colors"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono tracking-widest uppercase mb-3">
                  <span>{project.number}</span>
                  <span className="text-gray-400">{project.category}</span>
                </div>

                <p className="text-xs text-gray-600 font-mono tracking-widest uppercase mb-5">
                  {project.period}
                </p>

                {/* Project Image - Pure Black and White */}
                <div className="relative mb-6 overflow-hidden border border-gray-800 aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl lg:text-3xl tracking-tight text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs text-gray-400 border border-gray-800 font-mono rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800 text-xs font-mono tracking-wider uppercase">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center text-white border border-gray-700 hover:border-white transition-colors"
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <span className="flex-1 py-2 text-center text-gray-500 border border-gray-800/60">
                    {project.type}
                  </span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-gray-400 border border-gray-800 hover:text-white hover:border-gray-600 transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
