import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { projectsData } from '../data/projects';
import { Sparkles, ArrowRight, TrendingUp, Cpu, Layout, Target, BookOpen } from 'lucide-react';

type FilterType = 'all' | 'web-design' | 'e-commerce' | 'custom-dev' | 'marketing';

export default function Portfolio() {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Design', value: 'web-design' },
    { label: 'Shopify & E-Commerce', value: 'e-commerce' },
    { label: 'Custom App Portals', value: 'custom-dev' },
    { label: 'Marketing Funnels', value: 'marketing' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-20 py-16 animate-fade-in text-slate-800">
      
      {/* 1. PORTFOLIO & CASE STUDIES HERO */}
      <section className="relative overflow-hidden pt-12 pb-8 text-center">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
            CASE STUDIES & PROVEN RESULTS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            Portfolio & Case Studies
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover how we design and code high-speed digital conduits engineered strictly to satisfy technical, aesthetic, and conversion-rate constraints.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-100 pb-5">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                activeFilter === f.value
                  ? 'bg-brand-secondary text-white shadow-md'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="bg-slate-950 rounded-2xl overflow-hidden shadow-xl border border-white/5 flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300"
            >
              
              {/* Graphic Accent Layer */}
              <div className="relative h-64 w-full overflow-hidden">
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
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand-primary bg-slate-950/60 backdrop-blur-md px-2 py-1 rounded w-fit">
                      {project.client}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-300 bg-slate-950/60 backdrop-blur-md px-2.5 py-1 rounded-full">{project.year}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl tracking-tight leading-tight mb-1 text-white">{project.title}</h3>
                    <p className="text-xs text-slate-200/90 leading-relaxed font-sans max-w-md line-clamp-2">{project.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Detail Matrix */}
              <div className="p-6 space-y-4 text-left">
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Key Metrics row */}
                <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/5">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="block font-display font-extrabold text-base text-brand-primary leading-none">{m.value}</span>
                      <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 block mt-1">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/case-studies/${project.slug}`)}
                    className="text-xs text-white hover:text-brand-primary font-bold flex items-center gap-1.5 group cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View In-Depth Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. WORK WITH SAMSON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-secondary">Ready to Craft an Award-Winning Platform Together?</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-sans">
              Let's discuss your design preferences, CMS needs, and speed goals on our free call. Samson B manages every milestone natively.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-3 bg-brand-primary hover:bg-brand-accent text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
          >
            Start Your Project
          </button>
        </div>
      </section>

    </div>
  );
}
