import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025 - Present</p>
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 pb-2">
          <ResumeCard
            title="Associate MERN Stack Developer"
            subTitle="Devsloop Technologies — (Jul 2025 - Present)"
            result="Gujranwala, Pakistan"
            des="Contributing to Smodin (AI content generation & detection) serving ~1M monthly users. Building React/Next.js features, maintaining NestJS services and REST APIs, and shipping a Plasmo-based Chrome Extension integrated with backend APIs."
          />
          <ResumeCard
            title="MERN Stack Developer Intern"
            subTitle="Devsloop Technologies — (Mar 2025 - Jul 2025)"
            result="Gujranwala, Pakistan"
            des="Assisted in full-stack feature delivery across the MERN stack. Built UI components, integrated REST APIs, and worked in real-world Git workflows with branching and code reviews under senior mentorship."
          />
          <ResumeCard
            title="Frontend / MERN Developer"
            subTitle="Ezitech Software House — (Feb 2025 - Mar 2025)"
            result="Rawalpindi, Pakistan"
            des="Designed and implemented responsive UIs with React.js, Tailwind CSS, and Bootstrap. Developed and integrated RESTful APIs using Node.js and Express.js across multiple client projects."
          />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Selected</p>
          <h2 className="text-4xl font-bold">Key Projects</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 pb-2">
          <ResumeCard
            title="EasyLlama (Ongoing)"
            subTitle="Compliance training platform — Frontend contribution"
            result="React.js / Next.js"
            des="Building responsive, accessible UI components for a platform serving 3.8M+ learners across 8,000+ organizations, with focus on scalable frontend architecture and performance."
          />
          <ResumeCard
            title="Smodin — AI Content Platform & Chrome Extension"
            subTitle="AI content generation/detection — Production project"
            result="Next.js / NestJS / Plasmo"
            des="Built a Chrome Extension that captures selected browser text and returns AI results inline via backend APIs. Contributed to backend modules/controllers (NestJS) and frontend features (React/Next.js)."
          />
          <ResumeCard
            title="RapidChat — Real-time Chat Application"
            subTitle="Real-time messaging with groups"
            result="React.js / Node.js / Socket.IO"
            des="Designed and built a real-time messaging system supporting instant messaging and group conversations with an intuitive, responsive UI and scalable backend services."
          />
          <ResumeCard
            title="VCart — E-commerce Platform"
            subTitle="Full checkout & payments"
            result="React / Node / MySQL / Stripe"
            des="Developed an end-to-end e-commerce experience including REST APIs, relational schemas, and payment flow integration using Stripe."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
