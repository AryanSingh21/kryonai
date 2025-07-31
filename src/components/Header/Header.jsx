import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-content">
            <div className="logo">
              <div className="logo-icon">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/4VpPSOjOZm.svg" alt="KryonAI" />
              </div>
              <span className="logo-text">KryonAI</span>
            </div>
            
            <div className="nav-links">
              <a href="#vision" className="nav-link">Vision</a>
              <a href="#agents" className="nav-link">Our Agents</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
