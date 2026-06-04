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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-black/20 backdrop-blur-[2px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] sm:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group z-10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#3a7bd5] flex items-center justify-center shadow-lg shadow-[#6c63ff]/20 flex-shrink-0">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="font-[family-name:var(--font-serif)] text-xl font-bold text-white tracking-tight">
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

        {/* Mobile Toggle - larger tap target */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-10 flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 active:bg-white/10 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{ minWidth: 44, minHeight: 44 }}
        >
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-white rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 20 }}
              className="block h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-white rounded-full origin-center"
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[5] md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />

            {/* Nav content */}
            <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-6 pb-16">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl text-gray-300 hover:text-white transition-colors py-3 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-base font-semibold px-10 py-4 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] text-white shadow-lg shadow-[#6c63ff]/30"
              >
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        header {
          font-family: var(--font-sans);
        }
      `}</style>
    </motion.header>
  )
}