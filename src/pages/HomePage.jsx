import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { students } from '../data/students';
import ParticleBackground from '../components/ParticleBackground';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.title = 'Dijital Sergi 2026 — Eserler';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', '2026 dijital sergi koleksiyonu. 8 sanatçı, 24 özgün eser.');
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet-900/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-600/8 blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-indigo-900/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">

        {/* Hero */}
        <header className={`text-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-500/50" />
            <span className="exhibit-badge">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Dijital Sergi · 2026
            </span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="gold-gradient-text animate-glow">Eserler</span>
            <br />
            <span className="text-white/90">Sergisi</span>
          </h1>

          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-4">
            8 sanatçı, 24 özgün eser. Dijital sanatın sınırlarını keşfedin.
          </p>

          <div className="flex items-center justify-center gap-8 sm:gap-12 mt-8">
            {[
              { value: '8', label: 'Sanatçı' },
              { value: '24', label: 'Eser' },
              { value: '2026', label: 'Yıl' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-bold gold-gradient-text">{s.value}</div>
                <div className="text-white/30 text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-white/20 text-xs uppercase tracking-widest">Sanatçılar</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Grid */}
        <section
          id="students-grid"
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 transition-all duration-700 delay-200
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          aria-label="Sanatçı koleksiyonu"
        >
          {students.map((student, idx) => (
            <StudentCard key={student.id} student={student} index={idx} />
          ))}
        </section>

        {/* QR shortcut */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/qr"
            id="home-qr-link"
            className="flex items-center gap-2 text-white/20 hover:text-gold-400/60 text-xs transition-colors duration-300"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
            </svg>
            QR Kodları Görüntüle
          </Link>
        </div>

        <footer className="mt-12 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
          <p className="text-white/20 text-sm">© 2026 Dijital Sergi · Tüm hakları saklıdır</p>
        </footer>
      </div>
    </main>
  );
}

// ── Student Card ──────────────────────────────────────────────
const CARD_COLORS = [
  'from-violet-900/50 to-indigo-900/30',
  'from-blue-900/50 to-cyan-900/30',
  'from-amber-900/50 to-orange-900/30',
  'from-emerald-900/50 to-teal-900/30',
  'from-rose-900/50 to-pink-900/30',
  'from-purple-900/50 to-fuchsia-900/30',
  'from-sky-900/50 to-blue-900/30',
  'from-yellow-900/50 to-amber-900/30',
];

function StudentCard({ student, index }) {
  const previewWork = student.works.find((w) => w.image) || student.works[0];
  const color = CARD_COLORS[index % CARD_COLORS.length];

  return (
    <article
      className="group relative glass-card overflow-hidden
        hover:border-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/10
        transition-all duration-500 hover:-translate-y-2 cursor-pointer"
    >
      {/* Preview */}
      <div className={`relative h-36 sm:h-44 overflow-hidden bg-gradient-to-br ${color}`}>
        {previewWork?.image ? (
          <img
            src={previewWork.image}
            alt={`Sanatçı ${student.id} önizleme`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-5xl font-bold text-white/10 select-none">
              {String(student.id).padStart(2, '0')}
            </span>
          </div>
        )}
        <div className="absolute inset-0 image-overlay" />

        <div className="absolute top-2.5 left-2.5">
          <span className="font-mono text-[10px] text-white/50 glass-card-dark px-2 py-0.5 rounded-lg">
            #{String(student.id).padStart(2, '0')}
          </span>
        </div>
        <div className="absolute bottom-2.5 right-2.5">
          <span className="exhibit-badge text-[10px]">{student.works.length} Eser</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h2 className="font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors">
            Sanatçı {student.id}
          </h2>
          <p className="text-white/30 text-[10px] mt-0.5 truncate">
            {student.works.map((w) => w.title).join(' · ')}
          </p>
        </div>
        <Link
          to={`/student/${student.id}`}
          id={`view-student-${student.id}`}
          className="btn-gold w-full justify-center text-xs py-2"
        >
          Eserleri Gör
        </Link>
      </div>
    </article>
  );
}
