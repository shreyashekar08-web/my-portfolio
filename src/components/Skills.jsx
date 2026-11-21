import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { skillGroups } from '../data/portfolioData.js';
import './Skills.css';

function TiltCard({ group, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="skill-card glass-card"
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="skill-card__glow" />
      <span className="skill-card__command">$ {group.command}</span>
      <h3 className="skill-card__title">{group.category}</h3>

      <ul className="skill-card__list">
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <div className="skill-card__row">
              <span>{skill.name}</span>
              <span className="skill-card__level">{skill.level}%</span>
            </div>
            <div className="skill-card__bar">
              <motion.div
                className="skill-card__bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section-bg-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">ls -la ./skills</span>
          <h2 className="section-heading">
            A <span className="gradient-text">toolkit</span> built across two disciplines
          </h2>
          <p className="section-subtext">
            Full-stack engineering and offensive-security fundamentals, practiced side by side.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <TiltCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
