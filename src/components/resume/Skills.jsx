import React from 'react'
import { motion } from 'framer-motion';

const SkillGroup = ({ title, subtitle, items, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay } }}
      className="w-full p-6 rounded-lg shadow-shadowOne bg-gradient-to-r from-[#1e2024] to-[#23272b]"
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          {subtitle}
        </p>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full text-sm text-gray-200 bg-black bg-opacity-30 border border-black border-opacity-40 hover:border-designColor hover:text-white duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full grid grid-cols-1 lgl:grid-cols-2 gap-8 lgl:gap-10 pt-6"
    >
      <SkillGroup
        subtitle="Skills"
        title="Frontend"
        delay={0.05}
        items={[
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "SCSS",
          "Bootstrap",
          "Responsive UI",
          "Accessibility",
        ]}
      />

      <SkillGroup
        subtitle="Skills"
        title="Backend"
        delay={0.1}
        items={[
          "Node.js",
          "Express.js",
          "NestJS",
          "Socket.IO",
          "REST APIs",
        ]}
      />

      <SkillGroup
        subtitle="Skills"
        title="Database"
        delay={0.15}
        items={["MongoDB", "MySQL", "Firebase"]}
      />

      <SkillGroup
        subtitle="Skills"
        title="Tools"
        delay={0.2}
        items={[
          "Git",
          "GitHub",
          "Bitbucket",
          "Postman",
          "Plasmo (Chrome Extensions)",
        ]}
      />
    </motion.div>
  );
}

export default Skills