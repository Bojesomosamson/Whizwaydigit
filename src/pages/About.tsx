import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Award, Target, Eye, Sparkles, CheckSquare, Calendar, ChevronRight } from 'lucide-react';

export default function About() {
  const { navigate } = useRouter();

  const values = [
    {
      title: 'Bespoke Craftsmanship',
      desc: 'We strictly ban templates. Every site we build is engineered specifically for your audience, ensuring a truly unique identity.',
      icon: <Award className="w-5 h-5 text-brand-primary" />
    },
    {
      title: 'Pure Performance',
      desc: 'Speed is not a luxury; it is a conversion requirement. We build custom assets and clean code to guarantee lightning-fast loading.',
      icon: <Sparkles className="w-5 h-5 text-brand-primary" />
    },
    {
      title: 'Transaction Integrity',
      desc: 'Our funnels are designed around secure banking channels, cryptocurrency gateways, and highly transparent custom quote parameters.',
      icon: <CheckSquare className="w-5 h-5 text-brand-primary" />
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Freelance Inception',
      desc: 'Founder Samson B starts custom Liquid development for early e-commerce stores, establishing a core reputation for speed tuning.'
    },
    {
      year: '2021',
      title: 'Launch of WhizwayDigit',
      desc: 'Forming a dedicated boutique team specializing in headless Shopify structures and bespoke React custom panels.'
    },
    {
      year: '2024',
      title: '$8M Client Revenue Milestone',
      desc: 'Client stores and custom funnels reach massive cumulative revenue landmarks, scoring average Lighthouse mobile speed scores of 96%.'
    },
    {
      year: '2026',
      title: 'Enterprise-Grade Expansion',
      desc: 'Securing partnerships with global fintech entities and introducing complete technical audits and migration services.'
    }
  ];

  return (
    <div className="space-y-20 py-24 animate-fade-in text-slate-800">
      
      {/* 1. GLASS HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
            THE FORCE BEHIND WHIZWAYDIGIT
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            Crafting Digital Platforms That Commands Premium Authority.
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            WhizwayDigit is a boutique digital studio specializing in premium custom development, high-converting checkout flows, and surgical page-speed engineering.
          </p>
        </div>
      </section>

      {/* 2. FOUNDER STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-2xl opacity-25 blur-md" />
              <div className="relative aspect-square rounded-2xl bg-slate-900 flex flex-col justify-end p-8 text-white shadow-lg overflow-hidden border border-white/10 group">
                <img
                  src="https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636736/ff87bc9e-2b0e-49f7-ba4c-fbca57b7934e_p5glte.jpg"
                  alt="Samson Bojesomo"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-primary font-bold bg-slate-950/60 backdrop-blur-md px-2 py-0.5 rounded-md w-fit block">FOUNDER BRIEF</span>
                  <h3 className="font-display font-extrabold text-2xl leading-tight drop-shadow-md">Samson Bojesomo</h3>
                  <p className="text-xs text-slate-200 drop-shadow-sm">Founder of WhizwayDigit | Shopify & React Principal Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-display font-extrabold text-3xl text-brand-secondary tracking-tight">
              Our Story, Mission & Dedication
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              "When I entered the digital development space, I noticed a troubling trend: businesses were spending thousands of dollars on expensive paid advertising campaigns, only to send high-intent traffic to bloated, clunky, template-built websites that loaded slowly and converted poorly."
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              "WhizwayDigit was founded with a singular, clear mission: to dismantle bloat. We threw out traditional heavy page builders and standard layouts. Instead, we assemble custom React code systems and bespoke Liquid templates. This guarantees that your business presents a pristine, premium impression, scores a 95+ mobile PageSpeed rating, and converts cold clicks into active loyal clients."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2 flex items-start gap-3">
                <span className="p-2 bg-brand-primary/10 rounded-lg shrink-0 mt-1">
                  <Target className="w-4 h-4 text-brand-primary" />
                </span>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-secondary">Our Clear Mission</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">To help global businesses grow and scale by constructing high-converting websites and technical solutions.</p>
                </div>
              </div>

              <div className="space-y-2 flex items-start gap-3">
                <span className="p-2 bg-brand-primary/10 rounded-lg shrink-0 mt-1">
                  <Eye className="w-4 h-4 text-brand-primary" />
                </span>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-secondary">Our Creative Vision</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">To establish a gold-standard studio where performance optimization and artistic design operate in seamless synchronization.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CORE AGENCY VALUES */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display font-extrabold text-3xl text-brand-secondary">
              Our Pillars of Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              The fundamental guidelines that drive our client engineering cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4 text-left"
              >
                <span className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  {v.icon}
                </span>
                <h3 className="font-display font-bold text-lg text-brand-secondary">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. COMPANY HISTORIC TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-display font-extrabold text-3xl text-brand-secondary">
            Our Development Path
          </h2>
          <p className="text-xs text-slate-500">
            A linear timeline highlighting our constant technical upgrades.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-100 pl-6 ml-4 space-y-10">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="relative space-y-2">
              <span className="absolute -left-[35px] top-0 w-5 h-5 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center">
                <Calendar className="w-2.5 h-2.5 text-brand-primary" />
              </span>
              <span className="inline-block font-display font-extrabold text-xs text-brand-primary tracking-widest font-mono">
                {milestone.year}
              </span>
              <h3 className="font-display font-bold text-base text-brand-secondary">
                {milestone.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-2xl">
                {milestone.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY WORK WITH US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-secondary text-white rounded-3xl p-8 sm:p-16 relative overflow-hidden border border-white/5 shadow-2xl text-left">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,#2563EB,transparent_50%)] opacity-35" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-accent font-bold">THE COOPERATIVE ADVANTAGE</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl leading-tight">
                Get an Award-Winning Experience and Transparent Scope Execution.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                We manage communication transparently, avoid third-party markups, and construct pristine, highly functional digital products with meticulous layout discipline. Let's schedule our call.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => navigate('/book-a-call')}
                className="px-6 py-3.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold rounded-xl shadow-[0_0_20px_rgba(13,110,253,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Schedule Free Consultation
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
