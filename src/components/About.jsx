import React from 'react';
import { motion } from 'framer-motion';
import { FiTerminal } from 'react-icons/fi';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about__grid">
        <motion.div
          className="about__image-wrap"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="about__image-frame glass-card">
            <div className="about__image-placeholder">
              <FiTerminal size={64} />
              <p>Shreya T C</p>
            </div>

            <div className="about__image-badge">
              <span className="about__image-dot" />
              Open to opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}