import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { STUDENT_INFO, EDUCATION, SKILL_CATEGORIES, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
JAMELA KYLE PARADO
Information Technology Undergraduate
Email: ${STUDENT_INFO.email} | Location: ${STUDENT_INFO.location}
Portfolio: https://jamelakyle.dev

ACADEMIC BACKGROUND
${EDUCATION.degree}
${EDUCATION.institution} (${EDUCATION.period})
Cumulative GWA: ${EDUCATION.gpa}
Honors: ${EDUCATION.honors.join('; ')}

CORE TECHNICAL COMPETENCIES
- Programming & Scripting: TypeScript, JavaScript, Python, SQL, C++, Bash
- Web Frameworks & Libraries: React, Node.js, Express, REST APIs, Tailwind CSS
- Networking & Infrastructure: Cisco Packet Tracer, TCP/IP, Subnetting, Linux CLI
- Databases & DevOps: PostgreSQL, MySQL, Docker, Git/GitHub, AWS Fundamentals

FEATURED ACADEMIC & CAPSTONE PROJECTS
${PROJECTS.map(p => `• ${p.title} (${p.year})
  Role: ${p.role}
  Stack: ${p.tags.join(', ')}
  Highlights: ${p.keyFeatures.slice(0, 2).join('; ')}`).join('\n\n')}

CERTIFICATIONS
${CERTIFICATIONS.map(c => `• ${c.title} - ${c.issuer} (${c.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae Preview</span>
            <span className="text-xs text-slate-400 font-mono">ATS-Compliant Student Format</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
          {/* Header */}
          <div className="border-b pb-6 border-slate-300">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              {STUDENT_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-800 mt-1">
              {STUDENT_INFO.title}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                {STUDENT_INFO.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                {STUDENT_INFO.location}
              </span>
              <span>·</span>
              <span className="font-semibold text-emerald-700">
                {STUDENT_INFO.status}
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Education
            </h2>
            <div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-bold text-slate-900">{EDUCATION.degree}</span>
                <span className="text-xs text-slate-500 font-mono">{EDUCATION.period}</span>
              </div>
              <div className="text-xs text-slate-700 font-medium">{EDUCATION.institution} · {EDUCATION.field}</div>
              <div className="text-xs text-cyan-800 font-semibold mt-1">
                Cumulative Standing: {EDUCATION.gpa}
              </div>
              <ul className="mt-2 list-disc list-inside text-xs text-slate-600 space-y-0.5">
                {EDUCATION.honors.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Technical Competencies
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 font-semibold text-slate-900">{cat.title}:</span>
                  <span className="col-span-8 text-slate-600">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Systems Projects */}
          <div className="mt-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Featured Systems & Academic Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-900">{proj.title}</span>
                    <span className="text-xs text-slate-500 font-mono">{proj.year}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    Technologies: {proj.tags.join(' · ')}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {proj.solution}
                  </p>
                  <ul className="mt-1 list-disc list-inside text-[11px] text-slate-600 space-y-0.5">
                    {proj.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Certifications & Training
            </h2>
            <div className="space-y-2">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-900">{cert.title}</span>
                    <span className="text-slate-500"> — {cert.issuer}</span>
                  </div>
                  <span className="text-slate-500 font-mono">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom note */}
        <div className="no-print px-6 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Official transcript and certificates available upon request.</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
