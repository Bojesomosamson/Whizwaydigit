import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { resourcesData } from '../data/blog';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Landmark, 
  Wallet, 
  Download, 
  Mail, 
  Shield, 
  X, 
  CheckCircle2 
} from 'lucide-react';

export default function Pricing() {
  const { navigate } = useRouter();

  // Selected resource for email verification modal
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const tiers = [
    {
      title: 'Conversion Campaign',
      tagline: 'Perfect for specific landing campaigns or focused funnels.',
      features: [
        '100% Custom visual layout',
        'Persuasive conversion copywriting',
        'Sub-second mobile PageSpeed',
        'Conditional CRM lead forms',
        'Meta/Google tracking integration',
        'Interactive receipt board setup'
      ],
      ctaText: 'Request a Quote'
    },
    {
      title: 'Premium E-Commerce',
      tagline: 'Bespoke Shopify Liquid or WooCommerce open-source code.',
      features: [
        'Bespoke visual collections',
        'Instant sliding cart drawers',
        'Custom product variation grids',
        'Tax & regional shipping logic',
        'CRM/Inventory API synchronization',
        'Interactive variant previews'
      ],
      ctaText: 'Contact for Pricing',
      popular: true
    },
    {
      title: 'Enterprise Custom App',
      tagline: 'Tailor-coded React/Next.js portals for massive scale.',
      features: [
        'Modular React component systems',
        'Dynamic secure routing schemas',
        'Advanced bento-grid dashboards',
        'Hardened server safety protocols',
        'Offsite cloud database syncs',
        'Interactive SVG telemetry graphs'
      ],
      ctaText: 'Get Custom Pricing'
    }
  ];

  const handlePricingClick = () => {
    navigate('/contact');
  };

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
      setTimeout(() => {
        setSelectedResource(null);
        setDownloadSuccess(false);
      }, 3500);
    }, 1800);
  };

  const activeItem = resourcesData.find((r) => r.slug === selectedResource);

  return (
    <div className="space-y-24 py-16 animate-fade-in text-slate-800 text-left relative">
      
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-12 pb-8 text-center">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
            INVESTMENT & BLUEPRINTS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            Pricing & Resources
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            See our custom scoping guidelines and download our high-performing design assets, optimization checklists, and development guidelines below.
          </p>
        </div>
      </section>

      {/* 2. PRICELESS TIERS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h2 className="font-display font-extrabold text-2xl text-brand-secondary text-center">Tailor-Formulated Scopes</h2>
          <p className="text-xs text-slate-500 text-center font-sans mt-1">We draft pricing quotes exclusively to match your custom API syncing, catalog depth, and load-speed goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border p-8 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-300 relative ${
                tier.popular
                  ? 'border-brand-primary ring-2 ring-brand-primary/20 shadow-xl scale-[1.02]'
                  : 'border-slate-100'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-primary text-white text-[9px] font-mono tracking-widest font-bold uppercase rounded-full shadow-md">
                  MOST REQUESTED
                </span>
              )}

              <div className="space-y-4">
                <h3 className="font-display font-extrabold text-xl text-brand-secondary">{tier.title}</h3>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">{tier.tagline}</p>
                
                <div className="py-4 border-y border-slate-50">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-mono">COST SPECIFICATION</span>
                  <span className="font-display font-extrabold text-2xl text-brand-secondary">Request Quote</span>
                </div>

                <ul className="space-y-3 pt-2">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handlePricingClick}
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
                  tier.popular
                    ? 'bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-[0_0_15px_rgba(13,110,253,0.35)]'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {tier.ctaText}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FREE RESOURCES DOWNLOAD BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 border-t border-slate-100 pt-16">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="font-display font-extrabold text-2xl text-brand-secondary">
            Free Checklists, Templates & Guides
          </h2>
          <p className="text-xs text-slate-500 font-sans">
            Download our curated audits and Figma wireframes to speed up load times, secure optimization wins, and boost order values.
          </p>
        </div>

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

      {/* 4. PAYMENT COMPLIANCE BLOCK */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 pt-16">
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-white/5 shadow-2xl space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,#2563EB,transparent_55%)] opacity-30" />
          
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase text-brand-primary font-bold">
              PAYMENT INFORMATION
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug pb-2 border-b border-white/10">
              Payment Information & Protocol
            </h2>
            
            <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                Every project is unique. We provide clear deliverables and custom estimates based on your parameters. After approval, payment settles through secure global tunnels:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 flex items-start gap-3">
                  <span className="p-2 bg-brand-primary/15 rounded-lg text-brand-primary shrink-0">
                    <Landmark className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Bank Transfer</h4>
                    <p className="text-[11px] text-slate-400">Direct international wire & bank transfers accepted.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 flex items-start gap-3">
                  <span className="p-2 bg-brand-primary/15 rounded-lg text-brand-primary shrink-0">
                    <Wallet className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Cryptocurrency</h4>
                    <p className="text-[11px] text-slate-400">Instant global settlements using secure stablecoins: USDT, BTC, ETH.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 flex items-start gap-3">
                  <span className="p-2 bg-emerald-500/15 rounded-lg text-emerald-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Freelance Platforms</h4>
                    <p className="text-[11px] text-slate-400">Order via Fiverr or Upwork with 100% platform escrow protection.</p>
                    <div className="flex items-center gap-2 pt-2">
                      <a
                        href="https://www.fiverr.com/whizwaydigit0?public_mode=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-emerald-400 hover:underline"
                      >
                        Fiverr Order ↗
                      </a>
                      <span className="text-slate-600">•</span>
                      <a
                        href="https://www.upwork.com/freelancers/~014763bef730442a8f?mp_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-emerald-400 hover:underline"
                      >
                        Upwork Hire ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic pt-2">
                Payment instructions will be provided after consultation.
              </p>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/5">
            <button
              onClick={handlePricingClick}
              className="px-6 py-3.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-xs rounded-xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              Request Payment Details
            </button>
          </div>
        </div>
      </section>

      {/* 5. PRICING FAQS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="font-display font-extrabold text-2xl text-brand-secondary">
            Pricing FAQs
          </h2>
          <p className="text-xs text-slate-500 font-sans">
            Clear guidelines surrounding our bespoke scoping frameworks.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { q: 'Why do you avoid displaying standardized pricing cards?', a: 'Standard packages assume all businesses require identical solutions. In reality, a custom Shopify Liquids theme requires different engineering pathways than an enterprise React portal. Custom quotes guarantee your budget only goes toward features you actually need.' },
            { q: 'Are there any hidden platform fees or markups?', a: 'None. We manage all visual assets, styling, and coding natively. The quote we agree upon during scoping is the complete, static figure for the milestone.' },
            { q: 'How long are custom quotations valid?', a: 'Due to our scheduling pipeline, custom quotes and timeline proposals are valid for 14 calendar days from delivery.' }
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-xl p-5 space-y-2 shadow-sm"
            >
              <h4 className="font-display font-bold text-sm text-brand-secondary flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE MODAL OVERLAY */}
      {selectedResource && activeItem && (
        <div className="fixed inset-0 z-50 bg-brand-dark/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-100 rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden p-6 sm:p-8 animate-scale-up">
            
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
                    The secure PDF resource, <span className="font-semibold text-brand-secondary">"{activeItem.title}"</span>, is fetching now. We have also forwarded a copy to your email inbox.
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
                    Please provide your business email. We will instantly begin the direct download of <span className="font-semibold text-brand-secondary">"{activeItem.title}"</span>.
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

    </div>
  );
}
