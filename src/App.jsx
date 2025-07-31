import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import VisionSection from './components/VisionSection/VisionSection'
import AgentsSection from './components/AgentsSection/AgentsSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import AboutSection from './components/AboutSection/AboutSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <AgentsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
