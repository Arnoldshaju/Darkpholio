import { useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { ResumeModal } from '@/components/ResumeModal'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Navigation() {
  const activeSection = useActiveSection()
  const isVisible = useScrollVisibility()
  const [resumeOpen, setResumeOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>

      {/* Top Right Header Links (Desktop and Mobile) - Order: Contact, LinkedIn, GitHub, Resume */}
      <div className="fixed top-0 right-0 z-50 p-6 md:p-10">
        <div className="flex items-center gap-3.5 sm:gap-6 justify-end">
          <button
            onClick={() => scrollToSection('contact')}
            className="text-xs sm:text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity cursor-pointer"
          >
            Contact
          </button>
          <a
            href="https://www.linkedin.com/in/arnold-shaju-005146255"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Arnoldshaju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
          >
            GitHub
          </a>
          <button
            onClick={() => setResumeOpen(true)}
            className="text-xs sm:text-sm font-mono text-white mix-blend-difference hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-wider flex items-center gap-1 group"
          >
            <span>Resume</span>
            <span className="text-[10px] sm:text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </button>
        </div>
      </div>

      {/* Desktop Navigation Items - Fixed Bottom Right */}
      <nav 
        className={cn(
          'hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10 transition-all duration-500',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-end gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'text-sm text-white mix-blend-difference transition-all duration-300 relative py-1 cursor-pointer',
                'hover:opacity-60',
                activeSection === item.id && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
              )}
            >
              {item.label}
            </button>
          ))}

          <div className="w-8 h-px bg-white/30 my-0.5 mix-blend-difference" />
          <button
            onClick={() => setResumeOpen(true)}
            className="text-sm font-mono text-white mix-blend-difference transition-all duration-300 relative py-1 hover:opacity-60 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider group"
          >
            <span>Resume</span>
            <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </button>
        </div>
      </nav>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}
