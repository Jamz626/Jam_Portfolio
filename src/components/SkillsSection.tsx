import React, { useState, useMemo } from 'react';
import { Search, Code2, Cpu, Network, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return SKILL_CATEGORIES;
    const q = searchQuery.toLowerCase();
    return SKILL_CATEGORIES.map(category => ({
      ...category,
      skills: category.skills.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.level.toLowerCase().includes(q) ||
        category.title.toLowerCase().includes(q)
      )
    })).filter(category => category.skills.length > 0);
  }, [searchQuery]);

  const getCategoryIcon = (title: string) => {
    if (title.includes('Programming')) return <Code2 className="w-5 h-5 text-cyan-400" />;
    if (title.includes('Web')) return <Cpu className="w-5 h-5 text-blue-400" />;
    if (title.includes('Networking')) return <Network className="w-5 h-5 text-emerald-400" />;
    return <Database className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-[#0d121d] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Live Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              Technical Competencies
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Tools, protocols, and technologies mastered in my IT curriculum.
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              From writing type-safe frontend components to subnetting IPv4 networks and tuning SQL queries for minimum latency.
            </p>
          </div>

          {/* Live Skill Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., Docker, SQL)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill List with Zero-Pill Typography */}
                <div className="mt-6 divide-y divide-slate-800/80">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-3 flex items-center justify-between group hover:bg-slate-800/30 px-2 rounded-md transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>

                      {/* Unboxed metadata: level and experience with typographic separator */}
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-cyan-400">{skill.level}</span>
                        <span className="text-slate-600" aria-hidden="true">·</span>
                        <span className="text-slate-400 tabular-nums">{skill.experience}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified in Academic Laboratories</span>
                <span>Active Coursework</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search yields no results */}
        {filteredCategories.length === 0 && (
          <div className="mt-12 text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-cyan-400 underline hover:text-cyan-300"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
