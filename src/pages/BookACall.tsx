import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  Calendar, 
  Clock, 
  Video, 
  ShieldCheck, 
  ArrowRight, 
  AlertCircle, 
  ExternalLink, 
  FileText 
} from 'lucide-react';

export default function BookACall() {
  const { navigate } = useRouter();
  
  // Tabs: 'calendly' or 'form'
  const [activeTab, setActiveTab] = useState<'calendly' | 'form'>('calendly');
  const [calendlyLoading, setCalendlyLoading] = useState(true);

  // Auto hide spinner after max 1 second for ultra fast instant experience
  React.useEffect(() => {
    if (activeTab === 'calendly') {
      setCalendlyLoading(true);
      const timer = setTimeout(() => {
        setCalendlyLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);
  
  // Hardcoded direct calendly URL (moved configuration entirely out of client viewport)
  const calendlyUrl = 'https://calendly.com/bojesomosamson/30min';

  // Fallback booking form states
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Format link for optimal embed display
  const getCleanCalendlyUrl = (url: string) => {
    let cleanUrl = url.trim();
    try {
      const parsed = new URL(cleanUrl);
      parsed.searchParams.set('hide_landing_page_details', '1');
      parsed.searchParams.set('hide_gdpr_banner', '1');
      return parsed.toString();
    } catch (e) {
      return cleanUrl;
    }
  };

  // Hardcoded calendar options representing next business days
  const days = [
    { num: 6, dayName: 'Mon', date: 'Jul 6' },
    { num: 7, dayName: 'Tue', date: 'Jul 7' },
    { num: 8, dayName: 'Wed', date: 'Jul 8' },
    { num: 9, dayName: 'Thu', date: 'Jul 9' },
    { num: 10, dayName: 'Fri', date: 'Jul 10' }
  ];

  const timeslots = [
    '09:00 AM - 09:45 AM EST',
    '11:00 AM - 11:45 AM EST',
    '02:00 PM - 02:45 PM EST',
    '04:00 PM - 04:45 PM EST'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (selectedDay === null) { setError('Please select a calendar day for your consultation.'); return; }
    if (!selectedSlot) { setError('Please select an active 45-minute timeslot.'); return; }
    if (!name.trim()) { setError('Please provide your name.'); return; }
    if (!email.trim() || !email.includes('@')) { setError('Please enter a valid work email.'); return; }

    setSubmitting(true);
    
    setTimeout(() => {
      const chosenDayObj = days.find((d) => d.num === selectedDay);
      const bookingData = {
        name,
        email,
        date: chosenDayObj ? `${chosenDayObj.dayName}, ${chosenDayObj.date}` : 'Custom Date',
        timeSlot: selectedSlot,
        timestamp: new Date().toISOString()
      };

      const existingBookings = JSON.parse(localStorage.getItem('call_bookings') || '[]');
      existingBookings.push(bookingData);
      localStorage.setItem('call_bookings', JSON.stringify(existingBookings));

      setSubmitting(false);
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="space-y-12 py-16 animate-fade-in text-slate-800 text-left">
      
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-8 text-center">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-primary/5 rounded-full filter blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-semibold text-brand-primary">
            DIRECT FOUNDER CALENDAR ACCESS
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-secondary tracking-tight">
            Schedule Your Consultation Call
          </h1>
          <p className="text-slate-500 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Select your preferred booking experience below. Book instantly using our live Calendly scheduler, or request custom consultation requirements.
          </p>
        </div>
      </section>

      {/* Booking Method Tab Selector */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('calendly')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-300 ${
                activeTab === 'calendly'
                  ? 'bg-white text-brand-secondary shadow-md'
                  : 'text-slate-500 hover:text-brand-secondary'
              }`}
            >
              <Calendar className="w-4 h-4 text-brand-primary" />
              <span>Calendly Instant Booking</span>
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-300 ${
                activeTab === 'form'
                  ? 'bg-white text-brand-secondary shadow-md'
                  : 'text-slate-500 hover:text-brand-secondary'
              }`}
            >
              <FileText className="w-4 h-4 text-brand-primary" />
              <span>Interactive Request Form</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        {activeTab === 'calendly' ? (
          <div className="space-y-8 animate-fade-in">
            
            {/* Embedded Calendar Widget Container */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
              <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-white/5 text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-xs text-slate-300 font-medium tracking-wider uppercase">SECURE LIVE EMBED</span>
                </div>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-white font-mono text-[10px] sm:text-[11px] transition-colors duration-200"
                >
                  <span>Open in Calendly</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative w-full h-[650px] bg-slate-50">
                {calendlyLoading && (
                  <div className="absolute inset-0 z-30 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 space-y-3 transition-opacity duration-300">
                    <img
                      src="https://res.cloudinary.com/h4ihjmt1/image/upload/v1784822212/my_logo-removebg-preview_mj5zdb.png"
                      alt="WhizwayDigit Logo"
                      className="w-12 h-12 object-contain animate-bounce"
                    />
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-brand-primary border-t-transparent animate-spin" />
                      <span className="font-mono text-xs font-bold text-slate-700">Connecting Calendly Schedule...</span>
                    </div>
                  </div>
                )}
                <iframe
                  src={getCleanCalendlyUrl(calendlyUrl)}
                  className="w-full h-full border-0"
                  title="Schedule Consultation"
                  allow="geolocation; microphone; camera; clipboard-write"
                  id="calendly-iframe"
                  onLoad={() => setCalendlyLoading(false)}
                />
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2.5 text-[11px] text-slate-500 font-sans">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>Your booking is completely secure. We will automatically follow up with you via your submitted contact channels.</span>
              </div>
            </div>

          </div>
        ) : (
          /* Original scheduling choices */
          <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 animate-fade-in">
            
            {/* Left scheduling choices */}
            <div className="lg:col-span-8 space-y-8 text-left">
              
              {error && (
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-2.5 text-xs text-rose-600 font-sans animate-fade-in">
                  <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Step 1: Select Day */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-sm text-brand-secondary flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center font-mono font-bold text-[10px] text-brand-primary">1</span>
                  <span>Select Consultation Day</span>
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                  {days.map((d) => (
                    <div
                      key={d.num}
                      onClick={() => setSelectedDay(d.num)}
                      className={`border p-4 rounded-xl text-center cursor-pointer transition-all duration-200 ${
                        selectedDay === d.num
                          ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary/25'
                          : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                      }`}
                    >
                      <span className="block text-[10px] font-mono tracking-widest uppercase text-slate-400 leading-none mb-1.5">{d.dayName}</span>
                      <span className="block font-display font-extrabold text-base text-brand-secondary">{d.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Time Slot */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-sm text-brand-secondary flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center font-mono font-bold text-[10px] text-brand-primary">2</span>
                  <span>Select 45-Minute Timeslot</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {timeslots.map((slot) => (
                    <div
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`border p-3.5 rounded-xl text-center cursor-pointer transition-all duration-200 text-xs font-semibold flex items-center justify-center gap-2 ${
                        selectedSlot === slot
                          ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary/25'
                          : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                      }`}
                    >
                      <Clock className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>{slot}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Bio Form */}
              <form onSubmit={handleBooking} className="space-y-4">
                <h3 className="font-display font-bold text-sm text-brand-secondary flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center font-mono font-bold text-[10px] text-brand-primary">3</span>
                  <span>Inquirer Bio</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3.5 py-3 text-xs text-brand-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <input
                      type="email"
                      placeholder="Corporate Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3.5 py-3 text-xs text-brand-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 bg-slate-900 hover:bg-brand-primary disabled:bg-slate-300 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Confirming Appointment...</span>
                    ) : (
                      <>
                        <span>Secure Invitation Link</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>

            {/* Right Detail Panel */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-100 rounded-xl p-6 space-y-6 text-left">
              <h4 className="font-display font-bold text-sm text-brand-secondary pb-3 border-b border-slate-200">
                Meeting Summary
              </h4>

              <div className="space-y-4 font-sans text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>Interactive Video Call via Google Meet</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>45-Minute Consultation & Speed Review</span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-5 space-y-1">
                <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-mono">SELECTED SLOT</span>
                <span className="block font-display font-bold text-xs text-brand-secondary">
                  {selectedDay !== null && days.find((d) => d.num === selectedDay)
                    ? days.find((d) => d.num === selectedDay)?.date
                    : 'No Day Selected'}
                </span>
                <span className="block text-[11px] text-slate-500 leading-none">
                  {selectedSlot || 'No Time Slot Chosen'}
                </span>
              </div>

              <div className="border-t border-slate-200 pt-5 flex items-center gap-2 text-[10px] text-slate-400 font-mono leading-relaxed">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>Free call. Samson B manages scopes strictly 1-on-1.</span>
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
