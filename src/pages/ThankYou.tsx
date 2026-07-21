import React from 'react';
import { useRouter } from '../context/RouterContext';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ThankYou() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-slate-800 text-left animate-fade-in">
      <div className="max-w-xl w-full bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,#2563EB,transparent_45%)] opacity-10" />

        <div className="relative z-10 space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
          
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-primary font-bold">BLUEPRINT LOGGED SUCCESS</span>
            <h1 className="font-display font-extrabold text-3xl text-brand-secondary tracking-tight">
              Thank You!
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans max-w-sm mx-auto">
              Your scoping details have been successfully synchronized with our active CRM pipeline. Samson B is reviewing your current speed and layout challenges.
            </p>
          </div>
        </div>

        <div className="relative z-10 p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3 text-left">
          <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center font-display font-extrabold text-white text-[10px] shrink-0">
            SB
          </div>
          <div>
            <h4 className="font-display font-bold text-xs text-brand-secondary">Next Action Call</h4>
            <p className="text-[10px] text-slate-400 font-sans mt-0.5">We will contact you within 12 business hours on your preferred channel.</p>
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
            onClick={() => navigate('/blog')}
            className="w-full sm:w-auto px-5 py-3 bg-white border border-slate-100 text-brand-secondary font-bold text-xs rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Read Essays</span>
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
