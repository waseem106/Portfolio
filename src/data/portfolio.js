import easyllama from '../assets/images/projects/easyllama.png';
import smodin from '../assets/images/projects/smodin.png';
import smodinExtension from '../assets/images/projects/smodin-extension.webp';
import rapidchat from '../assets/images/projects/projectThree.jpeg';
import vcart from '../assets/images/projects/projectOne.jpg';

export const profile = {
  email: 'waseemaziz106@gmail.com',
  github: 'https://github.com/waseem106',
  linkedin: 'https://www.linkedin.com/in/waseemazizjanjua/',
  whatsapp: 'https://wa.me/923066991687',
  cv: `${import.meta.env.BASE_URL}Waseem_Aziz_CV.pdf`,
};

export const projects = [
  {
    id: 'nexus', name: 'Devsloop Nexus', category: 'AI & SaaS', type: 'AI CUSTOMER ENGAGEMENT',
    summary: 'A little more human. A lot more intelligent.',
    description: 'A multi-tenant AI customer-engagement platform with an embeddable chat widget and an internal admin dashboard. As a core contributor, I own features across the database, backend, and interface.',
    contributions: ['Built a RAG knowledge pipeline with document ingestion, chunking, pgvector embeddings, and hybrid retrieval.', 'Integrated streaming AI responses, intent classification, and prompt guardrails.', 'Implemented tenant isolation through role-based permissions and PostgreSQL Row-Level Security.'],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Claude API'],
    url: 'https://nexus.devslooptech.com/', color: 'nexus', role: 'Full-stack & AI engineering',
  },
  {
    id: 'easyllama', name: 'EasyLlama', category: 'Web apps', type: 'LEARNING & COMPLIANCE',
    summary: 'Better learning. More inclusive workplaces.',
    description: 'A compliance training platform serving 3.8M+ learners across 8,000+ organizations. My work focuses on responsive interfaces, accessible components, and scalable frontend architecture.',
    contributions: ['Developed responsive UI components with React and Next.js.', 'Focused on accessibility and consistent interactions across screen sizes.', 'Contributed to frontend performance and maintainable component architecture.'],
    stack: ['React', 'Next.js', 'Accessibility'], image: easyllama,
    url: 'https://dashboard.easyllama.com/', color: 'llama', role: 'Frontend engineering',
  },
  {
    id: 'smodin-extension', name: 'Smodin Chrome Extension', category: 'Extensions', type: 'CHROME EXTENSION · AI WRITING',
    summary: 'AI writing tools, one selection away.',
    description: 'A published Chrome extension that brings Smodin’s AI detection and rewriting tools into the browser. It lets people work with text on webpages and in editors such as Google Docs, Notion, and Gmail, without switching to a separate app.',
    contributions: ['Built the Chrome extension using Plasmo.', 'Implemented selected-text capture and inline AI results through content scripts and extension UI.', 'Connected the browser experience to Smodin’s backend APIs.'],
    stack: ['Plasmo', 'Chrome Extension', 'Content scripts', 'API integration'], image: smodinExtension,
    url: 'https://chromewebstore.google.com/detail/smodin-detect-ai-humanize/aighbajkamplcinockonchknbclndded',
    linkLabel: 'View on Chrome Web Store', color: 'extension', role: 'Chrome extension development',
  },
  {
    id: 'smodin', name: 'Smodin', category: 'AI & SaaS', type: 'AI WRITING PLATFORM',
    summary: 'Thoughtful tools for better writing.',
    description: 'An AI content generation and detection platform with approximately one million monthly users. I contributed to the web application and backend services.',
    contributions: ['Delivered frontend features in React and Next.js.', 'Developed backend modules and controllers in NestJS.', 'Integrated the web interface with backend APIs.'],
    stack: ['React', 'Next.js', 'NestJS'], image: smodin,
    url: 'https://smodin.io/', color: 'smodin', role: 'Full-stack web development',
  },
  {
    id: 'rapidchat', name: 'RapidChat', category: 'Web apps', type: 'REAL-TIME MESSAGING',
    summary: 'Good conversations shouldn’t have to wait.',
    description: 'A full-stack messaging application built for instant one-to-one messages and group conversations, with a responsive React interface.',
    contributions: ['Implemented real-time messaging with Socket.IO.', 'Built group conversations and a responsive chat interface.', 'Developed Node.js and Express backend services.'],
    stack: ['React', 'Node.js', 'Socket.IO'], image: rapidchat,
    color: 'chat', role: 'Full-stack development',
  },
  {
    id: 'vcart', name: 'VCart', category: 'Web apps', type: 'E-COMMERCE',
    summary: 'From first discovery to the final checkout.',
    description: 'An end-to-end e-commerce application connecting a responsive storefront with backend services, a relational database, and Stripe payments.',
    contributions: ['Built the storefront in React and REST APIs in Node.js/Express.', 'Designed MySQL database schemas.', 'Integrated the checkout and Stripe payment flow.'],
    stack: ['React', 'Express', 'MySQL', 'Stripe'], image: vcart,
    color: 'cart', role: 'Full-stack development',
  },
];

export const experience = [
  { date: 'JUL 2025 — PRESENT', title: 'Associate MERN Stack Developer', place: 'Devsloop Technologies', description: 'Building AI-powered SaaS from database to interface. Core contributor to Nexus, with production contributions to Smodin and EasyLlama.', current: true },
  { date: 'MAR 2025 — JUL 2025', title: 'MERN Stack Developer Intern', place: 'Devsloop Technologies', description: 'Delivered full-stack features, integrated REST APIs, and worked with the team through code reviews and collaborative Git workflows.' },
  { date: 'FEB 2025 — MAR 2025', title: 'Frontend / MERN Developer', place: 'Eizitech Software House', description: 'Built responsive React interfaces and integrated Node.js and Express APIs for client projects.' },
];

export const education = [
  { date: '2020 — 2024', title: 'BSc in Computer Science', place: 'University of the Punjab, Gujranwala', description: 'CGPA 3.37 / 4.00. A foundation in computer science, problem solving, and hands-on full-stack software development.' },
  { date: 'INTERMEDIATE', title: 'ICS', place: 'Manjanbazam Cadet College', description: '83% — computer science, analytical thinking, and mathematics.' },
  { date: 'SECONDARY', title: 'Matric', place: 'Manjanbazam Cadet College', description: '87% — a strong academic foundation built on curiosity and consistency.' },
];
