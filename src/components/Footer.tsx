import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Sparkles, Mail, Shield, ChevronRight, Github, Linkedin, Twitter, MessageSquare, AlertCircle, Instagram, Briefcase, AtSign, Layers, Video, Facebook, ShoppingBag } from 'lucide-react';

export default function Footer() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubStatus('error');
      return;
    }
    setSubStatus('success');

    // WhatsApp Direct Message Integration
    const message = encodeURIComponent(`Hello Samson, I would like to join your newsletter! My email is: ${email}`);
    const whatsappUrl = `https://wa.me/2348148747137?text=${message}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');

    setEmail('');
    setTimeout(() => setSubStatus('idle'), 5000);
  };

  const serviceLinks = [
    { name: 'Website Design', path: '/services/website-design' },
    { name: 'Shopify Development', path: '/services/shopify-development' },
    { name: 'WordPress Development', path: '/services/wordpress-development' },
    { name: 'Website Speed Optimization', path: '/services/speed-optimization' },
    { name: 'SEO Optimization', path: '/services/seo' },
    { name: 'Conversion Rate Optimization', path: '/services/cro' },
    { name: 'Sales Funnel Design', path: '/services/sales-funnel-design' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
  ];

  const quickLinks = [
    { name: 'About Samson B', path: '/about' },
    { name: 'Portfolio & Case Studies', path: '/portfolio' },
    { name: 'Pricing & Resources', path: '/pricing' },
    { name: 'FAQ & Contact', path: '/contact' },
    { name: 'Client Portal', path: '/client-portal' },
    { name: 'Book Consultation', path: '/book-a-call' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Cookies Policy', path: '/cookies-policy' }
  ];

  return (
    <footer id="app-footer" className="bg-brand-dark border-t border-white/5 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div
              onClick={() => navigate('/')}
              className="flex items-center gap-2 cursor-pointer group w-fit"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-brand-primary transition-colors duration-300">
                  WhizwayDigit
                </span>
                <span className="block text-[8px] tracking-widest text-slate-400 font-mono uppercase leading-none">
                  by Samson B
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping businesses grow globally with high-converting websites, Shopify architectures, custom React systems, and search optimizations.
            </p>

            <div className="flex flex-wrap items-center gap-2 max-w-sm">
              {[
                { name: 'X (Twitter)', url: 'https://x.com/bojesomo_samson', icon: <Twitter className="w-4 h-4" /> },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samson-b-shopify-cro-specialist-a82937295/', icon: <Linkedin className="w-4 h-4" /> },
                { name: 'Instagram', url: 'https://www.instagram.com/whizwaydigit01/', icon: <Instagram className="w-4 h-4" /> },
                { name: 'Contra', url: 'https://contra.com/bojesomosamson_7r8j3ji9/work?r=bojesomosamson_7r8j3ji9', icon: <Briefcase className="w-4 h-4" /> },
                { name: 'Threads', url: 'https://www.threads.net/@whizwaydigit01', icon: <AtSign className="w-4 h-4" /> },
                { name: 'Behance', url: 'https://www.behance.net/samsonboj', icon: <Layers className="w-4 h-4" /> },
                { name: 'TikTok', url: 'https://www.tiktok.com/@whizwaydigit', icon: <Video className="w-4 h-4" /> },
                { name: 'Facebook', url: 'https://web.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61585088550588&sk=about&_rdc=1&_rdr#', icon: <Facebook className="w-4 h-4" /> },
                { name: 'Kwork', url: 'https://kwork.com/user/whizwaydigital', icon: <ShoppingBag className="w-4 h-4" /> },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-accent/20 hover:border-brand-accent transition-all duration-300"
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-semibold text-xs text-slate-200 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <div
                    onClick={() => navigate(link.path)}
                    className="text-sm text-slate-400 hover:text-brand-accent cursor-pointer flex items-center gap-1 group transition-colors duration-150"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-200" />
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">{link.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-semibold text-xs text-slate-200 uppercase tracking-wider">
              Core Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 8).map((link) => (
                <li key={link.name}>
                  <div
                    onClick={() => navigate(link.path)}
                    className="text-sm text-slate-400 hover:text-brand-accent cursor-pointer flex items-center gap-1 group transition-colors duration-150"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-200" />
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">{link.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-semibold text-xs text-slate-200 uppercase tracking-wider">
              Weekly Strategies
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {"Subscribe to Samson B's private newsletter and get cutting-edge speed and CRO audits directly in your inbox."}
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full bg-slate-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-primary hover:bg-brand-accent text-white rounded-md text-xs font-semibold flex items-center gap-1 transition-colors duration-200 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Join
                </button>
              </div>

              {subStatus === 'success' && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 animate-fade-in">
                  <Shield className="w-3.5 h-3.5 shrink-0" />
                  <span>Subscribed! Check your inbox for free checklist assets.</span>
                </div>
              )}
              {subStatus === 'error' && (
                <div className="text-xs text-rose-400 flex items-center gap-1.5 animate-fade-in">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Please provide a valid work email.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <div className="text-center md:text-left space-y-1">
            <p>© 2026 WhizwayDigit. All rights reserved.</p>
            <p className="text-[10px]">
              Crafted with high-contrast precision. Founder: <span className="text-slate-400 font-medium">Samson B</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <div
                key={link.name}
                onClick={() => navigate(link.path)}
                className="hover:text-slate-300 cursor-pointer transition-colors"
              >
                {link.name}
              </div>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
