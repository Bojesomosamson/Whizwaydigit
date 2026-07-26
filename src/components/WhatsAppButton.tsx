import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { MessageCircle, ArrowUp, Send, CheckCircle2, GripVertical, ExternalLink, X, Star, Mic } from 'lucide-react';

function useDraggableWidget(defaultLeftPx: number, defaultTopPx: number) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initX: number; initY: number }>({
    startX: 0,
    startY: 0,
    initX: 0,
    initY: 0,
  });

  useEffect(() => {
    if (!pos && typeof window !== 'undefined') {
      setPos({ x: defaultLeftPx, y: defaultTopPx });
    }
  }, [defaultLeftPx, defaultTopPx, pos]);

  const handleStartDrag = (clientX: number, clientY: number) => {
    setIsDragging(true);
    const currentX = pos?.x ?? defaultLeftPx;
    const currentY = pos?.y ?? defaultTopPx;
    dragStartRef.current = {
      startX: clientX,
      startY: clientY,
      initX: currentX,
      initY: currentY,
    };
  };

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!isDragging) return;
      const dx = clientX - dragStartRef.current.startX;
      const dy = clientY - dragStartRef.current.startY;

      let newX = dragStartRef.current.initX + dx;
      let newY = dragStartRef.current.initY + dy;

      const padding = 12;
      newX = Math.max(padding, Math.min(window.innerWidth - 180, newX));
      newY = Math.max(padding, Math.min(window.innerHeight - 80, newY));

      setPos({ x: newX, y: newY });
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const onEndDrag = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onEndDrag);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onEndDrag);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEndDrag);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEndDrag);
    };
  }, [isDragging]);

  return {
    pos,
    isDragging,
    handleMouseDown: (e: React.MouseEvent) => handleStartDrag(e.clientX, e.clientY),
    handleTouchStart: (e: React.TouchEvent) => e.touches.length === 1 && handleStartDrag(e.touches[0].clientX, e.touches[0].clientY),
  };
}

export default function WhatsAppButton() {
  const { navigate } = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showQuickChat, setShowQuickChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatSent, setChatSent] = useState(false);
  const [isListeningChat, setIsListeningChat] = useState(false);
  const [micErrorMsg, setMicErrorMsg] = useState<string | null>(null);
  const chatRecognitionRef = useRef<any>(null);

  // Independent draggable widgets for Fiverr & Upwork
  const fiverrWidget = useDraggableWidget(20, 220);
  const upworkWidget = useDraggableWidget(20, 275);

  const toggleChatVoice = async () => {
    setMicErrorMsg(null);
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setMicErrorMsg('Voice dictation is restricted on this browser. You can tap below to open WhatsApp and send voice notes directly!');
      return;
    }

    if (isListeningChat) {
      if (chatRecognitionRef.current) {
        try { chatRecognitionRef.current.stop(); } catch (e) {}
      }
      setIsListeningChat(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false; // continuous = true often fails on mobile speech recognition
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListeningChat(true);
        setMicErrorMsg(null);
      };

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        if (transcript.trim()) {
          setChatMessage((prev) => (prev ? `${prev} ${transcript.trim()}`.trim() : transcript.trim()));
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition notice:', event.error);
        setIsListeningChat(false);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setMicErrorMsg('Microphone access restricted on mobile. Tap below to chat or send voice notes directly on WhatsApp!');
        } else if (event.error !== 'no-speech') {
          setMicErrorMsg('Voice dictation unavailable. Please type your message or connect on WhatsApp!');
        }
      };

      recognition.onend = () => setIsListeningChat(false);

      chatRecognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      console.error('Speech recognition launch error:', e);
      setIsListeningChat(false);
      setMicErrorMsg('Mic permission restricted. Tap "Start WhatsApp Chat" to talk or send voice notes directly!');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
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

    setChatSent(true);
    setTimeout(() => {
      const prefilledText = encodeURIComponent(`Hello Samson B, I'm reaching out from WhizwayDigit regarding a new project: "${chatMessage}"`);
      window.open(`https://wa.me/14092686116?text=${prefilledText}`, '_blank', 'noopener,noreferrer');
      setChatMessage('');
      setChatSent(false);
      setShowQuickChat(false);
    }, 1200);
  };

  return (
    <>
      {/* 1. SEPARATE MOVABLE FIVERR FLOATING CIRCULAR GLASS BUTTON */}
      {fiverrWidget.pos && (
        <div
          style={{ left: `${fiverrWidget.pos.x}px`, top: `${fiverrWidget.pos.y}px` }}
          className="fixed z-40 hidden sm:flex items-center gap-1 bg-transparent backdrop-blur-xs border border-slate-300/40 dark:border-white/20 hover:border-emerald-400 p-1 rounded-full shadow-md hover:shadow-xl transition-all select-none group"
        >
          <div
            onMouseDown={fiverrWidget.handleMouseDown}
            onTouchStart={fiverrWidget.handleTouchStart}
            className="p-1 text-slate-400 hover:text-white cursor-grab active:cursor-grabbing flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            title="Drag Fiverr button"
          >
            <GripVertical className="w-3 h-3" />
          </div>

          <a
            href="https://www.fiverr.com/whizwaydigit0?public_mode=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer font-extrabold text-xs tracking-tighter"
            title="Order on Fiverr (Verified Pro)"
          >
            fi
          </a>
        </div>
      )}

      {/* 2. SEPARATE MOVABLE UPWORK FLOATING CIRCULAR GLASS BUTTON */}
      {upworkWidget.pos && (
        <div
          style={{ left: `${upworkWidget.pos.x}px`, top: `${upworkWidget.pos.y}px` }}
          className="fixed z-40 hidden sm:flex items-center gap-1 bg-transparent backdrop-blur-xs border border-slate-300/40 dark:border-white/20 hover:border-emerald-400 p-1 rounded-full shadow-md hover:shadow-xl transition-all select-none group"
        >
          <div
            onMouseDown={upworkWidget.handleMouseDown}
            onTouchStart={upworkWidget.handleTouchStart}
            className="p-1 text-slate-400 hover:text-white cursor-grab active:cursor-grabbing flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            title="Drag Upwork button"
          >
            <GripVertical className="w-3 h-3" />
          </div>

          <a
            href="https://www.upwork.com/freelancers/~014763bef730442a8f?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
            title="Hire on Upwork (Top Rated Plus)"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.396-2.131 1.764-2.822 3.123-2.822 1.256 0 2.203.882 2.203 2.535 0 1.637-.932 2.632-2.488 2.632zm0-7.318c-3.238 0-5.32 2.05-6.09 4.316-1.163-1.638-1.93-3.665-2.227-5.592H7.226v8.423c0 1.832-.86 2.871-2.316 2.871-1.455 0-2.316-1.039-2.316-2.871V4.564H0v8.423c0 3.513 2.261 5.45 5.038 5.45 2.776 0 5.038-1.937 5.038-5.45V11.23c.396 1.487 1.13 2.946 2.13 4.145l-1.614 7.625h3.023l1.194-5.637c1.171.815 2.53 1.282 4.024 1.282 3.238 0 5.167-2.179 5.167-5.485 0-3.305-1.929-5.322-5.439-5.322z" />
            </svg>
          </a>
        </div>
      )}

      {/* 3. FIXED CIRCULAR WHATSAPP CHATBOT WIDGET (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-slate-900/90 backdrop-blur-md border border-white/15 hover:border-brand-primary text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Scroll back to top"
            title="Scroll Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-brand-primary" />
          </button>
        )}

        {/* Quick Chat Popup Window */}
        {showQuickChat && (
          <div className="bg-slate-950/98 backdrop-blur-2xl border border-white/15 p-4 rounded-2xl shadow-2xl w-[320px] mb-1 animate-fade-in-up text-left">
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
                    SB
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 absolute -bottom-0.5 -right-0.5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white">Samson Bojesomo</h4>
                  <p className="text-[10px] text-emerald-400 font-mono font-semibold">Online & Available</p>
                </div>
              </div>
              <button
                onClick={() => setShowQuickChat(false)}
                className="p-1 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {chatSent ? (
              <div className="py-5 text-center space-y-2">
                <CheckCircle2 className="w-9 h-9 text-emerald-400 mx-auto animate-bounce" />
                <p className="text-xs text-slate-200 font-medium">Opening Direct WhatsApp Window...</p>
                <p className="text-[10px] text-slate-500">Connecting directly to Samson B.</p>
              </div>
            ) : (
              <form onSubmit={handleSendQuery} className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Hi there! 👋 Need a fast website or build? Type or speak:
                  </p>
                  <button
                    type="button"
                    onClick={toggleChatVoice}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      isListeningChat
                        ? 'bg-rose-600 text-white animate-pulse shadow-md'
                        : 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/30'
                    }`}
                    title="Dictate message using voice microphone"
                  >
                    <Mic className="w-3 h-3" />
                    <span>{isListeningChat ? 'Listening...' : 'Voice'}</span>
                  </button>
                </div>

                {/* Inline listening feedback */}
                {isListeningChat && (
                  <div className="p-2 bg-rose-500/20 border border-rose-500/40 rounded-xl text-[11px] text-rose-200 flex items-center gap-2 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping shrink-0" />
                    <span>Listening to your voice... Speak clearly into your phone.</span>
                  </div>
                )}

                {/* Inline mic notice or fallback for mobile */}
                {micErrorMsg && (
                  <div className="p-2 bg-amber-500/15 border border-amber-500/30 rounded-xl text-[10px] text-amber-200 space-y-1">
                    <p>{micErrorMsg}</p>
                    <a
                      href="https://wa.me/14092686116?text=Hello%20Samson%20B,%20I'm%20reaching%20out%20to%20send%20a%20voice%20note%20about%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 font-bold hover:underline"
                    >
                      <MessageCircle className="w-3 h-3" />
                      Open WhatsApp App to Send Voice Note →
                    </a>
                  </div>
                )}

                <textarea
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Describe your project (e.g. Speed optimization or custom React portal)..."
                  rows={3}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:scale-[1.01] active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Start WhatsApp Chat
                </button>
              </form>
            )}
          </div>
        )}

        {/* Circular Premium WhatsApp Chatbot Trigger */}
        <div className="relative group flex items-center">
          {/* Tooltip Badge beside circle (to the left) */}
          {showTooltip && !showQuickChat && (
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-slate-950/95 border border-white/20 text-white text-[11px] font-bold py-2 px-3.5 rounded-full shadow-2xl whitespace-nowrap animate-fade-in flex items-center gap-2 cursor-pointer"
                 onClick={handleWhatsAppClick}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Chat with Samson B</span>
            </div>
          )}

          <button
            onClick={handleWhatsAppClick}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 hover:from-emerald-500 hover:to-emerald-300 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.4)] border-2 border-emerald-300/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer relative"
            aria-label="Chat with Samson B on WhatsApp"
            title="Chat with Samson B on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white/20 stroke-[2.2]" />
            {/* Pulsing online badge */}
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 absolute top-0 right-0 animate-pulse" />
          </button>
        </div>

      </div>
    </>
  );
}
