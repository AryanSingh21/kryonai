import React from 'react'
import './ServicesSection.css'

const ServicesSection = () => {
  const services = [
    {
      title: "Agent-as-a-Service",
      features: [
        "Custom AI agent deployment",
        "24/7 monitoring and support",
        "Scalable infrastructure",
        "Regular updates and improvements"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "btn-primary",
      popular: false
    },
    {
      title: "Enterprise Solutions",
      features: [
        "Complete AI agent ecosystem",
        "Advanced analytics dashboard",
        "Priority support and training",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      buttonClass: "btn-dark",
      popular: true
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-content">
          <div className="services-header">
            <h2 className="section-title">Services & Products</h2>
            <p className="section-description">
              Choose from our comprehensive suite of AI agent solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card card ${service.popular ? 'popular' : ''}`}>
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  {service.popular && (
                    <span className="popular-badge">Popular</span>
                  )}
                </div>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/jLrwDhucr3.svg" alt="Check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`btn ${service.buttonClass} service-button`}>
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
