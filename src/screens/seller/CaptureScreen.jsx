export default function CaptureScreen({ onNext, onBack }) {
  const photos = [
    { label: 'Front view', hint: 'Take a front photo of your scrap', done: true, emoji: '📷' },
    { label: 'Second angle', hint: 'Take a photo from a different angle', done: true, emoji: '📷' },
    { label: 'Close-up / scale', hint: 'Close-up or place a coin next to it for scale', done: false, emoji: '📷' },
  ];

  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '20px 24px 0', flex: 1, overflowY: 'auto' }}>
        <button onClick={onBack} style={{ background: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', marginBottom: 20 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span style={{ fontSize: 14 }}>Back</span>
        </button>

        {/* Progress */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {[1,2,3].map(n => (
            <div key={n} style={{ flex: 1, height: 4, background: n <= 2 ? '#f97316' : '#1e293b', borderRadius: 2 }} />
          ))}
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: -0.4, marginBottom: 4 }}>Capture your scrap</h2>
        <p style={{ fontSize: 14, color: '#64748b', marginBottom: 22 }}>3 photos helps our AI identify your metal accurately</p>

        {/* Photo slots */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          {photos.map((p, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{
                height: 100, borderRadius: 12,
                background: p.done ? '#1e293b' : 'transparent',
                border: `2px ${p.done ? 'solid #f97316' : 'dashed #334155'}`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
                position: 'relative', overflow: 'hidden',
              }}>
                {p.done ? (
                  <>
                    {/* Fake photo content */}
                    <div style={{ position: 'absolute', inset: 0, background: i === 0 ? 'linear-gradient(160deg,#7c3a1a,#4a2510)' : 'linear-gradient(160deg,#6b3a1a,#3d2010)', opacity: 0.9 }} />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: i === 0 ? 60 : 50, height: i === 0 ? 20 : 30, background: 'rgba(180,90,30,0.8)', borderRadius: i === 0 ? 10 : 4, transform: i === 1 ? 'rotate(-20deg)' : 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.4)' }} />
                    </div>
                    <div style={{ position: 'absolute', top: 6, right: 6, width: 18, height: 18, background: '#22c55e', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                  </>
                ) : (
                  <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5">
                      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                    <span style={{ fontSize: 10, color: '#334155', fontWeight: 500, textAlign: 'center', padding: '0 4px' }}>Tap to add</span>
                  </>
                )}
              </div>
              <p style={{ fontSize: 10, color: p.done ? '#94a3b8' : '#475569', textAlign: 'center', lineHeight: 1.3, fontWeight: p.done ? 500 : 400 }}>{p.label}</p>
            </div>
          ))}
        </div>

        {/* Active hint */}
        <div style={{ background: '#1e293b', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 20, border: '1px solid #334155' }}>
          <div style={{ width: 34, height: 34, background: 'rgba(249,115,22,0.15)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 3 }}>Photo 3 — Close-up</p>
            <p style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5 }}>Add a close-up or place a coin / hand next to it for scale</p>
          </div>
        </div>

        {/* Camera capture area */}
        <div style={{ borderRadius: 16, overflow: 'hidden', height: 160, background: '#111827', border: '2px dashed #f97316', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16, position: 'relative' }}>
          {/* Corner guides */}
          {[[0,0,'top','left'],[0,0,'top','right'],[0,0,'bottom','left'],[0,0,'bottom','right']].map((_,i) => (
            <div key={i} style={{
              position: 'absolute',
              top: i < 2 ? 12 : 'auto', bottom: i >= 2 ? 12 : 'auto',
              left: [0,2].includes(i) ? 12 : 'auto', right: [1,3].includes(i) ? 12 : 'auto',
              width: 20, height: 20,
              borderTop: i < 2 ? '3px solid rgba(249,115,22,0.6)' : 'none',
              borderBottom: i >= 2 ? '3px solid rgba(249,115,22,0.6)' : 'none',
              borderLeft: [0,2].includes(i) ? '3px solid rgba(249,115,22,0.6)' : 'none',
              borderRight: [1,3].includes(i) ? '3px solid rgba(249,115,22,0.6)' : 'none',
            }} />
          ))}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
          <p style={{ fontSize: 13, color: '#f97316', fontWeight: 600 }}>Tap to open camera</p>
        </div>

        {/* Description */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#94a3b8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Description (optional)</label>
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 12, padding: '12px 16px', minHeight: 64 }}>
            <span style={{ fontSize: 14, color: '#94a3b8' }}>e.g. Old copper pipes from renovation...</span>
          </div>
        </div>

        <button onClick={onNext} style={{
          width: '100%', padding: '16px', background: '#f97316',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          boxShadow: '0 4px 20px rgba(249,115,22,0.35)', marginBottom: 24,
        }}>
          Identify My Scrap →
        </button>
      </div>
    </div>
  );
}
