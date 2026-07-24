import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Globe, Sparkles, AlertCircle, RefreshCw, Volume2 } from 'lucide-react';

interface VoiceRecorderProps {
  onTranscription: (text: string) => void;
  currentText: string;
}

const SUPPORTED_LANGUAGES = [
  { code: 'en-US', name: 'English' },
  { code: 'es-ES', name: 'Español (Spanish)' },
  { code: 'fr-FR', name: 'Français (French)' },
  { code: 'de-DE', name: 'Deutsch (German)' },
  { code: 'ar-SA', name: 'العربية (Arabic)' },
  { code: 'pt-BR', name: 'Português (Portuguese)' },
  { code: 'zh-CN', name: '中文 (Chinese)' },
  { code: 'hi-IN', name: 'हिन्दी (Hindi)' },
  { code: 'yo-NG', name: 'Yorùbá' },
  { code: 'ha-NG', name: 'Hausa' },
  { code: 'ru-RU', name: 'Русский (Russian)' },
  { code: 'it-IT', name: 'Italiano (Italian)' },
  { code: 'ja-JP', name: '日本語 (Japanese)' },
];

export default function VoiceRecorder({ onTranscription, currentText }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [selectedLang, setSelectedLang] = useState('en-US');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedStatus, setTranslatedStatus] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<any>(null);

  // Persistence refs so text never disappears when pausing or restarting
  const baseTextRef = useRef<string>('');
  const lastFullTextRef = useRef<string>('');
  const shouldKeepListeningRef = useRef<boolean>(false);
  const currentLangRef = useRef<string>(selectedLang);

  useEffect(() => {
    currentLangRef.current = selectedLang;
  }, [selectedLang]);

  useEffect(() => {
    return () => {
      stopRecording();
    };
  }, []);

  const startRecording = async () => {
    setErrorMessage(null);
    setTranslatedStatus(null);

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setErrorMessage(
        'Speech recognition is not natively supported in this browser window. Please use Google Chrome, Microsoft Edge, or Safari.'
      );
      return;
    }

    // Save existing text as base before starting
    baseTextRef.current = currentText.trim();
    lastFullTextRef.current = currentText.trim();
    shouldKeepListeningRef.current = true;

    // Try acquiring media stream for visual feedback / mic check (non-blocking)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;
      } catch (err) {
        console.warn('getUserMedia warning (continuing with SpeechRecognition):', err);
      }
    }

    const initRecognition = () => {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = currentLangRef.current;

        recognition.onstart = () => {
          setIsRecording(true);
          if (!timerRef.current) {
            setRecordingTime(0);
            timerRef.current = setInterval(() => {
              setRecordingTime((prev) => prev + 1);
            }, 1000);
          }
        };

        recognition.onresult = (event: any) => {
          let sessionFinal = '';
          let sessionInterim = '';

          for (let i = 0; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              sessionFinal += transcript + ' ';
            } else {
              sessionInterim += transcript;
            }
          }

          const currentSpeech = (sessionFinal + ' ' + sessionInterim).trim();

          if (currentSpeech) {
            const combined = baseTextRef.current
              ? `${baseTextRef.current} ${currentSpeech}`.trim()
              : currentSpeech;

            lastFullTextRef.current = combined;
            onTranscription(combined);
          }
        };

        recognition.onerror = (event: any) => {
          console.warn('Speech recognition notice:', event.error);
          if (event.error === 'not-allowed') {
            setErrorMessage(
              'Microphone access blocked. Please allow mic access in your browser bar.'
            );
            shouldKeepListeningRef.current = false;
            stopRecording();
          } else if (event.error === 'no-speech') {
            // Ignore transient no-speech, let onend handle clean restart if active
          }
        };

        recognition.onend = () => {
          // If user hasn't explicitly stopped, lock in what was spoken so far & restart seamlessly!
          if (shouldKeepListeningRef.current) {
            baseTextRef.current = lastFullTextRef.current;
            try {
              recognition.start();
            } catch (e) {
              // If restart fails immediately, recreate recognition instance
              setTimeout(() => {
                if (shouldKeepListeningRef.current) {
                  initRecognition();
                }
              }, 200);
            }
          } else {
            setIsRecording(false);
            if (timerRef.current) {
              clearInterval(timerRef.current);
              timerRef.current = null;
            }
          }
        };

        recognitionRef.current = recognition;
        recognition.start();
      } catch (err: any) {
        console.error('Failed to start speech recognition:', err);
        setErrorMessage('Could not launch voice recognition. Please try clicking the mic button again.');
        setIsRecording(false);
      }
    };

    initRecognition();
  };

  const stopRecording = () => {
    shouldKeepListeningRef.current = false;

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.error(e);
      }
      recognitionRef.current = null;
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setIsRecording(false);

    // If language is non-English, auto-translate recorded text on finish
    if (!selectedLang.startsWith('en') && lastFullTextRef.current) {
      autoTranslateToEnglish(lastFullTextRef.current);
    }
  };

  const autoTranslateToEnglish = async (textToTranslate: string) => {
    if (!textToTranslate || textToTranslate.length < 3) return;

    setIsTranslating(true);
    setTranslatedStatus('Translating voice to English...');

    try {
      // Free MyMemory Translate API or client-side translation fallback
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          textToTranslate
        )}&langpair=${selectedLang.slice(0, 2)}|en`
      );
      const data = await response.json();

      if (data && data.responseData && data.responseData.translatedText) {
        const translatedText = data.responseData.translatedText;
        // Replace or append translated text in English
        const fullNewText = currentText
          ? `${currentText} [English Translation: ${translatedText}]`
          : translatedText;

        onTranscription(fullNewText);
        setTranslatedStatus('✨ Voice translated to English!');
      } else {
        setTranslatedStatus(null);
      }
    } catch (err) {
      console.error('Translation error:', err);
      setTranslatedStatus(null);
    } finally {
      setIsTranslating(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 border border-slate-200/80 p-2 rounded-xl">
        {/* Language selector */}
        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <Globe className="w-3.5 h-3.5 text-brand-primary" />
          <span className="font-medium text-[11px] hidden sm:inline">Speaking Language:</span>
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            disabled={isRecording}
            className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-semibold text-slate-700 focus:outline-none focus:border-brand-primary cursor-pointer"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Mic Control Button */}
        <div className="flex items-center gap-2">
          {isRecording ? (
            <button
              type="button"
              onClick={stopRecording}
              className="px-3.5 py-1.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md ring-2 ring-rose-300 animate-pulse flex items-center gap-2 cursor-pointer transition-all"
            >
              <MicOff className="w-3.5 h-3.5 animate-spin" />
              <span>Stop Recording ({formatTime(recordingTime)})</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={startRecording}
              className="px-3.5 py-1.5 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer transition-all"
            >
              <Mic className="w-3.5 h-3.5 text-amber-300" />
              <span>Voice Dictate (Click Mic)</span>
            </button>
          )}
        </div>
      </div>

      {/* Active Recording State Banner */}
      {isRecording && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping shrink-0" />
            <span className="font-semibold">
              Microphone Listening ({SUPPORTED_LANGUAGES.find((l) => l.code === selectedLang)?.name})... Speak clearly now!
            </span>
          </div>
          {/* Animated equalizer waves */}
          <div className="flex items-end gap-1 h-4">
            <span className="w-1 bg-rose-500 rounded-full h-2 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1 bg-rose-500 rounded-full h-4 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1 bg-rose-500 rounded-full h-3 animate-bounce" style={{ animationDelay: '300ms' }} />
            <span className="w-1 bg-rose-500 rounded-full h-1 animate-bounce" style={{ animationDelay: '450ms' }} />
          </div>
        </div>
      )}

      {/* Translation Status Indicator */}
      {translatedStatus && (
        <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-700 font-medium flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{translatedStatus}</span>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2 animate-fade-in">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-medium">{errorMessage}</p>
            <p className="text-[10px] text-amber-700">
              Tip: Make sure microphone permissions are allowed in your browser settings or top URL bar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
