import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { students } from '../data/students';
import ParticleBackground from '../components/ParticleBackground';
import WorkCard from '../components/WorkCard';

export default function StudentPage() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  const student = students.find((s) => s.id === Number(studentId));

  useEffect(() => {
    if (!student) { navigate('/'); return; }
    document.title = `Tasarımcı ${student.id} — Dijital Sergi 2026`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', `Tasarımcı ${student.id}'in 3 özgün eseri.`);
    setTimeout(() => setMounted(true), 80);
  }, [student, navigate]);

  if (!student) return null;

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet-900/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-600/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32">

        {/* Breadcrumb */}
        <div className={`flex items-center gap-2 mb-10 text-sm transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/" className="text-white/30 hover:text-white/60 transition-colors">Sergi</Link>
          <span className="text-white/20">/</span>
          <span className="text-white/60">{student.designer || `Tasarımcı ${student.id}`}</span>
        </div>

        {/* Header */}
        <header className={`mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <span className="exhibit-badge mb-3 inline-flex">
                {student.region ? `${student.region} İlhamlı` : `Tasarımcı #${String(student.id).padStart(2, '0')}`}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {student.designer ? (
                  <span className="gold-gradient-text">{student.designer}</span>
                ) : (
                  <>Tasarımcı <span className="gold-gradient-text">{student.id}</span></>
                )}
              </h1>
              <p className="text-white/40 mt-2 text-sm">{student.works.length} özgün eser · 2026</p>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              {student.id > 1 && (
                <Link to={`/student/${student.id - 1}`}
                  className="glass-card p-2.5 hover:border-gold-500/30 transition-all duration-300 group"
                  aria-label="Önceki tasarımcı">
                  <svg className="w-4 h-4 text-white/50 group-hover:text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
              )}
              {student.id < students.length && (
                <Link to={`/student/${student.id + 1}`}
                  className="glass-card p-2.5 hover:border-gold-500/30 transition-all duration-300 group"
                  aria-label="Sonraki tasarımcı">
                  <svg className="w-4 h-4 text-white/50 group-hover:text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* Works Grid */}
        <section
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-150
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          aria-label="Eserler"
        >
          {student.works.map((work, idx) => (
            <WorkCard key={work.id} work={work} studentId={student.id} index={idx} />
          ))}
        </section>

        {/* Back */}
        <div className={`mt-14 flex justify-center transition-all duration-700 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/" className="btn-outline">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tüm Tasarımcılar
          </Link>
        </div>
      </div>
    </main>
  );
}
