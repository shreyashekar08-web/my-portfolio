import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCode, FiStar } from 'react-icons/fi';
import { timeline } from '../data/portfolioData.js';
import './Timeline.css';

const ICONS = {
  education: FiBookOpen,
  certification: FiAward,
  project: FiCode,
  achievement: FiStar,
};

export default function Timeline() {
  return (
    <section id="timeline" className="section section-bg-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">git log --all</span>
          <h2 className="section-heading">
            The <span className="gradient-text">commit history</span>
          </h2>
          <p className="section-subtext">Education, certifications, and shipped work, in order.</p>
        </div>

        <div className="timeline">
          <div className="timeline__line" aria-hidden="true" />
          {timeline.map((item, i) => {
            const Icon = ICONS[item.type] ?? FiStar;
            const side = i % 2 === 0 ? 'left' : 'right';
            return (
              <motion.div
                key={`${item.title}-${i}`}
                className={`timeline__item timeline__item--${side}`}
                initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="timeline__marker">
                  <Icon size={16} />
                </div>
                <div className="timeline__card glass-card">
                  <span className="timeline__year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline__org">{item.org}</p>
                  <p className="timeline__desc">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
