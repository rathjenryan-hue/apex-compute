import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Devices', href: '#devices' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-black/60 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] sm:h-[72px] flex items-center justify-between">
        {/* Logo - brand image + wordmark */}
        <a href="#" className="flex items-center gap-3 group z-10">
          <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 shadow-lg shadow-[#6c63ff]/20 ring-1 ring-white/10">
            <img
              src="/images/apex-icon.png"
              alt="Apex Compute"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-[family-name:var(--font-serif)] text-xl text-white tracking-tight drop-shadow-sm">
            Apex<span className="text-[#6c63ff]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] text-white hover:shadow-lg hover:shadow-[#6c63ff]/30 transition-all duration-300"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Toggle - high visibility */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden relative z-10 flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
            mobileOpen
              ? 'bg-white/15 border-2 border-white/30'
              : 'bg-white/[0.12] border-2 border-white/20 hover:bg-white/[0.18] active:bg-white/[0.25]'
          } shadow-lg shadow-black/30`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{ minWidth: 48, minHeight: 48 }}
        >
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[3px] bg-white rounded-full origin-center drop-shadow-sm"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 24 }}
              className="block h-[3px] bg-white rounded-full drop-shadow-sm"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[3px] bg-white rounded-full origin-center drop-shadow-sm"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[5] md:hidden"
          >
            <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" />

            <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-8 px-6 pb-20">
              {/* Mobile brand */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden ring-1 ring-white/10">
                  <img src="/images/apex-icon.png" alt="" className="w-full h-full object-cover" />
                </div>
                <span className="font-[family-name:var(--font-serif)] text-2xl text-white tracking-tight">
                  Apex<span className="text-[#6c63ff]">.</span>
                </span>
              </div>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="text-2xl text-gray-200 hover:text-white transition-colors py-2 tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-2 text-base font-semibold px-12 py-4 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] text-white shadow-xl shadow-[#6c63ff]/30"
              >
                Get Started
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        header { font-family: var(--font-sans); }
      `}</style>
    </motion.header>
  )
}