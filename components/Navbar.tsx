"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-slate-950/10 backdrop-blur-md border-b border-slate-800/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Your name/logo */}
        <Link href="/" className="text-lg font-bold text-slate-50">
          Ker Montero
        </Link>

        {/* Right: Nav links */}
        <div className="flex gap-8 text-sm">
          <Link
            href="#home"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            About
          </Link>
            <Link
            href="#skills"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}