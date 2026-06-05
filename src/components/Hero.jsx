import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Background gradient orbs - constrained on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 sm:-left-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#6c63ff]/10 to-transparent blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 sm:-right-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#3a7bd5]/10 to-transparent blur-[80px] sm:blur-[100px]" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#6c63ff] animate-pulse flex-shrink-0" />
          <span className="text-[10px] sm:text-xs font-medium text-gray-300 tracking-wider uppercase whitespace-nowrap">
            AI-Native Device Plan
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6"
        >
          <span className="text-white">Hardware that</span>
          <br />
          <span className="bg-gradient-to-r from-[#6c63ff] via-[#8b83ff] to-[#3a7bd5] bg-clip-text text-transparent">
            appreciates
          </span>
          <span className="text-white">, not depreciates</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Premium computing for the AI era. Get cutting-edge hardware delivered
          today — pay in predictable monthly installments over 2 to 5 years.
          As AI demands grow, your device grows with you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] text-white font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-[#6c63ff]/30 transition-all duration-300 active:scale-95 hover:scale-105 text-center"
          >
            Explore Plans
          </a>
          <a
            href="#devices"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/5 transition-all duration-300 active:scale-95 text-center"
          >
            View Devices
          </a>
        </motion.div>

        {/* Hero image */}
        <motion.div
          style={{ y, opacity, scale }}
          className="mt-10 sm:mt-16 md:mt-24 relative mx-0 sm:mx-0"
        >
          <div className="relative mx-auto max-w-4xl rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-[#6c63ff]/10 border border-white/5">
            <img
              src="/images/hero-visual.png"
              alt="Apex Compute premium device"
              className="w-full h-auto"
              loading="lazy"
            />
            {/* Overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute -bottom-3 -left-2 sm:-bottom-6 sm:-left-6 px-3 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 hidden sm:block"
          >
            <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">From</p>
            <p className="text-base sm:text-xl md:text-2xl font-bold text-white">
              $89<span className="text-xs sm:text-sm font-normal text-gray-400">/mo</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute -bottom-3 -right-2 sm:-bottom-6 sm:-right-6 px-3 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 hidden sm:block"
          >
            <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Terms</p>
            <p className="text-base sm:text-xl md:text-2xl font-bold text-white">
              2–5 <span className="text-xs sm:text-sm font-normal text-gray-400">years</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-6 sm:h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}