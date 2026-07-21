import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { blogData } from '../data/blog';
import { Sparkles, ArrowRight, Clock, Search, ChevronLeft, Calendar, User, Tag } from 'lucide-react';

export default function Blog() {
  const { state, navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'insights' | 'tech' | 'marketing' | 'design'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.blogSlug]);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  // GENERAL BLOG INDEX LIST
  if (!state.blogSlug) {
    const featuredPost = blogData[0];
    const filteredPosts = blogData.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    return (
      <div className="space-y-20 py-24 animate-fade-in text-slate-800 text-left">
        
        {/* 1. HERO */}
        <section className="relative overflow-hidden pt-12 pb-16 text-center">
          <div className="absolute inset-0 bg-slate-50/50" />
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
              STRATEGIC INDUSTRY JOURNAL
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
              Bespoke Web Audits & Strategy Insights.
            </h1>
            <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Read Samson B\'s essays regarding conversion benchmarks, Technical SEO crawls, Gutenberg core architectures, and headless Shopify Liquid scaling.
            </p>
          </div>
        </section>

        {/* Search & Categories Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-6">
            
            {/* Search Input */}
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-lg pl-9 pr-4 py-2.5 text-xs text-brand-secondary placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200"
              />
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: 'All Essays', value: 'all' },
                { label: 'Analytics Insights', value: 'insights' },
                { label: 'Technical Dev', value: 'tech' },
                { label: 'Conversion & SEO', value: 'marketing' }
              ].map((c) => (
                <button
                  key={c.value}
                  onClick={() => setActiveCategory(c.value as any)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeCategory === c.value
                      ? 'bg-brand-secondary text-white shadow-sm'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* 2. FEATURED POST */}
        {featuredPost && activeCategory === 'all' && !searchQuery && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              onClick={() => handlePostClick(featuredPost.slug)}
              className="bg-brand-dark text-white rounded-2xl overflow-hidden shadow-xl border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group cursor-pointer hover:scale-[1.005] transition-transform duration-300"
            >
              <div className={`lg:col-span-6 p-8 bg-gradient-to-tr ${featuredPost.imageColor} min-h-[300px] flex flex-col justify-between text-white`}>
                <span className="text-[9px] font-mono tracking-widest uppercase opacity-75 bg-white/10 px-2 py-1 rounded-full w-fit">FEATURED ESSAY</span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug">{featuredPost.title}</h3>
              </div>

              <div className="lg:col-span-6 p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featuredPost.readTime}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center font-display font-bold text-white text-[10px]">
                      SB
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-white">{featuredPost.author.name}</h4>
                      <p className="text-[10px] text-slate-400 font-mono leading-none">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <span className="text-xs text-brand-primary font-bold flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
                    Read Essay
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* 3. ESSAYS GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                onClick={() => handlePostClick(post.slug)}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className={`p-6 bg-gradient-to-tr ${post.imageColor} min-h-[160px] flex flex-col justify-between text-white`}>
                  <span className="text-[9px] font-mono tracking-widest uppercase opacity-75 bg-white/10 px-2 py-0.5 rounded-full w-fit">{post.category}</span>
                  <h3 className="font-display font-bold text-base leading-snug group-hover:text-brand-primary transition-colors">{post.title}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-brand-primary font-bold">
                    <span>Read Essay</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    );
  }

  // DEDICATED BLOG POST VIEW
  const post = blogData.find((p) => p.slug === state.blogSlug);

  if (!post) {
    return (
      <div className="py-32 text-center space-y-4">
        <h2 className="font-display font-bold text-lg text-brand-secondary">Essay Not Found</h2>
        <button onClick={() => navigate('/blog')} className="px-4 py-2 bg-brand-primary text-white text-xs font-semibold rounded-lg">
          Back to Blog List
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-16 py-24 animate-fade-in text-slate-800 text-left">
      
      {/* 1. BACK BUTTON & TITLE HEADER */}
      <section className="max-w-4xl mx-auto px-4">
        
        <div
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-1 text-xs text-brand-primary font-bold cursor-pointer hover:underline mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Blog Essays</span>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display font-extrabold text-[10px] text-brand-primary tracking-widest uppercase font-mono bg-brand-primary/5 px-2.5 py-1 rounded-full border border-brand-primary/10">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>
          </div>

          <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-brand-secondary leading-tight tracking-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* 2. EDITORIAL WRAPPER */}
      <section className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Post Content column */}
        <div className="lg:col-span-8 space-y-6">
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-500 leading-relaxed font-sans space-y-4">
            {/* Split paragraphs to render mock editorial HTML natively */}
            {post.content.split('\n\n').map((para, i) => {
              if (para.startsWith('###')) {
                return (
                  <h3 key={i} className="font-display font-extrabold text-lg text-brand-secondary pt-3">
                    {para.replace('###', '').trim()}
                  </h3>
                );
              }
              if (para.startsWith('-') || para.startsWith('*')) {
                return (
                  <ul key={i} className="list-disc pl-5 space-y-1.5">
                    {para.split('\n').map((li, liIdx) => (
                      <li key={liIdx}>{li.replace(/^[-\*]\s+/, '').trim()}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>

          {/* Tags list */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
            {post.tags.map((t) => (
              <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-semibold text-slate-500">
                <Tag className="w-3 h-3 text-brand-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Column: Author and Newsletter */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Author biography */}
          <div className="glass-panel bg-white border border-slate-100 rounded-xl p-5 shadow-md space-y-4">
            <h3 className="font-display font-extrabold text-[10px] text-slate-400 uppercase tracking-widest font-mono">
              ABOUT THE AUTHOR
            </h3>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center font-display font-extrabold text-white text-xs">
                SB
              </div>
              <div>
                <h4 className="font-display font-bold text-xs text-brand-secondary">{post.author.name}</h4>
                <p className="text-[10px] text-slate-400 font-mono leading-none">{post.author.role}</p>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
              Samson B is the principal strategist at WhizwayDigit, custom-coding conversion channels and auditing speed metrics for global platforms.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="glass-panel bg-slate-50 border border-slate-100 rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="font-display font-extrabold text-xs text-brand-secondary">Join Samson\'s Circle</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
              Get technical PageSpeed and Shopify Liquid checklist optimization guides delivered weekly.
            </p>
            
            <button
              onClick={() => navigate('/contact')}
              className="w-full py-2 bg-brand-primary hover:bg-brand-accent text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer"
            >
              Join Free Circle
            </button>
          </div>

        </div>

      </section>

      {/* 3. RELATED POSTS ROW */}
      <section className="max-w-4xl mx-auto px-4 border-t border-slate-100 pt-10">
        <h3 className="font-display font-extrabold text-lg text-brand-secondary mb-6">Related Industry Essays</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogData.filter((b) => b.slug !== post.slug).slice(0, 2).map((rPost) => (
            <div
              key={rPost.slug}
              onClick={() => handlePostClick(rPost.slug)}
              className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-brand-primary font-bold">{rPost.category}</span>
                <h4 className="font-display font-bold text-sm text-brand-secondary mt-1.5 leading-snug">{rPost.title}</h4>
              </div>
              <span className="text-[10px] text-slate-400 font-mono mt-3 block">{rPost.readTime}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
