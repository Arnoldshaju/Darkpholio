import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Me</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="/about-coding.jpg"
              alt="Software Engineering & System Architecture"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border border-gray-800"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              SOFTWARE ENGINEERING & SYSTEM ARCHITECTURE
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Arnold Shaju is a Computer Science Engineering graduate from College of 
              Engineering Cherthala (IHRD) with hands-on expertise in Python, Django, React, 
              TypeScript, and modern web architectures. Driven by a deep passion for 
              engineering reliable systems, he focuses on writing clean, scalable code 
              with robust databases, secure authentication, and seamless API integrations.
            </p>
          </motion.div>
        </div>

        {/* Big Statement Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "BUILDING CLEAN,<br />
            <span className="text-white underline underline-offset-8">RELIABLE FULL-STACK WEB APPS</span><br />
            WITH MODERN ARCHITECTURE<br />
            & PURPOSEFUL DESIGN."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            B.TECH IN COMPUTER SCIENCE & ENGINEERING<br />
            FULL STACK SOFTWARE DEVELOPER
          </p>
        </motion.div>

        {/* Second Block - Graduation & Academic Milestone */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <div>
              <span className="text-xs text-gray-500 font-mono tracking-widest uppercase block mb-3">
                B.Tech in Computer Science & Engineering | Class of 2026
              </span>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                I’m happy to share that I have successfully completed my B.Tech in 
                Computer Science and Engineering from College of Engineering Cherthala (CEC), 
                under APJ Abdul Kalam Technological University (KTU), with a CGPA of 7.14/10. 
                From learning the fundamentals of Computer Science to working on projects, 
                exploring software development, and stepping into the professional world, 
                every stage of these four years has contributed to who I am today.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="/graduation.jpg"
              alt="Arnold Shaju Graduation Ceremony"
              className="w-full h-auto grayscale contrast-110 border border-gray-800"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              COLLEGE OF ENGINEERING CHERTHALA (CEC), KTU — CLASS OF 2026
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Team Collaboration and Leadership"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              COMMUNITY LEADERSHIP — NRPF UNIT COORDINATOR & NSS VOLUNTEER
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Beyond engineering, Arnold has demonstrated strong leadership and team 
              management skills as an NRPF Unit Coordinator and NSS volunteer. 
              Whether coordinating complex university initiatives or collaborating in fast-paced 
              development teams, he brings sharp communication, disciplined problem-solving, 
              and a proactive mindset to every challenge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
