import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6c63ff]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#6c63ff]/10 via-[#3a7bd5]/5 to-transparent blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Get Started</span>
          <h2 className="section-title text-center mx-auto max-w-3xl">
            Ready for hardware that{' '}
            <span className="bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] bg-clip-text text-transparent">
              grows with you
            </span>
            ?
          </h2>
          <p className="section-subtitle mx-auto mb-8 sm:mb-10">
            Join thousands of AI developers, researchers, and power users who
            have upgraded to the Apex Compute plan. Your next machine is one
            click away.
          </p>
        </motion.div>

        {/* Form / CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#"
            className="group relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] text-white font-semibold text-sm sm:text-lg hover:shadow-xl hover:shadow-[#6c63ff]/30 transition-all duration-300 active:scale-95 hover:scale-105 text-center"
          >
            <span className="relative z-10">Start Your Application</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b83ff] to-[#5a93e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-lg hover:bg-white/5 transition-all duration-300 active:scale-95 text-center"
          >
            Talk to Sales
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { value: '24h', label: 'Express Delivery' },
            { value: '4.9% APR', label: 'Fixed Rate' },
            { value: '0', label: 'Hidden Fees' },
            { value: '24/7', label: 'Priority Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 font-[family-name:var(--font-serif)]">
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}