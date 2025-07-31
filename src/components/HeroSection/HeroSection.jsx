import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  const smokeControls = useAnimation();
  const titleControls = useAnimation();

  const handleHover = () => {
    smokeControls.start({
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 3, ease: "easeInOut" },
    });
    titleControls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 5, -5, 0],
      textShadow: [
        "0 0 10px rgba(59, 130, 246, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.8)",
        "0 0 30px rgba(59, 130, 246, 1)",
        "0 0 10px rgba(59, 130, 246, 0.5)",
      ],
      color: ["#e0e7ff", "#60a5fa", "#3b82f6", "#e0e7ff"],
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  };

  return (
    <section className="hero">
      <div className="container">
        {/* <nav className="nav">
          <div className="logo">xAI</div>
          <ul className="nav-links">
            <li>Kryon</li>
            <li>API</li>
            <li>Company</li>
            <li>Colossus</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
          <a href="#try" className="try-btn">
            Try Kryon
          </a>
        </nav> */}
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            // opacity={1}
            transition={{ duration: 1 }}
            whileHover={handleHover}
            // animate={titleControls}
          >
            Kryon AI
          </motion.h1>
          <div className="search-bar">
            <input type="text" placeholder="What do you want to know?" />
            <span className="mic-icon">🎤</span>
          </div>
          <p className="hero-subtitle">
            Kryon AI is the most intelligent model in the world. Available now
            to SuperKryon and Premium+ subscribers, as well as our API.
          </p>
          <a href="#read" className="read-btn">
            Read Announcement
          </a>
          <motion.div
            className="smoke-effect"
            animate={smokeControls}
            onHoverStart={handleHover}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
