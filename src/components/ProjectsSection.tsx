import React, { useState } from 'react';
import { ArrowUpRight, Github, Layers, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[#0b0f17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              Featured Work & Systems
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Academic capstone, network laboratories, and software projects.
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Every project reflects hands-on problem solving—from gathering institutional user needs to building hardened backends and deployment scripts.
            </p>
          </div>

          {/* Interactive Filter Controls - functional buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setActiveFilter('systems')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'systems'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Systems & Networking
            </button>
            <button
              onClick={() => setActiveFilter('iot')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'iot'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              IoT Hardware
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-cyan-950/20 cursor-pointer flex flex-col"
            >
              {/* Media Thumbnail Container */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative border-b border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback container
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Top Overlay Indicator */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-cyan-300 border border-slate-800">
                  {project.year}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-cyan-400 font-medium">{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.metadata}</span>
                  </div>

                  {/* Title & Arrow */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="p-1 rounded-md text-slate-400 group-hover:text-cyan-300 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack Unboxed Tags & Action Bar */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  {/* Clean unboxed tech list */}
                  <div className="text-xs text-slate-400 font-mono flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span className="text-slate-300">{tag}</span>
                        {i < project.tags.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-4 flex items-center justify-between text-xs pt-2">
                    <span className="text-cyan-400 font-medium flex items-center gap-1 group-hover:underline">
                      View Architecture & Simulator →
                    </span>
                    <span className="text-slate-500 font-mono">
                      {project.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal invocation */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
