import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { servicesData } from '../data/services';
import { 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  Sparkles, 
  Layout, 
  ShoppingBag, 
  Zap, 
  Target, 
  RefreshCw, 
  FileCode, 
  ClipboardCheck, 
  TrendingUp,
  FolderOpen,
  FileText,
  HelpCircle
} from 'lucide-react';

export default function Header() {
  const { state, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatic live dynamic time & date update for the premium clock widget
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // convert '0' to '12'
      
      const day = now.getDate();
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      
      setTimeString(`${hours}:${minutes}${ampm}  -  ${day} ${month}, ${year}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdowns on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPortfolioDropdownOpen(false);
    setContactDropdownOpen(false);
  }, [state]);

  const handleNav = (path: string) => {
    navigate(path);
  };

  // Sleek groupings for the premium services dropdown
  const leftColumnServices = [
    { name: 'Website Design', slug: 'website-design', desc: 'Bespoke high-converting design', icon: <Layout className="w-4 h-4 text-brand-primary" /> },
    { name: 'Website Redesign', slug: 'website-redesign', desc: 'Recapture lost sales & modernize', icon: <RefreshCw className="w-4 h-4 text-emerald-400" /> },
    { name: 'Shopify Development', slug: 'shopify-development', desc: 'Custom Shopify Liquid engineering', icon: <ShoppingBag className="w-4 h-4 text-pink-400" /> },
    { name: 'WordPress Development', slug: 'wordpress-development', desc: 'Gutenberg native custom blocks', icon: <FileCode className="w-4 h-4 text-cyan-400" /> }
  ];

  const rightColumnServices = [
    { name: 'Speed Optimization', slug: 'speed-optimization', desc: '95+ Core Web Vitals score tuning', icon: <Zap className="w-4 h-4 text-amber-400" /> },
    { name: 'Search Engine Optimization', slug: 'seo', desc: 'Sustained organic traffic authority', icon: <TrendingUp className="w-4 h-4 text-indigo-400" /> },
    { name: 'Conversion Optimization', slug: 'cro', desc: 'A/B testing & heatmap diagnostic scans', icon: <Target className="w-4 h-4 text-rose-400" /> },
    { name: 'Comprehensive Web Audit', slug: 'website-audit', desc: 'Urgent security & load-speed analysis', icon: <ClipboardCheck className="w-4 h-4 text-emerald-400" /> }
  ];

  const portfolioDropdownItems = [
    { name: 'Portfolio Grid', path: '/portfolio', desc: 'Browse our core digital builds', icon: <FolderOpen className="w-4 h-4 text-brand-primary" /> },
    { name: 'Case Studies', path: '/case-studies', desc: 'Real conversion & speed metrics', icon: <TrendingUp className="w-4 h-4 text-indigo-400" /> },
    { name: 'Client Reviews', path: '/reviews', desc: 'Upwork, Fiverr & video testimonials', icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
    { name: 'Resources', path: '/resources', desc: 'Free optimization checklists', icon: <FileText className="w-4 h-4 text-emerald-400" /> },
  ];

  const contactDropdownItems = [
    { name: 'Get In Touch', path: '/contact', desc: 'Formulate your custom scope', icon: <PhoneCall className="w-4 h-4 text-brand-primary" /> },
    { name: 'FAQ Support', path: '/faq', desc: 'Bespoke process answers', icon: <HelpCircle className="w-4 h-4 text-amber-400" /> },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-black py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div
            onClick={() => handleNav('/')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <img
              src="https://res.cloudinary.com/h4ihjmt1/image/upload/v1784822212/my_logo-removebg-preview_mj5zdb.png"
              alt="WhizwayDigit Logo"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain max-h-[48px] drop-shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0"
            />
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-brand-primary transition-colors duration-300">
                WhizwayDigit
              </span>
              <span className="block text-[8px] tracking-widest text-slate-400 font-mono uppercase leading-none">
                by Samson B
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            
            {/* Home */}
            <div
              onClick={() => handleNav('/')}
              className={`px-2 py-2 text-xs font-bold rounded-md cursor-pointer transition-colors duration-200 shrink-0 ${
                state.page === '' || state.page === 'home' ? 'text-brand-primary font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </div>

            {/* Services Dropdown Trigger - Redesigned to be highly-polished & compact */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-2 py-2 text-xs font-bold rounded-md transition-colors duration-200 cursor-pointer ${
                  state.page === 'services'
                    ? 'text-brand-primary font-extrabold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Redesigned Dual-Column Services Dropdown (No overflow, glowing accents, elegant typography) */}
              {servicesDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[580px] animate-fade-in z-50">
                  <div className="bg-slate-950/98 backdrop-blur-lg rounded-xl p-5 shadow-2xl border border-white/10 grid grid-cols-2 gap-5">
                    
                    {/* Left Column: Core Engineering */}
                    <div className="space-y-3">
                      <div className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase border-b border-white/5 pb-1">
                        Development & Core
                      </div>
                      <div className="space-y-1">
                        {leftColumnServices.map((item) => {
                          const isSelected = state.page === 'services' && state.serviceSlug === item.slug;
                          return (
                            <div
                              key={item.slug}
                              onClick={() => handleNav(`/services/${item.slug}`)}
                              className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all duration-150 text-left hover:bg-white/5 group ${
                                isSelected ? 'bg-brand-primary/10 border-l-2 border-brand-primary' : ''
                              }`}
                            >
                              <div className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                                {item.icon}
                              </div>
                              <div>
                                <span className={`block text-xs font-bold leading-none ${isSelected ? 'text-brand-primary' : 'text-slate-200 hover:text-brand-primary'}`}>
                                  {item.name}
                                </span>
                                <span className="block text-[10px] text-slate-400 mt-1 font-sans">
                                  {item.desc}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column: Speed & Growth */}
                    <div className="space-y-3">
                      <div className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase border-b border-white/5 pb-1">
                        Performance & Optimization
                      </div>
                      <div className="space-y-1">
                        {rightColumnServices.map((item) => {
                          const isSelected = state.page === 'services' && state.serviceSlug === item.slug;
                          return (
                            <div
                              key={item.slug}
                              onClick={() => handleNav(`/services/${item.slug}`)}
                              className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all duration-150 text-left hover:bg-white/5 group ${
                                isSelected ? 'bg-brand-primary/10 border-l-2 border-brand-primary' : ''
                              }`}
                            >
                              <div className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                                {item.icon}
                              </div>
                              <div>
                                <span className={`block text-xs font-bold leading-none ${isSelected ? 'text-brand-primary' : 'text-slate-200 hover:text-brand-primary'}`}>
                                  {item.name}
                                </span>
                                <span className="block text-[10px] text-slate-400 mt-1 font-sans">
                                  {item.desc}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Desktop Nav Items */}
            
            {/* Portfolio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPortfolioDropdownOpen(true)}
              onMouseLeave={() => setPortfolioDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-2 py-2 text-xs font-bold rounded-md transition-colors duration-200 cursor-pointer ${
                  ['portfolio', 'case-studies', 'resources'].includes(state.page)
                    ? 'text-brand-primary font-extrabold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Portfolio
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${portfolioDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {portfolioDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[280px] animate-fade-in z-50">
                  <div className="bg-slate-950/98 backdrop-blur-lg rounded-xl p-3 shadow-2xl border border-white/10 space-y-1">
                    {portfolioDropdownItems.map((item) => {
                      const isSelected = state.page === item.path.replace('/', '');
                      return (
                        <div
                          key={item.path}
                          onClick={() => handleNav(item.path)}
                          className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all duration-150 text-left hover:bg-white/5 group ${
                            isSelected ? 'bg-brand-primary/10 border-l-2 border-brand-primary' : ''
                          }`}
                        >
                          <div className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <div>
                            <span className={`block text-xs font-bold leading-none ${isSelected ? 'text-brand-primary' : 'text-slate-200 group-hover:text-brand-primary'}`}>
                              {item.name}
                            </span>
                            <span className="block text-[10px] text-slate-400 mt-1 font-sans">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Testimonials / Reviews */}
            <div
              onClick={() => handleNav('/reviews')}
              className={`px-2 py-2 text-xs font-bold rounded-md cursor-pointer transition-colors duration-200 shrink-0 ${
                state.page === 'reviews' ? 'text-brand-primary font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Testimonials
            </div>

            {/* Pricing */}
            <div
              onClick={() => handleNav('/pricing')}
              className={`px-2 py-2 text-xs font-bold rounded-md cursor-pointer transition-colors duration-200 shrink-0 ${
                state.page === 'pricing' ? 'text-brand-primary font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Pricing
            </div>

            {/* Client Portal */}
            <div
              onClick={() => handleNav('/client-portal')}
              className={`px-2 py-2 text-xs font-bold rounded-md cursor-pointer transition-colors duration-200 shrink-0 ${
                state.page === 'client-portal' ? 'text-brand-primary font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Client Portal
            </div>
          </nav>

          {/* Right Action Button & Live Clock */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Live Clock Widget - Designed to align perfectly with the website's dark slate color */}
            <div className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-tight">
              <span className="text-slate-500 font-sans uppercase text-[9px] tracking-wider font-bold">Local time</span>
              <span className="font-bold text-white whitespace-nowrap">{timeString}</span>
            </div>

            <button
              onClick={() => handleNav('/book-a-call')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-xs rounded-lg hover:shadow-[0_0_20px_rgba(13,110,253,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Book a Free Call
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-slate-950/98 backdrop-blur-xl border-t border-white/10 z-40 overflow-y-auto animate-fade-in-up">
          <div className="px-4 py-6 space-y-3 text-left max-w-md mx-auto">
            
            {/* Home */}
            <div
              onClick={() => handleNav('/')}
              className={`block px-4 py-3 rounded-xl text-base font-bold cursor-pointer transition-all ${
                state.page === '' || state.page === 'home'
                  ? 'bg-brand-primary/15 text-brand-primary border-l-4 border-brand-primary font-extrabold'
                  : 'text-slate-200 hover:bg-white/5 hover:text-white'
              }`}
            >
              Home
            </div>

            {/* Services Mother Page with Nested Sub-Pages */}
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors">
                <div
                  onClick={() => handleNav('/services')}
                  className={`text-base font-bold ${
                    state.page === 'services' ? 'text-brand-primary font-extrabold' : 'text-slate-100 hover:text-white'
                  }`}
                >
                  Services
                </div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-xs font-semibold"
                  aria-label="Toggle Services submenu"
                >
                  <span className="text-[11px] text-slate-400">{mobileServicesOpen ? 'Hide Subpages' : 'Subpages'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="px-3 pb-3 space-y-1 bg-black/50 pt-2 border-t border-white/5">
                  <div
                    onClick={() => handleNav('/services')}
                    className="px-3 py-1.5 text-xs font-bold text-brand-primary hover:underline cursor-pointer flex items-center gap-1.5"
                  >
                    <span>→ View Main Services Page</span>
                  </div>

                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3 pt-2">
                    Development & Core
                  </div>
                  {leftColumnServices.map((item) => {
                    const isSelected = state.page === 'services' && state.serviceSlug === item.slug;
                    return (
                      <div
                        key={item.slug}
                        onClick={() => handleNav(`/services/${item.slug}`)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                          isSelected ? 'bg-brand-primary/20 text-brand-primary font-bold' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="shrink-0">{item.icon}</div>
                        <span className="text-xs font-medium">{item.name}</span>
                      </div>
                    );
                  })}

                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3 pt-2">
                    Performance & Optimization
                  </div>
                  {rightColumnServices.map((item) => {
                    const isSelected = state.page === 'services' && state.serviceSlug === item.slug;
                    return (
                      <div
                        key={item.slug}
                        onClick={() => handleNav(`/services/${item.slug}`)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                          isSelected ? 'bg-brand-primary/20 text-brand-primary font-bold' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="shrink-0">{item.icon}</div>
                        <span className="text-xs font-medium">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Portfolio Mother Page with Nested Sub-Pages */}
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors">
                <div
                  onClick={() => handleNav('/portfolio')}
                  className={`text-base font-bold ${
                    ['portfolio', 'case-studies', 'resources'].includes(state.page)
                      ? 'text-brand-primary font-extrabold'
                      : 'text-slate-100 hover:text-white'
                  }`}
                >
                  Portfolio
                </div>
                <button
                  onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-xs font-semibold"
                  aria-label="Toggle Portfolio submenu"
                >
                  <span className="text-[11px] text-slate-400">{mobilePortfolioOpen ? 'Hide Subpages' : 'Subpages'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobilePortfolioOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobilePortfolioOpen && (
                <div className="px-3 pb-3 space-y-1 bg-black/50 pt-2 border-t border-white/5">
                  {portfolioDropdownItems.map((item) => {
                    const isSelected = state.page === item.path.replace('/', '');
                    return (
                      <div
                        key={item.path}
                        onClick={() => handleNav(item.path)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                          isSelected ? 'bg-brand-primary/20 text-brand-primary font-bold' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="shrink-0">{item.icon}</div>
                        <div>
                          <span className="text-xs font-medium block">{item.name}</span>
                          <span className="text-[10px] text-slate-400 block">{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Testimonials */}
            <div
              onClick={() => handleNav('/reviews')}
              className={`block px-4 py-3 rounded-xl text-base font-bold cursor-pointer transition-all ${
                state.page === 'reviews'
                  ? 'bg-brand-primary/15 text-brand-primary border-l-4 border-brand-primary font-extrabold'
                  : 'text-slate-200 hover:bg-white/5 hover:text-white'
              }`}
            >
              Testimonials
            </div>

            {/* Pricing */}
            <div
              onClick={() => handleNav('/pricing')}
              className={`block px-4 py-3 rounded-xl text-base font-bold cursor-pointer transition-all ${
                state.page === 'pricing'
                  ? 'bg-brand-primary/15 text-brand-primary border-l-4 border-brand-primary font-extrabold'
                  : 'text-slate-200 hover:bg-white/5 hover:text-white'
              }`}
            >
              Pricing
            </div>

            {/* Client Portal */}
            <div
              onClick={() => handleNav('/client-portal')}
              className={`block px-4 py-3 rounded-xl text-base font-bold cursor-pointer transition-all ${
                state.page === 'client-portal'
                  ? 'bg-brand-primary/15 text-brand-primary border-l-4 border-brand-primary font-extrabold'
                  : 'text-slate-200 hover:bg-white/5 hover:text-white'
              }`}
            >
              Client Portal
            </div>

            {/* Contact & FAQ Mother Page */}
            <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors">
                <div
                  onClick={() => handleNav('/contact')}
                  className={`text-base font-bold ${
                    ['contact', 'faq'].includes(state.page)
                      ? 'text-brand-primary font-extrabold'
                      : 'text-slate-100 hover:text-white'
                  }`}
                >
                  Contact & Support
                </div>
                <button
                  onClick={() => setMobileContactOpen(!mobileContactOpen)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-xs font-semibold"
                  aria-label="Toggle Contact submenu"
                >
                  <span className="text-[11px] text-slate-400">{mobileContactOpen ? 'Hide Subpages' : 'Subpages'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileContactOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileContactOpen && (
                <div className="px-3 pb-3 space-y-1 bg-black/50 pt-2 border-t border-white/5">
                  {contactDropdownItems.map((item) => {
                    const isSelected = state.page === item.path.replace('/', '');
                    return (
                      <div
                        key={item.path}
                        onClick={() => handleNav(item.path)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                          isSelected ? 'bg-brand-primary/20 text-brand-primary font-bold' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="shrink-0">{item.icon}</div>
                        <div>
                          <span className="text-xs font-medium block">{item.name}</span>
                          <span className="text-[10px] text-slate-400 block">{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Call to Action Button */}
            <div className="pt-4 border-t border-white/10 mt-4">
              <button
                onClick={() => handleNav('/book-a-call')}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-extrabold text-sm rounded-xl shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                Book a Free Call
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
