import React from 'react'
import './VisionSection.css'

const VisionSection = () => {
  const features = [
    {
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/iaXaxtDigi.svg",
      title: "Seamless Automation",
      description: "AI agents handle complex tasks with precision, eliminating manual processes and human error."
    },
    {
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/RYokgp7K6o.svg",
      title: "Intelligent Growth",
      description: "Data-driven insights and autonomous decision-making accelerate business expansion."
    },
    {
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/Esn4KJ6YEX.svg",
      title: "Future-Ready",
      description: "Stay ahead with cutting-edge AI technology that evolves with your business needs."
    }
  ]

  return (
    <section id="vision" className="vision">
      <div className="container">
        <div className="vision-content">
          <div className="vision-header">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-description">
              To revolutionize business efficiency by empowering organizations with intelligent AI agents that seamlessly manage operations, drive growth, and unlock unprecedented productivity.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
