import { useState } from 'react'
import { motion } from 'framer-motion'

const devices = [
  {
    id: 'apex-book-pro',
    name: 'Apex Book Pro 16',
    type: 'Laptop',
    tag: 'Flagship',
    image: '/images/laptop-night-finish-1.png',
    specs: ['AI NPU 45 TOPS', '64GB Unified RAM', '2TB SSD', '16" Mini-LED'],
    basePrice: 189,
  },
  {
    id: 'apex-book-air',
    name: 'Apex Book Air 14',
    type: 'Laptop',
    tag: 'Ultraportable',
    image: '/images/laptop-night-finish-2.png',
    specs: ['AI NPU 32 TOPS', '32GB Unified RAM', '1TB SSD', '14.2" OLED'],
    basePrice: 129,
  },
  {
    id: 'apex-station',
    name: 'Apex Station One',
    type: 'Desktop',
    tag: 'Workstation',
    image: '/images/desktop-night-finish-1.png',
    specs: ['Dual AI NPU', '128GB DDR5', '4TB NVMe RAID', 'RTX 6090 AI'],
    basePrice: 249,
  },
]

const termLabels = ['2 Years', '3 Years', '4 Years', '5 Years']
const termMultipliers = [1, 0.75, 0.6, 0.5]

export default function DeviceShowcase() {
  const [selectedTerm, setSelectedTerm] = useState(1) // default 3 years
  const [activeDevice, setActiveDevice] = useState(0)

  return (
    <section id="devices" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#3a7bd5]/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="section-label">Hardware</span>
          <h2 className="section-title">
            Premium{' '}
            <span className="bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Night-Finish
            </span>{' '}
            Devices
          </h2>
          <p className="section-subtitle mx-auto">
            Every machine is hand-assembled with cutting-edge components and
            finished in our signature dark-chassis aesthetic.
          </p>
        </motion.div>

        {/* Term Selector - horizontally scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-start sm:justify-center gap-2 mb-10 sm:mb-12 overflow-x-auto px-1 pb-2 -mx-4 sm:mx-0 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <span className="text-xs sm:text-sm text-gray-500 mr-2 sm:mr-3 flex-shrink-0">Term:</span>
          {termLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => setSelectedTerm(i)}
              className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedTerm === i
                  ? 'bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] text-white shadow-lg shadow-[#6c63ff]/20'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Device Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {devices.map((device, i) => {
            const monthlyPrice = Math.round(
              device.basePrice * termMultipliers[selectedTerm]
            )

            return (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setActiveDevice(i)}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-[#6c63ff]/20 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-black/40">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] sm:text-xs font-medium text-gray-200">
                    {device.tag}
                  </div>

                  {/* Type badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 rounded-full bg-[#6c63ff]/20 backdrop-blur-sm border border-[#6c63ff]/20 text-[10px] sm:text-xs font-medium text-[#8b83ff]">
                    {device.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 font-[family-name:var(--font-serif)]">
                    {device.name}
                  </h3>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {device.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 sm:px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] sm:text-xs text-gray-400"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xl sm:text-2xl font-semibold text-white">
                        ${monthlyPrice}
                        <span className="text-xs sm:text-sm font-normal text-gray-400">
                          /mo
                        </span>
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                        {termLabels[selectedTerm]} plan
                      </p>
                    </div>
                    <button className="px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 active:scale-95">
                      Select
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-xs sm:text-sm mt-8 sm:mt-10"
        >
          All devices include complimentary shipping, setup, and 24/7 priority
          support.
        </motion.p>
      </div>
    </section>
  )
}