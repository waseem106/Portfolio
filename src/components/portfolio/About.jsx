import React, { useState } from 'react';
import { FiArrowUpRight, FiCode, FiCpu, FiDownload, FiLayers } from 'react-icons/fi';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiPostgresql, SiSupabase, SiTypescript } from 'react-icons/si';
import { education, experience, profile } from '../../data/portfolio';

export function StackStrip() {
  const stack = [[FaReact, 'React'], [SiNextdotjs, 'Next.js'], [SiTypescript, 'TypeScript'], [FaNodeJs, 'Node.js'], [SiSupabase, 'Supabase'], [SiPostgresql, 'PostgreSQL']];
  return <div className="stack-strip"><div className="wrap stack-inner"><span className="stack-label">GOOD IDEAS.<br /><strong>GREAT TOOLS.</strong></span><div className="stack-tools">{stack.map(([Icon, name]) => <span key={name}><Icon />{name}</span>)}</div><span className="stack-plus" aria-hidden="true">✳</span></div></div>;
}

export function About() {
  return <section id="about" className="about-section section-pad" aria-labelledby="about-heading"><div className="wrap"><div className="about-grid"><div><span className="eyebrow section-kicker"><span /> 02 — A LITTLE ABOUT ME</span><h2 id="about-heading">A developer’s mind.<br />A <span className="serif-accent">maker’s</span> heart.</h2><div className="about-doodle" aria-hidden="true"><span>✳</span><p>Curiosity is the<br />best starting point.</p></div></div><div className="about-copy"><p className="about-lead">I’m Waseem, a full-stack developer who cares as much about how a product feels as how it works.</p><p>I turn complex problems into simple, thoughtful experiences. At Devsloop Technologies, I build everything from AI-powered customer engagement tools to interfaces used by millions.</p><p>My sweet spot? The space where clean engineering meets a little imagination. Whether it’s a React interface, a RAG pipeline, or the API behind it all, I love connecting the dots.</p><a className="text-link" href={profile.cv} download>Get to know my experience <FiDownload /></a></div></div><div className="capabilities"><article><span className="capability-number">01 /</span><FiCode /><h3>Interfaces with intention.</h3><p>Responsive, accessible React and Next.js experiences. Every detail earns its place.</p><div className="capability-tags">REACT · NEXT.JS · TYPESCRIPT</div></article><article><span className="capability-number">02 /</span><FiCpu /><h3>A little intelligence.</h3><p>Useful AI features, grounded retrieval, and streaming conversations built for real people.</p><div className="capability-tags">LLMs · RAG · PGVECTOR</div></article><article><span className="capability-number">03 /</span><FiLayers /><h3>Solid beneath the surface.</h3><p>Scalable APIs, secure tenant isolation, and thoughtful architecture from the ground up.</p><div className="capability-tags">NODE.JS · NESTJS · POSTGRESQL</div></article></div></div></section>;
}

export function Journey() {
  const [tab, setTab] = useState('Experience');
  const items = tab === 'Experience' ? experience : education;
  function switchTab(event) {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const next = event.key === 'Home' ? 'Experience' : event.key === 'End' ? 'Education' : tab === 'Experience' ? 'Education' : 'Experience';
      setTab(next);
      document.getElementById(`tab-${next}`)?.focus();
    }
  }
  return <section id="resume" className="journey-section section-pad wrap" aria-labelledby="journey-heading"><div className="journey-intro"><span className="eyebrow section-kicker"><span /> 04 — THE JOURNEY</span><h2 id="journey-heading">Growing through<br /><span className="serif-accent">doing.</span></h2><p>Good work comes from staying curious,<br />taking ownership, and never standing still.</p><a className="button button-outline" href={profile.cv} download>Download résumé <FiDownload /></a></div><div className="journey-content"><div className="journey-tabs" role="tablist" aria-label="Professional background">{['Experience', 'Education'].map(item => <button key={item} role="tab" id={`tab-${item}`} aria-controls="journey-panel" aria-selected={tab === item} tabIndex={tab === item ? 0 : -1} onKeyDown={switchTab} onClick={() => setTab(item)}>{item}<FiArrowUpRight /></button>)}</div><div role="tabpanel" id="journey-panel" aria-labelledby={`tab-${tab}`} tabIndex={0}>{items.map(item => <article className="timeline-item" key={item.title}><div className="timeline-date">{item.date}{item.current && <span className="current-tag"><span className="status-dot" /> NOW</span>}</div><h3>{item.title}</h3><span className="timeline-place">{item.place}</span><p>{item.description}</p></article>)}</div></div></section>;
}
