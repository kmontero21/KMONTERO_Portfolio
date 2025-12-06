"use client";

import Image from "next/image"; 
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

type EducationEntry = {
  degree: string;
  institution: string;
  dates: string;
  description?: string; // Optional: e.g., "Relevant Coursework: Data Structures, Algorithms"
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

  const education: EducationEntry[] = [
    {
      degree: "Bachelors of Information Technology",
      institution: "University of San Agustin",
      dates: "2013 - 2018",
      description: "Specialization in Software Engineering and AI.",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of Waterloo",
      dates: "2019 - 2023",
      description: "Graduated with Honours. Focus on Full Stack Development.",
    },
    // Add more entries as needed
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
              <Image
                src="/images/kergrad1.jpg"
                alt="KER - Full Stack Developer"
                width={280} // Add this: w-70 is 280px (70 * 4)
                height={280} // Add this: h-70 is 280px (70 * 4)
                className="relative w-70 h-70 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                priority // Optional: if this is a critical image (like a hero image)
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
            I&apos;m Ker Joshua Montero, a dedicated Full Stack Developer with a strong foundation in 
            both front-end and back-end technologies, holding a Computer Programmer diploma from 
            Niagara College and a Bachelor&apos;s in Information Technology. My passion lies in building
            robust, end-to-end web applications that solve real-world problems and deliver tangible 
            results.
          </p>
          <p>
            At Moyer Diebel Limited, I&apos;ve led the digitization of critical systems using ASP.NET MVC,
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

      {/* Education Section */}
      <section id="education" className="space-y-6">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-400 mb-1">
            My Journey
          </p>
          <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
            Education
          </h2>
        </div>

        <div className="relative pl-4 md:pl-8">
          {/* Vertical line for timeline */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-800 md:left-4" />

          {education.map((entry, index) => (
            <motion.div
              key={index}
              className="relative mb-8 last:mb-0 pl-6 md:pl-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.7)] md:left-3.5" />

              <h3 className="text-base md:text-lg font-semibold text-slate-50">
                {entry.degree}
              </h3>
              <p className="text-sm text-slate-300">{entry.institution}</p>
              <p className="text-xs text-slate-400 mt-1">{entry.dates}</p>
              {entry.description && (
                <p className="text-xs text-slate-500 mt-2">{entry.description}</p>
              )}
            </motion.div>
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
              href="mailto:monteroker21@yahoo.com"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              monteroker21@yahoo.com
            </a>
          </p>
          <p>
            <span className="font-medium text-slate-100">Location:</span>{" "}
            Ontario, Canada
          </p>

          {/* Social links */}
          <div className="pt-3">
            <p className="text-xs text-slate-400 mb-2">Or find me on:</p>
            <div className="flex flex-wrap gap-2">
              {/* GitHub */}
              <a
                href="https://github.com/kmontero21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kermontero/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              {/* WhatsApp (uncomment if you want it) */}
              {/*
              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              */}

              {/* Instagram */}
              <a
                href="https://instagram.com/k.montero21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
    </>
  );
}