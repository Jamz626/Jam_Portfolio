import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Server, Database, Code, Terminal, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'simulation'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  // Quick interactive simulation state for the project
  const [simulatedEnrollment, setSimulatedEnrollment] = useState<'idle' | 'checking' | 'enrolled'>('idle');
  const [simulatedPing, setSimulatedPing] = useState<{ ip: string; latency: number; status: string }[]>([
    { ip: '192.168.1.1 (Gateway)', latency: 2, status: 'OK' },
    { ip: '192.168.1.10 (Lab Switch)', latency: 4, status: 'OK' },
    { ip: '192.168.1.50 (Postgres DB)', latency: 8, status: 'OK' },
    { ip: '192.168.1.200 (IoT Gateway)', latency: 14, status: 'OK' }
  ]);

  const handleSimulateAction = () => {
    if (project.category === 'web') {
      setSimulatedEnrollment('checking');
      setTimeout(() => setSimulatedEnrollment('enrolled'), 900);
    } else if (project.category === 'systems') {
      setSimulatedPing(prev => prev.map(item => ({
        ...item,
        latency: Math.floor(Math.random() * 20) + 2,
        status: Math.random() > 0.9 ? 'WARN' : 'OK'
      })));
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              {project.categoryLabel}
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-xs text-slate-400 font-mono">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero / Media */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-800">
          <div className="md:col-span-6 bg-slate-950 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-800">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-800 bg-slate-900 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="md:col-span-6 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {project.tagline}
              </p>

              {/* Role & Metadata */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>My Project Role:</span>
                  <span className="font-semibold text-slate-200">{project.role}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Classification:</span>
                  <span className="font-mono text-cyan-400">{project.metadata}</span>
                </div>
              </div>
            </div>

            {/* Modal Links */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setCopiedLink(true);
                  setTimeout(() => setCopiedLink(false), 2000);
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-800/60 border border-slate-800 rounded-lg transition-colors"
              >
                <span>{copiedLink ? 'Link Copied!' : 'Share Project'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs (Interactive controls) */}
        <div className="px-6 pt-4 border-b border-slate-800 flex gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Problem & Solution
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            System Architecture & Stack
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'simulation'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Component Simulator
          </button>
        </div>

        {/* Modal Tab Content */}
        <div className="p-6 max-h-[420px] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  The Problem
                </h4>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800/80">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Engineered Solution
                </h4>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800/80">
                  {project.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Technical Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Technology Stack Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80">
                      <div className="font-semibold text-white text-xs">{tech.name}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{tech.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                <div className="text-slate-500">// Deployment & Verification Invariants</div>
                <div className="text-emerald-400">✓ Normalized Relational Schema with FK Constraints</div>
                <div className="text-emerald-400">✓ Non-blocking Async I/O Event Loop</div>
                <div className="text-emerald-400">✓ Production Docker Container Isolation</div>
              </div>
            </div>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Interactive Functional Proof</h4>
                  <p className="text-xs text-slate-400">Test the core operational loop designed for this system.</p>
                </div>
                <button
                  onClick={handleSimulateAction}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                >
                  {project.category === 'web' ? 'Simulate Prerequisite Check' : 'Trigger Subnet Probe'}
                </button>
              </div>

              {project.category === 'web' && (
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Course Code:</span>
                    <span className="text-white font-semibold">IT-402: Cloud Infrastructure & DevOps</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Prerequisite Requirement:</span>
                    <span className="text-white">IT-301 (Computer Networks) & IT-302 (DBMS)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Student Record Check:</span>
                    {simulatedEnrollment === 'idle' && (
                      <span className="text-slate-400">Click button above to evaluate eligibility</span>
                    )}
                    {simulatedEnrollment === 'checking' && (
                      <span className="text-yellow-400 animate-pulse">Querying database transcript schema...</span>
                    )}
                    {simulatedEnrollment === 'enrolled' && (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        ELIGIBLE: Prerequisites Passed (Grade 1.25). Enrolled!
                      </span>
                    )}
                  </div>
                </div>
              )}

              {project.category === 'systems' && (
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
                  <div className="text-slate-400 flex items-center justify-between pb-2 border-b border-slate-800">
                    <span>Target Node / Service</span>
                    <span>RTT Latency (ms)</span>
                    <span>Status</span>
                  </div>
                  {simulatedPing.map((node, i) => (
                    <div key={i} className="flex items-center justify-between py-1 text-slate-300">
                      <span>{node.ip}</span>
                      <span className="tabular-nums font-semibold text-cyan-400">{node.latency} ms</span>
                      <span className={node.status === 'OK' ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                        [{node.status}]
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {project.category !== 'web' && project.category !== 'systems' && (
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
                  <div className="text-slate-400 pb-2 border-b border-slate-800">Telemetry Stream (MQTT Payload)</div>
                  <div className="text-cyan-300">
                    {`{"deviceId": "esp32-node-04", "temp_c": 21.4, "humidity_pct": 46.2, "fan_rpm": 2400, "status": "NOMINAL"}`}
                  </div>
                  <div className="text-slate-400 text-[11px] pt-1">
                    Continuous heartbeat broadcast to InfluxDB time-series storage.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{project.tags.join(' · ')}</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
