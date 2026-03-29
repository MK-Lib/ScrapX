import { useState } from 'react';

export default function AcceptanceSetupScreen({ onNext, onBack }) {
  const [mode, setMode] = useState('auto');

  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '20px 24px 0', flex: 1, overflowY: 'auto' }}>
        <button onClick={onBack} style={{ background: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', marginBottom: 22 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span style={{ fontSize: 14 }}>Back</span>
        </button>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: -0.4, marginBottom: 4 }}>Request Handling</h2>
        <p style={{ fontSize: 14, color: '#64748b', marginBottom: 24 }}>How should incoming requests be managed?</p>

        {[
          {
            id: 'auto', icon: '⚡',
            title: 'Auto-Accept All Requests',
            desc: 'All incoming deliveries and pickups are accepted automatically',
            badge: 'More volume',
            badgeColor: '#f97316',
          },
          {
            id: 'manual', icon: '👤',
            title: 'Manual Review',
            desc: 'Review and approve each request individually before confirming',
            badge: null,
          },
        ].map(opt => (
          <button key={opt.id} onClick={() => setMode(opt.id)} style={{
            width: '100%', background: mode === opt.id ? 'rgba(59,130,246,0.06)' : '#1e293b',
            border: `1.5px solid ${mode === opt.id ? '#3b82f6' : '#334155'}`,
            borderRadius: 16, padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: 14,
            marginBottom: 12, textAlign: 'left',
          }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>{opt.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{opt.title}</p>
                {opt.badge && <span style={{ fontSize: 10, fontWeight: 700, color: opt.badgeColor, background: 'rgba(249,115,22,0.1)', padding: '2px 7px', borderRadius: 5 }}>{opt.badge}</span>}
              </div>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{opt.desc}</p>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: 11, border: `2px solid ${mode === opt.id ? '#3b82f6' : '#334155'}`, background: mode === opt.id ? '#3b82f6' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
              {mode === opt.id && <div style={{ width: 8, height: 8, borderRadius: 4, background: '#fff' }} />}
            </div>
          </button>
        ))}

        {/* Dashboard preview */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: '16px', marginBottom: 20 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 14 }}>Dashboard overview</p>
          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            {[
              { label: "Today's Requests", val: '12', color: '#3b82f6' },
              { label: 'Accepted', val: '11', color: '#22c55e' },
              { label: 'Pending', val: '1', color: '#f97316' },
            ].map(s => (
              <div key={s.label} style={{ flex: 1, background: '#0f172a', borderRadius: 10, padding: '12px 8px', textAlign: 'center' }}>
                <p style={{ fontSize: 22, fontWeight: 800, color: s.color, marginBottom: 4, letterSpacing: -0.5 }}>{s.val}</p>
                <p style={{ fontSize: 10, color: '#475569', lineHeight: 1.3 }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: '#0f172a', marginBottom: 12 }} />
          <p style={{ fontSize: 12, fontWeight: 600, color: '#94a3b8', marginBottom: 8 }}>Incoming requests</p>
          {[
            { metal: 'Copper wire', weight: '~3 kg', user: 'Jānis M.', dist: '0.8 km', status: mode === 'auto' ? 'Auto-accepted' : 'Pending' },
            { metal: 'Aluminium', weight: '~8 kg', user: 'Anna P.', dist: '1.4 km', status: mode === 'auto' ? 'Auto-accepted' : 'Pending' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i === 0 ? '1px solid #0f172a' : 'none' }}>
              <div style={{ width: 36, height: 36, background: '#1e293b', border: '1px solid #334155', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 16 }}>📦</span>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 1 }}>{r.metal} · {r.weight}</p>
                <p style={{ fontSize: 11, color: '#475569' }}>{r.user} · {r.dist}</p>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: mode === 'auto' ? '#22c55e' : '#f97316', background: mode === 'auto' ? 'rgba(34,197,94,0.1)' : 'rgba(249,115,22,0.1)', padding: '3px 7px', borderRadius: 6 }}>
                {r.status}
              </span>
            </div>
          ))}
        </div>

        <button onClick={onNext} style={{
          width: '100%', padding: '16px', background: '#3b82f6',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          boxShadow: '0 4px 20px rgba(59,130,246,0.3)', marginBottom: 24,
        }}>
          Save Settings →
        </button>
      </div>
    </div>
  );
}
