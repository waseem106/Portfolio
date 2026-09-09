import React from 'react'
import { FaLinkedinIn, FaReact, FaInstagram, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiSupabase } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            
            <span className="bannerIcon">
              <a
                href="https://www.instagram.com/waseemazizjanjua/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/waseemazizjanjua/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              
            </span>
            <span className="bannerIcon">
              <a
                href="https://github.com/waseem106"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" title="Next.js">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon" title="React">
              <FaReact />
            </span>
            <span className="bannerIcon" title="TypeScript">
              <SiTypescript />
            </span>
            <span className="bannerIcon" title="Supabase">
              <SiSupabase />
            </span>
            <span className="bannerIcon" title="Node.js">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media