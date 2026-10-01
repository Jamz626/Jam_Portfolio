import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { STUDENT_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalPlayground: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-cyan-400 font-bold">
            Interactive IT Student Shell [Version 2.4.0-release]
          </div>
          <div>Type <span className="text-yellow-300 font-bold">help</span> to list available commands, or click any quick-run shortcut below.</div>
        </div>
      )
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    let output: React.ReactNode;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-xs">
            <div className="text-cyan-300 font-semibold">Available Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-yellow-300 font-bold">whoami</span> - Display student profile bio</div>
              <div><span className="text-yellow-300 font-bold">skills</span> - List all technical competencies</div>
              <div><span className="text-yellow-300 font-bold">projects</span> - View completed IT projects</div>
              <div><span className="text-yellow-300 font-bold">education</span> - Display academic honors & GPA</div>
              <div><span className="text-yellow-300 font-bold">ping server</span> - Test simulated network latency</div>
              <div><span className="text-yellow-300 font-bold">contact</span> - Show direct email & channels</div>
              <div><span className="text-yellow-300 font-bold">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'bio':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div><strong className="text-white">Name:</strong> {STUDENT_INFO.name}</div>
            <div><strong className="text-white">Degree:</strong> {EDUCATION.degree}</div>
            <div><strong className="text-white">Academic Status:</strong> {STUDENT_INFO.status}</div>
            <div><strong className="text-white">Focus:</strong> Systems Architecture, Full-Stack TypeScript/React, Network Infrastructure</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <div className="text-cyan-300 font-semibold">Core Technical Stack:</div>
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i}>
                <span className="text-yellow-300 font-semibold">{cat.title}:</span>{' '}
                <span className="text-slate-300">{cat.skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <div className="text-cyan-300 font-semibold">Completed Project Repositories:</div>
            {PROJECTS.map((p, i) => (
              <div key={i} className="pl-2 border-l border-cyan-500/40">
                <div className="text-white font-semibold">{p.title}</div>
                <div className="text-slate-400">{p.tagline}</div>
                <div className="text-slate-500 text-[11px] font-mono">Stack: {p.tags.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-white font-semibold">{EDUCATION.degree}</div>
            <div>{EDUCATION.institution} ({EDUCATION.period})</div>
            <div className="text-cyan-400">GWA: {EDUCATION.gpa}</div>
            <div className="text-slate-400">Dean's Honor Roll (2022 - 2025)</div>
          </div>
        );
        break;

      case 'ping':
      case 'ping server':
      case 'ping google.com':
        output = (
          <div className="space-y-1 text-xs font-mono text-emerald-400">
            <div>PING 192.168.1.1 (default-gateway) 56(84) bytes of data.</div>
            <div>64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.84 ms</div>
            <div>64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=2.01 ms</div>
            <div>64 bytes from 192.168.1.1: icmp_seq=3 ttl=64 time=1.92 ms</div>
            <div className="text-slate-400">--- 192.168.1.1 ping statistics --- 0% packet loss, RTT avg 1.92ms</div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div>Email: <a href={`mailto:${STUDENT_INFO.email}`} className="text-cyan-400 underline">{STUDENT_INFO.email}</a></div>
            <div>Location: {STUDENT_INFO.location}</div>
            <div>Availability: Immediate for OJT / Internship</div>
          </div>
        );
        break;

      case 'sudo':
      case 'sudo rm -rf /':
        output = (
          <div className="text-rose-400 text-xs">
            Permission denied: nice try! Security invariant preserved.
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <div className="text-rose-400 text-xs">
            command not found: {cmd}. Type <span className="text-yellow-300 underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> to view all valid commands.
          </div>
        );
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        }
      }
    }
  };

  const quickCommands = ['whoami', 'skills', 'projects', 'education', 'ping server', 'contact'];

  return (
    <section id="terminal" className="py-20 bg-[#0d121d] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Interactive CLI Showcase
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            IT Student Terminal Emulator
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Experience my skills, projects, and academic background straight through a virtual bash shell.
          </p>
        </div>

        {/* Terminal Window */}
        <div 
          className="rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl overflow-hidden font-mono"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Top Window Bar */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/90 inline-block" />
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>jamela@debian-lab:~ (bash)</span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded hover:bg-slate-800"
              title="Clear terminal"
            >
              clear
            </button>
          </div>

          {/* Quick-run command pills */}
          <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-500 shrink-0">Quick run:</span>
            {quickCommands.map(cmd => (
              <button
                key={cmd}
                onClick={(e) => { e.stopPropagation(); executeCommand(cmd); }}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-colors shrink-0 cursor-pointer text-xs"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Scrollable Terminal Output Body */}
          <div className="p-5 max-h-[360px] overflow-y-auto space-y-4 text-xs">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyan-400">jamela@debian-lab:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-cyan-400 shrink-0">jamela@debian-lab:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white focus:outline-none text-xs"
                placeholder="type a command (e.g. 'help', 'skills', 'projects')..."
                autoFocus
              />
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
