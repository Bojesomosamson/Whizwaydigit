import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Star, MessageSquare, Quote, PlayCircle, ShieldCheck } from 'lucide-react';

export default function Reviews() {
  const { navigate } = useRouter();

  const clientReviews = [
    {
      stars: 5,
      quote: "Samson completely re-coded our outdated WooCommerce layout. Our checkouts are now blazingly fast, loading in 300ms on mobile. We saw our transaction volume surge by 112% in the very first month.",
      author: "Evelyn Reed",
      role: "VP of E-Commerce",
      company: "Aura Apparel",
      logoLetter: "A"
    },
    {
      stars: 5,
      quote: "The technical depth WhizwayDigit delivers is exceptional. We replaced our clumsy Elementor structure with native custom blocks. Our team has total visual editing control, and PageSpeed is permanently at 98%.",
      author: "Marcus Finch",
      role: "Director of Product",
      company: "Apex Analytics",
      logoLetter: "A"
    },
    {
      stars: 5,
      quote: "We needed a modern digital presence that conveyed institutional security but looked like an award-winning modern app. WhizwayDigit delivered a gorgeous glassmorphic portal that institutional partners love.",
      author: "Dominic Thorne",
      role: "Managing Partner",
      company: "Prime Crypto Ventures",
      logoLetter: "P"
    },
    {
      stars: 5,
      quote: "Our marketing conversion metrics were lagging until we deployed the custom 3-step funnel WhizwayDigit designed. Booked calls rose by 210%. They are absolute conversion-rate artists.",
      author: "Nadia Malik",
      role: "Chief Marketing Officer",
      company: "Spark CRM",
      logoLetter: "S"
    }
  ];

  return (
    <div className="space-y-20 py-24 animate-fade-in text-slate-800 text-left">
      
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-12 pb-16 text-center">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
            VERIFIED CLIENT TESTIMONIALS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            Loved By High-Growth Operations.
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Read transparent reviews from VP of E-Commerce directors, marketing officers, and tech founders who threw out slow templates for bespoke WhizwayDigit configurations.
          </p>
        </div>
      </section>

      {/* 2. LIVE RATINGS DASHBOARD BOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center items-center">
          <div className="space-y-1">
            <span className="block font-display font-extrabold text-4xl text-brand-secondary">4.9 / 5.0</span>
            <div className="flex justify-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-[10px] text-slate-500 block">Average Client Rating</span>
          </div>

          <div className="space-y-1 sm:border-x border-slate-200 py-3">
            <span className="block font-display font-extrabold text-4xl text-brand-secondary">99.8%</span>
            <span className="text-xs text-brand-primary font-display font-bold block">Uptime Project Standard</span>
            <span className="text-[10px] text-slate-500 block">From active platform audits</span>
          </div>

          <div className="space-y-1">
            <span className="block font-display font-extrabold text-4xl text-brand-secondary">100%</span>
            <span className="text-xs text-emerald-600 font-display font-bold block">Bespoke Design Guarantee</span>
            <span className="text-[10px] text-slate-500 block">Zero template use standard</span>
          </div>
        </div>
      </section>

      {/* 3. VIDEO SUCCESS STORIES PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-secondary rounded-2xl overflow-hidden border border-white/5 shadow-2xl p-8 sm:p-12 relative flex flex-col lg:flex-row gap-12 items-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,#2563EB,transparent_50%)] opacity-35" />
          
          <div className="lg:col-span-7 space-y-5 relative z-10 text-left">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase text-brand-primary font-bold">
              VIDEO CASE STUDY BRIEF
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl leading-tight">
              Hear Evelyn Reed Explain the 112% Conversion Surge
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              "We replaced our slow Liquid Shopify frame with WhizwayDigit\'s custom headless architecture. Samson managed every micro-interaction and optimized our variant selection screens. The transaction volume growth has completely transformed our operations."
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-primary font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full compliance verified by independent audit.</span>
            </div>
          </div>

          {/* Interactive Mockup Video Player */}
          <div className="lg:col-span-5 relative z-10 flex justify-center w-full max-w-sm">
            <div className="relative aspect-video w-full rounded-2xl bg-slate-900 border border-white/15 overflow-hidden flex items-center justify-center group shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(7,27,82,0.4),rgba(7,27,82,0.8))] z-10" />
              <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600')" }} />
              
              <div className="relative z-20 text-center space-y-2 cursor-pointer flex flex-col items-center">
                <PlayCircle className="w-14 h-14 text-white group-hover:scale-110 group-hover:text-brand-primary transition-all duration-300" />
                <span className="block text-xs font-display font-bold text-white uppercase tracking-wider">Play Consult Interview</span>
                <span className="block text-[9px] text-slate-400 font-mono">Duration: 4m 12s</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. REVIEWS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md hover:border-slate-200 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(rev.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <Quote className="w-8 h-8 text-slate-100" />
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed font-sans">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-50 pt-5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center font-display font-extrabold text-white text-xs shadow-sm">
                  {rev.logoLetter}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-brand-secondary leading-none">{rev.author}</h4>
                  <p className="text-[10px] text-slate-400 font-mono mt-1.5">{rev.role}, <span className="text-slate-500 font-medium">{rev.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-secondary">Ready to Be Our Next Success Story?</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Throw out standard slow templates. Let\'s host a free call to review your target metrics. Samson B coordinates your project natively.
            </p>
          </div>
          <button
            onClick={() => navigate('/book-a-call')}
            className="px-5 py-3 bg-brand-primary hover:bg-brand-accent text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
          >
            Book a Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
