import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import DeviceShowcase from './components/DeviceShowcase'
import HowItWorks from './components/HowItWorks'
import PlansPricing from './components/PlansPricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <DeviceShowcase />
        <HowItWorks />
        <PlansPricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App