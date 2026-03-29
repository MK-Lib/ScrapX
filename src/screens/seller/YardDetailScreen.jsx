export default function YardDetailScreen({ onNext, onBack }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56, overflowY: 'auto' }}>
      <div style={{ padding: '16px 24px 0' }}>
        <button onClick={onBack} style={{ background: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', marginBottom: 16 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span style={{ fontSize: 14 }}>Back to map</span>
        </button>
      </div>

      {/* Yard header */}
      <div style={{ padding: '0 24px 16px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
          <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg,#1e3a5f,#1e293b)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #334155', flexShrink: 0 }}>
            <span style={{ fontSize: 28 }}>🏭</span>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: -0.4, marginBottom: 4 }}>MetalPoint Riga</h2>
            <p style={{ fontSize: 13, color: '#64748b' }}>Maskavas iela 24, Rīga · 1.2 km</p>
          </div>
        </div>
        {/* Badges row */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
          <Badge icon="★" color="#f59e0b">4.8 rating</Badge>
          <Badge icon="🕐" color="#94a3b8">Mon–Sat 8:00–18:00</Badge>
          <Badge icon="🚚" color="#22c55e">Pickup available</Badge>
        </div>
        {/* Today's best price */}
        <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 13, color: '#86efac' }}>Copper Pipe (Grade 2) — Today</p>
          <p style={{ fontSize: 20, fontWeight: 800, color: '#22c55e', letterSpacing: -0.5 }}>€3.20/kg</p>
        </div>
      </div>

      {/* Price list */}
      <div style={{ padding: '16px 24px' }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>Today's Full Price List</p>
        <div style={{ background: '#1e293b', borderRadius: 14, overflow: 'hidden', border: '1px solid #334155' }}>
          {[
            { metal: 'Copper', grades: [{ g: 'Grade 1 — Clean', p: 4.10 }, { g: 'Grade 2 — Mixed', p: 3.20, hi: true }, { g: 'Grade 3 — Dirty', p: 2.60 }] },
            { metal: 'Aluminium', grades: [{ g: 'Clean profiles', p: 1.05 }, { g: 'Mixed / painted', p: 0.80 }] },
            { metal: 'Steel', grades: [{ g: 'Heavy melt', p: 0.22 }, { g: 'Light scrap', p: 0.16 }] },
          ].map((cat, ci) => (
            <div key={ci}>
              <div style={{ padding: '10px 16px', background: '#0f172a' }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5 }}>{cat.metal}</p>
              </div>
              {cat.grades.map((g, gi) => (
                <div key={gi} style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: g.hi ? 'rgba(249,115,22,0.05)' : 'transparent', borderBottom: '1px solid #0f172a' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {g.hi && <div style={{ width: 4, height: 4, background: '#f97316', borderRadius: 2 }} />}
                    <span style={{ fontSize: 13, color: g.hi ? '#fff' : '#64748b', fontWeight: g.hi ? 600 : 400 }}>{g.g}</span>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: g.hi ? '#22c55e' : '#64748b' }}>€{g.p.toFixed(2)}/kg</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div style={{ padding: '0 24px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button onClick={onNext} style={{
          width: '100%', padding: '16px', background: '#f97316',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          boxShadow: '0 4px 20px rgba(249,115,22,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          🚗 Deliver Myself
        </button>
        <button style={{
          width: '100%', padding: '16px', background: '#1e293b',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          🚚 Request Pickup
        </button>
      </div>
    </div>
  );
}

function Badge({ icon, color, children }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 500, color, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: 8 }}>
      <span>{icon}</span>{children}
    </span>
  );
}
