import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiArrowUpRight, FiCheck, FiMessageSquare, FiPlus, FiX, FiZap } from 'react-icons/fi';
import { projects } from '../../data/portfolio';
import ExtensionPreview from './ExtensionPreview';

function NexusPreview() {
  return <div className="nexus-preview" aria-label="Illustrative preview of the Nexus AI platform"><div className="nexus-brand"><span>✳</span> nexus<span className="preview-label">AI, with a human touch.</span></div><div className="mock-dashboard"><div className="mock-sidebar"><strong>n<span>✳</span></strong><span className="mock-nav-selected"><FiMessageSquare /> Conversations</span><span>◈ &nbsp; Knowledge base</span><span>⊞ &nbsp; Overview</span><span>⚙ &nbsp; Settings</span><div className="mock-avatar">W <small>My workspace</small></div></div><div className="mock-main"><div className="mock-heading">Your knowledge. Amplified.<span>WORKSPACE / OVERVIEW</span></div><div className="mock-stats"><div><FiMessageSquare /><span>Conversations</span><strong>Connected.</strong></div><div><FiZap /><span>Knowledge base</span><strong>Always learning.</strong></div></div><div className="mock-chat"><span className="ai-avatar">✳</span><div><strong>Your AI assistant</strong><p>Hi there! What can I help you discover today?</p><span className="mock-question">Tell me about your services <FiArrowUpRight /></span></div></div><div className="mock-input">Ask anything about your business… <span><FiArrowUpRight /></span></div></div></div><div className="nexus-float"><span><FiCheck /></span> Grounded in your knowledge.</div></div>;
}

export default function Work() {
  const [filter, setFilter] = useState('All work');
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const visible = projects.filter(project => filter === 'All work' || project.category === filter);
  const displayed = filter === 'All work' && !expanded ? visible.slice(0, 3) : visible;

  useEffect(() => {
    if (!selected) return;
    const modal = dialog.current;
    modal.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; if (modal.open) modal.close(); };
  }, [selected]);

  return <section id="projects" className="work-section section-pad wrap" aria-labelledby="work-heading">
    <div className="section-heading"><div><span className="eyebrow section-kicker"><span /> 01 — SELECTED WORK</span><h2 id="work-heading">Ideas, made <span className="serif-accent">real.</span><span className="orange-period">*</span></h2></div><p>A few things I’ve helped bring to life.<br />Thoughtfully built, from first idea to final detail.</p></div>
    <div className="work-toolbar"><div className="filters" aria-label="Filter projects">{['All work', 'AI & SaaS', 'Web apps', 'Extensions'].map(item => <button key={item} aria-pressed={filter === item} className={filter === item ? 'filter active-filter' : 'filter'} onClick={() => { setFilter(item); setExpanded(false); }}>{item}{item === 'All work' && <span>{String(projects.length).padStart(2, '0')}</span>}</button>)}</div><span className="work-counter" aria-live="polite">{String(displayed.length).padStart(2, '0')} PROJECTS ON DISPLAY</span></div>
    <div className="projects-grid">{displayed.map(project => <article key={project.id} className={`project-card ${project.id === 'nexus' ? 'project-featured' : ''}`}>
      <button className={`project-visual ${project.color}`} onClick={() => setSelected(project)} aria-label={`View ${project.name} project details`}>{project.id === 'nexus' ? <NexusPreview /> : project.category === 'Extensions' ? <ExtensionPreview image={project.image} /> : <><span className="project-preview-title">{project.name}<span>↗</span></span><div className="browser-frame"><div className="browser-top"><i /><i /><i /><span>{project.name.toLowerCase()}.workspace</span></div><img src={project.image} alt={`${project.name} project interface`} loading="lazy" width="1024" height="569" /></div></>}<span className="preview-open"><FiArrowUpRight /></span></button>
      <div className="project-info"><div className="project-type">{project.type}{project.id === 'nexus' && <span>FEATURED PROJECT</span>}</div><button className="project-title" onClick={() => setSelected(project)}><h3>{project.name}</h3><FiArrowUpRight /></button><p>{project.summary}</p><div className="project-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>{project.category === 'Extensions' && <a className="project-store-link" href={project.url} target="_blank" rel="noreferrer">{project.linkLabel} <FiArrowUpRight /></a>}</div>
    </article>)}</div>
    {filter === 'All work' && <div className="more-work"><span>Always curious. Always building.</span><button className="button button-outline" onClick={() => setExpanded(value => !value)}>{expanded ? 'Show selected work' : `See all ${projects.length} projects`}{expanded ? <FiArrowRight /> : <FiPlus />}</button></div>}
    <dialog className="project-dialog" ref={dialog} aria-labelledby="dialog-title" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current.close(); } }}>
      {selected && <><button className="dialog-close" aria-label="Close project details" onClick={() => dialog.current.close()} autoFocus><FiX /></button><span className="eyebrow">{selected.type}</span><h2 id="dialog-title">{selected.name}<span className="orange-period">.</span></h2><span className="dialog-role">{selected.role}</span><p className="dialog-description">{selected.description}</p><h3>My contributions</h3><ul>{selected.contributions.map(item => <li key={item}><FiCheck /><span>{item}</span></li>)}</ul><div className="project-tags">{selected.stack.map(item => <span key={item}>{item}</span>)}</div>{selected.url ? <a className="button button-dark" href={selected.url} target="_blank" rel="noreferrer">{selected.linkLabel || 'Visit live product'} <FiArrowUpRight /></a> : <p className="project-private-note">Interested in how I built this? <a href="#contact" onClick={() => dialog.current.close()}>Let’s talk <FiArrowUpRight /></a></p>}</>}
    </dialog>
  </section>;
}
