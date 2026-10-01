import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { STUDENT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#080b11] border-t border-slate-900 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-sm font-bold text-white tracking-tight">
            {STUDENT_INFO.name}
          </div>
          <div className="mt-1 text-slate-400">
            B.S. Information Technology · Class of 2026
          </div>
          <p className="mt-2 text-[11px] text-slate-600">
            © {new Date().getFullYear()} Jamela Kyle Parado. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${STUDENT_INFO.email}`}
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
