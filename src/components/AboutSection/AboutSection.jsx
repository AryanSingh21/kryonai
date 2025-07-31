import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Active Agents" },
    { number: "98%", label: "Efficiency Gain" },
    { number: "24/7", label: "Operations" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About KryonAI</h2>
            <p className="about-description">
              Founded on the principle that AI agents can revolutionize how
              businesses operate, KryonAI is at the forefront of intelligent
              automation. Our founder's expertise in AI and machine learning
              drives our mission to create autonomous agents that think, learn,
              and execute with human-like intelligence.
            </p>
            <p className="about-description">
              We believe in a future where businesses run themselves, allowing
              human creativity and strategic thinking to flourish while AI
              handles the operational complexity.
            </p>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number gradient-text">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/S2eP0HOExY.png"
              alt="About KryonAI"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
