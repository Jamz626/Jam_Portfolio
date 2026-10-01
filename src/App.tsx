import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationTimeline } from './components/EducationTimeline';
import { TerminalPlayground } from './components/TerminalPlayground';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus the terminal input if available
      setTimeout(() => {
        const input = el.querySelector('input');
        if (input) input.focus();
      }, 400);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navbar with 3-zone contract */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenTerminal={handleOpenTerminal} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenTerminal={handleOpenTerminal} 
        />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationTimeline />
        <TerminalPlayground />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
