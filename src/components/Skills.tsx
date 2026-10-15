import { motion } from 'framer-motion'

interface SkillCategory {
  id: string
  number: string
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend',
    skills: [
      'React & Next.js',
      'TypeScript & JavaScript',
      'HTML5 & Modern CSS',
      'Tailwind CSS & Responsive UI',
      'WebSockets & Real-Time Sync',
      'Mobile UI (Android Studio)',
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend',
    skills: [
      'Python & Django',
      'REST APIs & Architecture',
      'Redis & Celery Async Queues',
      'Docker & Containerisation',
      'CI/CD Pipeline Management',
      'AWS EC2',
      'JWT & Security / Auth',
      'Java & System Programming',
    ],
  },
  {
    id: 'database',
    number: '03',
    title: 'Database',
    skills: [
      'PostgreSQL & Database Design',
      'SQLite & Relational Modeling',
      'MySQL Database Management',
      'Redis Caching & Key-Value Store',
      'Schema Optimization & Migrations',
    ],
  },
  {
    id: 'soft-skills',
    number: '04',
    title: 'Soft Skills',
    skills: [
      'Team Management & Leadership',
      'Problem-Solving & Critical Thinking',
      'Technical Communication & Collaboration',
      'Agile Workflow & Time Management',
      'Community Volunteering (NRPF & NSS)',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          SKILLS
        </motion.h2>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: catIndex * 0.1 }}
              className="flex flex-col"
            >
              {/* Subheading Header */}
              <div className="border-b border-gray-700/80 pb-4 mb-6 flex items-baseline justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-500 tracking-wider">
                    {category.number}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl text-white tracking-wide uppercase">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills List for this Category */}
              <div className="space-y-3.5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (catIndex * 0.1) + (index * 0.04) }}
                    className="border-b border-gray-800/70 pb-3 flex items-center justify-between group hover:border-gray-600 transition-colors"
                  >
                    <span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors font-light">
                      {skill}
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-400 group-hover:translate-x-1 transition-all text-sm font-mono">
                      →
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
