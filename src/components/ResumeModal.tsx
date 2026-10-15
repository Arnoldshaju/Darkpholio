import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ExternalLink, X, FileText } from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0f0f0f] border border-gray-800 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-800 bg-[#121212]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold tracking-wide text-white uppercase font-mono">
                    Arnold Shaju — Resume
                  </h3>
                  <p className="text-xs text-gray-400 hidden sm:block">
                    Full Stack Developer & B.Tech CSE Graduate
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Download Button */}
                <a
                  href="/arnold-shaju-resume.pdf"
                  download="Arnold_Shaju_Resume.pdf"
                  className="flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium bg-white text-black hover:bg-gray-200 transition-colors rounded shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Download PDF</span>
                </a>

                {/* Open in New Tab Button */}
                <a
                  href="/arnold-shaju-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 transition-colors rounded"
                  title="Open PDF directly in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors rounded ml-1"
                  aria-label="Close resume modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Viewer Body */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-[#080808] flex flex-col items-center">
              <div className="w-full max-w-3xl bg-white rounded shadow-2xl overflow-hidden border border-gray-700/50">
                <img
                  src="/arnold-shaju-resume-preview.png"
                  alt="Arnold Shaju Resume Preview"
                  className="w-full h-auto block select-none"
                />
              </div>

              {/* Bottom Quick Download Bar */}
              <div className="w-full max-w-3xl mt-4 sm:mt-6 p-4 rounded border border-gray-800 bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    Looking to keep a copy of this resume?
                  </p>
                  <p className="text-xs text-gray-400">
                    PDF format (1 Page) • 55 KB
                  </p>
                </div>
                <a
                  href="/arnold-shaju-resume.pdf"
                  download="Arnold_Shaju_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold bg-white text-black hover:bg-gray-200 transition-colors rounded uppercase tracking-wider font-mono"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
