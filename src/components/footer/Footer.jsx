import React from 'react'
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Ppic } from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-16 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full h-full flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 rounded-full object-cover shadow-shadowOne"
            src={Ppic}
            alt="Waseem Aziz"
          />
          <div className="flex flex-col">
            <p className="text-gray-200 text-lg font-titleFont font-semibold">
              Waseem Aziz
            </p>
            <p className="text-gray-400 text-sm">Full-Stack MERN Developer</p>
          </div>
        </div>
        <p className="text-gray-400 text-base leading-6 max-w-md">
          Full-Stack MERN Developer building scalable web apps, browser extensions, and
          production-ready UI with React.js and Next.js.
        </p>
        <div className="flex gap-4">
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {[
            { label: "Home", to: "home" },
            { label: "Resume", to: "resume" },
            { label: "Projects", to: "projects" },
            { label: "What I Do", to: "features" },
            { label: "Contact", to: "contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer inline-block"
              >
                {item.label}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer