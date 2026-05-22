import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { students } from '../data/students';
import ParticleBackground from '../components/ParticleBackground';

export default function WorkDetailPage() {
  const { studentId, workId } = useParams();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const student = students.find((s) => s.id === Number(studentId));
  const work = student?.works.find((w) => w.id === Number(workId));
  const prevWork = student?.works.find((w) => w.id === Number(workId) - 1);
  const nextWork = student?.works.find((w) => w.id === Number(workId) + 1);

  useEffect(() => {
    if (!work || !student) { navigate('/'); return; }
    document.title = `${work.title} — Tasarımcı ${student.id} · Dijital Sergi 2026`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', work.description?.slice(0, 155) || '');
    setMounted(false);
    setImageLoaded(false);
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, [studentId, workId, work, student, navigate]);

  if (!work || !student) return null;

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-violet-900/10 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gold-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 pt-20 sm:pt-24 pb-20">

        {/* Hero Image */}
        <section className={`transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm flex-wrap">
              <Link to="/" className="text-white/30 hover:text-white/60 transition-colors">Sergi</Link>
              <span className="text-white/20">/</span>
              <Link to={`/student/${student.id}`} className="text-white/30 hover:text-white/60 transition-colors">
                {student.designer || `Tasarımcı ${student.id}`}
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-white/50 truncate max-w-[120px]">{work.title}</span>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              {!imageLoaded && work.image && (
                <div className="absolute inset-0 bg-dark-800 flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-gold-500/30 border-t-gold-400 rounded-full animate-spin" />
                </div>
              )}

              {work.image ? (
                <img
                  src={work.image}
                  alt={`${work.title} — ${student.designer || `Tasarımcı ${student.id}`}`}
                  className={`w-full object-cover transition-all duration-700 max-h-[60vh] sm:max-h-[70vh]
                    ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                />
              ) : (
                <div className="w-full h-64 sm:h-96 bg-gradient-to-br from-dark-800 to-dark-700 flex flex-col items-center justify-center gap-3">
                  <svg className="w-12 h-12 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/20 text-sm">Görsel henüz eklenmedi</p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="exhibit-badge">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                  </svg>
                  Sergi Eseri
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="glass-card-dark text-white/50 text-xs font-mono px-3 py-1.5 rounded-xl">
                  {student.id}-{String(work.id).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className={`max-w-5xl mx-auto px-4 sm:px-6 mt-10 transition-all duration-700 delay-150
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
                  {work.title}
                </h1>
                <span className="exhibit-badge">{student.designer || `Tasarımcı #${String(student.id).padStart(2, '0')}`}</span>
              </div>

              <div className="glass-card p-6">
                <h2 className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-4 h-px bg-gold-500/50" />
                  Eser Hakkında
                </h2>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                  {work.description || 'Açıklama henüz eklenmedi.'}
                </p>
              </div>
            </div>

            {/* Metadata */}
            <aside className="flex flex-col gap-4">
              <div className="glass-card p-5 flex flex-col gap-4">
                <h2 className="text-white/40 text-xs font-semibold uppercase tracking-widest">Eser Bilgileri</h2>
                {[
                  { label: 'Başlık', value: work.title },
                  { label: 'Teknik', value: 'Lazer Tekniği' },
                  work.dimensions ? { label: 'Boyut', value: work.dimensions } : null,
                  { label: 'Yıl', value: String(work.year || 2026) },
                  { label: 'Tasarımcı', value: student.designer || `Tasarımcı #${String(student.id).padStart(2, '0')}` },
                  student.region ? { label: 'İlham Alınan Yöre', value: student.region } : null,
                ].filter(Boolean).map((item) => (
                  <div key={item.label}>
                    <span className="text-white/30 text-xs uppercase tracking-wider block mb-0.5">{item.label}</span>
                    <span className="text-white/80 text-sm font-medium">{item.value}</span>
                  </div>
                ))}
                {work.tags?.length > 0 && (
                  <div>
                    <span className="text-white/30 text-xs uppercase tracking-wider block mb-1.5">Etiketler</span>
                    <div className="flex flex-wrap gap-1.5">
                      {work.tags.map((tag) => (
                        <span key={tag} className="exhibit-badge text-[10px] px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="glass-card p-4 border border-gold-500/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium mb-1">QR Kod</p>
                    <p className="text-white/30 text-xs leading-relaxed font-mono">
                      /student/{student.id}/work/{work.id}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Prev / Next works */}
        <nav className={`max-w-5xl mx-auto px-4 sm:px-6 mt-12 transition-all duration-700 delay-300
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          <div className="flex items-center justify-between gap-4">

            {prevWork ? (
              <Link to={`/student/${student.id}/work/${prevWork.id}`}
                className="flex items-center gap-3 glass-card p-3 sm:p-4 flex-1 max-w-xs
                  hover:border-gold-500/30 transition-all duration-300 group">
                <svg className="w-4 h-4 text-white/40 group-hover:text-gold-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <div className="min-w-0">
                  <p className="text-white/30 text-xs">Önceki Eser</p>
                  <p className="text-white/70 text-sm font-medium truncate group-hover:text-white">{prevWork.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1 max-w-xs" />}

            <Link to={`/student/${student.id}`} className="btn-outline flex-shrink-0 text-xs px-3 sm:px-5 py-2 sm:py-2.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="hidden sm:inline">Tasarımcı</span>
            </Link>

            {nextWork ? (
              <Link to={`/student/${student.id}/work/${nextWork.id}`}
                className="flex items-center gap-3 glass-card p-3 sm:p-4 flex-1 max-w-xs justify-end
                  hover:border-gold-500/30 transition-all duration-300 group">
                <div className="min-w-0 text-right">
                  <p className="text-white/30 text-xs">Sonraki Eser</p>
                  <p className="text-white/70 text-sm font-medium truncate group-hover:text-white">{nextWork.title}</p>
                </div>
                <svg className="w-4 h-4 text-white/40 group-hover:text-gold-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            ) : <div className="flex-1 max-w-xs" />}
          </div>
        </nav>
      </div>
    </main>
  );
}
