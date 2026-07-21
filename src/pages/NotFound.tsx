import React from 'react';
import { useRouter } from '../context/RouterContext';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export default function NotFound() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-slate-800 text-left animate-fade-in">
      <div className="max-w-md w-full bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-xl text-center space-y-6">
        
        <div className="space-y-4">
          <AlertTriangle className="w-14 h-14 text-amber-500 mx-auto animate-pulse" />
          
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">ERROR CODE 404</span>
            <h1 className="font-display font-extrabold text-2xl text-brand-secondary tracking-tight">
              Page Not Found
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed font-sans px-4">
              The layout or sub-section you are trying to visit has either moved or doesn\'t exist. No worries — our core systems are blazingly fast and fully redundant.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
          >
            Back to Home
          </button>
          
          <button
            onClick={() => navigate('/services')}
            className="w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-100 text-brand-secondary font-bold text-xs rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Our Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
