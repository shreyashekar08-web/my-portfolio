import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/portfolioData.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo-bracket">&lt;</span>
          Shreya<span className="gradient-text">.dev</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </div>

        <div className="footer__socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>

        <p className="footer__copy">© {year} Shreya T C. Built with React &amp; Framer Motion.</p>
      </div>
    </motion.footer>
  );
}
