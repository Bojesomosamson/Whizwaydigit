import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { ContactSubmission } from '../types';
import { 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Upload, 
  AlertCircle, 
  FileText, 
  Check, 
  ChevronDown, 
  HelpCircle, 
  Laptop, 
  Cpu, 
  Settings, 
  Mail, 
  MapPin, 
  Clock,
  Phone 
} from 'lucide-react';

export default function Contact() {
  const { navigate } = useRouter();
  
  // Streamlined Form State (omitted tedious fields for a high-converting experience)
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    phone: '',
    country: '',
    businessName: '',
    website: '',
    projectBudget: '',
    projectType: '',
    message: '',
    preferredContact: 'email'
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Form dropdown options
  const budgets = [
    'Choose Project Budget',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const serviceOptions = [
    'Select Project Type',
    'Website Design',
    'Website Redesign',
    'Shopify Development',
    'WordPress Development',
    'WooCommerce Store',
    'Landing Page Campaign',
    'Ecommerce Development',
    'Website Speed Optimization',
    'SEO Optimization',
    'Conversion Rate Optimization',
    'Website Maintenance & Support',
    'Website Migration',
    'Website Structural Audit',
    'UI/UX Design',
    'Sales Funnel Architecture'
  ];

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

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setAttachedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Streamlined validations
    if (!formData.name.trim()) { setFormError('Name field is required.'); return; }
    if (!formData.email.trim() || !formData.email.includes('@')) { setFormError('Please provide a valid corporate email.'); return; }
    if (selectedTypes.length === 0) { setFormError('Please select at least one project category.'); return; }
    if (!formData.message.trim()) { setFormError('Please describe your project specifications in the message field.'); return; }

    setSubmitting(true);
    
    setTimeout(() => {
      const submissionObj = {
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        message: formData.message,
        timestamp: new Date().toISOString()
      };

      const existingLogs = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      existingLogs.push(submissionObj);
      localStorage.setItem('contact_submissions', JSON.stringify(existingLogs));

      setSubmitting(false);
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="space-y-24 py-16 animate-fade-in text-slate-800 text-left">
      
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-8 text-center">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
            GET IN TOUCH
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-secondary tracking-tight">
            FAQ & Contact
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Have a project in mind? Submit your blueprint inquiry below or browse our popular answered technical questions. We normally reply in less than 4 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Form and Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Master Form Panel - Streamlined to keep visitor engaged */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl shadow-xl p-6 sm:p-10">
            <div className="mb-6">
              <h2 className="font-display font-extrabold text-xl text-brand-secondary">Submit Project Inquiry</h2>
              <p className="text-xs text-slate-500 mt-1 font-sans">
                Quick, ultra-high-converting 4-field inquiry form. Zero fluff, 30-second submission.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {formError && (
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-2.5 text-xs text-rose-600 font-sans animate-fade-in">
                  <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name-field" className="block text-xs font-display font-bold text-slate-700">Full Name *</label>
                  <input
                    id="name-field"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3.5 py-3 text-xs text-brand-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email-field" className="block text-xs font-display font-bold text-slate-700">Email Address *</label>
                  <input
                    id="email-field"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. name@company.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3.5 py-3 text-xs text-brand-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Category Type (2-Column Checkbox Matrix) */}
              <div className="space-y-3">
                <label className="block text-xs font-display font-bold text-slate-700">What do you need built? (Select all that apply) *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceOptions.filter(s => s !== 'Select Project Type').map((opt) => {
                    const isSelected = selectedTypes.includes(opt);
                    return (
                      <div
                        key={opt}
                        onClick={() => {
                          const updated = selectedTypes.includes(opt)
                            ? selectedTypes.filter(t => t !== opt)
                            : [...selectedTypes, opt];
                          setSelectedTypes(updated);
                          setFormData(prev => ({ ...prev, projectType: updated.join(', ') }));
                        }}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-xs font-bold cursor-pointer transition-all duration-200 select-none ${
                          isSelected
                            ? 'bg-brand-primary/5 border-brand-primary text-brand-primary shadow-sm'
                            : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200'
                        }`}
                      >
                        <div className={`w-4.5 h-4.5 rounded flex items-center justify-center border transition-all shrink-0 ${
                          isSelected ? 'bg-brand-primary border-brand-primary text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span>{opt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Message description */}
              <div className="space-y-1.5">
                <label htmlFor="message-field" className="block text-xs font-display font-bold text-slate-700">Describe Your Project *</label>
                <textarea
                  id="message-field"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="What are your goals? Briefly explain what you are looking to build or redesign..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3.5 text-xs text-brand-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-50">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-brand-primary disabled:bg-slate-300 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer w-full sm:w-auto"
                >
                  {submitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit 30-Sec Inquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Sidebar Info Card - REDESIGNED FOR MAX HIGH CONTRAST */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-slate-950 rounded-2xl p-6 shadow-2xl border border-white/20 text-white space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-brand-primary/10 rounded-full filter blur-[50px] pointer-events-none" />

              <h3 className="font-display font-extrabold text-sm text-white tracking-widest uppercase border-b border-white/10 pb-3 flex items-center gap-2 relative z-10">
                <Sparkles className="w-4.5 h-4.5 text-brand-primary" />
                Direct Channels
              </h3>
              
              <div className="space-y-6 font-sans relative z-10">
                
                {/* Email (Bright White & Electric Blue Highlight) */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center shrink-0 shadow-lg">
                    <Mail className="w-4.5 h-4.5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Direct Email</h4>
                    <p className="text-sm text-white font-black mt-1.5 select-all hover:text-brand-primary transition-colors block break-all">
                      bojesomosamson@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center shrink-0 shadow-lg">
                    <Phone className="w-4.5 h-4.5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Direct Phone</h4>
                    <p className="text-sm text-white font-black mt-1.5 select-all hover:text-brand-primary transition-colors block break-all">
                      +2348148747137
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center shrink-0 shadow-lg">
                    <Clock className="w-4.5 h-4.5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Business Hours</h4>
                    <p className="text-sm text-white font-black mt-1.5">
                      Mon - Fri: 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>

              </div>

              <div className="border-t border-white/10 pt-5 flex items-center gap-2.5 text-xs text-slate-100 font-bold relative z-10">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>NDA protected communications.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Accordions Matrix (Integrated FAQ Section) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-t border-slate-100 pt-16">
        <div className="text-center space-y-2 mb-8">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
            Find immediate answers on design logic, pricing structures, and post-delivery policies.
          </p>
        </div>

        {faqCategories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-4">
            
            {/* Category Header */}
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
              {cat.icon}
              <h3 className="font-display font-extrabold text-sm text-brand-secondary uppercase tracking-wider">
                {cat.categoryName}
              </h3>
            </div>

            {/* Accordions */}
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:border-slate-200 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 font-display font-bold text-xs sm:text-sm text-brand-secondary text-left focus:outline-none"
                    aria-expanded={activeFaq === item.id}
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-brand-primary shrink-0" />
                      {item.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${activeFaq === item.id ? 'rotate-180' : ''}`} />
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

    </div>
  );
}
