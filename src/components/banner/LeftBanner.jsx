import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { FaDownload } from "react-icons/fa";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full-Stack MERN Developer.", "React & Next.js Developer.", "NestJS & Node.js Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
    const cvUrl = `${import.meta.env.BASE_URL}Waseem_Aziz_CV.pdf`;
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Waseem Aziz </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Results-driven Full-Stack MERN Developer with 1+ year of hands-on experience building scalable web applications,
          browser extensions, and AI-powered platforms in production. Currently contributing to EasyLlama — a compliance
          training platform serving 3.8M+ learners across 8,000+ organizations — delivering responsive, accessible UI with
          React.js and Next.js. Focused on clean architecture, performance, and seamless API integration.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={cvUrl}
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 h-12 rounded-lg bg-[#141518] text-gray-300 hover:text-white duration-300 hover:border-[1px] hover:border-designColor border border-transparent"
          >
            <FaDownload />
            Download CV
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 rounded-lg bg-black bg-opacity-20 text-gray-300 hover:text-white duration-300 hover:border-[1px] hover:border-designColor border border-transparent"
          >
            Contact
          </a>
        </div>
        {/* Media */}
        <Media />
      </div>
    </div>
  );
}

export default LeftBanner