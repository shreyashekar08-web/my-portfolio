import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiCode, FiShield, FiPenTool } from 'react-icons/fi';
import { services } from '../data/portfolioData.js';
import './Services.css';

const ICONS = {
  layout: FiLayout,
  server: FiServer,
  code: FiCode,
  shield: FiShield,
  design: FiPenTool,
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">./services --list</span>
          <h2 className="section-heading">
            How I can <span className="gradient-text">help</span>
          </h2>
          <p className="section-subtext">From interface to infrastructure, with security woven through.</p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? FiCode;
            return (
              <motion.div
                key={service.title}
                className="service-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="service-card__icon">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
