
import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData.js';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">achievements.md</span>

          <h2 className="section-heading">
            My <span className="gradient-text">Achievements</span>
          </h2>

          <p className="about__summary">
            Certifications, coding milestones, and community involvement.
          </p>
        </motion.div>

        <div className="achievements__grid">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title || item.label || index}
              className="achievements__card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.title ? (
                <>
                  <span className="achievements__year">
                    {item.year}
                  </span>
                  <h3>{item.title}</h3>
                  <p className="achievements__org">{item.org}</p>
                  <p className="achievements__description">
                    {item.description}
                  </p>
                </>
              ) : (
                <>
                  <h3>{item.label}</h3>
                  <p className="achievements__value">{item.value}</p>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
