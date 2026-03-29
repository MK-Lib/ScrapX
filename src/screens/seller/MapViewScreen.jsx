import { useState } from 'react';

const YARDS = [
  { id: 1, name: 'MetalPoint Riga', price: 3.20, dist: '1.2 km', rating: 4.8, pickup: true, x: 55, y: 95 },
  { id: 2, name: 'Baltic Scrap Co.', price: 3.05, dist: '2.1 km', rating: 4.5, pickup: false, x: 200, y: 140 },
  { id: 3, name: 'EcoMetal Jūrmala', price: 2.90, dist: '3.4 km', rating: 4.6, pickup: true, x: 295, y: 70 },
  { id: 4, name: 'RecycloRiga', price: 2.75, dist: '4.0 km', rating: 4.2, pickup: false, x: 130, y: 180 },
];

export default function MapViewScreen({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState('map'); // map | list

  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      {/* Header */}
      <div style={{ padding: '16px 20px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={onBack} style={{ background: '#1e293b', border: 'none', width: 34, height: 34, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 12, color: '#475569', marginBottom: 1 }}>Showing yards for</p>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Copper Pipe · Grade 2</p>
        </div>
        {/* View toggle */}
        <div style={{ display: 'flex', background: '#1e293b', borderRadius: 10, padding: 3, gap: 2 }}>
          {['map','list'].map(v => (
            <button key={v} onClick={() => setView(v)} style={{
              padding: '6px 12px', borderRadius: 8, border: 'none', fontSize: 12, fontWeight: 600,
              background: view === v ? '#334155' : 'transparent',
              color: view === v ? '#fff' : '#475569',
            }}>
              {v === 'map' ? '🗺️' : '☰'} {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Filter row */}
      <div style={{ padding: '0 20px 12px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {['Distance', 'Highest Price', 'Pickup Available'].map((f, i) => (
          <button key={f} style={{
            background: i === 1 ? 'rgba(249,115,22,0.15)' : '#1e293b',
            border: `1px solid ${i === 1 ? 'rgba(249,115,22,0.4)' : '#334155'}`,
            color: i === 1 ? '#f97316' : '#94a3b8',
            fontSize: 12, fontWeight: 600, padding: '6px 12px', borderRadius: 20, whiteSpace: 'nowrap',
          }}>{f}</button>
        ))}
      </div>

      {view === 'map' ? (
        <>
          {/* Map */}
          <div style={{ margin: '0 16px', borderRadius: 16, overflow: 'hidden', flex: 1, background: '#111827', border: '1px solid #1e293b', position: 'relative', minHeight: 0 }}>
            {/* Map grid */}
            <div style={{ position: 'absolute', inset: 0 }}>
              {Array.from({length: 10}).map((_,i) => <div key={`h${i}`} style={{ position: 'absolute', left: 0, right: 0, top: `${i*28}px`, height: 1, background: 'rgba(255,255,255,0.03)' }} />)}
              {Array.from({length: 10}).map((_,i) => <div key={`v${i}`} style={{ position: 'absolute', top: 0, bottom: 0, left: `${i*37}px`, width: 1, background: 'rgba(255,255,255,0.03)' }} />)}
              {/* Streets */}
              <div style={{ position: 'absolute', top: 55, left: 0, right: 0, height: 7, background: 'rgba(255,255,255,0.06)' }} />
              <div style={{ position: 'absolute', top: 110, left: 0, right: 0, height: 10, background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ position: 'absolute', top: 165, left: 0, right: 0, height: 6, background: 'rgba(255,255,255,0.05)' }} />
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 75, width: 6, background: 'rgba(255,255,255,0.06)' }} />
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 175, width: 10, background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 260, width: 6, background: 'rgba(255,255,255,0.05)' }} />
              {/* Blocks */}
              {[
                {t:10,l:10,w:55,h:40},{t:10,l:90,w:75,h:40},{t:10,l:190,w:60,h:40},{t:10,l:275,w:75,h:40},
                {t:68,l:10,w:55,h:37},{t:68,l:90,w:75,h:37},{t:68,l:190,w:60,h:37},{t:68,l:275,w:75,h:37},
                {t:124,l:10,w:55,h:36},{t:124,l:90,w:75,h:36},{t:124,l:190,w:60,h:36},{t:124,l:275,w:75,h:36},
                {t:176,l:10,w:55,h:80},{t:176,l:90,w:75,h:80},{t:176,l:190,w:60,h:80},{t:176,l:275,w:75,h:80},
              ].map((b,i) => <div key={i} style={{ position: 'absolute', top: b.t, left: b.l, width: b.w, height: b.h, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }} />)}
            </div>

            {/* User location */}
            <div style={{ position: 'absolute', top: 130, left: 160, transform: 'translate(-50%,-50%)', zIndex: 5 }}>
              <div style={{ width: 40, height: 40, border: '2px solid rgba(59,130,246,0.3)', borderRadius: 20, background: 'rgba(59,130,246,0.1)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div style={{ width: 14, height: 14, background: '#3b82f6', borderRadius: 7, border: '3px solid #fff', boxShadow: '0 0 0 3px rgba(59,130,246,0.3)', position: 'relative', zIndex: 1 }} />
            </div>

            {/* Yard pins */}
            {YARDS.map(y => (
              <button key={y.id} onClick={() => setSelected(selected?.id === y.id ? null : y)} style={{
                position: 'absolute', top: y.y, left: y.x, transform: 'translate(-50%, -100%)',
                background: selected?.id === y.id ? '#f97316' : '#1e293b',
                border: `2px solid ${selected?.id === y.id ? '#f97316' : '#334155'}`,
                borderRadius: 10, padding: '5px 8px',
                boxShadow: selected?.id === y.id ? '0 4px 16px rgba(249,115,22,0.5)' : '0 2px 8px rgba(0,0,0,0.4)',
                zIndex: selected?.id === y.id ? 10 : 5,
                cursor: 'pointer',
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>€{y.price.toFixed(2)}</span>
                <div style={{ width: 6, height: 6, background: selected?.id === y.id ? '#f97316' : '#334155', position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%) rotate(45deg)' }} />
              </button>
            ))}
          </div>

          {/* Selected yard card */}
          {selected ? (
            <div style={{ margin: '12px 16px 0', background: '#1e293b', borderRadius: 16, padding: '16px', border: '1px solid #334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{selected.name}</p>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: '#64748b' }}>{selected.dist} away</span>
                    <span style={{ fontSize: 12, color: '#f59e0b' }}>★ {selected.rating}</span>
                    {selected.pickup && <Tag>Pickup available</Tag>}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 20, fontWeight: 800, color: '#22c55e', letterSpacing: -0.5 }}>€{selected.price.toFixed(2)}</p>
                  <p style={{ fontSize: 11, color: '#475569' }}>per kg today</p>
                </div>
              </div>
              <button onClick={onNext} style={{ width: '100%', padding: '12px', background: '#f97316', borderRadius: 12, fontSize: 15, fontWeight: 700, color: '#fff', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}>
                View Yard & Select →
              </button>
            </div>
          ) : (
            <div style={{ margin: '10px 16px 0', padding: '12px', background: '#1e293b', borderRadius: 14, border: '1px solid #1e293b', textAlign: 'center' }}>
              <p style={{ fontSize: 13, color: '#475569' }}>Tap a yard pin to see today's price</p>
            </div>
          )}
          <div style={{ height: 16 }} />
        </>
      ) : (
        /* List view */
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 16px' }}>
          {YARDS.map((y, i) => (
            <div key={y.id} onClick={() => { setSelected(y); setView('map'); }} style={{
              background: '#1e293b', border: '1px solid #334155', borderRadius: 14,
              padding: '14px', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 12,
              cursor: 'pointer',
            }}>
              <div style={{ width: 42, height: 42, background: '#0f172a', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 20 }}>🏭</span>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{y.name}</p>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#64748b' }}>{y.dist}</span>
                  <span style={{ fontSize: 12, color: '#f59e0b' }}>★ {y.rating}</span>
                  {y.pickup && <Tag>Pickup</Tag>}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 18, fontWeight: 800, color: '#22c55e' }}>€{y.price.toFixed(2)}</p>
                <p style={{ fontSize: 11, color: '#475569' }}>/kg</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span style={{ fontSize: 10, fontWeight: 600, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '2px 6px', borderRadius: 4 }}>
      {children}
    </span>
  );
}
