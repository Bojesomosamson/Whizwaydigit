import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { blogData } from '../data/blog';
import {
  cloudinaryPortfolioData,
  croProofsData,
  salesProofsData,
  clientVideosData,
  founderImages
} from '../data/cloudinary_assets';
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
  Laptop,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  X,
  Volume2,
  VolumeX,
  ShieldCheck
} from 'lucide-react';

function CountUpNumber({ end, decimals = 0, suffix = '', duration = 2000, textColor = 'text-slate-900' }: { end: number; decimals?: number; suffix?: string; duration?: number; textColor?: string }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setVal(easeOut * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className={`font-display font-extrabold text-4xl sm:text-5xl ${textColor} tracking-tight`}>
      {val.toFixed(decimals)}
      <span className="text-brand-primary">{suffix}</span>
    </span>
  );
}

export default function Home() {
  const { navigate } = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Slider states
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeVideoClient, setActiveVideoClient] = useState<string>('');
  const [videoMuted, setVideoMuted] = useState(false);
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);

  const totalPortfolioItems = cloudinaryPortfolioData.length;

  // Auto-play sliding carousel when not hovering
  useEffect(() => {
    if (isHoveringSlider) return;
    const interval = setInterval(() => {
      setPortfolioIndex((prev) => (prev + 1) % totalPortfolioItems);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHoveringSlider, totalPortfolioItems]);

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
      title: 'Awards',
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

  const  homeFaqs = [
    {
      q: 'What is your core design philosophy?',
      a: 'We believe premium design isn\'t just art; it is a measurable business pipeline. We threw out traditional slow templates to craft bespoke, glassmorphic interfaces designed to establish immediate brand trust, load instantly on mobile, and drive conversions.'
    },
    {
      q: 'Do you display standardized pricing charts?',
      a: 'No. Every project is completely unique. We formulate bespoke custom quotes based on your exact speed, catalog, and software specifications. This guarantees you only pay for exactly what your brand requires to scale.'
    },
    {
      q: 'How do project payments work?',
      a: "Once we've discussed your project, agreed on the scope of work, and finalized the pricing, you can securely make payment using any of the following methods:\n\n• Direct bank transfer to the official payment details provided by WhizwayDigit (Samson).\n• Cryptocurrency payment (USDT, BTC, or ETH).\n• Place your order through any of our trusted freelancing platforms if you prefer the added protection of an escrow payment system.\n\nWork begins once payment has been confirmed."
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

            {/* Right Column: Premium Visual Profile Display */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              
              {/* Giant background outline text */}
              <div 
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display font-extrabold text-[120px] select-none pointer-events-none uppercase leading-none opacity-10 tracking-wider transition-all duration-300 hover:opacity-15"
                style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)', color: 'transparent' }}
              >
                STUDIO
              </div>

              {/* Pulsing visual glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-brand-primary/20 rounded-full filter blur-[90px] animate-[pulse_5s_infinite] pointer-events-none" />

              <div className="relative w-full max-w-sm">
                
                {/* Visual Glow Aura Card Boundary */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-primary via-blue-500 to-brand-accent rounded-2xl opacity-40 blur-lg animate-[pulse_4s_infinite]" />
                
                {/* Clean, high-end design panel */}
                <div className="relative glass-panel-dark border border-white/20 p-6 rounded-2xl space-y-6 text-left shadow-2xl bg-brand-dark/95 overflow-hidden group">
                  
                  {/* Glass gloss effect sweeping across */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  {/* Clean header window controls */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE & AVAILABLE
                    </span>
                  </div>

                  {/* Samson Bojesomo Profile Layout */}
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-primary via-cyan-400 to-brand-accent flex items-center justify-center p-[2px] shadow-xl group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                        <img
                          src={founderImages.avatar2}
                          alt="Samson Bojesomo - Founder & Lead Engineer"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-brand-dark flex items-center justify-center shadow-md" title="Active & Ready to Consult" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-white text-base sm:text-lg leading-tight tracking-tight">
                        Samson Bojesomo
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
                        <span className="block font-display font-black text-2xl text-white tracking-tight">190+</span>
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono font-bold">Projects Built</span>
                      </div>
                      <div>
                        <span className="block font-display font-black text-2xl text-white tracking-tight">5.0★</span>
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono font-bold">Client Rating</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/book-a-call')}
                    className="w-full relative z-10 py-3 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 border border-brand-primary/40 hover:border-brand-primary text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary/30 transition-all duration-300 cursor-pointer shadow-sm active:scale-98"
                  >
                    View Scheduling Calendar
                    <ArrowRight className="w-3.5 h-3.5 text-brand-primary group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

              {/* Trusted Brand indicators */}
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

      {/* 2. ANIMATED METRICS COUNTER CARD (White Box with Hover Shadow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center relative z-10">
            
            {/* Stat 1: Projects Completed */}
            <div className="flex flex-col items-center justify-center py-4 md:py-0 px-4 space-y-2">
              <CountUpNumber end={190} suffix="+" duration={2200} textColor="text-slate-900" />
              <span className="text-[11px] sm:text-xs text-slate-500 font-mono font-extrabold tracking-widest uppercase">
                PROJECTS COMPLETED
              </span>
            </div>

            {/* Stat 2: Average Load Time */}
            <div className="flex flex-col items-center justify-center py-4 md:py-0 px-4 space-y-2 pt-6 md:pt-0">
              <CountUpNumber end={1.5} decimals={1} suffix="s" duration={2000} textColor="text-slate-900" />
              <span className="text-[11px] sm:text-xs text-slate-500 font-mono font-extrabold tracking-widest uppercase">
                AVERAGE LOAD TIME
              </span>
            </div>

            {/* Stat 3: Client Satisfaction */}
            <div className="flex flex-col items-center justify-center py-4 md:py-0 px-4 space-y-2 pt-6 md:pt-0">
              <CountUpNumber end={100} suffix="%" duration={2400} textColor="text-slate-900" />
              <span className="text-[11px] sm:text-xs text-slate-500 font-mono font-extrabold tracking-widest uppercase">
                CLIENT SATISFACTION
              </span>
            </div>

            {/* Stat 4: Years of Experience */}
            <div className="flex flex-col items-center justify-center py-4 md:py-0 px-4 space-y-2 pt-6 md:pt-0">
              <CountUpNumber end={8} suffix="+" duration={1800} textColor="text-slate-900" />
              <span className="text-[11px] sm:text-xs text-slate-500 font-mono font-extrabold tracking-widest uppercase">
                YEARS OF EXPERIENCE
              </span>
            </div>

          </div>
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
              className="bg-white p-7 rounded-2xl shadow-xl border border-slate-200/80 flex flex-col justify-between text-left hover:shadow-2xl hover:border-brand-primary/40 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="space-y-4">
                <span className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold shadow-xs">
                  {item.id === 's1' ? <Laptop className="w-6 h-6" /> : item.id === 's2' ? <Users className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                </span>
                <h3 className="font-display font-bold text-xl text-brand-secondary group-hover:text-brand-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {item.briefDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => navigate(`/services/${item.slug}`)}
                  className="text-xs text-brand-primary font-bold flex items-center gap-1.5 group/btn cursor-pointer"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
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

      {/* VERIFIED STOREFRONT CREATIONS SLIDER */}
      <section className="py-20 bg-slate-900 border-y border-white/5 relative overflow-hidden text-white text-left">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b,transparent_70%)] opacity-40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-[10px] font-mono tracking-widest uppercase text-brand-primary font-bold">
                EXPLORE ALL 31+ LIVE DESIGN PROOFS
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
                Verified Storefront Creations
              </h2>
              <p className="text-slate-400 font-sans text-xs sm:text-sm max-w-2xl leading-relaxed">
                Slide or swipe through real Shopify storefronts, premium custom interfaces, and conversion-optimized architectures developed by WhizwayDigit. Click any image to inspect in full pixel-perfect high-resolution.
              </p>
            </div>
            
            {/* Slider controls */}
            <div className="flex items-center gap-2.5 shrink-0 self-start md:self-auto">
              <button
                onClick={() => {
                  setPortfolioIndex((prev) => (prev === 0 ? totalPortfolioItems - 1 : prev - 1));
                }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-brand-primary hover:bg-white/10 hover:border-brand-primary transition-all duration-200 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setPortfolioIndex((prev) => (prev + 1) % totalPortfolioItems);
                }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-brand-primary hover:bg-white/10 hover:border-brand-primary transition-all duration-200 cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sliding container */}
          <div 
            className="relative overflow-hidden py-4 rounded-2xl"
            onMouseEnter={() => setIsHoveringSlider(true)}
            onMouseLeave={() => setIsHoveringSlider(false)}
          >
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ 
                transform: `translateX(-${portfolioIndex * 280}px)` 
              }}
            >
              {cloudinaryPortfolioData.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImg(item.url)}
                  className="w-[280px] sm:w-[340px] shrink-0 bg-slate-950 rounded-xl overflow-hidden border border-white/5 shadow-2xl group cursor-pointer hover:border-brand-primary/40 hover:scale-[1.02] transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Hover magnifying control */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-3 rounded-full bg-brand-primary text-white shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="absolute top-3 left-3 text-[9px] font-mono font-bold tracking-widest uppercase text-brand-primary bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded-md">
                      {item.category === 'e-commerce' ? 'Shopify Store' : item.category === 'cro' ? 'Sales Analysis Graph' : 'Web Design'}
                    </span>
                  </div>
                  
                  <div className="p-4 bg-slate-950 border-t border-white/5 space-y-1 mt-auto">
                    <h3 className="font-display font-bold text-sm text-white group-hover:text-brand-primary transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-sans">
                      Verified Client Delivery • WhizwayDigit Built
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 pt-4">
            {Array.from({ length: Math.min(10, totalPortfolioItems) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPortfolioIndex(i * 3 % totalPortfolioItems)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  Math.floor(portfolioIndex / 3) === i 
                    ? 'w-6 bg-brand-primary' 
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide page ${i + 1}`}
              />
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
              Skip slow, bloated builders. Let's review your speed parameters and craft a bespoke digital strategy that positions your business at the forefront of your industry.
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

      {/* LIGHTBOX AND VIDEO TESTIMONIAL MODALS */}
      {lightboxImg && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 animate-fade-in" style={{ textLeft: 'left' }}>
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
              <h4 className="font-display font-extrabold text-sm text-white">{activeVideoClient}</h4>
              <p className="text-[10px] text-slate-300">Verified Client Success Video • WhizwayDigit Client</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
