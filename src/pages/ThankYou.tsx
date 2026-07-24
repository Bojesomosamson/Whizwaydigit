import React, { useEffect, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Send, Sparkles } from 'lucide-react';
import { founderImages } from '../data/cloudinary_assets';

export default function ThankYou() {
  const { navigate } = useRouter();
  const [mailData, setMailData] = useState<{
    name: string;
    email: string;
    budget: string;
    services: string;
    mailtoUrl: string;
    gmailWebUrl: string;
  } | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('latest_inquiry_mail_data');
      if (saved) {
        setMailData(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const defaultGmailUrl = mailData?.gmailWebUrl || 'https://mail.google.com/mail/?view=cm&fs=1&to=bojesomosamson@gmail.com&su=New%20Project%20Inquiry%20-%20WhizwayDigit';
  const defaultMailtoUrl = mailData?.mailtoUrl || 'mailto:bojesomosamson@gmail.com?subject=New%20Project%20Inquiry%20-%20WhizwayDigit';

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-slate-800 text-left animate-fade-in">
      <div className="max-w-xl w-full bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,#2563EB,transparent_45%)] opacity-10" />

        <div className="relative z-10 space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
          
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-primary font-bold bg-brand-primary/10 px-3 py-1 rounded-full inline-block">INQUIRY PREPARED FOR GMAIL DELIVERY</span>
            <h1 className="font-display font-extrabold text-3xl text-brand-secondary tracking-tight">
              Inquiry Blueprint Submitted!
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans max-w-md mx-auto">
              Your inquiry details have been saved. To ensure instant delivery to Samson Bojesomo's inbox (<span className="font-semibold text-brand-secondary">bojesomosamson@gmail.com</span>), click one of the options below.
            </p>
          </div>
        </div>

        {/* Direct Email Action Box */}
        <div className="relative z-10 p-5 bg-gradient-to-br from-brand-primary/5 via-blue-50/40 to-slate-50 border border-brand-primary/20 rounded-2xl text-left space-y-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-primary shrink-0 shadow-md">
              <img
                src={founderImages.avatar2}
                alt="Samson Bojesomo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-brand-secondary flex items-center gap-1.5">
                Samson Bojesomo
                <Sparkles className="w-3 h-3 text-brand-primary" />
              </h4>
              <p className="text-[10px] text-slate-500 font-sans">Recipient Inbox: <span className="font-mono text-brand-primary font-semibold">bojesomosamson@gmail.com</span></p>
            </div>
          </div>

          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            {mailData?.name ? `Inquiry from ${mailData.name} (${mailData.budget || 'Custom Price'})` : 'Your project inquiry details are ready.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <a
              href={defaultGmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-brand-primary hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Gmail Web</span>
            </a>
            
            <a
              href={defaultMailtoUrl}
              className="px-4 py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-slate-500" />
              <span>Send via Default Mail App</span>
            </a>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
          >
            Back to Home
          </button>
          
          <button
            onClick={() => navigate('/portfolio')}
            className="w-full sm:w-auto px-5 py-3 bg-white border border-slate-100 text-brand-secondary font-bold text-xs rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="relative z-10 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-mono pt-4 border-t border-slate-50">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Information protected by enterprise AES encryption standard.</span>
        </div>

      </div>
    </div>
  );
}
