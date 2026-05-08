import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectThree, easyllamaImg, smodinImg } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="EasyLlama (Ongoing)"
          des="Building responsive, accessible UI components for a compliance training platform serving 3.8M+ learners across 8,000+ organizations. Focused on scalable frontend architecture and performance using React.js and Next.js."
          src={easyllamaImg}
          liveLink="https://dashboard.easyllama.com/"
        />
        <ProjectsCard
          title="Smodin — AI Platform & Chrome Extension"
          des="Contributed to an AI content generation/detection platform with ~1M monthly users. Built a Plasmo-based Chrome Extension that captures selected text and returns AI results inline via backend API integration (Next.js / NestJS)."
          src={smodinImg}
          liveLink="https://smodin.io/"
        />
        <ProjectsCard
          title="RapidChat — Real-time Chat App"
          des="Designed and built a real-time messaging system supporting instant messaging and group conversations using Socket.IO, with a responsive React.js frontend and Node.js/Express backend services."
          src={projectThree}
        />
        <ProjectsCard
          title="VCart — E-commerce Platform"
          des="Built an end-to-end e-commerce application with React.js, Node.js/Express, MySQL, and Stripe payments. Implemented REST APIs, database schemas, and a complete checkout and payment flow."
          src={projectOne}
        />
      </div>
    </section>
  );
}

export default Projects