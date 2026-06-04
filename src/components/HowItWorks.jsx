import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Choose Your Device',
    description:
      'Browse our curated selection of premium laptops and workstations. Every machine is configured for AI-native workloads.',
  },
  {
    number: '02',
    title: 'Pick Your Term',
    description:
      'Select a 2, 3, 4, or 5-year payment plan that fits your budget. Lower monthly payments for longer terms.',
  },
  {
    number: '03',
    title: 'Get It Now',
    description:
      'Your device ships within 24 hours with complimentary express delivery. Unbox, power on, and start building.',
  },
  {
    number: '04',
    title: 'Pay Monthly',
    description:
      'One predictable payment each month. When your term ends, own it, trade up, or extend — the choice is yours.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])

  return (
    <section id="how-it-works" ref={ref} className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#6c63ff]/5 to-transparent blur-[120px]" />
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
          <span className="section-label">Process</span>
          <h2 className="section-title">
            How It{' '}
            <span className="bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            From selecting your machine to unboxing — our process is designed for
            speed and simplicity.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-[44px] top-0 bottom-0 w-[1px] bg-white/5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#6c63ff] to-[#3a7bd5]"
            />
          </div>

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* Number */}
                <div className="relative z-10 flex-shrink-0 w-[88px] h-[88px] rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] flex items-center justify-center">
                  <span className="font-[family-name:var(--font-serif)] text-2xl font-bold bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-serif)]">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}