import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { ChevronDown, HelpCircle, Laptop, Cpu, TrendingUp, Settings } from 'lucide-react';

export default function FAQ() {
  const { navigate } = useRouter();
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const faqCategories = [
    {
      categoryName: 'Core Design & Development',
      icon: <Laptop className="w-5 h-5 text-brand-primary" />,
      items: [
        {
          id: 'dev-1',
          q: 'Why do you choose custom code systems over drag-and-drop builders?',
          a: 'Legacy page builders like Elementor or Divi wrap content in redundant nested div blocks and load heavy scripts even when they are not needed. This severely bloats mobile page load times and harms organic Google SEO scores. Custom code assemblies using React or native Shopify Liquid are light-weight, blazing fast, secure, and offer unlimited creative visual freedom.'
        },
        {
          id: 'dev-2',
          q: 'Do I own the source code and files after project completion?',
          a: 'Absolutely. Unlike closed agencies that lock your site in their private frameworks, we hand over 100% of the production-ready code files, asset assets, and Figma visual design boards once the project is finalized. You have total sovereign ownership.'
        }
      ]
    },
    {
      categoryName: 'Pricing & Scoping Frameworks',
      icon: <Cpu className="w-5 h-5 text-brand-primary" />,
      items: [
        {
          id: 'price-1',
          q: 'Why do you omit standardized pricing tables?',
          a: 'Cookie-cutter pricing packages are counter-productive. One business may require detailed custom cart scripts and high-speed variant matrix setups, while another needs a secure 3-step lead funnel. Custom quote formulation guarantees you only invest in exact features your platform requires to convert traffic.'
        },
        {
          id: 'price-2',
          q: 'Which payment pathways do you support?',
          a: 'We support secure global bank transfers (direct Wise and Grey currency corridors) as well as instant cryptocurrency settlements (including USDT, BTC, ETH) for client convenience.'
        }
      ]
    },
    {
      categoryName: 'Uptime, Maintenance & Transitions',
      icon: <Settings className="w-5 h-5 text-brand-primary" />,
      items: [
        {
          id: 'maint-1',
          q: 'Will my website suffer downtime during a relocation or rebuild?',
          a: 'No. We configure and test your new visual layouts completely on a secure staging server. Your current operational site remains fully live, capturing checkouts, until the launch date when we swap paths instantaneously.'
        },
        {
          id: 'maint-2',
          q: 'Do you offer monthly maintenance and system monitoring support?',
          a: 'Yes. We offer continuous security patches, manual offsite cloud backups, 24/7 uptime monitoring, and priority support hours through our dedicated Maintenance and Support plans.'
        }
      ]
    }
  ];

  return (
    <div className="space-y-20 py-24 animate-fade-in text-slate-800 text-left">
      
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 text-center">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
            CENTRAL SUPPORT CENTER
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            Frequently Asked Technical Questions.
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Get transparent technical answers regarding our bespoke coding philosophies, quotation frameworks, and relocation steps.
          </p>
        </div>
      </section>

      {/* Accordions Matrix */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {faqCategories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-5">
            
            {/* Category Header */}
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
              {cat.icon}
              <h2 className="font-display font-extrabold text-base text-brand-secondary uppercase tracking-wider">
                {cat.categoryName}
              </h2>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between p-5 font-display font-bold text-sm text-brand-secondary text-left focus:outline-none"
                    aria-expanded={activeFaq === item.id}
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-brand-primary shrink-0" />
                      {item.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeFaq === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeFaq === item.id && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 animate-fade-in font-sans">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </section>

      {/* Contact Trigger */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center space-y-4">
          <h3 className="font-display font-bold text-lg text-brand-secondary">Still Have Unanswered Technical Questions?</h3>
          <p className="text-xs text-slate-500 font-sans max-w-md mx-auto">
            Let\'s schedule our call. Samson B will break down load speed benchmarks and custom checkouts tailored to your operational needs.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 bg-brand-primary hover:bg-brand-accent text-white font-bold text-xs rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            Start Your Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
