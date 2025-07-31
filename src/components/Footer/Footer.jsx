import React from 'react'
import './Footer.css'

const Footer = () => {
  const footerLinks = {
    products: [
      { name: "AI Agents", href: "#agents" },
      { name: "Enterprise", href: "#services" },
      { name: "Analytics", href: "#analytics" },
      { name: "Support", href: "#support" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press", href: "#press" }
    ],
    support: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Contact", href: "#contact" },
      { name: "Status", href: "#status" }
    ]
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/vJXPaxRP4V.svg" alt="KryonAI" />
                </div>
                <span className="logo-text">KryonAI</span>
              </div>
              <p className="footer-description">
                To revolutionize business efficiency by empowering organizations with intelligent AI agents.
              </p>
              <div className="social-links">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/qObM1WB5rK.svg" alt="Social Media Links" />
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h3 className="footer-column-title">Products</h3>
                <ul className="footer-link-list">
                  {footerLinks.products.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="footer-column">
                <h3 className="footer-column-title">Company</h3>
                <ul className="footer-link-list">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="footer-column">
                <h3 className="footer-column-title">Support</h3>
                <ul className="footer-link-list">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="copyright">© 2024 KryonAI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
