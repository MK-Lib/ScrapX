export default function MatchedScreen({ onNext, onBack }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '20px 24px 0', flex: 1, overflowY: 'auto' }}>
        {/* Success badge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28, paddingTop: 8 }}>
          <div style={{ position: 'relative', marginBottom: 16 }}>
            {[1,2].map(i => (
              <div key={i} style={{
                position: 'absolute', inset: `${-(i * 14)}px`,
                background: `rgba(34,197,94,${0.06 - i * 0.02})`,
                borderRadius: '50%',
              }} />
            ))}
            <div style={{ width: 72, height: 72, background: 'rgba(34,197,94,0.15)', border: '2px solid rgba(34,197,94,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#fff', letterSpacing: -0.5, marginBottom: 4, textAlign: 'center' }}>
            You're Matched! 🎉
          </h2>
          <p style={{ fontSize: 14, color: '#64748b', textAlign: 'center' }}>MetalPoint Riga is expecting you</p>
        </div>

        {/* Match card */}
        <div style={{ background: '#1e293b', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: '18px', marginBottom: 16 }}>
          {/* Yard info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #0f172a' }}>
            <div style={{ width: 46, height: 46, background: 'linear-gradient(135deg,#1e3a5f,#1e293b)', borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #334155' }}>
              <span style={{ fontSize: 22 }}>🏭</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 2 }}>MetalPoint Riga</p>
              <p style={{ fontSize: 12, color: '#64748b' }}>Maskavas iela 24 · Open until 18:00</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 10, height: 10, background: '#22c55e', borderRadius: 5, margin: '0 auto 4px', boxShadow: '0 0 8px #22c55e' }} />
              <p style={{ fontSize: 10, color: '#22c55e', fontWeight: 600 }}>Live</p>
            </div>
          </div>

          {/* Details */}
          {[
            ['Metal', 'Copper pipe, Grade 2'],
            ['Condition', 'Oxidised'],
            ["Today's price", '€3.20/kg'],
            ['Est. payout', '€16–€22'],
          ].map(([k, v], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <span style={{ fontSize: 13, color: '#475569' }}>{k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: k === 'Est. payout' ? '#22c55e' : '#fff' }}>{v}</span>
            </div>
          ))}
        </div>

        {/* ETA */}
        <div style={{ background: '#1e293b', borderRadius: 14, padding: '14px 16px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12, border: '1px solid #334155' }}>
          <div style={{ width: 38, height: 38, background: 'rgba(59,130,246,0.12)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 1 }}>Arrive before 17:45</p>
            <p style={{ fontSize: 12, color: '#64748b' }}>~8 min drive from your location</p>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <button style={{
            flex: 1, padding: '14px', background: '#1e293b', border: '1px solid #334155',
            borderRadius: 14, fontSize: 14, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Directions
          </button>
          <button onClick={onNext} style={{
            flex: 2, padding: '14px', background: '#f97316', border: 'none',
            borderRadius: 14, fontSize: 14, fontWeight: 700, color: '#fff',
            boxShadow: '0 4px 16px rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Track Status
          </button>
        </div>

        {/* Timeline */}
        <div style={{ background: '#1e293b', borderRadius: 16, padding: '16px', border: '1px solid #334155' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 14 }}>Progress</p>
          {[
            { label: 'Request sent', done: true, time: '14:23' },
            { label: 'Matched with yard', done: true, time: '14:23' },
            { label: 'On your way', done: false, time: 'Now' },
            { label: 'Weigh-in & confirm', done: false, time: 'Soon' },
            { label: 'Payout released', done: false, time: '' },
          ].map((s, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', paddingBottom: i < arr.length - 1 ? 12 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 20, height: 20, borderRadius: 10, background: s.done ? '#22c55e' : i === 2 ? 'rgba(249,115,22,0.2)' : '#0f172a', border: `2px solid ${s.done ? '#22c55e' : i === 2 ? '#f97316' : '#334155'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                  {!s.done && i === 2 && <div style={{ width: 6, height: 6, background: '#f97316', borderRadius: 3 }} />}
                </div>
                {i < arr.length - 1 && <div style={{ width: 2, height: 12, background: s.done ? '#22c55e' : '#1e293b', marginTop: 2 }} />}
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', paddingTop: 1 }}>
                <span style={{ fontSize: 13, color: s.done ? '#fff' : i === 2 ? '#f97316' : '#475569', fontWeight: s.done || i === 2 ? 600 : 400 }}>{s.label}</span>
                <span style={{ fontSize: 11, color: '#475569' }}>{s.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
