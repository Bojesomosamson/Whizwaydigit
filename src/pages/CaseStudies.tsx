import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { projectsData } from '../data/projects';
import { Sparkles, ArrowRight, TrendingUp, ShieldAlert, CheckCircle, ChevronLeft } from 'lucide-react';

export default function CaseStudies() {
  const { state, navigate } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.projectSlug]);

  // GENERAL INDEX VIEW
  if (!state.projectSlug) {
    return (
      <div className="space-y-20 py-24 animate-fade-in text-slate-800">
        
        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-16 text-center">
          <div className="absolute inset-0 bg-slate-50/50" />
          <div className="absolute top-0 right-1/3 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
              CLINICAL RESULTS & ANALYTICS
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
              Bespoke Case Studies & Real Outcomes.
            </h1>
            <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              We focus strictly on measurable conversion metrics. Explore how Samson B and the WhizwayDigit team audit and rebuild platforms to secure immediate business growth.
            </p>
          </div>
        </section>

        {/* List of Case Studies */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {projectsData.map((project) => (
              <div
                key={project.slug}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden group">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-between p-6">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand-primary bg-slate-950/60 backdrop-blur-md px-2 py-1 rounded w-fit">
                      {project.client}
                    </span>
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-wider text-slate-300 font-bold block mb-1">
                        {project.year} | {project.category === 'e-commerce' ? 'Shopify & CRO Optimization' : 'Custom Web Solution'}
                      </span>
                      <h3 className="font-display font-extrabold text-xl tracking-tight leading-snug text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-500 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 pt-2">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <span className="block font-display font-extrabold text-lg text-brand-primary leading-none">{m.value}</span>
                        <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 block mt-1">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <button
                      onClick={() => navigate(`/case-studies/${project.slug}`)}
                      className="text-xs text-brand-primary hover:text-brand-accent font-bold flex items-center gap-1 group cursor-pointer"
                    >
                      Read full study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    );
  }

  // DEDICATED CASE STUDY DETAIL VIEW
  const project = projectsData.find((p) => p.slug === state.projectSlug);

  if (!project) {
    return (
      <div className="py-32 text-center space-y-4">
        <h2 className="font-display font-bold text-lg text-brand-secondary">Case Study Not Found</h2>
        <button onClick={() => navigate('/case-studies')} className="px-4 py-2 bg-brand-primary text-white text-xs font-semibold rounded-lg">
          Back to Case Studies
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-20 py-24 animate-fade-in text-slate-800 text-left">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          onClick={() => navigate('/case-studies')}
          className="inline-flex items-center gap-1 text-xs text-brand-primary font-bold cursor-pointer hover:underline mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display font-extrabold text-xs text-brand-primary tracking-widest uppercase font-mono bg-brand-primary/5 px-2.5 py-1 rounded-full border border-brand-primary/10">
              CLINICAL IMPACT STUDY
            </span>
            <span className="text-xs text-slate-400 font-mono">Client: {project.client} | Year: {project.year}</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-secondary leading-tight tracking-tight">
            {project.title}: {project.tagline}
          </h1>
        </div>
      </section>

      {/* Project Hero Banner Image */}
      {project.imageUrl && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative group bg-slate-900">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent pointer-events-none" />
          </div>
        </section>
      )}

      {/* 2. LIVE TELEMETRY DASHBOARD CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl shadow-xl border border-white/40 p-8 bg-white/90 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1.5 border-r border-slate-100 last:border-none">
              <span className="block font-display font-extrabold text-4xl text-brand-primary tracking-tight leading-none">
                {metric.value}
              </span>
              <span className="text-xs font-display font-bold text-brand-secondary block">
                {metric.label}
              </span>
              <span className="text-[10px] text-slate-500 font-sans block leading-tight max-w-[200px] mx-auto">
                {metric.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROBLEM & SOLUTION BODY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* The Problem */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-500 font-display font-bold text-sm uppercase tracking-wider">
                <ShieldAlert className="w-5 h-5" />
                <span>The Core Bottleneck</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-brand-secondary">
                Legacy Constraints and Lost Conversions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-primary font-display font-bold text-sm uppercase tracking-wider">
                <TrendingUp className="w-5 h-5" />
                <span>Bespoke Solution Engineering</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-brand-secondary">
                Bypassing Clunkiness for Sub-Second Visuals
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>

            {/* Quantitative Results */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-500 font-display font-bold text-sm uppercase tracking-wider">
                <CheckCircle className="w-5 h-5" />
                <span>Verified Quantitative Achievements</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-brand-secondary">
                Clinical Revenue Moats Secured
              </h2>
              <ul className="space-y-3">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-sans">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sidebar Testimonial Card */}
          <div className="lg:col-span-4">
            {project.testimonial && (
              <div className="glass-panel bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <span className="font-display font-extrabold text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                  CLIENT TESTIMONIAL
                </span>
                
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed font-sans">
                  "{project.testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 border-t border-slate-50 pt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center font-display font-bold text-white text-xs">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-brand-secondary">{project.testimonial.author}</h4>
                    <p className="text-[10px] text-slate-400 font-mono">{project.testimonial.role}, {project.testimonial.company}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION BOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-secondary text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center border border-white/5 shadow-2xl space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,#2563EB,transparent_50%)] opacity-35" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase text-brand-accent font-bold">
              ESTABLISH YOUR COMPETITIVE MOAT
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl leading-tight">
              Ready for Similar Growth Metrics?
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Stop settling for legacy template delays. Let\'s host a free call to review your layout bottlenecks and outline custom, sub-second conversion pipelines.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-3 bg-brand-primary hover:bg-brand-accent text-white font-bold text-xs rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
            >
              Start Your Project
            </button>
            <button
              onClick={() => navigate('/book-a-call')}
              className="px-5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs rounded-xl transition-all duration-200 cursor-pointer"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
