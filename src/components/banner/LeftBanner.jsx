import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "Full-Stack Developer.",
        "Next.js & React Developer.",
        "AI / LLM Product Engineer.",
        "NestJS & Node.js Developer.",
      ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
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
          Results-driven Full-Stack Developer with 1.5+ years of hands-on experience building production web
          applications, AI-powered platforms, and browser extensions. Currently a core contributor to{" "}
          <span className="text-designColor">Devsloop Nexus</span> — a multi-tenant AI customer-engagement SaaS
          built on Next.js 16, React 19, TypeScript and Supabase/PostgreSQL — owning features end-to-end across
          RAG retrieval pipelines, LLM integration, role-based access control, and row-level tenant isolation.
          Previously delivered frontend and NestJS backend features for Smodin (~1M monthly users) and accessible
          UI for EasyLlama (3.8M+ learners). Strong focus on clean architecture, data security, and test coverage.
        </p>
      </div>
      <Media />
    </div>
  );
}

export default LeftBanner