import { useLocation } from 'react-router-dom';
import arelLogo from '../assets/arel_logo.png';
import arelProLogo from '../assets/Pro.png';
import beylikduzuLogo from '../assets/beylikduzu.jpg';
import taypaLogo from '../assets/Taypa.png';

export default function Footer() {
  const location = useLocation();
  
  if (location.pathname === '/qr') {
    return null;
  }

  return (
    <footer className="w-full py-12 mt-16 border-t border-white/5 relative z-10 bg-dark-950/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-8">
        
        {/* Ortadaki Proje Yazısı */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-white/80 text-sm sm:text-base font-medium leading-relaxed tracking-wide">
            Geleneksel Desenlerin Modernize Ederek Lazer Tekniği Uygulanması
          </p>
        </div>

        {/* Logolar / Kurumlar */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          
          {/* Arel Üniversitesi */}
          <div className="flex flex-col items-center justify-center gap-2 px-2">
            <img src={arelLogo} alt="İstanbul Arel Üniversitesi" className="h-10 sm:h-12 object-contain" />
            <span className="text-[9px] text-white/50 tracking-wider uppercase">İstanbul Arel Üniversitesi</span>
          </div>

          {/* Meslek Yüksekokulu Moda Tasarım */}
          <div className="flex flex-col items-center justify-center px-2 border-l border-white/10 pl-6 sm:pl-10">
            <span className="font-sans font-semibold text-xs tracking-widest uppercase text-white/90 text-center leading-tight">
              Meslek Yüksekokulu<br/>Moda Tasarım Programı
            </span>
          </div>
          
          {/* ArelPro */}
          <div className="flex flex-col items-center justify-center gap-2 px-2 border-l border-white/10 pl-6 sm:pl-10">
            <img src={arelProLogo} alt="ArelPro" className="h-10 sm:h-12 object-contain" />
            <span className="text-[9px] text-white/50 tracking-wider uppercase">ArelPro</span>
          </div>

          {/* Beylikdüzü Belediyesi */}
          <div className="flex flex-col items-center justify-center gap-2 px-2 border-l border-white/10 pl-6 sm:pl-10">
            <img src={beylikduzuLogo} alt="Beylikdüzü Belediyesi" className="h-10 sm:h-12 object-contain rounded-md" />
            <span className="text-[9px] text-white/50 tracking-wider uppercase text-center leading-tight">Beylikdüzü<br/>Belediyesi</span>
          </div>

          {/* Taypa */}
          <div className="flex flex-col items-center justify-center gap-2 px-2 border-l border-white/10 pl-6 sm:pl-10">
            <img src={taypaLogo} alt="Taypa" className="h-10 sm:h-12 object-contain" />
            <span className="text-[9px] text-white/50 tracking-wider uppercase">Taypa</span>
          </div>

        </div>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent mt-2" />

        <p className="text-white/30 text-xs uppercase tracking-widest font-medium text-center">
          İstanbul Arel Üniversitesi © 2026<br/>Dijital Sergi Projesi
        </p>
      </div>
    </footer>
  );
}
