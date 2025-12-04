"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

type Project = {
  id: number;
  name: string;
  role: string;
  stack: string[];
};

type Skill = {
  name: string;
  level: number; // percentage
};

export default function Home() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Developer Portfolio",
      role: "Full Stack • Personal Brand",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 2,
      name: "TaskFlow",
      role: "Full Stack • Productivity App",
      stack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      name: "Insight Dashboard",
      role: "Frontend • Data Visualization",
      stack: ["Next.js", "TypeScript", "Chart.js", "REST APIs"],
    },
    {
      id: 4,
      name: "Ker Job Tracker",
      role: "Full Stack • Job Search Tool",
      stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    },
  ];
  
  const skills: Skill[] = [
    { name: "C#", level: 75 },
    { name: "SQL", level: 80 },
    { name: "JavaScript / TypeScript", level: 70 },
    { name: "HTML5 / CSS / Tailwind", level: 85 },
    { name: ".NET / ASP.NET", level: 70 },
    { name: "React / Next.js", level: 75 },
    { name: "Node.js / APIs", level: 65 },
    { name: "Relational Databases", level: 80 },
  ];
  return (
    <>
    <Navbar />
    <main className=
      "min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/40 
        shadow-[0_0_120px_rgba(34,211,238,0.15)] px-8 py-10 space-y-16">
      {/* Hero Section with animations */}
      <section id="home" className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Left side - text content */}
        <motion.div
          className="relative flex flex-col items-center md:items-stretch"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[0.9rem] uppercase tracking-[0.35em] text-cyan-400">
            Full Stack Developer · Software Developer · Database Developer
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            I turn real‑world{" "}
            <span className="text-cyan-400">problems</span>{" "}
            into full‑stack web solutions.
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            Using React, TypeScript, and C#/.NET with SQL, I create intuitive
            interfaces, robust backends, and well‑structured databases—owning
            everything from architecture and implementation to deployment and
            ongoing support.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex w-auto md:self-start items-center gap-2 mt-4 rounded-full bg-cyan-500 px-4 py-1.5 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Right side - image + card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

          {/* Profile image - circular, floating */}
          <div className="relative mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl" />
              <img
                src="https://i.pravatar.cc/300"
                alt="KER - Full Stack Developer"
                className="relative w-70 h-70 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
              />
            </div>
          </div>

          {/* Current focus card */}
          <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl md:self-stretch">
            <p className="text-xs text-slate-400 mb-2">Current focus</p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• React / Next.js frontends</li>
              <li>• Node.js APIs & RESTful services</li>
              <li>• PostgreSQL / MongoDB databases</li>
              <li>• Clean UI, UX & motion design</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-6">
        <div>
          <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
            About Me
          </h2>
        </div>

        <div className="space-y-4 text-slate-300 text-sm md:text-base max-w-3xl">
          <p>
            I'm Ker Joshua Montero, a dedicated Full Stack Developer with a strong foundation in 
            both front-end and back-end technologies, holding a Computer Programmer diploma from 
            Niagara College and a Bachelor's in Information Technology. My passion lies in building
            robust, end-to-end web applications that solve real-world problems and deliver tangible 
            results.
          </p>
          <p>
            At Moyer Diebel Limited, I've led the digitization of critical systems using ASP.NET MVC,
            SQL, and React, demonstrating my ability to architect and implement secure, efficient 
            solutions from concept to deployment. My experience extends to managing on-prem 
            infrastructure, ensuring application reliability. Earlier in my career, I not only 
            developed key software at Anderson Group BPO Inc. but also honed my leadership skills 
            by managing a team of intern developers, fostering collaboration and successful project 
            delivery.
          </p>
          <p>
            I am a highly motivated and adaptable professional, constantly eager to learn new technologies and 
            best practices. I thrive in dynamic environments and am committed to contributing innovative 
            solutions and growing with forward-thinking teams.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-6">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-400 mb-1">
            Core Skills
          </p>
          <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
            Skills & Technologies
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-md">
            A quick view of the tools I&apos;m most comfortable using to ship
            production-ready applications.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-1.5">
              {/* Label + percentage */}
              <div className="flex items-center justify-between text-xs md:text-sm">
                <span className="text-slate-200">{skill.name}</span>
                <span className="text-cyan-400 font-medium">
                  {skill.level}%
                </span>
              </div>

              {/* Track + animated bar */}
              <div className="h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects with hover only (for now) */}
      <section id="projects" className="space-y-4 md:pl-10 md:border-l md:border-slate-800">
        <div>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-400 mb-1">
          Selected Work
        </p>
        <h2 className="text-lg font-semibold text-slate-50">
          Featured Projects
        </h2>
        <p className="text-xs text-slate-400 mt-1 max-w-sm">
          Highlighting my strongest full stack builds with real-world stacks and motion‑driven UI.
        </p>
      </div>
        <div className="grid gap-3 md:grid-cols-3 pt-2">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="group h-44 rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3 flex flex-col justify-between hover:border-cyan-400/60 hover:bg-slate-900/70 transition-colors cursor-pointer"
              whileHover={{ scale: 1.32 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-50">
                  {project.name}
                </h3>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                  {project.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.65rem] px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900 text-slate-300 group-hover:border-cyan-400/60 group-hover:text-cyan-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="space-y-6">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-400 mb-1">
            Get In Touch
          </p>
          <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
            Contact
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-sm">
            Want to talk about a role, a project, or just ideas? Reach out and
            I’ll get back to you.
          </p>
        </div>

        <div className="space-y-3 text-sm md:text-base text-slate-300">
          <p>
            <span className="font-medium text-slate-100">Email:</span>{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              your.email@example.com
            </a>
          </p>
          <p>
            <span className="font-medium text-slate-100">Location:</span>{" "}
            Toronto, Canada {/* or your real location */}
          </p>
          {/* You can add GitHub/LinkedIn links here later */}
        </div>
      </section>
      </div>
    </main>
    </>
  );
}