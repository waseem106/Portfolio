import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 pb-2">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of the Punjab, Gujranwala — (Sep 2020 - Jun 2024)"
            result="CGPA 3.37 / 4.00"
            des="Focused on core CS fundamentals and practical software development, with hands-on experience building full-stack web applications."
          />
          <ResumeCard
            title="ICS"
            subTitle="Manjanbazam Cadet College"
            result="83% / 100%"
            des="Completed intermediate studies with a strong foundation in analytical thinking and problem solving."
          />
          <ResumeCard
            title="Matric"
            subTitle="Manjanbazam Cadet College"
            result="87% / 100%"
            des="Built strong fundamentals through structured coursework and consistent academic performance."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Summary</p>
          <h2 className="text-3xl md:text-4xl font-bold">Profile</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 pb-2">
          <ResumeCard
            title="Full-Stack MERN Developer"
            subTitle="React.js • Next.js • Node.js • NestJS"
            result="Production Experience"
            des="1+ year building scalable web apps, browser extensions, and AI-powered platforms with a strong focus on performance, accessibility, and clean architecture."
          />
         
        </div>
      </div>
    </motion.div>
  );
}

export default Education