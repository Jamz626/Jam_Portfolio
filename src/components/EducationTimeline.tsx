import React, { useState } from 'react';
import { Award, BookOpen, GraduationCap, CheckCircle, ExternalLink, Calendar, MapPin, Copy, Check } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="education" className="py-20 bg-[#0b0f17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Academic Track & Credentials
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Formal education, academic honors, and industry certifications.
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Combining rigorous computer science and information technology theory with industry-aligned training programs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formal Degree & Coursework */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {EDUCATION.degree}
                    </h3>
                    <div className="text-cyan-400 text-sm font-medium mt-0.5">
                      {EDUCATION.field}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                      <span>{EDUCATION.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {EDUCATION.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3" />
                        {EDUCATION.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GPA Highlight */}
              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Cumulative Academic Standing</div>
                  <div className="text-sm font-bold text-white mt-0.5">{EDUCATION.gpa}</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
                    Honor Scholar
                  </span>
                </div>
              </div>

              {/* Academic Distinctions */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Academic Distinctions
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {EDUCATION.honors.map((honor, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{honor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant Coursework */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Core Completed Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {EDUCATION.keyCourses.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Verified Industry Certifications
            </h3>

            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {cert.title}
                    </h4>
                    <div className="text-xs text-cyan-400 mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                </div>

                {/* Skills covered in this certification */}
                <div className="mt-3 text-[11px] text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  {cert.skillsCovered.map((skill, i) => (
                    <React.Fragment key={skill}>
                      <span className="text-slate-300">{skill}</span>
                      {i < cert.skillsCovered.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Credential ID row with copy button */}
                <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 text-[11px]">
                    ID: {cert.credentialId}
                  </span>
                  <button
                    onClick={() => handleCopyId(cert.credentialId)}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedId === cert.credentialId ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
