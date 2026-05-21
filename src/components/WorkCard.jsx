import { Link } from 'react-router-dom';

const CARD_COLORS = [
  'from-violet-900/60 to-indigo-900/40',
  'from-blue-900/60 to-cyan-900/40',
  'from-amber-900/60 to-orange-900/40',
  'from-emerald-900/60 to-teal-900/40',
  'from-rose-900/60 to-pink-900/40',
  'from-purple-900/60 to-fuchsia-900/40',
  'from-sky-900/60 to-blue-900/40',
  'from-yellow-900/60 to-amber-900/40',
];

/**
 * WorkCard — hem HomePage'deki student card için (work=null)
 * hem de StudentPage'deki eser kartı için kullanılır.
 *
 * Props:
 *   work       — eser objesi ({ id, title, description, medium, year, image })
 *   studentId  — öğrenci id'si (routing için)
 *   index      — animasyon gecikmesi için
 */
export default function WorkCard({ work, studentId, index = 0 }) {
  const color = CARD_COLORS[(studentId - 1 + (work.id - 1)) % CARD_COLORS.length];

  return (
    <article
      className="group relative glass-card overflow-hidden
        hover:border-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/10
        transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Image / Placeholder */}
      <div className={`relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br ${color}`}>
        {work.image ? (
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <svg className="w-10 h-10 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white/20 text-xs">Görsel yok</span>
          </div>
        )}
        <div className="absolute inset-0 image-overlay" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[10px] text-white/50 glass-card-dark px-2 py-0.5 rounded-lg">
            #{String(studentId).padStart(2, '0')}-{String(work.id).padStart(2, '0')}
          </span>
        </div>

        {/* Exhibit badge */}
        <div className="absolute bottom-3 left-3">
          <span className="exhibit-badge text-[10px]">
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
            </svg>
            Sergi Eseri
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h2 className="font-display text-lg font-bold text-white group-hover:text-gold-300 transition-colors duration-300">
            {work.title}
          </h2>
          <p className="text-white/30 text-xs mt-0.5">{work.medium} · {work.year}</p>
        </div>

        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
          {work.description}
        </p>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Link
          to={`/student/${studentId}/work/${work.id}`}
          id={`view-s${studentId}-w${work.id}`}
          className="btn-gold w-full justify-center text-center"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Detayları Gör
        </Link>
      </div>
    </article>
  );
}
