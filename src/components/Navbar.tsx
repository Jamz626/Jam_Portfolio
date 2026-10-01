import React, { useState } from 'react';
import { FileText, Terminal, Mail, Menu, X, Code2 } from 'lucide-react';
import { STUDENT_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); scrollTo('top'); }}
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors"
        >
          {STUDENT_INFO.name}
        </a>

        {/* Zone 2: 4-5 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollTo('about')} 
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollTo('projects')} 
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollTo('skills')} 
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollTo('education')} 
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            Education
          </button>
          <button 
            onClick={() => { scrollTo('terminal'); onOpenTerminal(); }} 
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700 rounded"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-4 bg-[#0d121d] border-b border-slate-800 space-y-2">
          <button 
            onClick={() => scrollTo('about')} 
            className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            About
          </button>
          <button 
            onClick={() => scrollTo('projects')} 
            className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollTo('skills')} 
            className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollTo('education')} 
            className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Education & Certifications
          </button>
          <button 
            onClick={() => { scrollTo('terminal'); onOpenTerminal(); }} 
            className="flex items-center gap-2 w-full text-left py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
          >
            <Terminal className="w-4 h-4" />
            <span>IT Terminal Emulator</span>
          </button>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full py-2 text-center text-xs font-semibold text-slate-200 bg-slate-800 rounded border border-slate-700"
            >
              View Full Resume (PDF Ready)
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full py-2 text-center text-xs font-semibold text-slate-900 bg-cyan-400 rounded"
            >
              Contact Jamela
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
