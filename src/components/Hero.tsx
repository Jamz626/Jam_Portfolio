import React from 'react';
import { ArrowDown, ExternalLink, Terminal, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDENT_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div 
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-1/10 -z-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status indicator - clean unboxed typography */}
            <div className="flex items-center gap-2.5 text-xs font-medium text-emerald-400 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{STUDENT_INFO.status}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400">Class of 2026</span>
            </div>

            {/* Display Headline with balanced text */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight lg:leading-[1.15] max-w-2xl text-balance">
              Information Technology student engineering reliable web systems and network solutions.
            </h1>

            {/* Bio Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Hello! I'm <strong className="text-white font-semibold">{STUDENT_INFO.name}</strong>. 
              I specialize in full-stack web applications, database architecture, and network infrastructure. 
              I love turning complex campus and organizational workflows into robust, intuitive software.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                Explore Projects
              </button>
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                View Full CV
              </button>
              <button
                onClick={() => { scrollTo('terminal'); onOpenTerminal(); }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-300 bg-transparent hover:bg-slate-800/40 border border-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs">Run Terminal</span>
              </button>
            </div>

            {/* Claim-to-Proof Quantitative Adjacency */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STUDENT_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-semibold text-slate-200">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {stat.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Portrait & Student Spec Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Top card header */}
              <div className="px-5 py-3.5 bg-slate-950/70 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-400">student_profile.json</span>
              </div>

              {/* Photo Container */}
              <div className="p-5 pb-4">
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-800 relative group">
                  <img
                    src={STUDENT_INFO.portraitImage}
                    alt="Jamela Kyle Parado - IT Student"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback container
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Overlay student role badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                    <div className="font-semibold text-sm">{STUDENT_INFO.name}</div>
                    <div className="text-slate-300 text-xs">B.S. Information Technology</div>
                  </div>
                </div>

                {/* Technical Meta Specs */}
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Specialization</span>
                    <span className="font-medium text-slate-200">Systems & Networks</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Academic Standing</span>
                    <span className="font-medium text-cyan-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Dean's Lister (1.28 GWA)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Location</span>
                    <span className="font-medium text-slate-200 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      Manila, PH (Open to Remote)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Core Stack</span>
                    <span className="font-mono text-slate-300">TS · React · Node · SQL · Cisco</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="px-5 py-3 bg-slate-950/50 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Direct Contact:</span>
                <a
                  href={`mailto:${STUDENT_INFO.email}`}
                  className="text-cyan-400 hover:text-cyan-300 font-mono hover:underline"
                >
                  {STUDENT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
