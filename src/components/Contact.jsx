import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { profile } from '../data/portfolioData.js';
import './Contact.css';

const FIELDS = [
  { name: 'name', label: 'Your Name', type: 'text' },
  { name: 'email', label: 'Your Email', type: 'email' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Wire this up to your backend / EmailJS / Formspree endpoint of choice.
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section section-bg-alt">
      <div className="container contact__grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">./contact --init</span>
          <h2 className="section-heading">
            Let&apos;s build something <span className="gradient-text">secure &amp; solid</span>
          </h2>
          <p className="section-subtext">
            Open to internships, collaborations, and interesting security or full-stack problems.
          </p>

          <ul className="contact__info">
            <li>
              <FiMail /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <FiMapPin /> {profile.location}
            </li>
          </ul>

          <div className="contact__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>

          <div className="contact__map glass-card">
            <iframe
              title="Puttur, Karnataka location"
              src="https://maps.google.com/maps?q=Puttur%2C%20Karnataka&t=&z=10&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.form
          className="contact__form glass-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {FIELDS.map((field) => (
            <div className="contact__field" key={field.name}>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required
                value={form[field.name]}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor={field.name}>{field.label}</label>
            </div>
          ))}

          <div className="contact__field">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder=" "
            />
            <label htmlFor="message">Your Message</label>
          </div>

          <button type="submit" className="btn btn-primary contact__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent ✓' : (
              <>
                Send Message <FiSend />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
