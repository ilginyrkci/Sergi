import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import arelLogo from '../assets/arel_logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDeep = location.pathname !== '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500
        ${scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 flex items-center justify-center bg-white/5 rounded-lg p-1.5 border border-white/10 group-hover:border-gold-500/40 transition-colors duration-300">
            <img src={arelLogo} alt="İstanbul Arel Üniversitesi Logo" className="h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-white/90 group-hover:text-white transition-colors leading-tight">
              Dijital Sergi
            </span>
            <span className="text-[10px] text-white/50 group-hover:text-gold-400 transition-colors uppercase tracking-wider">
              İstanbul Arel Üniversitesi
            </span>
          </div>
        </Link>

        {/* Right side */}
        <nav className="flex items-center gap-2">
          {isDeep && (
            <Link
              to="/"
              className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm px-3 py-1.5 rounded-lg
                hover:bg-white/5 transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">Tüm Eserler</span>
            </Link>
          )}

          <Link
            to="/qr"
            id="nav-qr-link"
            className="flex items-center gap-1.5 text-white/40 hover:text-gold-400 text-xs px-2.5 py-1.5
              rounded-lg hover:bg-white/5 transition-all duration-200"
            title="QR Kodları Yazdır"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
            </svg>
            <span className="hidden sm:inline">QR</span>
          </Link>

          <div className="exhibit-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Sergi Aktif
          </div>
        </nav>
      </div>
    </header>
  );
}
