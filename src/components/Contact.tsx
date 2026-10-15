import { motion } from 'framer-motion'

const contacts = [
  { label: 'EMAIL / ARNOLDSHAJU75@GMAIL.COM', href: 'mailto:arnoldshaju75@gmail.com', external: false },
  { label: 'LINKEDIN / ARNOLD-SHAJU-005146255', href: 'https://www.linkedin.com/in/arnold-shaju-005146255', external: true },
  { label: 'GITHUB / GITHUB.COM/ARNOLDSHAJU', href: 'https://github.com/Arnoldshaju', external: true },
  { label: 'PHONE / +91 6238046258', href: 'tel:+916238046258', external: false },
  { label: 'LOCATION / CHALAKUDY, THRISSUR, KERALA', href: '#', external: false },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-12 lg:mb-16"
        />

        {/* Message */}
        <motion.div
          {...fadeInUp}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            LET'S BUILD<br />
            SOMETHING EXCEPTIONAL<br />
            TOGETHER
          </h3>
          <p className="text-sm text-gray-400 tracking-wider">
            Open to software engineering roles, full-stack opportunities, and technical collaborations.
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="space-y-0 max-w-2xl">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/40 transition-colors px-4 -mx-4"
            >
              <span className="text-sm text-gray-300 tracking-widest font-mono">
                {contact.label}
              </span>
              <span className="text-gray-500 group-hover:text-white transition-colors">
                ↗
              </span>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Direct Contact */}
        <motion.div
          {...fadeInUp}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800"
        >
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Connect Directly
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs text-gray-500 font-mono tracking-widest uppercase block mb-1">Email</span>
              <a
                href="mailto:arnoldshaju75@gmail.com"
                className="text-lg lg:text-2xl text-gray-200 hover:text-white transition-colors underline underline-offset-4"
              >
                arnoldshaju75@gmail.com
              </a>
            </div>
            <div className="mt-2">
              <span className="text-xs text-gray-500 font-mono tracking-widest uppercase block mb-1">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/arnold-shaju-005146255"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg lg:text-2xl text-gray-200 hover:text-white transition-colors underline underline-offset-4"
              >
                linkedin.com/in/arnold-shaju-005146255
              </a>
            </div>
            <div className="flex flex-wrap gap-8 sm:gap-12 pt-6 mt-2 border-t border-gray-900">
              <div>
                <span className="text-xs text-gray-500 font-mono tracking-widest uppercase block mb-1">GitHub</span>
                <a
                  href="https://github.com/Arnoldshaju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base lg:text-lg text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  github.com/Arnoldshaju
                </a>
              </div>
              <div>
                <span className="text-xs text-gray-500 font-mono tracking-widest uppercase block mb-1">Phone</span>
                <a
                  href="tel:+916238046258"
                  className="text-base lg:text-lg text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  +91 6238046258
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Arnold Shaju. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Chalakudy, Thrissur, Kerala — 680372
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
