import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return prev + Math.random() * 18;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950
        transition-opacity duration-500 ${progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-900/20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gold-600/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo / Icon */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl border border-gold-500/40 flex items-center justify-center glass-card">
            <svg className="w-8 h-8 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M3 12h1m16 0h1M5.636 5.636l.707.707M17.657 17.657l.707.707M5.636 18.364l.707-.707M17.657 6.343l.707-.707" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <div className="absolute inset-0 rounded-2xl border border-gold-500/20 animate-ping" />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold gold-gradient-text mb-1">
            Dijital Sergi
          </h1>
          <p className="text-white/40 text-sm tracking-widest uppercase">
            2026 · Öğrenci Eserleri
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 flex flex-col items-center gap-2">
          <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="text-white/30 text-xs font-mono">{Math.min(Math.round(progress), 100)}%</span>
        </div>
      </div>
    </div>
  );
}
