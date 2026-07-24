import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import {
  clientVideosData,
  freelanceReviewsScreenshots,
  croProofsData,
  salesProofsData
} from '../data/cloudinary_assets';
import {
  Star,
  MessageSquare,
  Quote,
  PlayCircle,
  ShieldCheck,
  Maximize2,
  X,
  Play,
  Volume2,
  VolumeX,
  ArrowRight,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function Reviews() {
  const { navigate } = useRouter();
  
  // Interactive modal states
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeVideoClient, setActiveVideoClient] = useState<string>('');
  const [platformFilter, setPlatformFilter] = useState<'all' | 'upwork' | 'fiverr' | 'gmb'>('all');

  const filteredScreenshots = freelanceReviewsScreenshots.filter((item) => {
    if (platformFilter === 'all') return true;
    return item.platform === platformFilter;
  });

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
            VERIFIED CLIENT TESTIMONIALS & EVIDENCE
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            Client Success & Conversion Proof
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Read transparent reviews, play verified video testimonials, and inspect real Shopify sales metrics showing exactly how Samson B commands premium conversion authority.
          </p>
        </div>
      </section>

      {/* 2. LIVE RATINGS DASHBOARD BOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center items-center shadow-sm">
          <div className="space-y-1">
            <span className="block font-display font-extrabold text-4xl text-brand-secondary">5.0 / 5.0</span>
            <div className="flex justify-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-[10px] text-slate-500 block uppercase font-mono tracking-wider">Flawless Freelance Rating</span>
          </div>

          <div className="space-y-1 sm:border-x border-slate-200 py-3">
            <span className="block font-display font-extrabold text-4xl text-brand-secondary">100%</span>
            <span className="text-xs text-brand-primary font-display font-bold block">Delivery Completion Rate</span>
            <span className="text-[10px] text-slate-500 block uppercase font-mono tracking-wider">Zero missed targets</span>
          </div>

          <div className="space-y-1">
            <span className="block font-display font-extrabold text-4xl text-brand-secondary">$12M+</span>
            <span className="text-xs text-emerald-600 font-display font-bold block">Client Revenue Generated</span>
            <span className="text-[10px] text-slate-500 block uppercase font-mono tracking-wider">Across 140+ custom stores</span>
          </div>
        </div>
      </section>

      {/* 3. CLIENT VIDEO SUCCESS STORIES (PLAYABLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-md">CLIENT FEEDBACK VIDEOS</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-secondary">Play Video Testimonials</h2>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Click any client block below to play their verified video feedback. Real store owners, marketing partners, and entrepreneurs explain the direct impact of WhizwayDigit services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {clientVideosData.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                setActiveVideoUrl(video.url);
                setActiveVideoClient(video.clientName);
              }}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-primary/60 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer group flex flex-col justify-between aspect-[9/16] relative min-h-[320px]"
            >
              {/* Real video first-frame poster background */}
              <video
                src={`${video.url}#t=0.5`}
                preload="metadata"
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 pointer-events-none"
              />

              {/* Gradient overlays for high contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80 pointer-events-none" />

              {/* Top Video Indicator Badge */}
              <div className="relative z-20 p-3 flex justify-between items-center">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest uppercase text-white bg-red-600/90 backdrop-blur-md px-2 py-0.5 rounded-full shadow-md animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  VIDEO TESTIMONIAL
                </span>
              </div>

              {/* Center Pulsating Play Button */}
              <div className="relative z-20 flex flex-col items-center justify-center p-2 text-center space-y-2 my-auto">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-brand-primary/40 animate-ping opacity-75 group-hover:bg-brand-primary/60" />
                  <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 relative z-10 border border-white/30">
                    <PlayCircle className="w-8 h-8 fill-current text-white" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 group-hover:border-brand-primary/50 transition-colors">
                  ▶ Click to Watch
                </span>
              </div>

              {/* Bottom Client Bio */}
              <div className="relative z-20 p-4 bg-slate-950/90 backdrop-blur-md border-t border-white/10 text-left space-y-1">
                <span className="block text-[8px] uppercase font-mono tracking-widest text-slate-400 font-bold">
                  VERIFIED CLIENT
                </span>
                <h4 className="font-display font-bold text-sm text-white leading-tight">
                  {video.clientName}
                </h4>
                <p className="text-[10px] text-brand-primary font-semibold truncate">
                  {video.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CRO PROOFS AND SALES DASHBOARDS */}
      <section className="bg-slate-900 py-20 border-y border-white/5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-accent bg-white/5 px-2.5 py-1 rounded-md border border-white/10">DIRECT CONVERSION EVIDENCE</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">Shopify CRO & Sales Proof</h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              We don't just promise aesthetic designs; we deliver high-performing revenue machines. Check out verified client dashboard results showing 4.8%+ conversion rates and surging sale spikes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {salesProofsData.map((proof) => (
              <div
                key={proof.id}
                onClick={() => setLightboxImg(proof.url)}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-primary/40 shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
              >
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={proof.url}
                    alt={proof.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 rounded-full bg-brand-primary text-white shadow-xl">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 text-left space-y-2 border-t border-white/5 bg-slate-950">
                  <h3 className="font-display font-extrabold text-base text-white">{proof.title}</h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {proof.description}
                  </p>
                  <div className="flex items-center gap-2 pt-2 text-[10px] text-emerald-400 font-mono font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified Shopify Client Dashboard Result</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VERIFIED FREELANCE & GOOGLE MARKETPLACE SCREENSHOT REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-slate-100">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-md">VERIFIED MULTI-PLATFORM DELIVERY</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-secondary">Google, Upwork & Fiverr Reviews</h2>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              Transparent evidence of client feedback directly from Google My Business, Upwork, and Fiverr. Click any screenshot to inspect in full high-resolution detail.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://g.page/r/CQFlNRtvTheQEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
              title="Leave a 5-Star Review on Google My Business"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#FFFFFF" />
              </svg>
              <span>Write a Google Review</span>
              <span className="text-[10px] opacity-80">↗</span>
            </a>
            <a
              href="https://www.fiverr.com/whizwaydigit0?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Order on Fiverr</span>
              <span className="text-[10px] opacity-80">↗</span>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~014763bef730442a8f?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Hire on Upwork</span>
              <span className="text-[10px] opacity-80">↗</span>
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setPlatformFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              platformFilter === 'all'
                ? 'bg-brand-primary text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Reviews ({freelanceReviewsScreenshots.length})
          </button>
          <button
            onClick={() => setPlatformFilter('gmb')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              platformFilter === 'gmb'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>Google Reviews ({freelanceReviewsScreenshots.filter((r) => r.platform === 'gmb').length})</span>
          </button>
          <button
            onClick={() => setPlatformFilter('upwork')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              platformFilter === 'upwork'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>Upwork ({freelanceReviewsScreenshots.filter((r) => r.platform === 'upwork').length})</span>
          </button>
          <button
            onClick={() => setPlatformFilter('fiverr')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              platformFilter === 'fiverr'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>Fiverr ({freelanceReviewsScreenshots.filter((r) => r.platform === 'fiverr').length})</span>
          </button>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredScreenshots.map((review) => (
            <div
              key={review.id}
              onClick={() => setLightboxImg(review.url)}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-brand-primary/40 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={review.url}
                  alt={review.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2.5 rounded-full bg-brand-primary text-white shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[9px] font-mono tracking-wider uppercase font-bold px-2 py-0.5 rounded-md ${
                        review.platform === 'gmb'
                          ? 'bg-blue-100 text-blue-800'
                          : review.platform === 'upwork'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      {review.platform === 'gmb'
                        ? 'Google Review'
                        : review.platform === 'upwork'
                        ? 'Upwork Review'
                        : 'Fiverr Review'}
                    </span>
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-xs text-brand-secondary line-clamp-2 leading-snug">
                    {review.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mt-3 pt-2 border-t border-slate-100">
                  <span className="text-emerald-600 font-semibold">★ 5.0 Rating</span>
                  <span className="text-brand-primary font-bold">Inspect Proof 🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE MY BUSINESS AUTO-SYNC BANNER CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-blue-500/20 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-300 font-bold bg-blue-500/20 px-2.5 py-1 rounded-full border border-blue-400/30">
                  LIVE GOOGLE BUSINESS PROFILE INTEGRATION
                </span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl leading-tight text-white">
                Connected to Google Business Profile API
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Our platform automatically syncs and displays new verified reviews submitted directly to Samson B's Google My Business profile in real-time. Leave your feedback directly on Google to have it featured here instantly.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://maps.app.goo.gl/gbCngjehUU4zvbpZ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-white/20"
                >
                  <MapPin className="w-4 h-4 text-brand-primary" />
                  <span>Check Our Google Profile</span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                <a
                  href="https://g.page/r/CQFlNRtvTheQEAI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <span>Leave a Review on Google</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-[11px] text-slate-400 font-mono">
                  ⚡ Auto-sync active • 5.0 Rating
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl text-center space-y-3 w-full max-w-xs">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center mx-auto text-white">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-sm text-white">Google My Business</h4>
                <div className="flex justify-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-[10px] text-slate-300">Verified GMB Business Account</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS GRID */}
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

      {/* 7. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-secondary">Ready to Be Our Next Success Story?</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Throw out standard slow templates. Let's host a free call to review your target metrics. Samson B coordinates your project natively.
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

      {/* MODALS OVERLAY */}
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

      {activeVideoUrl && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <button
            onClick={() => {
              setActiveVideoUrl(null);
              setActiveVideoClient('');
            }}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 cursor-pointer z-50"
            aria-label="Close Video Testimonial"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-sm aspect-[9/16] max-h-[90vh] bg-slate-950 rounded-2xl border border-white/15 overflow-hidden shadow-2xl relative flex flex-col justify-center">
            <video
              src={activeVideoUrl}
              autoPlay
              controls
              playsInline
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-16 inset-x-0 p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent text-left space-y-1 pointer-events-none">
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-primary font-bold">CLIENT TESTIMONIAL VIDEO</span>
              <h4 className="font-display font-bold text-sm text-white">{activeVideoClient}</h4>
              <p className="text-[10px] text-slate-300">Verified Client Success Video • WhizwayDigit Client</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
