
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiBarChart2,
  FiAperture,
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
} from 'react-icons/fi';

import { internships } from '../data/portfolioData.js';
import './Internships.css';

const experienceIcons = [FiCode, FiBarChart2, FiAperture];

export default function Internships() {
  return (
    <section id="internships" className="section internships-section">
      <div className="container internships-container">

        {/* Section Heading */}
        <motion.div
          className="internships__header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="internships__eyebrow">
            <span className="internships__eyebrow-dot" />
            CAREER / EXPERIENCE
          </span>

          <h2 className="internships__heading">
            My Professional
            <span> Journey.</span>
          </h2>

          <p className="internships__subtitle">
            Turning knowledge into practical experience,
            one opportunity at a time.
          </p>

          <div className="internships__stats">
            <div className="internships__stat">
              <FiBriefcase />
              <strong>{internships.length.toString().padStart(2, '0')}</strong>
              <span>Experiences</span>
            </div>

            <div className="internships__stat-divider" />

            <div className="internships__stat">
              <FiCalendar />
              <strong>2024 — 2025</strong>
              <span>Career journey</span>
            </div>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="internships__grid">
          {internships.map((item, index) => {
            const ExperienceIcon =
              experienceIcons[index % experienceIcons.length];

            return (
              <motion.article
                key={`${item.title}-${index}`}
                className={`internships__card internships__card--${index + 1}`}
                initial={{ opacity: 0, y: 55, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: index === 1 ? -2 : 2,
                  scale: 1.015,
                }}
                style={{ transformPerspective: 1000 }}
              >
                {/* Card glow */}
                <div className="internships__card-glow" />

                {/* Top section */}
                <div className="internships__card-top">
                  <div className="internships__icon-wrap">
                    <ExperienceIcon />
                  </div>

                  <span className="internships__number">
                    0{index + 1}
                  </span>
                </div>

                {/* Experience information */}
                <div className="internships__card-content">
                  <span className="internships__year">
                    {item.year}
                  </span>

                  <h3>{item.title}</h3>

                  <div className="internships__company">
                    <FiBriefcase />
                    <span>{item.org || item.company}</span>
                  </div>

                  <p className="internships__description">
                    {item.description}
                  </p>
                </div>

                {/* Bottom section */}
                <div className="internships__card-bottom">
                  <span className="internships__type">
                    {item.type === 'freelance'
                      ? 'FREELANCE PROJECT'
                      : 'INTERNSHIP'}
                  </span>

                  <span className="internships__arrow">
                    <FiArrowUpRight />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          className="internships__footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="internships__footer-line" />
          <p>
            Every experience is another step towards
            <span> becoming better.</span>
          </p>
          <span className="internships__footer-line" />
        </motion.div>

      </div>
    </section>
  );
}
