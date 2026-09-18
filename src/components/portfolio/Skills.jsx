import React from 'react';
import { FiCode, FiCpu, FiDatabase, FiGitBranch, FiServer, FiTool } from 'react-icons/fi';
import './Skills.css';

const groups = [
  {
    title: 'Frontend', icon: FiCode, note: 'The parts you see and feel.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Server Actions', 'Tailwind CSS', 'SCSS', 'Bootstrap', 'Recharts', 'Accessibility'],
  },
  {
    title: 'Backend', icon: FiServer, note: 'The logic that connects it all.',
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Socket.IO', 'Zod'],
  },
  {
    title: 'AI & LLMs', icon: FiCpu, note: 'Intelligence with a purpose.',
    items: ['Claude API', 'RAG pipelines', 'Vector embeddings', 'Semantic search', 'Prompt engineering', 'LLM guardrails', 'Ollama'],
  },
  {
    title: 'Databases', icon: FiDatabase, note: 'A solid foundation for every feature.',
    items: ['PostgreSQL', 'Supabase', 'pgvector', 'Row-Level Security', 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'DevOps', icon: FiGitBranch, note: 'From local ideas to production.',
    items: ['Docker', 'Jenkins', 'GitHub Actions', 'Git & GitHub', 'Bitbucket', 'Supabase CLI'],
  },
  {
    title: 'Testing & tools', icon: FiTool, note: 'The details that make work dependable.',
    items: ['Vitest', 'Postman', 'Plasmo / Chrome extensions', 'Code review', 'Agile / Scrum'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-pad wrap" aria-labelledby="skills-heading">
      <div className="section-heading">
        <div>
          <span className="eyebrow section-kicker"><span /> 03 — SKILLS & TOOLS</span>
          <h2 id="skills-heading">My creative <span className="serif-accent">toolkit.</span></h2>
        </div>
        <p>From the first pixel to the last API call.<br />The technologies I bring to the table.</p>
      </div>
      <div className="skills-grid">
        {groups.map(({ title, icon: Icon, note, items }, index) => (
          <article className="skill-group" key={title}>
            <div className="skill-group-top">
              <span className="skill-group-icon"><Icon aria-hidden="true" /></span>
              <span className="skill-group-number" aria-hidden="true">0{index + 1} /</span>
            </div>
            <h3>{title}</h3>
            <p>{note}</p>
            <ul className="skill-chips" aria-label={`${title} skills`}>
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="skills-footnote"><span aria-hidden="true">✳</span> Always learning. Always adding to the toolkit.</div>
    </section>
  );
}
