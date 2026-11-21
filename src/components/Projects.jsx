
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiShield,
} from 'react-icons/fi';

import { projects } from '../data/portfolioData.js';
import './Projects.css';

// Animated CSS project illustration
function ProjectVisual({ project, index }) {
  const icons = [FiLayers, FiCpu, FiDatabase, FiShield];
  const MainIcon = icons[index % icons.length];

  return (
    <div className={`project-visual project-visual--${project.accent || 'primary'}`}>

      <div className="visual-orb visual-orb--one" />
      <div className="visual-orb visual-orb--two" />

      <div className="visual-floating visual-floating--left">
        <FiCode />
      </div>

      <div className="visual-floating visual-floating--right">
        <FiDatabase />
      </div>

      <div className="visual-window">

        <div className="visual-window__top">
          <div className="visual-dots">
            <span />
            <span />
            <span />
          </div>
          <span>project-preview.jsx</span>
        </div>

        <div className="visual-window__content">

          <div className="visual-main-icon">
            <MainIcon />
          </div>

          <h4>{project.title}</h4>

          <p>Building ideas into reality</p>

          <div className="visual-code">
            <span className="code-line code-line--one" />
            <span className="code-line code-line--two" />
            <span className="code-line code-line--three" />
            <span className="code-line code-line--four" />
            <span className="code-line code-line--five" />
          </div>

          <div className="visual-status">
            <span />
            PROJECT DEVELOPMENT
          </div>

        </div>
      </div>

      <div className="visual-bottom-tag">
        <FiCode />
        <span>CREATIVE DEVELOPMENT</span>
      </div>

    </div>
  );
}

function ProjectCard({ project, index }) {
  const featured = index === 0;

  return (
    <motion.article
      className={`project-card ${featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10 }}
    >

      <div className="project-card__body">

        <div className="project-card__top">
          <span className="project-card__number">
            PROJECT / 0{index + 1}
          </span>

          <span className="project-card__year">
            {project.date}
          </span>
        </div>

        <p className="project-card__meta">
          {project.subtitle}
        </p>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.description}
        </p>

        {project.highlights?.length > 0 && (
          <ul className="project-card__highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        <div className="project-card__tech">
          {project.tech?.map((technology) => (
            <span key={technology} className="tech-badge">
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card__actions">

          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn project-btn--outline"
            >
              <FiGithub />
              GitHub
            </a>
          )}

          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-btn project-btn--primary"
            >
              Live Demo
              <FiArrowUpRight />
            </a>
          )}

        </div>
      </div>

      {/* CSS animated illustration - no images */}

      <ProjectVisual project={project} index={index} />

    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">

      <div className="container projects-container">

        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <span className="projects__eyebrow">
            <span /> SELECTED WORK / 2024—2026
          </span>

          <h2 className="projects__heading">
            Projects That Make
            <span> Ideas Real.</span>
          </h2>

          <p className="projects__subtitle">
            A collection of applications and creative solutions
            built through experimentation, learning and development.
          </p>

        </motion.div>

        <div className="projects__grid">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              index={index}
            />
          ))}

        </div>

        <motion.div
          className="projects__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>
            MORE IDEAS. MORE PROJECTS. MORE TO BUILD.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
