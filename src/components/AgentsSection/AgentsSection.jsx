import React from 'react'
import './AgentsSection.css'

const AgentsSection = () => {
  const agents = [
    {
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/MYR0PTKeDX.svg",
      title: "Payroll Agent",
      description: "Automates salary calculations, tax deductions, and compliance reporting with 100% accuracy.",
      badge: "Active 24/7",
      badgeColor: "#2563eb"
    },
    {
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/kyPEQYzep1.svg",
      title: "Social Media Handler",
      description: "Creates, schedules, and optimizes social media content across all platforms.",
      badge: "Multi-Platform",
      badgeColor: "#9333ea"
    },
    {
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/AgpJ7xt4xB.svg",
      title: "HR Agent",
      description: "Manages recruitment, onboarding, performance tracking, and employee relations.",
      badge: "Smart Hiring",
      badgeColor: "#16a34a"
    },
    {
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/MConNP0UbO.svg",
      title: "Analytics Agent",
      description: "Provides real-time insights, predictive analytics, and business intelligence.",
      badge: "Real-time Data",
      badgeColor: "#ea580c"
    },
    {
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/pWeqFMgcHD.svg",
      title: "Support Agent",
      description: "Handles customer inquiries, resolves issues, and maintains satisfaction scores.",
      badge: "Instant Response",
      badgeColor: "#dc2626"
    },
    {
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/DasWhFMLwN.svg",
      title: "Operations Agent",
      description: "Streamlines workflows, manages inventory, and optimizes resource allocation.",
      badge: "Efficiency Focused",
      badgeColor: "#4f46e5"
    }
  ]

  return (
    <section id="agents" className="agents">
      <div className="container">
        <div className="agents-content">
          <div className="agents-header">
            <h2 className="section-title">Meet Our AI Agents</h2>
            <p className="section-description">
              Specialized AI agents designed to excel in every aspect of your business operations.
            </p>
          </div>
          
          <div className="agents-grid">
            {agents.map((agent, index) => (
              <article key={index} className="agent-card card">
                <div className="agent-icon">
                  <img src={agent.icon} alt={agent.title} />
                </div>
                <h3 className="agent-title">{agent.title}</h3>
                <p className="agent-description">{agent.description}</p>
                <span className="agent-badge" style={{ color: agent.badgeColor }}>
                  {agent.badge}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgentsSection
