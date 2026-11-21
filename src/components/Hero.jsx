
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiArrowRight,
  FiCode,
  FiDatabase,
  FiCpu,
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import useTypewriter from '../hooks/useTypewriter.js';
import { profile } from '../data/portfolioData.js';
import MagneticButton from './MagneticButton.jsx';
import './Hero.css';


const PARTICLE_COUNT = 28;

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: (i * 37 + 11) % 100,
        top: (i * 23 + 7) % 100,
        size: 3 + (i % 3) * 2,
        delay: -(i % 8),
        duration: 7 + (i % 7) * 2,
      })),
    []
  );

  return (
    <div className="hero__particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="hero__particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

const technologies = [
  {
    name: 'React',
    className: 'hero__tech--react',
    icon: <FaReact />,
  },
  {
    name: 'Node.js',
    className: 'hero__tech--node',
    icon: <FaNodeJs />,
  },
  {
    name: 'Java',
    className: 'hero__tech--python',
    icon: <FaJava />,
  },
  {
    name: 'TypeScript',
    className: 'hero__tech--typescript',
    icon: <SiTypescript />,
  },
  {
    name: 'C',
    className: 'hero__tech--ai',
    icon: <FiCode />,
  },
  {
    name: 'Database',
    className: 'hero__tech--database',
    icon: <FiDatabase />,
  },
];

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const firstName = profile.name.split(' ')[0];
  const remainingName = profile.name.split(' ').slice(1).join(' ');

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <Particles />

      <div className="hero__decor hero__decor--top" aria-hidden="true" />
      <div className="hero__decor hero__decor--bottom" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-star">✦</span>
            COMPUTER SCIENCE ENGINEER
          </div>

          <h1 className="hero__name">
            <span className="hero__greeting">Hi, I'm</span>
            <span className="hero__name-gradient">
              {firstName} {remainingName}
            </span>
          </h1>

          <div className="hero__role" aria-live="polite">
            <span className="hero__role-bracket">&lt;</span>
            <span>{typed}</span>
            <span className="hero__role-bracket">/&gt;</span>
            <span className="hero__cursor" aria-hidden="true" />
          </div>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <MagneticButton
              href="#projects"
              className="btn btn-primary hero__button"
            >
              Explore My Projects
              <FiArrowRight aria-hidden="true" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="btn btn-outline hero__button hero__button--contact"
            >
              Let's Connect
            </MagneticButton>
          </div>

          <div className="hero__socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FiGithub />
              <span>GitHub ↗</span>
            </a>

            <span className="hero__social-divider" />

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin />
              <span>LinkedIn ↗</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
          }}
        >
          <div className="hero__visual-glow" />

          <div className="hero__orbit hero__orbit--one" />
          <div className="hero__orbit hero__orbit--two" />
          <div className="hero__orbit hero__orbit--three" />

          <div className="hero__portrait-frame">
            <div className="hero__portrait">
              <img
                src="/images/shreya.png"
                alt="Portrait of Shreya T C"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                  event.currentTarget.parentElement.classList.add(
                    'hero__portrait--placeholder'
                  );
                }}
              />

              <div className="hero__portrait-placeholder">
                <span>ST</span>
                <small>DEVELOPER</small>
              </div>
            </div>
          </div>

          {technologies.map((technology) => (
            <div
              key={technology.name}
              className={`hero__tech ${technology.className}`}
            >
              <span className="hero__tech-icon">{technology.icon}</span>
              <span>{technology.name}</span>
            </div>
          ))}

          <div className="hero__spark hero__spark--one">✦</div>
          <div className="hero__spark hero__spark--two">✦</div>
          <div className="hero__spark hero__spark--three">✧</div>

          <div className="hero__handwriting">
            Turning Ideas
            <br />
            Into Real Products
            <span>↗ ♡</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
        animate={{ y: [0, 7, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: 'easeInOut',
        }}
      >
        <span className="hero__scroll-mouse">
          <span />
        </span>
        <span className="hero__scroll-text">SCROLL DOWN</span>
        <span className="hero__scroll-arrows">⌄</span>
      </motion.a>
    </section>
  );
}
