import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Internships from './components/Internships.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Timeline from './components/Timeline.jsx';
import Services from './components/Services.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import BackToTop from './components/BackToTop.jsx';
import { education } from './data/portfolioData.js';
import './components/About.css';


const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};


function Home() {
  return (
    <motion.main {...pageTransition}>
      <Hero />
      <EducationSection />
      <Internships />
      <Skills />
      <Projects />
      <Timeline />
      <Services />
      <Achievements />
      <Contact />
    </motion.main>
  );
}

function NotFound() {
  return (
    <motion.main {...pageTransition} className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
      <p className="eyebrow">error --code 404</p>
      <h1 className="section-heading">Route not found</h1>
      <p className="section-subtext" style={{ margin: '0 auto' }}>
        This path doesn&apos;t resolve to anything. Head back to the home page.
      </p>
    </motion.main>
  );
}


function EducationSection() {
  return (
    <section id="education" className="education-section">
      <div className="container">

        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">./education --journey</span>

          <h2 className="section-heading">
            My Academic <span className="gradient-text">Journey.</span>
          </h2>

          <p className="section-subtext">
            Every step in my education has helped me grow,
            explore technology and build my future.
          </p>
        </motion.div>

        <div className="education-grid">

          {/* Degree */}
          <motion.article
            className="education-card education-card--featured"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="education-card__top">
              <span className="education-icon">01</span>
              <span className="education-status">
                ● IN PROGRESS
              </span>
            </div>

            <span className="education-type">UNDERGRADUATE</span>

            <h3>{education.degree}</h3>

            <p className="education-institution">
              {education.university}
            </p>

            <div className="education-card__bottom">
              <span>{education.period}</span>
              <span>COMPUTER SCIENCE</span>
            </div>
          </motion.article>

          {/* Previous education */}
          {education.previousEducation.map((item, index) => (
            <motion.article
              className="education-card"
              key={item.level}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (index + 1) * 0.15,
              }}
              whileHover={{ y: -10 }}
            >
              <div className="education-card__top">
                <span className="education-icon">
                  0{index + 2}
                </span>

                <span className="education-number">
                  0{index + 2} / 03
                </span>
              </div>

              <span className="education-type">
                {index === 0
                  ? 'PRE-UNIVERSITY'
                  : 'SECONDARY SCHOOL'}
              </span>

              <h3>{item.level}</h3>

              <p className="education-institution">
                {item.institution}
              </p>

              <div className="education-score">
                <span>Academic Score</span>
                <strong>{item.score}</strong>
              </div>
            </motion.article>
          ))}

        </div>

        {/* Coursework */}
        <motion.div
          className="education-coursework"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="education-type">
              WHAT I'M LEARNING
            </span>
            <h3>Core Coursework</h3>
          </div>

          <div className="education-tags">
            {education.coursework.map((course) => (
              <span key={course}>
                ✳ {course}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}



export default function App() {
  const location = useLocation();

  return (
    <>
      <CursorGlow />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </>
  );
}
