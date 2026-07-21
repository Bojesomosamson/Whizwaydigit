import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { MessageCircle, ArrowUp, Send, CheckCircle2 } from 'lucide-react';

export default function WhatsAppButton() {
  const { navigate } = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showQuickChat, setShowQuickChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatSent, setChatSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show a greeting tooltip after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    setShowQuickChat(!showQuickChat);
    setShowTooltip(false);
  };

  const handleSendQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Simulate sending message to WhatsApp / Messenger on-screen
    setChatSent(true);
    setTimeout(() => {
      // Re-route to WhatsApp with prefilled text
      const prefilledText = encodeURIComponent(`Hello Samson B, I'm reaching out from WhizwayDigit regarding a new project: "${chatMessage}"`);
      window.open(`https://wa.me/1000000000?text=${prefilledText}`, '_blank', 'noopener,noreferrer');
      setChatMessage('');
      setChatSent(false);
      setShowQuickChat(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3.5 z-40">
      
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-brand-dark/80 backdrop-blur-md border border-white/10 hover:border-brand-primary text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-brand-primary" />
        </button>
      )}

      {/* Floating Messenger Quick Form */}
      {showQuickChat && (
        <div className="glass-panel-dark bg-brand-dark border border-white/10 p-4 rounded-xl shadow-2xl w-[310px] mb-2 animate-fade-in-up text-left">
          <div className="flex items-center gap-2 pb-3 border-b border-white/5 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h4 className="font-display font-bold text-xs text-white">Chat with Samson B</h4>
              <p className="text-[10px] text-slate-400">Founder & Project Strategist</p>
            </div>
          </div>

          {chatSent ? (
            <div className="py-4 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
              <p className="text-xs text-slate-200 font-medium">Opening WhatsApp Chat...</p>
              <p className="text-[10px] text-slate-500">Redirecting to secure window.</p>
            </div>
          ) : (
            <form onSubmit={handleSendQuery} className="space-y-3">
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Describe your project briefly. I will formulate a customized estimate and reply immediately.
              </p>
              <textarea
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Describe your project (e.g. Speed optimization or custom Shopify theme)..."
                rows={3}
                className="w-full bg-slate-900 border border-white/10 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200 resize-none"
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 hover:shadow-[0_0_10px_rgba(13,110,253,0.3)] hover:scale-[1.01] transition-all duration-200 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Connect on WhatsApp
              </button>
            </form>
          )}
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="relative">
        {showTooltip && (
          <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 bg-brand-dark border border-white/10 text-white text-[11px] font-medium py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap animate-fade-in flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Hey! Chat with Samson B?</span>
          </div>
        )}

        <button
          onClick={handleWhatsAppClick}
          className="p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
          aria-label="Connect via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
}
