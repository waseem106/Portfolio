import React from 'react'
import { FaLinkedinIn, FaReact, FaInstagram, FaNodeJs, FaCss3 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            
            <span className="bannerIcon">
              <a href="https://www.instagram.com/waseemazizjanjua/"><FaInstagram /></a>
              
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/waseemazizjanjua/"> <FaLinkedinIn /></a>
              
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <FaCss3 />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media