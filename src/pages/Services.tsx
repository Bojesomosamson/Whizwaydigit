import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { servicesData } from '../data/services';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Layout,
  RefreshCw,
  ShoppingBag,
  FileCode,
  Layers,
  FileText,
  Globe,
  Zap,
  TrendingUp,
  Target,
  ShieldAlert,
  ArrowRightLeft,
  ClipboardCheck,
  Fingerprint,
  Activity,
  ChevronRight
} from 'lucide-react';

export default function Services() {
  const { state, navigate } = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Scroll to top on slug change to ensure smooth layout loading
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveFaq(null);
  }, [state.serviceSlug]);

  // Helper to map icon name string to a Lucide element dynamically
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-brand-primary' };
    switch (iconName) {
      case 'Layout': return <Layout {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Target': return <Target {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'ArrowRightLeft': return <ArrowRightLeft {...props} />;
      case 'ClipboardCheck': return <ClipboardCheck {...props} />;
      case 'Fingerprint': return <Fingerprint {...props} />;
      case 'Activity': return <Activity {...props} />;
      default: return <Layout {...props} />;
    }
  };

  const handleBookNow = () => {
    navigate('/contact');
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // CATEGORY-BASED VIEW OR GENERAL SERVICES INDEX
  if (!state.serviceSlug) {
    // Group all 15 services into readable subheadings
    const categorizedServices = [
      {
        categoryName: 'Premium Website Design & Development',
        desc: 'Custom-coded client interfaces engineered with no heavy builders or slow visual templates.',
        slugs: ['website-design', 'website-redesign', 'landing-pages', 'ui-ux-design']
      },
      {
        categoryName: 'Secure CMS & E-Commerce Implementations',
        desc: 'High-converting online store architectures featuring Liquid themes and robust checkouts.',
        slugs: ['shopify-development', 'wordpress-development', 'woocommerce', 'ecommerce-development']
      },
      {
        categoryName: 'Conversion Audits & Speeds Tuning',
        desc: 'Page optimization protocols to achieve sub-second paints and lower cost-per-acquisition metrics.',
        slugs: ['speed-optimization', 'cro', 'website-audit']
      },
      {
        categoryName: 'Growth Funnels & Tactical Maintenance',
        desc: 'Sustained search optimization and around-the-clock uptime shields.',
        slugs: ['seo', 'website-maintenance', 'website-migration', 'sales-funnel-design']
      }
    ];

    return (
      <div className="space-y-20 py-24 animate-fade-in text-slate-800">
        
        {/* 1. OVERVIEW HERO */}
        <section className="relative overflow-hidden pt-12 pb-16 text-center">
          <div className="absolute inset-0 bg-slate-50/50" />
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
              OUR COMPLETE SERVICE MATRIX
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
              15 Specialized Digital Disciplines Built for Pure Output.
            </h1>
            <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              We cover every technical and UX aspect your brand needs to capture and convert market attention. Click any core service for an in-depth breakdown of features, processes, and customized FAQ maps.
            </p>
          </div>
        </section>

        {/* 2. CATEGORIES GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categorizedServices.map((cat, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              
              {/* Category Header */}
              <div className="border-l-4 border-brand-primary pl-4 text-left">
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-brand-secondary">
                  {cat.categoryName}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-sans mt-1">
                  {cat.desc}
                </p>
              </div>

              {/* Sub-grid of Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.slugs.map((slug) => {
                  const item = servicesData.find((s) => s.slug === slug);
                  if (!item) return null;
                  return (
                    <div
                      key={slug}
                      onClick={() => navigate(`/services/${slug}`)}
                      className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer text-left flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <span className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                          {renderIcon(item.iconName)}
                        </span>
                        <h3 className="font-display font-bold text-base text-brand-secondary">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-sans line-clamp-3">
                          {item.briefDescription}
                        </p>
                      </div>

                      <div className="pt-5 border-t border-slate-50 mt-4 flex items-center justify-between text-xs text-brand-primary font-bold">
                        <span>Explore details</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </section>

        {/* 3. CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-secondary text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,#2563EB,transparent_50%)] opacity-35" />
            <div className="relative z-10 max-w-xl mx-auto space-y-3">
              <h3 className="font-display font-bold text-2xl">Need a Customized Multi-Service Scope?</h3>
              <p className="text-xs text-slate-300">
                Let's map a custom digital solution on our free call. Samson B will formulate an exact plan, bypassing slow visual builders completely.
              </p>
            </div>
            <div className="relative z-10">
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-xs rounded-xl hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                Request a Custom Quote
              </button>
            </div>
          </div>
        </section>

      </div>
    );
  }

  // INDIVIDUAL SERVICE DETAIL PAGE
  const serviceItem = servicesData.find((s) => s.slug === state.serviceSlug);

  if (!serviceItem) {
    // Graceful recovery if service slug isn't found
    return (
      <div className="py-32 text-center space-y-4">
        <h2 className="font-display font-bold text-xl text-brand-secondary">Service Not Found</h2>
        <button onClick={() => navigate('/services')} className="px-4 py-2 bg-brand-primary text-white text-xs font-semibold rounded-lg">
          Back to All Services
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-24 py-24 animate-fade-in text-slate-800">
      
      {/* 1. CORE HERO FOR THE SELECTED SERVICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            <div
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-1 text-xs text-brand-primary font-bold cursor-pointer hover:underline"
            >
              <span>← All 15 Services</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shadow-sm">
                  {renderIcon(serviceItem.iconName)}
                </span>
                <span className="font-display font-extrabold text-xs text-brand-primary tracking-widest uppercase font-mono bg-brand-primary/5 px-2.5 py-1 rounded-full border border-brand-primary/10">
                  PREMIUM SPECIFICATION
                </span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-secondary leading-tight tracking-tight">
                {serviceItem.name}
              </h1>

              <p className="font-display font-semibold text-sm sm:text-base text-brand-primary">
                {serviceItem.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans max-w-2xl">
              {serviceItem.fullDescription}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handleBookNow}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                Request a Custom Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate('/book-a-call')}
                className="px-5 py-3 bg-white border border-slate-200 text-brand-secondary hover:bg-slate-50 font-bold text-xs rounded-xl transition-all duration-200"
              >
                Book a Free Call
              </button>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-2xl opacity-15 blur-lg" />
              <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-2xl text-left space-y-4">
                <h3 className="font-display font-bold text-sm text-brand-secondary">Consultation Roadmap</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  We formulate custom quotes for every single customer based on exact features.
                </p>
                
                <div className="space-y-3.5 pt-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>No pre-made visual template limits</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>95+ target PageSpeed optimization</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Secure wire and cryptocurrency support</span>
                  </div>
                </div>

                <div className="border-t border-slate-50 pt-4 mt-2">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-mono">ESTIMATION SCHEDULE</span>
                  <span className="font-display font-extrabold text-base text-brand-secondary">Request Quote</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DEDICATED BENEFITS */}
      <section className="bg-slate-50 py-16 border-y border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-secondary">
              Strategic Advantages
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Why our tailored {serviceItem.name} configuration surpasses traditional off-the-shelf formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceItem.benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-base text-brand-secondary">{b.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">{b.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SERVICE ROADMAP / PROCESS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-secondary">
            Process Breakdown
          </h2>
          <p className="text-xs text-slate-500">
            How we manage your {serviceItem.name} project from initial blueprint to live launch.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-100 pl-6 ml-4 space-y-8">
          {serviceItem.process.map((step) => (
            <div key={step.step} className="relative space-y-1.5">
              <span className="absolute -left-[35px] top-0.5 w-5 h-5 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center font-mono font-bold text-[9px] text-brand-primary">
                {step.step}
              </span>
              <h3 className="font-display font-bold text-base text-brand-secondary">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-2xl">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CUSTOM PRICING EXPLANATORY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-secondary text-white rounded-2xl p-8 sm:p-12 text-left relative overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,#0D6EFD,transparent_45%)] opacity-35" />
          
          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase text-brand-primary font-bold">
              ESTIMATION STRATEGY
            </span>
            <h2 className="font-display font-extrabold text-xl sm:text-3xl tracking-tight leading-snug">
              Bespoke Pricing Models Based on Meticulous Scope Definition.
            </h2>
            
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Every system is different. We do not display pre-defined visual lists because we believe cookie-cutter structures yield cookie-cutter results. Let's host a free consultation call to map your exact parameters and formulate a custom quote.
            </p>

            <div className="pt-2">
              <button
                onClick={handleBookNow}
                className="px-5 py-3 bg-brand-primary hover:bg-brand-accent text-white font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(13,110,253,0.3)] transition-all duration-200 cursor-pointer"
              >
                Request Custom Quotation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDIVIDUAL SERVICE FAQS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-secondary">
            Service-Specific FAQs
          </h2>
          <p className="text-xs text-slate-500">
            Answers regarding {serviceItem.name} timelines, structures, and deliverables.
          </p>
        </div>

        <div className="space-y-4">
          {serviceItem.faq.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 font-display font-bold text-sm text-brand-secondary text-left focus:outline-none"
              >
                {faq.question}
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
              </button>
              
              {activeFaq === index && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-50 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. RELATED SERVICES PREVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        <h3 className="font-display font-extrabold text-xl text-brand-secondary border-b border-slate-100 pb-3">
          Related Digital Solutions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceItem.relatedSlugs.map((slug) => {
            const item = servicesData.find((s) => s.slug === slug);
            if (!item) return null;
            return (
              <div
                key={slug}
                onClick={() => navigate(`/services/${slug}`)}
                className="bg-white p-5 rounded-xl border border-slate-100 hover:border-brand-primary/25 hover:shadow-lg hover:scale-[1.01] transition-all duration-200 cursor-pointer flex items-start gap-4"
              >
                <span className="p-2 bg-brand-primary/10 rounded-lg shrink-0 mt-0.5">
                  {renderIcon(item.iconName)}
                </span>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-secondary leading-snug">{item.name}</h4>
                  <p className="text-[10px] text-slate-500 line-clamp-2 mt-1 leading-relaxed font-sans">{item.briefDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
