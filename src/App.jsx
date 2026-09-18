import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUp, FiArrowUpRight, FiCheck, FiCopy } from 'react-icons/fi';
import Navigation from './components/portfolio/Navigation';
import Hero from './components/portfolio/Hero';
import Work from './components/portfolio/Work';
import { About, Journey, StackStrip } from './components/portfolio/About';
import { profile } from './data/portfolio';

function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus('Email copied!'); }
    catch { setCopyStatus('Please select and copy the email address.'); }
    timer.current = setTimeout(() => setCopyStatus(''), 4000);
  }
  return <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="wrap"><div className="contact-top"><span className="eyebrow">04 — WHAT’S NEXT?</span><span className="availability"><span className="status-dot" /> OPEN TO WORK & COLLABORATIONS</span></div><a className="contact-title" href={`mailto:${profile.email}`}><h2 id="contact-heading">Have an idea?<br />Let’s make it <span className="serif-accent">happen.</span></h2><span className="contact-arrow"><FiArrowUpRight /></span></a><div className="contact-bottom"><p>A project, an opportunity, or just a hello.<br />My inbox is always open.</p><div className="email-block"><div><a href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email copied!' ? <FiCheck /> : <FiCopy />}</button></div><span role="status">{copyStatus}</span></div></div></div></section>;
}
export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main"><Hero /><StackStrip /><Work /><About /><Journey /><Contact /></main><footer className="site-footer wrap"><a className="wordmark" href="#home">waseem<span className="wordmark-dot">.</span></a><p>© {new Date().getFullYear()} Waseem Aziz. Crafted with intention.</p><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a><a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp <FiArrowUpRight /></a><a className="back-top" href="#home" aria-label="Back to top"><FiArrowUp /></a></div></footer></>;
}
