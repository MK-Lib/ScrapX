export default function LocationScreen({ onNext, onBack }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '20px 24px 0' }}>
        <button onClick={onBack} style={{ background: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', marginBottom: 24 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span style={{ fontSize: 14 }}>Back</span>
        </button>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: -0.4, marginBottom: 6 }}>Where is your scrap?</h2>
        <p style={{ fontSize: 14, color: '#64748b', marginBottom: 28 }}>We'll find the best yards near your location</p>

        {/* Current location option */}
        <button onClick={onNext} style={{
          width: '100%', background: '#1e293b', border: '1.5px solid #f97316',
          borderRadius: 16, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16,
          marginBottom: 12, textAlign: 'left',
        }}>
          <div style={{ width: 46, height: 46, background: 'rgba(249,115,22,0.15)', borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
              <circle cx="12" cy="12" r="8" strokeOpacity="0.3"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 2 }}>📍 Use my current location</p>
            <p style={{ fontSize: 13, color: '#475569' }}>Rīga, Ziepniekkalns — detected</p>
          </div>
          <div style={{ width: 22, height: 22, borderRadius: 11, background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
        </button>

        {/* Different location */}
        <button style={{
          width: '100%', background: '#1e293b', border: '1px solid #334155',
          borderRadius: 16, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16,
          marginBottom: 28, textAlign: 'left',
        }}>
          <div style={{ width: 46, height: 46, background: '#0f172a', borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 2 }}>🗺️ Choose a different location</p>
            <p style={{ fontSize: 13, color: '#475569' }}>Drop a pin or search by address</p>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        {/* Map preview */}
        <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #1e293b', height: 220, position: 'relative', background: '#111827' }}>
          {/* Fake map */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            {/* Grid lines */}
            {Array.from({length: 8}).map((_, i) => (
              <div key={`h${i}`} style={{ position: 'absolute', left: 0, right: 0, top: `${i * 30}px`, height: 1, background: 'rgba(255,255,255,0.04)' }} />
            ))}
            {Array.from({length: 10}).map((_, i) => (
              <div key={`v${i}`} style={{ position: 'absolute', top: 0, bottom: 0, left: `${i * 42}px`, width: 1, background: 'rgba(255,255,255,0.04)' }} />
            ))}
            {/* Streets */}
            <div style={{ position: 'absolute', top: 60, left: 0, right: 0, height: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', top: 120, left: 0, right: 0, height: 12, background: 'rgba(255,255,255,0.09)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 80, width: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 200, width: 12, background: 'rgba(255,255,255,0.09)', borderRadius: 2 }} />
            {/* Blocks */}
            {[
              { top: 20, left: 20, w: 50, h: 30 },
              { top: 20, left: 100, w: 90, h: 30 },
              { top: 76, left: 20, w: 50, h: 36 },
              { top: 76, left: 100, w: 90, h: 36 },
              { top: 76, left: 220, w: 70, h: 36 },
              { top: 140, left: 20, w: 50, h: 62 },
              { top: 140, left: 100, w: 90, h: 62 },
              { top: 140, left: 220, w: 70, h: 62 },
            ].map((b, i) => (
              <div key={i} style={{ position: 'absolute', top: b.top, left: b.left, width: b.w, height: b.h, background: 'rgba(255,255,255,0.05)', borderRadius: 2 }} />
            ))}
          </div>
          {/* Location pin */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}>
            <div style={{ width: 20, height: 20, background: '#f97316', borderRadius: 10, border: '3px solid #fff', boxShadow: '0 0 0 3px rgba(249,115,22,0.3)' }} />
            <div style={{ width: 2, height: 8, background: '#f97316', margin: '0 auto' }} />
          </div>
          {/* Accuracy circle */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 60, height: 60, border: '1.5px solid rgba(249,115,22,0.4)', borderRadius: 30, background: 'rgba(249,115,22,0.07)' }} />
          {/* Label */}
          <div style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(0,0,0,0.7)', padding: '6px 10px', borderRadius: 8, backdropFilter: 'blur(4px)' }}>
            <p style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>Rīga, Ziepniekkalns</p>
            <p style={{ fontSize: 10, color: '#64748b' }}>Accurate to ~20m</p>
          </div>
        </div>
      </div>
    </div>
  );
}
