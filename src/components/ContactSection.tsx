import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Clock, Github, Linkedin } from 'lucide-react';
import { STUDENT_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / OJT Opportunity',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDENT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Internship / OJT Opportunity',
        message: ''
      });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0f17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                Let's Connect
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Looking for a dedicated IT intern or junior systems engineer?
              </h2>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                I am currently seeking on-the-job training (OJT) placements and entry-level positions where I can contribute to full-stack systems, automated test scripts, and network administration.
              </p>

              <div className="mt-8 space-y-4 text-xs">
                {/* Email container */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400">Direct Email</div>
                      <a 
                        href={`mailto:${STUDENT_INFO.email}`}
                        className="text-white font-mono font-medium hover:text-cyan-300 hover:underline"
                      >
                        {STUDENT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400">Location</div>
                    <div className="text-white font-medium">{STUDENT_INFO.location}</div>
                  </div>
                </div>

                {/* Response time SLA */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400">Estimated Response Time</div>
                    <div className="text-emerald-400 font-medium">Within 24 business hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Profiles */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
              <span className="text-slate-500">Channels:</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">·</span>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Send an Inquiry or Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below or reach out directly via email.
              </p>

              {formStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-white">Message Dispatched Successfully!</div>
                  <p className="text-xs text-emerald-300">
                    Thank you for reaching out. I have received your notification and will respond to {STUDENT_INFO.email} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tech Lead / HR Recruiter"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject / Opportunity Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Internship / OJT Opportunity">Internship / OJT Opportunity</option>
                      <option value="Junior Systems / Web Developer Role">Junior Systems / Web Developer Role</option>
                      <option value="Academic Collaboration / Capstone Mentorship">Academic Collaboration</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Jamela, we saw your IT projects and would like to invite you for an interview regarding our developer internship program..."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{formStatus === 'submitting' ? 'Transmitting...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
