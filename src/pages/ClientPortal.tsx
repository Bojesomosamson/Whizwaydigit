import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Clock, 
  CheckCircle, 
  FileCode, 
  ExternalLink, 
  MessageSquare, 
  Send, 
  Check, 
  Download, 
  AlertTriangle 
} from 'lucide-react';

interface SupportTicket {
  id: string;
  subject: string;
  type: 'bug' | 'feature' | 'content';
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'review' | 'resolved';
  timestamp: string;
}

export default function ClientPortal() {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketType, setTicketType] = useState<'bug' | 'feature' | 'content'>('feature');
  const [ticketPriority, setTicketPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [ticketSuccess, setTicketSuccess] = useState(false);
  const [tickets, setTickets] = useState<SupportTicket[]>([]);

  // Load custom tickets from localStorage
  useEffect(() => {
    const savedTickets = localStorage.getItem('portal_tickets');
    if (savedTickets) {
      setTickets(JSON.parse(savedTickets));
    } else {
      const defaultTickets: SupportTicket[] = [
        {
          id: 'TCK-1092',
          subject: 'Review sliding cart drawer animation speed',
          type: 'feature',
          priority: 'medium',
          status: 'resolved',
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          id: 'TCK-1095',
          subject: 'Swap home hero image placeholder with secure AWS webp path',
          type: 'content',
          priority: 'high',
          status: 'review',
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];
      setTickets(defaultTickets);
      localStorage.setItem('portal_tickets', JSON.stringify(defaultTickets));
    }
  }, []);

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject.trim()) return;

    const newTicket: SupportTicket = {
      id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: ticketSubject.trim(),
      type: ticketType,
      priority: ticketPriority,
      status: 'open',
      timestamp: new Date().toISOString()
    };

    const updated = [newTicket, ...tickets];
    setTickets(updated);
    localStorage.setItem('portal_tickets', JSON.stringify(updated));

    setTicketSubject('');
    setTicketSuccess(true);
    setTimeout(() => setTicketSuccess(false), 4000);
  };

  const activeMilestones = [
    {
      title: 'Scoping & Blueprinting',
      desc: 'Technical specification sheet mapping, budget validation, and initial target KPIs finalized.',
      status: 'completed',
      date: 'Completed Jun 28'
    },
    {
      title: 'UI/UX Visual Boards',
      desc: 'Figma high-fidelity prototypes detailing custom animations, slide drawers, and typography pairings.',
      status: 'completed',
      date: 'Completed Jul 03'
    },
    {
      title: 'React Custom Development',
      desc: 'Coding semantic markup with full Tailwind styles, modular page states, and functional router bindings.',
      status: 'active',
      date: 'Active Milestone (85% Code-Locked)'
    },
    {
      title: 'PageSpeed Auditing & QA',
      desc: 'Benchmarking load scores, asset minification, critical render paths, and cross-browser responsiveness.',
      status: 'pending',
      date: 'Estimated Jul 10'
    },
    {
      title: 'Domain Swap & Launch',
      desc: 'Redirect mapping, server caching optimization, and instant DNS cutover to live server.',
      status: 'pending',
      date: 'Estimated Jul 15'
    }
  ];

  return (
    <div className="space-y-16 py-16 animate-fade-in text-slate-800 text-left">
      
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-8 text-center">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary uppercase">
            SECURE ACCESS PORTAL
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            Client Workspace Portal
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Welcome back. Monitor your project's current milestone, download delivery assets, and coordinate ticketing items directly with Samson B's team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Milestones & Staging Links */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Project Status Overview Card */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="font-display font-extrabold text-lg text-brand-secondary">Milestone Status</h2>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">Live updates regarding WhizwayDigit engineering sprints.</p>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase animate-pulse">
                  ACTIVE DEVELOPMENT
                </span>
              </div>

              {/* Milestones Flow */}
              <div className="space-y-6 font-sans">
                {activeMilestones.map((m, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative">
                    
                    {/* Line connection */}
                    {idx !== activeMilestones.length - 1 && (
                      <div className="absolute left-[13px] top-7 bottom-0 w-0.5 bg-slate-100" />
                    )}

                    {/* Status Circle indicator */}
                    <div className="shrink-0 mt-1">
                      {m.status === 'completed' ? (
                        <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                          <Check className="w-4 h-4" />
                        </div>
                      ) : m.status === 'active' ? (
                        <div className="w-7 h-7 rounded-full bg-brand-primary/10 border border-brand-primary flex items-center justify-center text-brand-primary">
                          <Clock className="w-4 h-4 animate-spin-slow" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                          <CheckCircle className="w-4 h-4 opacity-30" />
                        </div>
                      )}
                    </div>

                    {/* Details text */}
                    <div>
                      <h4 className={`font-display font-bold text-sm ${m.status === 'active' ? 'text-brand-primary' : m.status === 'completed' ? 'text-slate-800' : 'text-slate-400'}`}>
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-xl">{m.desc}</p>
                      <span className="block text-[10px] text-slate-400 font-mono mt-1.5 uppercase tracking-wide">{m.date}</span>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-white/5 space-y-4">
              <div>
                <h3 className="font-display font-extrabold text-base text-white">Staging Resources</h3>
                <p className="text-xs text-slate-400 mt-0.5 font-sans">Access active mockups and staging mirrors in one click.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a 
                  href="https://figma.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/50 hover:bg-white/10 transition-all duration-200 flex justify-between items-center group cursor-pointer"
                >
                  <div className="space-y-1 font-sans">
                    <span className="block text-[9px] text-brand-primary uppercase font-mono tracking-widest leading-none">DESIGN ARTIFACTS</span>
                    <span className="block text-xs font-bold text-white group-hover:text-brand-primary transition-colors">Figma Layout Boards</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors shrink-0" />
                </a>

                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/50 hover:bg-white/10 transition-all duration-200 flex justify-between items-center group cursor-pointer"
                >
                  <div className="space-y-1 font-sans">
                    <span className="block text-[9px] text-brand-primary uppercase font-mono tracking-widest leading-none">VERSION CONTROLS</span>
                    <span className="block text-xs font-bold text-white group-hover:text-brand-primary transition-colors">GitHub Repository</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors shrink-0" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Support Ticket Submitter & Ticket History */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Create Project Ticket */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-6 space-y-5">
              <div>
                <h3 className="font-display font-extrabold text-base text-brand-secondary flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-primary" />
                  Log Support Ticket
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-sans">Need copy changes, script refinements, or custom assets? Drop a ticket directly.</p>
              </div>

              {ticketSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-2 text-xs text-emerald-700 font-sans animate-fade-in">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Support Ticket registered! Review our response within 2 hours.</span>
                </div>
              )}

              <form onSubmit={handleCreateTicket} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="ticket-subject" className="block text-[11px] font-display font-bold text-slate-700">Ticket Requirement *</label>
                  <input
                    id="ticket-subject"
                    type="text"
                    required
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="e.g. Speed optimization adjustment on product page"
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3.5 py-2.5 text-xs text-brand-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="ticket-type" className="block text-[11px] font-display font-bold text-slate-700">Category *</label>
                    <select
                      id="ticket-type"
                      value={ticketType}
                      onChange={(e) => setTicketType(e.target.value as any)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3 py-2.5 text-xs text-brand-secondary focus:outline-none cursor-pointer"
                    >
                      <option value="bug">Bug Fix</option>
                      <option value="feature">New Feature</option>
                      <option value="content">Content Edit</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="ticket-priority" className="block text-[11px] font-display font-bold text-slate-700">Severity *</label>
                    <select
                      id="ticket-priority"
                      value={ticketPriority}
                      onChange={(e) => setTicketPriority(e.target.value as any)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3 py-2.5 text-xs text-brand-secondary focus:outline-none cursor-pointer"
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High / Urgent</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 hover:bg-brand-primary text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Register Priority Ticket</span>
                </button>
              </form>
            </div>

            {/* Support Ticket History list */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-6 space-y-4">
              <div>
                <h3 className="font-display font-extrabold text-base text-brand-secondary">Inquirer Workspace Log</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-sans">Previous ticket tracking timeline for your brand.</p>
              </div>

              <div className="space-y-3 font-sans text-xs">
                {tickets.map((t) => (
                  <div key={t.id} className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.id}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                        t.status === 'resolved' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                          : t.status === 'review'
                          ? 'bg-amber-50 text-amber-700 border border-amber-100'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-100 animate-pulse'
                      }`}>
                        {t.status === 'resolved' ? 'RESOLVED' : t.status === 'review' ? 'IN REVIEW' : 'PROCESSING'}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-slate-800 leading-snug">{t.subject}</p>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[9px] text-slate-400 font-mono uppercase tracking-wide">
                      <span>TYPE: {t.type}</span>
                      <span>SEVERITY: {t.priority}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* NDA notice at the bottom */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-brand-secondary">Secure Workspace Access Rules</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-sans mt-0.5">
              This space is bound by reciprocal non-disclosure agreements (NDAs) signed at blueprint initiation. All project details, Figma designs, staging assets, and registered tickets are kept strictly confidential.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
