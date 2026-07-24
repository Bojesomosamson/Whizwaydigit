import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if preloader was already shown in this session
    const hasPreloaded = sessionStorage.getItem('whizway_preloader_shown');
    if (hasPreloaded) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('whizway_preloader_shown', 'true');
          }, 400);
          return 100;
        }
        return prev + 10;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-slate-950 text-white flex flex-col items-center justify-center p-6 select-none transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center space-y-6 max-w-sm mx-auto">
        {/* Pulsing Logo Container */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-brand-primary/20 blur-xl animate-pulse" />
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-900 border border-white/10 p-3 shadow-2xl flex items-center justify-center relative z-10">
            <img
              src="https://res.cloudinary.com/h4ihjmt1/image/upload/v1784822212/my_logo-removebg-preview_mj5zdb.png"
              alt="WhizwayDigit Logo"
              className="w-full h-full object-contain drop-shadow-md animate-pulse"
            />
          </div>
        </div>

        {/* Brand Name & Tagline */}
        <div className="space-y-1.5">
          <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white">
            Whizway<span className="text-brand-primary">Digit</span>
          </h1>
          <p className="font-mono text-[10px] tracking-widest text-slate-400 uppercase font-bold">
            HIGH-CONVERTING DIGITAL ARCHITECTURE
          </p>
        </div>

        {/* Loading Progress Line */}
        <div className="w-48 sm:w-56 space-y-2">
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-brand-primary via-blue-400 to-brand-accent rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(13,110,253,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 font-semibold">
            <span>LOADING ASSETS</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
