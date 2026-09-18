import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const links = [['home', 'Home'], ['projects', 'Work'], ['about', 'About'], ['skills', 'Skills'], ['resume', 'Experience']];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = event => { if (event.key === 'Escape') { setOpen(false); document.querySelector('.menu-toggle')?.focus(); } };
    const closeOnResize = () => { if (window.innerWidth > 760) setOpen(false); };
    window.addEventListener('keydown', close);
    window.addEventListener('resize', closeOnResize);
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', closeOnResize); };
  }, [open]);

  return <header className="site-header"><div className="nav-inner wrap"><a className="wordmark" href="#home" aria-label="Waseem Aziz, home" onClick={() => setOpen(false)}>waseem<span className="wordmark-dot">.</span><span className="wordmark-star" aria-hidden="true">✳</span></a><nav aria-label="Main navigation" id="main-nav" className={open ? 'nav-links is-open' : 'nav-links'}>{links.map(([id, label]) => <a key={id} className={active === id ? 'nav-active' : ''} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" className="mobile-contact" onClick={() => setOpen(false)}>Let’s talk <FiArrowUpRight /></a></nav><a href="#contact" className="nav-contact">Let’s talk <FiArrowUpRight /></a><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(value => !value)}>{open ? <FiX /> : <FiMenu />}</button></div></header>;
}
