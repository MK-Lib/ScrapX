import { useState } from 'react';

export default function ActiveJobScreen({ onNext, onBack }) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '16px 24px 0', flex: 1, overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <button onClick={onBack} style={{ background: '#1e293b', border: 'none', width: 34, height: 34, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: -0.4, flex: 1 }}>Active Job</h2>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#f97316', background: 'rgba(249,115,22,0.1)', padding: '4px 10px', borderRadius: 20, border: '1px solid rgba(249,115,22,0.2)' }}>
            In Progress
          </span>
        </div>

        {/* User at gate */}
        <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 16, padding: '14px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#7c3a1a,#4a2510)', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#fed7aa' }}>AK</span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Andrejs K. has arrived</p>
            <p style={{ fontSize: 12, color: '#64748b' }}>Arrived at 14:31 · On time</p>
          </div>
          <div style={{ width: 10, height: 10, background: '#22c55e', borderRadius: 5, boxShadow: '0 0 8px #22c55e' }} />
        </div>

        {/* Weigh-in panel */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 20, padding: '20px', marginBottom: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 16 }}>Weigh-in</p>

          {/* Scale readout */}
          <div style={{ background: '#0f172a', borderRadius: 14, padding: '20px', textAlign: 'center', border: '1px solid rgba(34,197,94,0.15)', marginBottom: 16 }}>
            <p style={{ fontSize: 11, color: '#475569', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Scale Reading</p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: confirmed ? '#22c55e' : '#fff', letterSpacing: -2 }}>5.3</span>
              <span style={{ fontSize: 20, color: '#64748b' }}>kg</span>
            </div>
            {!confirmed && <p style={{ fontSize: 11, color: '#475569', marginTop: 6 }}>Confirm to lock in weight</p>}
          </div>

          {/* Condition selector */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 12, color: '#64748b', marginBottom: 8, fontWeight: 600 }}>Confirm final condition</p>
            <div style={{ display: 'flex', gap: 8 }}>
              {['Grade 1', 'Grade 2', 'Grade 3'].map((g, i) => (
                <button key={g} style={{
                  flex: 1, padding: '8px 0', background: i === 1 ? 'rgba(249,115,22,0.15)' : '#0f172a',
                  border: `1.5px solid ${i === 1 ? '#f97316' : '#334155'}`,
                  borderRadius: 10, fontSize: 12, fontWeight: 700, color: i === 1 ? '#f97316' : '#475569',
                }}>
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Price calc */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0f172a', borderRadius: 12, padding: '12px 14px' }}>
            <div>
              <p style={{ fontSize: 11, color: '#475569', marginBottom: 3 }}>5.3 kg × €3.20/kg</p>
              <p style={{ fontSize: 12, color: '#64748b' }}>Grade 2 — Oxidised</p>
            </div>
            <p style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', letterSpacing: -0.5 }}>€16.96</p>
          </div>
        </div>

        {/* Extra notes */}
        <div style={{ background: '#1e293b', borderRadius: 12, padding: '12px 16px', marginBottom: 20, display: 'flex', gap: 8, alignItems: 'flex-start', border: '1px solid #334155' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}>
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          <input placeholder="Add notes (fittings removed, paint stripped...)" style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: 13, color: '#64748b' }} />
        </div>

        <button onClick={onNext} style={{
          width: '100%', padding: '18px', background: '#22c55e',
          borderRadius: 14, fontSize: 17, fontWeight: 800, color: '#fff',
          boxShadow: '0 4px 24px rgba(34,197,94,0.4)', marginBottom: 10,
          letterSpacing: -0.3,
        }}>
          Confirm & Release Payment
        </button>
        <button style={{ width: '100%', padding: '14px', background: 'transparent', borderRadius: 14, fontSize: 14, fontWeight: 600, color: '#64748b', border: '1px solid #1e293b', marginBottom: 24 }}>
          Flag for Review
        </button>
      </div>
    </div>
  );
}
