import { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { students } from '../data/students';

export default function QRPrintPage() {
  const [baseUrl, setBaseUrl] = useState('https://sergi-two.vercel.app');
  const printRef = useRef(null);

  const handlePrint = () => window.print();

  // Flatten: 8 students × 3 works = 24 QR
  const allWorks = students.flatMap((s) =>
    s.works.map((w) => ({ student: s, work: w }))
  );

  return (
    <>
      {/* ── Print styles ── */}
      <style>{`
        @media print {
          body { background: #fff !important; color: #000 !important; }
          .no-print { display: none !important; }
          .print-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 12px !important;
            padding: 12px !important;
          }
          .qr-card {
            border: 1px solid #ccc !important;
            border-radius: 8px !important;
            padding: 10px !important;
            break-inside: avoid !important;
            background: #fff !important;
            page-break-inside: avoid !important;
          }
          .qr-card svg { display: block; margin: 0 auto 6px; }
          .qr-card-label { color: #111 !important; font-size: 9px !important; }
          .qr-card-title { color: #333 !important; font-size: 11px !important; font-weight: 600; }
          .qr-card-url { color: #666 !important; font-size: 8px !important; font-family: monospace; }
        }
      `}</style>

      {/* ── Screen UI ── */}
      <div className="min-h-screen bg-dark-950 pt-20 pb-16 no-print">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="exhibit-badge mb-3 inline-flex">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                QR Yazdırma
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
                <span className="gold-gradient-text">{allWorks.length} QR Kod</span>
              </h1>
              <p className="text-white/40 mt-2 text-sm">
                {students.length} sanatçı × 3 eser — Her kodu eserin yanına yerleştirin
              </p>
            </div>

            {/* Domain input + Print button */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
              <div className="flex flex-col gap-1.5">
                <label className="text-white/40 text-xs uppercase tracking-wider">Site Adresi (Domain)</label>
                <input
                  id="base-url-input"
                  type="text"
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value.replace(/\/$/, ''))}
                  className="glass-card border border-white/10 text-white/80 text-sm px-4 py-2.5 rounded-xl
                    focus:outline-none focus:border-gold-500/50 w-64 font-mono bg-transparent"
                  placeholder="https://sergi-two.vercel.app"
                />
              </div>
              <button
                id="print-btn"
                onClick={handlePrint}
                className="btn-gold whitespace-nowrap"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Yazdır / PDF
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="mt-6 glass-card p-4 border border-gold-500/20 flex items-start gap-3">
            <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-white/50 text-sm leading-relaxed">
              Yukarıdaki <strong className="text-white/70">Site Adresi</strong> alanına sitenizin gerçek adresini girin (ör. <code className="text-gold-400/70 font-mono text-xs">https://sergi.okuladi.com</code>), ardından <strong className="text-white/70">Yazdır / PDF</strong>'e tıklayın. QR kodları 4'lü sütunda A4 kağıda sığar.
            </p>
          </div>
        </div>

        {/* QR Grid — screen preview */}
        <div ref={printRef} className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {allWorks.map(({ student, work }) => {
              const url = `${baseUrl}/student/${student.id}/work/${work.id}`;
              return (
                <QRCard
                  key={`${student.id}-${work.id}`}
                  student={student}
                  work={work}
                  url={url}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Print-only layout ── */}
      <div className="print-grid hidden">
        {allWorks.map(({ student, work }) => {
          const url = `${baseUrl}/student/${student.id}/work/${work.id}`;
          return (
            <div key={`print-${student.id}-${work.id}`} className="qr-card">
              <QRCodeSVG value={url} size={100} bgColor="#ffffff" fgColor="#000000" />
              <p className="qr-card-label" style={{ textAlign: 'center', marginBottom: 2 }}>
                Sanatçı #{String(student.id).padStart(2, '0')}
              </p>
              <p className="qr-card-title" style={{ textAlign: 'center', marginBottom: 4 }}>
                {work.title}
              </p>
              <p className="qr-card-url" style={{ textAlign: 'center', wordBreak: 'break-all' }}>
                {url}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ---- QR Card (screen) ----
function QRCard({ student, work, url }) {
  const [copied, setCopied] = useState(false);

  const copyUrl = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="glass-card p-3 flex flex-col items-center gap-2.5
      hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/10
      transition-all duration-300 group">

      {/* Badge */}
      <div className="flex items-center justify-between w-full">
        <span className="text-white/30 text-[9px] font-mono">
          #{String(student.id).padStart(2, '0')}-{String(work.id).padStart(2, '0')}
        </span>
        <button
          onClick={copyUrl}
          className="text-white/20 hover:text-gold-400 transition-colors p-0.5"
          title="URL kopyala"
          aria-label="URL kopyala"
        >
          {copied ? (
            <svg className="w-3 h-3 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* QR */}
      <div className="p-2 bg-white rounded-xl shadow-inner">
        <QRCodeSVG
          value={url}
          size={90}
          bgColor="#ffffff"
          fgColor="#0d1120"
          level="M"
        />
      </div>

      {/* Labels */}
      <div className="text-center w-full">
        <p className="text-white/70 text-[11px] font-semibold leading-tight truncate">
          {work.title}
        </p>
        <p className="text-white/30 text-[9px] mt-0.5 font-mono break-all leading-tight">
          /student/{student.id}/work/{work.id}
        </p>
      </div>
    </div>
  );
}
