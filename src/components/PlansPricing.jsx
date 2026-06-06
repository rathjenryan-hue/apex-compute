import { useState } from 'react'
import { motion } from 'framer-motion'

const devices = [
  { id: 'apex-book-pro', name: 'Apex Book Pro 16', price: 4999 },
  { id: 'apex-book-air', name: 'Apex Book Air 14', price: 3299 },
  { id: 'apex-station', name: 'Apex Station One', price: 7999 },
]

const terms = [
  { years: 2, label: '2 Years', months: 24 },
  { years: 3, label: '3 Years', months: 36 },
  { years: 4, label: '4 Years', months: 48 },
  { years: 5, label: '5 Years', months: 60 },
]

const APR = 0.049 // 4.9% APR

function calculateMonthly(principal, months) {
  const monthlyRate = APR / 12
  const payment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
    (Math.pow(1 + monthlyRate, months) - 1)
  return Math.round(payment)
}

export default function PlansPricing() {
  const [selectedDevice, setSelectedDevice] = useState(devices[0])
  const [selectedTerm, setSelectedTerm] = useState(terms[1]) // default 3 years

  const monthlyPayment = calculateMonthly(
    selectedDevice.price,
    selectedTerm.months
  )
  const totalPayment = monthlyPayment * selectedTerm.months
  const totalInterest = totalPayment - selectedDevice.price

  return (
    <section id="pricing" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#6c63ff]/8 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#3a7bd5]/5 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">Pricing</span>
          <h2 className="section-title">
            Your{' '}
            <span className="bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Monthly Payment
            </span>{' '}
            Calculator
          </h2>
          <p className="section-subtitle mx-auto">
            Select a device and term to see your customized monthly payment.
            No hidden fees. No surprises.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] p-5 sm:p-8 md:p-12"
        >
          {/* Device Selector */}
          <div className="mb-8 sm:mb-10">
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-3 sm:mb-4">
              Choose Device
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => setSelectedDevice(device)}
                  className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-300 border ${
                    selectedDevice.id === device.id
                      ? 'border-[#6c63ff]/50 bg-[#6c63ff]/10 shadow-lg shadow-[#6c63ff]/10'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <p className="text-xs sm:text-sm font-medium text-white mb-0.5 sm:mb-1">
                    {device.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    ${device.price.toLocaleString()} retail
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Term Selector - scrollable on mobile */}
          <div className="mb-8 sm:mb-10">
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-3 sm:mb-4">
              Payment Term
            </label>
            <div
              className="flex flex-nowrap sm:flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-1 sm:mx-0 px-1 sm:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {terms.map((term) => (
                <button
                  key={term.years}
                  onClick={() => setSelectedTerm(term)}
                  className={`flex-shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedTerm.years === term.years
                      ? 'bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] text-white shadow-lg shadow-[#6c63ff]/20'
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {term.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-black/40 border border-white/5">
            {/* Monthly Payment */}
            <motion.div
              key={`${selectedDevice.id}-${selectedTerm.years}-monthly`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center sm:text-left"
            >
              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
                Monthly Payment
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-1">
                ${monthlyPayment}
                <span className="text-base sm:text-lg font-normal text-gray-400">/mo</span>
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                at {APR * 100}% APR
              </p>
            </motion.div>

            {/* Total */}
            <motion.div
              key={`${selectedDevice.id}-${selectedTerm.years}-total`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center sm:text-left"
            >
              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
                Total Paid
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-1">
                ${totalPayment.toLocaleString()}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                over {selectedTerm.months} months
              </p>
            </motion.div>

            {/* Interest */}
            <motion.div
              key={`${selectedDevice.id}-${selectedTerm.years}-interest`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-center sm:text-left"
            >
              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
                Total Interest
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8b83ff] mb-1">
                ${totalInterest.toLocaleString()}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                {Math.round((totalInterest / selectedDevice.price) * 100)}% of retail
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-10"
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#3a7bd5] text-white font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-[#6c63ff]/30 transition-all duration-300 active:scale-95 hover:scale-105"
            >
              Apply Now — ${monthlyPayment}/mo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <p className="text-[10px] sm:text-xs text-gray-600 mt-3 sm:mt-4">
              No credit check required for qualified applicants. Terms apply.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}