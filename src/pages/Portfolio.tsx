import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { cloudinaryPortfolioData } from '../data/cloudinary_assets';
import { Sparkles, ArrowRight, Maximize2, X, FolderOpen, BookOpen } from 'lucide-react';

type FilterType = 'all' | 'e-commerce' | 'web-design' | 'cro';

export default function Portfolio() {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All Verified Projects (31+)', value: 'all' },
    { label: 'Shopify & E-Commerce', value: 'e-commerce' },
    { label: 'Custom Websites & UI/UX', value: 'web-design' },
    { label: 'CRO & Funnel Visuals', value: 'cro' }
  ];

  const filteredStorefronts = activeFilter === 'all'
    ? cloudinaryPortfolioData
    : cloudinaryPortfolioData.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-16 py-16 animate-fade-in text-slate-800">
      
      {/* 1. PORTFOLIO HERO */}
      <section className="relative overflow-hidden pt-12 pb-8 text-center">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
            VERIFIED DIGITAL BUILDS & STOREFRONTS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            Our Portfolio
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Browse our catalog of custom-designed e-commerce storefronts, Shopify builds, and web applications created for global brands.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate('/case-studies')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-brand-primary" />
              <span>Looking for In-Depth Conversion Case Studies? View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
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

      {/* 3. VERIFIED STOREFRONTS GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Showing {filteredStorefronts.length} Verified Deliveries
          </span>
          <span className="text-xs text-brand-primary font-semibold">
            ✓ 100% Real Client Storefronts
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStorefronts.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg(item.url)}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl group cursor-pointer hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
                
                {/* Hover Magnify Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="p-2.5 rounded-full bg-brand-primary text-white shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 flex-grow flex flex-col justify-between border-t border-slate-100 bg-slate-50/50">
                <div>
                  <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase font-bold block mb-1">
                    {item.category === 'e-commerce' ? 'SHOPIFY STOREFRONT' : item.category === 'cro' ? 'SALES ANALYSIS GRAPH' : 'CUSTOM INTERFACE'}
                  </span>
                  <h4 className="font-display font-bold text-xs text-brand-secondary line-clamp-1">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[9px] text-emerald-600 font-semibold font-mono block mt-2">
                  ✓ Verified Client Launch
                </span>
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

      {/* LIGHTBOX ZOOM MODAL */}
      {lightboxImg && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 animate-fade-in text-left">
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] overflow-y-auto rounded-xl border border-white/10 shadow-2xl relative">
            <img
              src={lightboxImg}
              alt="Fullscreen Screenshot Proof"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

    </div>
  );
}
