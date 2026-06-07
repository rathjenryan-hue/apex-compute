import { motion } from 'framer-motion'

const footerLinks = [
  {
    title: 'Devices',
    links: ['Apex Book Pro 16', 'Apex Book Air 14', 'Apex Station One', 'Compare Models'],
  },
  {
    title: 'Plans',
    links: ['2 Year Plan', '3 Year Plan', '4 Year Plan', '5 Year Plan'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press Kit', 'Blog'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Shipping Info', 'Returns'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 mb-4 sm:mb-0">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                <img src="/images/apex-icon-dollar.png" alt="Apex Compute" className="w-full h-full object-cover" />
              </div>
              <span className="font-[family-name:var(--font-serif)] text-xl text-white tracking-tight">
                Apex<span className="text-[#6c63ff]">.</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[200px]">
              Premium computing hardware on flexible monthly plans for the AI-native era.
            </p>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider mb-3 sm:mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Apex Compute. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-[10px] sm:text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[10px] sm:text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[10px] sm:text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}