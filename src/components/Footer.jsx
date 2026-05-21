import { useLocation } from 'react-router-dom';
import arelLogo from '../assets/arel_logo.png';

export default function Footer() {
  const location = useLocation();
  
  if (location.pathname === '/qr') {
    return null;
  }

  return (
    <footer className="w-full py-10 mt-12 border-t border-white/5 relative z-10 bg-dark-950/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
        <div className="h-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <img src={arelLogo} alt="İstanbul Arel Üniversitesi" className="h-full object-contain" />
        </div>
        <p className="text-white/30 text-xs uppercase tracking-widest font-medium text-center">
          İstanbul Arel Üniversitesi © 2026<br/>Dijital Sergi Projesi
        </p>
      </div>
    </footer>
  );
}
