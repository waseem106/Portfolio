import { FaChrome, FaDatabase, FaReact } from "react-icons/fa";
import { SiNestjs, SiSupabase, SiOpenai } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <SiOpenai />,
    title: "AI / LLM Product Engineering",
    des: "Ship LLM features to production — RAG retrieval, streaming chat, intent classification, and prompt guardrails against injection and off-topic leakage.",
  },
  {
    id: 2,
    icon: <FaDatabase />,
    title: "RAG Knowledge Pipelines",
    des: "Build ingestion-to-answer pipelines: PDF/DOCX parsing, document chunking, pgvector embeddings, and hybrid lexical + vector retrieval that grounds every response.",
  },
  {
    id: 3,
    icon: <FaReact />,
    title: "Frontend Engineering (React/Next.js)",
    des: "Build responsive, accessible UI with Next.js App Router, Server Actions, and TypeScript — scalable component architecture with performance-first rendering.",
  },
  {
    id: 4,
    icon: <SiSupabase />,
    title: "Multi-Tenant SaaS Architecture",
    des: "Enforce tenant isolation in depth — route middleware, an RBAC permission matrix, and PostgreSQL Row-Level Security backed by versioned Supabase migrations.",
  },
  {
    id: 5,
    icon: <SiNestjs />,
    title: "Backend APIs (NestJS/Node.js)",
    des: "Design clean REST APIs and server actions with Zod validation, authentication patterns, and modular services built for production maintainability.",
  },
  {
    id: 6,
    icon: <FaChrome />,
    title: "Chrome Extensions (Plasmo)",
    des: "Build production-ready extensions (content scripts + UI) that capture page context and integrate securely with backend APIs.",
  },
];
