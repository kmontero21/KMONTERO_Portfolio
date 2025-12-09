"use client";

import { useState } from "react";
import { Github, Linkedin, Instagram, Music2Icon, Bike} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Typewriter from "@/components/Typewriter";

type Project = {
  id: number;
  name: string;
  role: string;
  stack: string[];
};

type Skill = {
  name: string;
  level: number;
};

type EducationEntry = {
  degree: string;
  institution: string;
  dates: string;
  description?: string;
};

export default function Home() {
  const [soundOn, setSoundOn] = useState(false);

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
    { name: "C# & .NET (ASP.NET Core)", level: 80 },
    { name: "React & Next.js", level: 80 },
    { name: "TypeScript & JavaScript", level: 75 },
    { name: "SQL & Relational Databases", level: 80 },
    { name: "HTML5, CSS3 & Tailwind CSS", level: 85 },
    { name: "RESTful APIs & JSON", level: 70 },
    { name: "Git, GitHub & CI Basics", level: 75 },
  ];

  const education: EducationEntry[] = [
    {
      degree: "Diploma in Computer Programming",
      institution: "Niagara College",
      dates: "2021-2023",
      description:
        "Comprehensive training in software development, focusing on object-oriented programming, web technologies, and database design. Built several practical applications using C#, .NET, JavaScript, and SQL with an emphasis on clean, maintainable code.",
    },
    {
      degree: "CISCO Certified Network Associate (CCNA) with Comptia A+",
      institution: "Rivan School of Technology",
      dates: "2018-2019",
      description:
        "Completed intensive training in computer networking, hardware, and IT support. Developed a strong understanding of network configuration, troubleshooting, and core infrastructure concepts that support reliable web applications.",
    },
    {
      degree: "Bachelors of Information Technology",
      institution: "University of San Agustin",
      dates: "2013 - 2018",
      description:
        "Built a solid foundation in information systems, programming fundamentals, and IT infrastructure. Gained experience working on team-based projects and learned core principles of software development, databases, and system design.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_70%)]" />
          <div className="absolute inset-0 opacity-10 mix-blend-screen bg-[linear-gradient(to_right,rgba(15,23,42,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.8)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute left-6 top-20 text-2xl leading-relaxed text-slate-100 font-mono max-w-[30rem] opacity-90">
            {"{ "}
            Developer: &quot;ker&quot;, loves: [&quot;FullStack Developer&quot;, &quot;Software Developer&quot;, &quot;Database Developer&quot;], mode: &quot;building&quot;
            {" }"}
          </div>
          {/* Request / Response circuit diagram */}
            <div className="absolute top-70 left-8 opacity-90">
              <div className="relative flex items-center gap-4 rounded-2xl border border-cyan-00/25 bg-slate-950/70 px-4 py-3 text-[0.99rem] font-mono text-slate-100 shadow-[0_0_32px_rgba(34,211,238,0.35)] backdrop-blur-sm">

                {/* Client */}
                <div className="flex flex-col items-center gap-0.5">
                  <span className="rounded-md border text-2xl border-slate-700 bg-slate-900/80 px-2 py-1">
                    CLIENT
                  </span>
                  <span className="text-xl text-[1.2rem] text-slate-400">Next.js</span>
                </div>
                {/* Arrow line */}
                <div className="h-px w-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0" />

                {/* API */}
                <div className="flex flex-col items-center gap-0.5">
                  <span className="rounded-md border text-2xl border-slate-700 bg-slate-900/80 px-2 py-1">
                    API
                  </span>
                  <span className="text-xl text-[1.2rem] text-slate-400">ASP.NET / Node</span>
                </div>

                {/* Arrow line */}
                <div className="h-px w-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0" />

                {/* DB */}
                <div className="flex flex-col items-center gap-0.5">
                  <span className="rounded-md border text-2xl border-slate-700 bg-slate-900/80 px-2 py-1">
                    DB
                  </span>
                  <span className="text-xl text-[1.2rem] text-slate-400">SQL / Mongo</span>
                </div>
              </div>

              {/* Moving "packet" dot */}
              <motion.div
                className="pointer-events-none absolute -top-2.5 left-8 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
                animate={{ x: [20, 235, 448, 235, 20] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          <div className="absolute right-8 bottom-24 text-xl leading-relaxed text-slate-100 font-mono max-w-[14rem] text-right opacity-90">
            while(hungryForGrowth) {"{ "}
            shipCode(); learn(); rideBike();
            {" }"}
          </div>
          <div className="absolute -right-10 bottom-[-4rem] opacity-30">
            <Bike className="w-[30rem] h-[30rem] text-cyan-400" />
          </div>
          <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl" />
        </div>
        <div className="relative z-10w-full max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/40 shadow-[0_0_120px_rgba(34,211,238,0.15)] px-8 py-10 space-y-16">
          {/* Typing sound toggle */}
          <div className="flex justify-end mb-2">
            <button
              type="button"
              onClick={() => setSoundOn((prev) => !prev)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${
                soundOn
                  ? "border-cyan-400 text-cyan-300 bg-slate-900/70"
                  : "border-slate-700 text-slate-400 bg-slate-900/40"
              }`}
            >
              <span><Music2Icon className="w-8 h-8 " /></span>
              <span
                className={`h-2 w-2 rounded-full ${
                  soundOn ? "bg-cyan-400" : "bg-slate-600"
                }`}
              />
            </button>
          </div>

          {/* Hero Section with animations */}
          <section
            id="home"
            className="grid gap-12 md:grid-cols-2 md:items-center"
          >
            {/* Left side - text content */}
            <motion.div
              className="relative flex flex-col items-center md:items-stretch"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[0.9rem] uppercase tracking-[0.35em] text-cyan-400">
                <Typewriter
                  text={
                    "Full Stack Developer · Software Developer · Database Developer"
                  }
                  speed={25}
                  enableSound={soundOn}
                />
              </p>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-xl mt-2">
                <Typewriter
                  text={
                    "I turn real-world problems into full-stack web solutions."
                  }
                  speed={28}
                  enableSound={soundOn}
                />
              </h1>

              <p className="text-slate-300 text-sm md:text-base max-w-xl mt-3">
                <Typewriter
                  text={
                    "Using React, TypeScript, and C#/.NET with SQL, I create intuitive interfaces, robust backends, and well-structured databases—owning everything from architecture and implementation to deployment and ongoing support."
                  }
                  speed={18}
                  delay={900}
                  enableSound={soundOn}
                />
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
                <span>
                  <Typewriter
                    text="Download CV"
                    speed={40}
                    delay={1200}
                    enableSound={soundOn}
                  />
                </span>
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
                    src="/kergrad1.jpg"
                    alt="KER - Full Stack Developer"
                    width={280}
                    height={280}
                    className="relative w-70 h-70 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Current focus card */}
              <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl md:self-stretch">
                <p className="text-xs text-slate-400 mb-2">
                  <Typewriter
                    text="Current focus"
                    speed={35}
                    enableSound={soundOn}
                  />
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li>
                    <Typewriter
                      text="• React / Next.js frontends"
                      speed={20}
                      enableSound={soundOn}
                    />
                  </li>
                  <li>
                    <Typewriter
                      text="• Node.js APIs & RESTful services"
                      speed={20}
                      delay={300}
                      enableSound={soundOn}
                    />
                  </li>
                  <li>
                    <Typewriter
                      text="• PostgreSQL / MongoDB databases"
                      speed={20}
                      delay={600}
                      enableSound={soundOn}
                    />
                  </li>
                  <li>
                    <Typewriter
                      text="• Clean UI, UX & motion design"
                      speed={20}
                      delay={900}
                      enableSound={soundOn}
                    />
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="space-y-6">
            <div>
              <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
                <Typewriter
                  text="About Me"
                  speed={35}
                  enableSound={soundOn}
                />
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-sm md:text-base max-w-3xl">
              <p>
                <Typewriter
                  text={
                    "I'm Ker Joshua Montero, a dedicated Full Stack Developer with a strong foundation in both front-end and back-end technologies, holding a Computer Programmer diploma from Niagara College and a Bachelor's in Information Technology. My passion lies in building robust, end-to-end web applications that solve real-world problems and deliver tangible results."
                  }
                  speed={18}
                  enableSound={soundOn}
                />
              </p>
              <p>
                <Typewriter
                  text={
                    "At Moyer Diebel Limited, I've led the digitization of critical systems using ASP.NET MVC, SQL, and React, demonstrating my ability to architect and implement secure, efficient solutions from concept to deployment. My experience extends to managing on-prem infrastructure, ensuring application reliability. Earlier in my career, I not only developed key software at Anderson Group BPO Inc. but also honed my leadership skills by managing a team of intern developers, fostering collaboration and successful project delivery."
                  }
                  speed={18}
                  delay={600}
                  enableSound={soundOn}
                />
              </p>
              <p>
                <Typewriter
                  text={
                    "I am a highly motivated and adaptable professional, constantly eager to learn new technologies and best practices. I thrive in dynamic environments and am committed to contributing innovative solutions and growing with forward-thinking teams."
                  }
                  speed={18}
                  delay={1200}
                  enableSound={soundOn}
                />
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="space-y-6">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-400 mb-1">
                <Typewriter
                  text="Core Skills"
                  speed={30}
                  enableSound={soundOn}
                />
              </p>
              <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
                <Typewriter
                  text="Skills & Technologies"
                  speed={30}
                  delay={250}
                  enableSound={soundOn}
                />
              </h2>
              <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-md">
                <Typewriter
                  text={
                    "A quick view of the tools I'm most comfortable using to ship production-ready applications."
                  }
                  speed={18}
                  delay={600}
                  enableSound={soundOn}
                />
              </p>
            </div>

            <div className="grid gap-4 md:gap-5 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-1.5">
                  {/* Label + percentage */}
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-slate-200">
                      <Typewriter
                        text={skill.name}
                        speed={22}
                        delay={index * 120}
                        enableSound={soundOn}
                      />
                    </span>
                    <span className="text-cyan-400 font-medium">
                      <Typewriter
                        text={`${skill.level}%`}
                        speed={30}
                        delay={index * 120 + 300}
                        enableSound={soundOn}
                      />
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
                <Typewriter
                  text="My Journey"
                  speed={30}
                  enableSound={soundOn}
                />
              </p>
              <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
                <Typewriter
                  text="Education"
                  speed={30}
                  delay={250}
                  enableSound={soundOn}
                />
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
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.7)] md:left-3.5" />

                  <h3 className="text-base md:text-lg font-semibold text-slate-50">
                    <Typewriter
                      text={entry.degree}
                      speed={22}
                      delay={index * 300}
                      enableSound={soundOn}
                    />
                  </h3>
                  <p className="text-sm text-slate-300">
                    <Typewriter
                      text={entry.institution}
                      speed={22}
                      delay={index * 300 + 300}
                      enableSound={soundOn}
                    />
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    <Typewriter
                      text={entry.dates}
                      speed={22}
                      delay={index * 300 + 600}
                      enableSound={soundOn}
                    />
                  </p>
                  {entry.description && (
                    <p className="text-xs text-slate-500 mt-2">
                      <Typewriter
                        text={entry.description}
                        speed={18}
                        delay={index * 300 + 900}
                        enableSound={soundOn}
                      />
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section id="projects" className="space-y-4">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-400 mb-1">
                <Typewriter
                  text="Selected Work"
                  speed={30}
                  enableSound={soundOn}
                />
              </p>
              <h2 className="text-lg font-semibold text-slate-50">
                <Typewriter
                  text="Featured Projects"
                  speed={30}
                  delay={250}
                  enableSound={soundOn}
                />
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-3 pt-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="group h-44 rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3 flex flex-col justify-between hover:border-cyan-400/60 hover:bg-slate-900/70 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-50">
                      <Typewriter
                        text={project.name}
                        speed={24}
                        delay={index * 200}
                        enableSound={soundOn}
                      />
                    </h3>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                      <Typewriter
                        text={project.role}
                        speed={22}
                        delay={index * 200 + 250}
                        enableSound={soundOn}
                      />
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="text-[0.65rem] px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900 text-slate-300 group-hover:border-cyan-400/60 group-hover:text-cyan-200 transition-colors"
                      >
                        <Typewriter
                          text={tech}
                          speed={22}
                          delay={index * 250 + techIndex * 120}
                          enableSound={soundOn}
                        />
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
                <Typewriter
                  text="Get In Touch"
                  speed={30}
                  enableSound={soundOn}
                />
              </p>
              <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
                <Typewriter
                  text="Contact"
                  speed={30}
                  delay={250}
                  enableSound={soundOn}
                />
              </h2>
              <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-xl">
                <Typewriter
                  text={
                    "Whether you're looking to fill a junior full stack role, collaborate on a project, or just chat about ideas, feel free to reach out. I'll do my best to respond promptly."
                  }
                  speed={18}
                  delay={600}
                  enableSound={soundOn}
                />
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-5 py-4 md:px-6 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Left: Email + Location */}
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                    <Typewriter
                      text="Email"
                      speed={28}
                      enableSound={soundOn}
                    />
                  </p>

                  <a
                    href="mailto:monteroker21@yahoo.com"
                    className="text-cyan-400 hover:text-cyan-300 text-sm md:text-base underline underline-offset-4"
                  >
                    <Typewriter
                      text="monteroker21@yahoo.com"
                      speed={24}
                      delay={300}
                      enableSound={soundOn}
                    />
                  </a>
                </div>

                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                    <Typewriter
                      text="Location"
                      speed={28}
                      delay={600}
                      enableSound={soundOn}
                    />
                  </p>
                  <p className="text-slate-300 text-sm md:text-base">
                    <Typewriter
                      text="Ontario, Canada"
                      speed={24}
                      delay={900}
                      enableSound={soundOn}
                    />
                  </p>
                </div>
              </div>

              {/* Right: CTA + Socials */}
              <div className="flex flex-col items-start md:items-end gap-3">
                {/* Primary CTA button */}
                <a
                  href="mailto:monteroker21@yahoo.com?subject=Let%27s%20talk"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:bg-cyan-400 transition-colors"
                >
                  <span>
                    <Typewriter
                      text="Open to Opportunities"
                      speed={26}
                      delay={400}
                      enableSound={soundOn}
                    />
                  </span>
                </a>

                {/* Socials */}
                <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                  <span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500 mr-1">
                    <Typewriter
                      text="Or find me on"
                      speed={26}
                      delay={800}
                      enableSound={soundOn}
                    />
                  </span>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://github.com/kmontero21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-[0.7rem] text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-10 h-10" />
                      <span>
                        <Typewriter
                          text="GitHub"
                          speed={26}
                          delay={1100}
                          enableSound={soundOn}
                        />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kermontero/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-[0.7rem] text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Linkedin className="w-10 h-10" />
                      <span>
                        <Typewriter
                          text="LinkedIn"
                          speed={26}
                          delay={1300}
                          enableSound={soundOn}
                        />
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/k.montero21/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-[0.7rem] text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Instagram className="w-10 h-10" />
                      <span>
                        <Typewriter
                          text="Instagram"
                          speed={26}
                          delay={1500}
                          enableSound={soundOn}
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}