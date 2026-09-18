import React, { useState } from 'react';
import { FiArrowDown, FiArrowUpRight, FiCode, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../../data/portfolio';

export default function Hero() {
  const [showCode, setShowCode] = useState(false);

  function movePortrait(event) {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--tilt-x', `${((event.clientY - bounds.top) / bounds.height - 0.5) * -5}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 5}deg`);
  }

  return (
    <section className="hero wrap" id="home" aria-labelledby="hero-heading">
      <div className="hero-topline"><span className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</span><span className="hero-edition">PORTFOLIO — VOL. 01</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="intro">Hey there, I’m Waseem <span className="wave" aria-label="hello">✳</span></p>
          <h1 id="hero-heading">Turning ideas<br />into <span className="serif-accent">digital</span><br /><span className="impact">experiences.<svg viewBox="0 0 550 20" aria-hidden="true"><path d="M4 13 Q235 -4 544 8 M52 18 Q290 4 485 14" /></svg></span></h1>
          <p className="hero-description">Full-stack developer. AI enthusiast. Detail obsessive.<br className="desktop-break" /> I build thoughtful web products that look good,<br className="desktop-break" /> work beautifully, and make a difference.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <FiArrowUpRight /></a><a className="text-link" href="#contact">Let’s talk <FiArrowUpRight /></a></div>
          <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a><span className="social-divider" /><span><FiMapPin /> Based in Pakistan · Building everywhere</span></div>
        </div>
        <div className="portrait-stage" onPointerMove={movePortrait} onPointerLeave={event => { event.currentTarget.style.setProperty('--tilt-x', '0deg'); event.currentTarget.style.setProperty('--tilt-y', '0deg'); }}>
          <span className="portrait-note">a human behind the code <svg viewBox="0 0 65 55" aria-hidden="true"><path d="M3 3 Q61 3 44 45 M34 37 L44 48 L55 36" /></svg></span>
          <span className="hero-asterisk" aria-hidden="true">✳</span>
          <div className={`portrait-art ${showCode ? 'is-code' : ''}`}>
            <div className="portrait-circle" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            {showCode ? <div className="code-card"><div className="code-chrome"><i /><i /><i /><span>waseem.ts</span></div><pre><span className="code-purple">const</span> developer = {'{'}<br />  name: <span className="code-green">"Waseem Aziz"</span>,<br />  craft: <span className="code-green">"Full-stack + AI"</span>,<br />  mindset: [<br />    <span className="code-green">"Stay curious"</span>,<br />    <span className="code-green">"Build with care"</span>,<br />    <span className="code-green">"Keep shipping"</span><br />  ],<br />  nextChapter: <span className="code-green">"Let’s talk!"</span><br />{'}'};</pre><span className="code-comment">// good things start with an idea.</span></div> : <img className="portrait" src={`${import.meta.env.BASE_URL}waseem-headshot.png`} alt="Waseem Aziz, full-stack developer" fetchPriority="high" width="1254" height="1254" />}
          </div>
          <div className="craft-label"><span className="craft-icon"><FiCode /></span><div><strong>Built with curiosity.</strong><span>And a little too much coffee.</span></div><span className="tiny-spark" aria-hidden="true">✧</span></div>
          <div className="floating-tag"><span className="status-dot" /> IDEAS → REALITY</div>
          <button className="code-toggle" onClick={() => setShowCode(value => !value)} aria-pressed={showCode}><FiCode /> {showCode ? 'Back to the human' : 'Peek behind the code'} <FiArrowUpRight /></button>
        </div>
      </div>
      <div className="hero-bottom"><a href="#projects"><span className="scroll-icon"><FiArrowDown /></span> SCROLL TO EXPLORE</a><p>A little creativity. A lot of purpose.</p><span className="hero-index">01 / 06</span></div>
    </section>
  );
}
