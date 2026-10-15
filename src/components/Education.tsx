import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          ACADEMIC<br />EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* B.Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                alt="College of Engineering Cherthala"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                COLLEGE OF ENGINEERING CHERTHALA, IHRD — KERALA / INDIA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <span className="text-xs text-gray-500 font-mono tracking-widest uppercase block mb-2">
                  CGPA: 7.14 / 10.0
                </span>
                <h3 className="text-xl lg:text-3xl font-light text-white mb-3">
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Studied core computer science fundamentals including Data Structures, Algorithms, 
                  Database Systems, Operating Systems, Computer Networks, and Software Engineering. 
                  Active contributor to campus technical communities, unit coordinator for NRPF, 
                  and NSS volunteer.
                </p>
                <p className="text-sm text-gray-500 font-mono">2022 — 2026</p>
              </div>
            </motion.div>
          </div>

          {/* Higher Secondary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <span className="text-xs text-gray-500 font-mono tracking-widest uppercase block mb-2">
                  Academic Score: 99%
                </span>
                <h3 className="text-xl lg:text-3xl font-light text-white mb-3">
                  Higher Secondary Education (12th Grade)
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Completed senior secondary schooling at St Antonys HSS Mala with an outstanding 
                  99% distinction, developing a rigorous foundation in Mathematics, Physics, Chemistry, 
                  and analytical sciences.
                </p>
                <p className="text-sm text-gray-500 font-mono">2019 — 2021</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="/st-antonys-mala.jpg"
                alt="St Antonys HSS Mala"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border border-gray-800"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                ST ANTONYS HSS MALA — KERALA / INDIA
              </p>
            </motion.div>
          </div>

          {/* Secondary (SSLC) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                alt="St Joseph EMHSS Aloor"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                ST JOSEPH EMHSS ALOOR — KERALA / INDIA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <span className="text-xs text-gray-500 font-mono tracking-widest uppercase block mb-2">
                  Academic Score: 98%
                </span>
                <h3 className="text-xl lg:text-3xl font-light text-white mb-3">
                  Secondary School Leaving Certificate (SSLC)
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Graduated secondary school with 98% distinction at St Joseph EMHSS Aloor, 
                  recognized for academic excellence, discipline, and participation in science 
                  and cultural competitions.
                </p>
                <p className="text-sm text-gray-500 font-mono">March 2018</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
