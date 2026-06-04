import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'AI-First Architecture',
    description:
      'Every device ships with cutting-edge CPUs and NPUs optimized for agentic operating systems and autonomous AI workloads.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Appreciating Asset',
    description:
      'As AI models expand, your hardware gains capability rather than losing value. Your device becomes more powerful over time.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Premium Night Finish',
    description:
      'Polished dark-chassis design with subtle metallic glow. Built for the discerning professional who demands aesthetics as much as performance.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12H4" />
        <path d="M12 4v16" />
      </svg>
    ),
    title: 'Flexible Terms',
    description:
      'Choose 2, 3, 4, or 5-year payment plans. Upgrade, buy out, or extend when your term ends — no lock-in, no surprises.',
  },
]

export default function ValueProp() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#6c63ff]/5 to-transparent blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label">Why Apex</span>
          <h2 className="section-title">
            Built for the{' '}
            <span className="bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] bg-clip-text text-transparent">
              AI-Native
            </span>{' '}
            Era
          </h2>
          <p className="section-subtitle mx-auto">
            Most hardware depreciates the moment you unbox it. Apex Compute
            devices are designed to appreciate — gaining capability as AI evolves.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-[#6c63ff]/20 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6c63ff]/0 to-[#3a7bd5]/0 group-hover:from-[#6c63ff]/5 group-hover:to-[#3a7bd5]/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6c63ff]/20 to-[#3a7bd5]/10 border border-white/5 flex items-center justify-center text-[#8b83ff] mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#6c63ff]/10 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-serif)]">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}