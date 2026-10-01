import React from 'react';
import { Terminal, Network, Database, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { STUDENT_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#0c101a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            About My Background
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Bridging software engineering, systems infrastructure, and human-centered design.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            As a 4th-year Information Technology student, I don't just write application code—I care deeply about how systems communicate over the wire, how databases maintain integrity under concurrent queries, and how deployment environments remain secure and observable.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Full-Stack Development</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Crafting responsive web applications using React, modern TypeScript, Node.js, and Express with modular component architectures.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Database Design & SQL</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Architecting normalized relational schemas (3NF) in PostgreSQL and MySQL, writing indexed queries, and enforcing ACID transactions.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Networking & Systems</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Configuring IPv4/IPv6 subnets, routing protocols, VLANs in Cisco Packet Tracer, and managing Linux servers with automated bash utilities.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-400 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">IoT & Hardware Telemetry</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Interfacing ESP32 microcontrollers, DHT sensors, and MQTT brokers for environmental telemetry and campus hardware monitoring.
            </p>
          </div>
        </div>

        {/* Narrative Split: Academic Philosophy & Practical Approach */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                My Philosophy as an IT Student
              </div>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                "Code is only as strong as the system it runs on."
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Throughout my university coursework, I have championed projects that do not simply exist as isolated scripts, but rather as end-to-end usable systems. From conducting stakeholder interviews for our university capstone to provisioning Docker containers for team consistency, I prioritize software reliability, accessibility, and documentation.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span>· Active Member, Association of Computing Students</span>
                <span>· Peer Tutor in Data Structures & SQL</span>
                <span>· Open to On-the-Job Training & Junior Roles</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 p-5 rounded-xl border border-slate-800/90 space-y-3">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Internship Readiness Checklist
              </div>
              <ul className="text-xs text-slate-300 space-y-2 font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Git & Pull Request Workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> REST API & CRUD Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Linux Server Administration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Relational Data Modeling (SQL)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Technical Documentation & Testing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
