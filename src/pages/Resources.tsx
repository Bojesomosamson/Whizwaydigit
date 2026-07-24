import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { resourcesData } from '../data/blog';
import { Sparkles, Download, Mail, ArrowRight, CheckCircle2, Shield, X } from 'lucide-react';

export default function Resources() {
  const { navigate } = useRouter();
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleResourceClick = (slug: string) => {
    setSelectedResource(slug);
    setEmail('');
    setDownloadSuccess(false);
    setDownloading(false);
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      // Simulate file download trigger after 2 seconds
      setTimeout(() => {
        setSelectedResource(null);
        setDownloadSuccess(false);
      }, 3500);
    }, 2000);
  };

  const activeItem = resourcesData.find((r) => r.slug === selectedResource);

  return (
    <div className="space-y-20 py-24 animate-fade-in text-slate-800 text-left relative">
      
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-12 pb-16 text-center">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
            FREE MARKETING UTILITIES
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            Free Checklists, Templates & Guides.
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Download our curated audits and Figma wireframes to benchmark your website speed, capture optimization low-hanging fruits, and scale average order values.
          </p>
        </div>
      </section>

      {/* 2. RESOURCES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resourcesData.map((res) => (
            <div
              key={res.slug}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-brand-primary font-bold">{res.category}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{res.fileSize}</span>
                </div>
                
                <h3 className="font-display font-bold text-base text-brand-secondary leading-snug">{res.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">{res.description}</p>
              </div>

              <div className="pt-5 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono">{res.downloadCount} Downloads</span>
                
                <button
                  onClick={() => handleResourceClick(res.slug)}
                  className="px-4 py-2 bg-slate-900 hover:bg-brand-primary text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EMAIL CAPTURE MODAL OVERLAY */}
      {selectedResource && activeItem && (
        <div className="fixed inset-0 z-50 bg-brand-dark/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-100 rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden p-6 sm:p-8 animate-scale-up">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedResource(null)}
              className="absolute right-4 top-4 p-1 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"
              aria-label="Close download window"
            >
              <X className="w-5 h-5" />
            </button>

            {downloadSuccess ? (
              <div className="py-6 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-lg text-brand-secondary">Download Started!</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans px-4">
                    The secure PDF resource, <span className="font-semibold text-brand-secondary">"{activeItem.title}"</span>, is fetching now. We have also forwarded duplicate copy assets to your email inbox.
                  </p>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-brand-primary h-1.5 rounded-full animate-progress" style={{ width: '100%' }} />
                </div>
              </div>
            ) : (
              <form onSubmit={handleDownloadSubmit} className="space-y-5">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-brand-primary font-bold">SECURE RESOURCE ACCESS</span>
                  <h3 className="font-display font-extrabold text-lg text-brand-secondary leading-tight">
                    Submit Your Work Email to Start Download
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    Please provide your business email. We will instantly begin the direct download of <span className="font-semibold text-brand-secondary">"{activeItem.title}"</span> and unlock continuous optimization tools.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your corporate email"
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3.5 py-3 text-xs text-brand-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200"
                      required
                    />
                    <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  </div>

                  <button
                    type="submit"
                    disabled={downloading}
                    className="w-full py-3 bg-slate-900 hover:bg-brand-primary disabled:bg-slate-300 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                  >
                    {downloading ? (
                      <span>Preparing File Download...</span>
                    ) : (
                      <>
                        <span>Verify Email & Start Download</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-400 border-t border-slate-50 pt-4 font-mono">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span>No visual spam. Absolute privacy compliance standard.</span>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

      {/* 4. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-secondary text-white rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="font-display font-bold text-2xl">Want a Completely Custom Technical Web Audit?</h3>
            <p className="text-xs text-slate-300">
              Skip standard checklists. Let's perform a detailed PageSpeed, SEO, and layout audit of your active live portal. Completely free of charge.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 bg-brand-primary hover:bg-brand-accent text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
          >
            Get a Free Web Audit
          </button>
        </div>
      </section>

    </div>
  );
}
