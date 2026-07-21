import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { blogData } from '../data/blog';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  CheckCircle,
  ChevronDown,
  ShieldAlert,
  Star,
  Users,
  Clock,
  Laptop
} from 'lucide-react';

export default function Home() {
  const { navigate } = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { label: 'Client Revenue Generated', value: '$12M+' },
    { label: 'Core Web Vitals Speed', value: '<400ms' },
    { label: 'Active Platforms Built', value: '140+' },
    { label: 'Lighthouse Score Target', value: '98%' }
  ];

  const partners = [
    'Stripe Partner', 'Shopify Experts', 'AWS Certified', 'Framer Guild', 'WordPress VIP'
  ];

  const highlights = [
    {
      title: 'Zero Bloat Builders',
      desc: 'We strictly ban Elementor or heavy page plugins. Every block is crafted natively in React or Liquid for sub-second page loads.',
      icon: <Zap className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Awwwards Styling Standards',
      desc: 'Elegant Inter & Poppins typography, generous negative space, and premium glassmorphic grids that establish immediate authority.',
      icon: <Award className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Conversion-First Layouts',
      desc: 'We design sticky mobile menus, sliding cart modules, and custom budget filters mapped directly around human purchase psychology.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const homeFaqs = [
    {
      q: 'What is your core design philosophy?',
      a: 'We believe premium design isn\'t just art; it is a measurable business pipeline. We threw out traditional slow templates to craft bespoke, glassmorphic interfaces designed to establish immediate brand trust, load instantly on mobile, and drive conversions.'
    },
    {
      q: 'Do you display standardized pricing charts?',
      a: 'No. Every project is completely unique. We formulate bespoke custom quotes based on your exact speed, catalog, and software specifications. This guarantees you only pay for exactly what your brand requires to scale.'
    },
    {
      q: 'How do you handle project payments?',
      a: 'After formulating your custom blueprint during our free call, we support secure international bank transfers and direct cryptocurrency settlements (USDT, BTC, ETH) for absolute transactional convenience.'
    }
  ];

  return (
    <div className="space-y-24 pb-20 animate-fade-in">
      
      {/* 1. DARK PREMIUM HERO SECTION */}
      <section className="relative bg-brand-dark pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0D6EFD,transparent_45%)] opacity-35" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-brand-accent/15 rounded-full filter blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-brand-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Awards-Inspired Premium Solutions
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
                Helping Businesses Grow With <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-400 to-white">High-Converting</span> Websites.
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
                We design and custom-code bespoke Shopify stores, elegant corporate systems, and lightning-fast landing page campaigns. Founded by <span className="text-white font-semibold">Samson B</span>. Built strictly for conversions.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold rounded-xl shadow-[0_0_30px_rgba(13,110,253,0.3)] hover:shadow-[0_0_40px_rgba(13,110,253,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/book-a-call')}
                  className="px-6 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  Book a Free Call
                </button>
              </div>

              {/* Partners Rail */}
              <div className="pt-8 space-y-3">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">
                  TRUSTED TECHNOLOGY PARADIGMS
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400 font-display font-medium text-xs">
                  {partners.map((p, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-brand-primary" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Premium Futuristic Visual Display (Aligns with user's video reference) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              
              {/* Giant background outline text (like "LUMORA" behind the portrait in the video) */}
              <div 
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display font-extrabold text-[120px] select-none pointer-events-none uppercase leading-none opacity-10 tracking-wider transition-all duration-300 hover:opacity-15"
                style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)', color: 'transparent' }}
              >
                STUDIO
              </div>

              {/* Pulsing visual glow effect, aligned with the website's brand-primary blue/indigo color */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-brand-primary/20 rounded-full filter blur-[90px] animate-[pulse_5s_infinite] pointer-events-none" />

              <div className="relative w-full max-w-sm">
                
                {/* Visual Glow Aura Card Boundary */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-primary via-blue-500 to-brand-accent rounded-2xl opacity-40 blur-lg animate-[pulse_4s_infinite]" />
                
                {/* Clean, high-end design panel */}
                <div className="relative glass-panel-dark border border-white/20 p-6 rounded-2xl space-y-6 text-left shadow-2xl bg-brand-dark/95 overflow-hidden group">
                  
                  {/* Glass gloss effect sweeping across */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  {/* Mock browser title bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[9px] text-slate-500 tracking-wider">WHIZWAY_CANVAS_V2.0</span>
                  </div>

                  {/* Samson B Modern Bio and Profile Layout */}
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-primary via-cyan-400 to-brand-accent flex items-center justify-center p-[2px] shadow-lg group-hover:rotate-12 transition-transform duration-500">
                        <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center font-display font-black text-white text-base">
                          SB
                        </div>
                      </div>
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-brand-dark flex items-center justify-center" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-white text-base leading-tight tracking-tight flex items-center gap-1.5">
                        Samson B
                        <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                      </h3>
                      <p className="text-[10px] text-brand-primary font-mono font-bold tracking-widest uppercase">FOUNDER & LEAD ENGINEER</p>
                    </div>
                  </div>

                  <div className="space-y-4 font-sans relative z-10">
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      "We architect sub-second load times and high-converting checkouts designed to multiply your organic sales. Let's build your competitive moat."
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      <div>
                        <span className="block font-display font-black text-2xl text-white tracking-tight">65+</span>
                        <span className="text-[9px] text-slate-500 uppercase tracking-widest font-mono font-bold">Platforms Built</span>
                      </div>
                      <div>
                        <span className="block font-display font-black text-2xl text-white tracking-tight">4.9★</span>
                        <span className="text-[9px] text-slate-500 uppercase tracking-widest font-mono font-bold">Client Rating</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/book-a-call')}
                    className="w-full relative z-10 py-3 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-primary/30 hover:border-brand-primary text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary/20 transition-all duration-300 cursor-pointer shadow-sm active:scale-98"
                  >
                    View Scheduling Calendar
                    <ArrowRight className="w-3.5 h-3.5 text-brand-primary group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Highly-polished Floating Badge from the video "CONVERSION DESIGN - Crafted to convert" with glowing star overlay */}
                <div className="absolute -top-6 -right-6 z-20 flex items-center gap-3 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-white/15 shadow-[0_10px_30px_rgba(13,110,253,0.3)] animate-[bounce_4s_infinite_ease-in-out]">
                  <div className="w-8 h-8 rounded-lg bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center shadow-inner relative group-hover:rotate-45 transition-transform duration-500">
                    <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
                    {/* Inner glowing core */}
                    <div className="absolute inset-0.5 rounded-md bg-brand-primary/10 filter blur-xs" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[8px] font-mono font-black tracking-widest text-slate-400 uppercase leading-none">CONVERSION DESIGN</span>
                    <span className="block text-[11px] font-display font-bold text-white mt-0.5">Crafted to convert.</span>
                  </div>
                  <div className="flex gap-0.5 pl-1.5 shrink-0">
                    <span className="w-1 h-1 rounded-full bg-brand-primary" />
                    <span className="w-1 h-1 rounded-full bg-brand-primary/50" />
                    <span className="w-1 h-1 rounded-full bg-brand-primary/20" />
                  </div>
                </div>

              </div>

              {/* Trusted Brand indicators matching the video: Keito, Nordix, Vellum, Orbit, Brights, Cobalt, Vasa */}
              <div className="w-full max-w-sm mt-6 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-[10px] text-slate-500 font-mono tracking-widest font-bold uppercase">
                <span>TRUSTED BY</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-white transition-colors">Keito</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-white transition-colors">Nordix</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-white transition-colors">Vellum</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-white transition-colors">Orbit</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-white transition-colors">Vasa</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. LIVE METRICS SUMMARY ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="glass-panel rounded-2xl shadow-xl border border-white/40 p-8 bg-white/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <span className="block font-display font-extrabold text-3xl sm:text-4xl text-brand-secondary tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-slate-500 font-sans block leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-secondary tracking-tight">
            Our Elite Digital Focus
          </h2>
          <p className="text-slate-500 font-sans">
            Every screen we assemble is structured dynamically to speed up user action and establish institutional authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.slice(0, 3).map((item) => (
            <div
              key={item.slug}
              className="glass-panel p-6 rounded-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-slate-100 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <span className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                  {item.id === 's1' ? <Laptop className="w-5 h-5" /> : item.id === 's2' ? <Users className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                </span>
                <h3 className="font-display font-bold text-lg text-brand-secondary">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.briefDescription}
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => navigate(`/services/${item.slug}`)}
                  className="text-xs text-brand-primary font-bold flex items-center gap-1 group cursor-pointer"
                >
                  Explore Features
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/services')}
          className="px-5 py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
        >
          View All 15 Services
        </button>
      </section>

      {/* 4. WHY CHOOSE US (BENTO GRID STYLE) */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-extrabold text-3xl text-brand-secondary tracking-tight">
              Banish Outdated Templates
            </h2>
            <p className="text-sm text-slate-500">
              Why WhizwayDigit is trusted by high-growth startups and premium international founders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4 text-left"
              >
                <span className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  {h.icon}
                </span>
                <h3 className="font-display font-bold text-lg text-brand-secondary">
                  {h.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PORTFOLIO CAROUSEL / HIGHLIGHT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-brand-secondary">
            Featured Case Studies
          </h2>
          <p className="text-slate-500 text-sm">
            Read exactly how we engineered speed transformations and conversion surges for real operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {projectsData.slice(0, 4).map((project) => (
            <div
              key={project.slug}
              className="bg-brand-dark rounded-2xl overflow-hidden shadow-xl border border-white/5 flex flex-col justify-between group hover:border-brand-primary/40 transition-all duration-300"
            >
              <div className="relative h-60 w-full overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-tr ${project.imageColor}`} />
                )}
                {/* Elegant dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent flex flex-col justify-between p-6">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand-primary bg-slate-950/60 backdrop-blur-md px-2 py-1 rounded w-fit">
                    {project.client}
                  </span>
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-wider text-slate-300 font-bold block mb-1">
                      {project.year} | {project.category === 'e-commerce' ? 'Shopify Store' : 'Custom Web Solution'}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl tracking-tight leading-snug text-white">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>

                <div className="flex items-center gap-6 pt-2">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <span className="block font-display font-extrabold text-lg text-brand-primary leading-none">{m.value}</span>
                      <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/case-studies/${project.slug}`)}
                    className="text-xs text-white hover:text-brand-primary font-bold flex items-center gap-1 group cursor-pointer"
                  >
                    View Problem & Solution
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/portfolio')}
          className="px-5 py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Browse Our Whole Portfolio
        </button>
      </section>

      {/* 6. OUR FOUR-STEP COOPERATIVE PROCESS */}
      <section className="bg-brand-dark py-20 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,#2563EB,transparent_40%)] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-extrabold text-3xl tracking-tight">
              Our Cooperative Process
            </h2>
            <p className="text-slate-400 text-sm">
              How Samson B coordinates your project from empty Canvas to live, sub-second conversion metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Interactive Blueprinting', desc: 'We host a free consultation call to outline your catalogs, speed parameters, and specific layout demands.' },
              { num: '02', title: 'Figma Component Design', desc: 'We design modern bento-grid concepts, typography structures, and sliding modules completely from scratch.' },
              { num: '03', title: 'Sub-Second Code Assembly', desc: 'We engineer theme Liquid files or custom React components with zero redundant plugins, keeping things lightning fast.' },
              { num: '04', title: 'Core Validation & Launch', desc: 'We execute complete speed, SEO, cross-browser, and responsive tests to secure a 95+ mobile score before final launch.' }
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 text-left hover:border-brand-primary transition-all duration-300"
              >
                <span className="block font-display font-extrabold text-3xl text-brand-primary">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-base">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CLIENT FAQS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="text-center space-y-3">
          <h2 className="font-display font-extrabold text-3xl text-brand-secondary">
            Homebase FAQs
          </h2>
          <p className="text-sm text-slate-500">
            Answers regarding our craft, timelines, and specialized layouts.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 font-display font-bold text-sm text-brand-secondary text-left focus:outline-none"
              >
                {faq.q}
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
              </button>
              
              {activeFaq === index && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-50 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-tr from-brand-secondary to-indigo-950 text-white rounded-3xl p-10 sm:p-16 overflow-hidden border border-white/10 shadow-2xl text-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0D6EFD,transparent_50%)] opacity-35" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase text-brand-accent">
              SECURE YOUR COMPETITIVE MOAT
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Ready to Formulate Your Custom Scope?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Skip slow, bloated builders. Let\'s review your speed parameters and craft a bespoke digital strategy that positions your business at the forefront of your industry.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold rounded-xl shadow-[0_0_20px_rgba(13,110,253,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://www.fiverr.com/whizwaydigit0?public_mode=true"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary text-white font-bold rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
            >
              Contact me on Fiverr
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
